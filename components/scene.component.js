import { Component } from "../core/component"
import { ScrollComponent } from "./scroll.component"

export class SceneComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        // const comics = Array.from(this.$el.querySelectorAll('.comics'))
        // this.scene = comics.map(i => i.getAttribute('data-scene'))
        // console.log(this.scene);
    }

    onShow() {
        
    }
    sceneShow(counter) {
        const comics = Array.from(this.$el.querySelectorAll('.comics'))
        
        this.scene = comics.map(i => {
            if (countComics >= counter) {
                if(i.getAttribute('data-scene') == counter) {
                    i.style.opacity = 1 
                } else {
                    i.style.opacity = 0
                }
            }
            
        })
    }

    
}

