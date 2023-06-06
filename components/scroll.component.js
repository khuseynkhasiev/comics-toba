import { Component } from '../core/component'

export class ScrollComponent extends Component{
    constructor(id) {
        super(id)
        this.$el = document.getElementById(id)
    }
    init () {
        this.scrollShow = true
        this.scroll
    }
    
    scroll() {
        this.$el.addEventListener('wheel', scrollHandler.bind(this))
        
    }

    timeOut() {
        this.scrollShow = false
    }

    styleInner(add = true) {
        const innerSceneStyle = Array.from(this.styleEl.querySelectorAll('[data-style]'))
        innerSceneStyle.forEach(i=> {
            let styleEl = i.getAttribute('data-style')
            add ? i.style = styleEl : i.style = ''
            
            
        })
        const innerSceneClass = Array.from(this.styleEl.querySelectorAll('[data-class]'))
        innerSceneClass.forEach(i=> {
            let classEl = i.getAttribute('data-class')
            add ? i.classList.add(classEl) : i.classList.remove(classEl)
        })
    }
    
    styleHandler() {
        this.styleEl = this.$el.querySelector('.comics.active')
        const dataEl = this.styleEl.getAttribute('data-style')
        this.styleInner()
        this.styleEl.style = dataEl
    }



    styleClear() {
        this.styleEl = this.$el.querySelector('.comics.active')
        this.styleEl.style = ''
        this.styleInner(false)
        this.dataFrameChange(false)
    }
    
    dataStartScene() {
        this.styleEl = this.$el.querySelector('.comics.active')
        const startSceneClass = this.styleEl.querySelector('[data-start-scene-class]')
        
        if (startSceneClass) {
            const startSceneClassValue = startSceneClass.getAttribute('data-start-scene-class')
            startSceneClass.classList.add(startSceneClassValue)
            
            setTimeout(()=>  {
                this.$el.dispatchEvent(new Event('wheel'))
            }, 2500)
            setTimeout(()=>  {
                startSceneClass.classList.remove(startSceneClassValue)
            }, 5000)
        } 
        this.dataFrameChange()
    }
    dataPlayFrameChange(isPlayScene = true) {
        this.styleEl = this.$el.querySelector('.comics.active')
        const frameChange = this.styleEl.querySelector('[data-frame-change]')
        let frameChangeSrcValue = frameChange.getAttribute('src')
        let src = frameChangeSrcValue.split('')
        src.splice(-5 ,1, this.dataSrc )
        let newSrc = src.join('')
        if (isPlayScene) {
            setTimeout(()=>  {
                frameChange.setAttribute('src', newSrc)
            }, 1000)
        } else {
            frameChange.setAttribute('src', frameChangeSrcValue)
        }
        
    }

    dataFrameChange(playScene = true) {
        this.dataSrc = 1
        if (this.styleEl.querySelector('[data-frame-change]')) {
            const frameChange = this.styleEl.querySelector('[data-frame-change]')
            if (frameChange && playScene) {
                this.dataSrc++
                this.dataPlayFrameChange()
            } else {
                this.dataPlayFrameChange()
            }
        }
        
    }

}




// Счетчик counter при прокрутке в верх\вниз
export function scrollHandler(event) {
    const comics = Array.from(this.$el.querySelectorAll('.comics'))
    const countComics = comics.length
    let isActive = Array.from(this.$el.querySelectorAll('.comics'))
    isActive = isActive.map(i=>i.classList.contains('active'))
    
    if (this.scrollShow && countComics >= this.counter && isActive) {
        // console.log(isActive);
        
        setTimeout(()=> this.scrollShow = true, 2000)
        if (event.wheelDelta >= 0) {
            if (this.counter == countComics) {
                this.styleClear()
            }
            this.counter--
            this.counter == 0 ? this.counter++ : ''
            this.sceneShow(this.counter)
            this.styleClear()
            this.dataStartScene()
            console.log('Пролистнули вверх');
        }
        else {
            this.counter++
            this.styleHandler()
            this.sceneShow(this.counter)
            if (countComics < this.counter) {
                this.counter--
            }
            this.dataStartScene()
            console.log('Пролистнули вниз');
        }
        this.timeOut()
    }
}


