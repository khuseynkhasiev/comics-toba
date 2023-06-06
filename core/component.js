export class Component {
    constructor(id) {
        this.$el = document.getElementById(id)
        this.styleEl = this.$el.querySelector('.comics.active')
        this.counter = 1
        this.sceneOne = true
        this.init()
    }
    init() {}

    onShow() {}

    onHide() {}

    hide() {
        this.onHide()
    }

    show() {
        this.onShow()
    }

    orel(num) {
        let orel = document.querySelector('.orel')
        
        if (num == 2) {
            orel.classList.add('show')
            orel.style.left = ``
            orel.style.top = ``
        } 
        if (num >= 3) {
            
            orel.style.left = `-${window.screen.width * 2 }px`
            orel.style.top = `-${window.screen.height * 2  }px`
            
        }
        if (num == 1) {
            orel.classList.remove('show')
        }
        
    }

    

    sceneShow(counter) {
        const comics = Array.from(this.$el.querySelectorAll('.comics'))
        const countComics = comics.length
        this.scene = comics.map(i => {
            if (countComics >= counter) {
                if(i.getAttribute('data-scene') == counter) {
                    i.style.opacity = 1 
                    i.classList.add('active')
                    i.classList.remove('hide')
                    this.orel(counter)
                } else {
                    i.style.opacity = 0
                    i.classList.remove('active')
                    i.classList.add('hide')
                    this.orel(counter)
                }
            }
        })
    }
}

