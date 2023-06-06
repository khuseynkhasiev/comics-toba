



const comics = document.querySelectorAll('.comics');

let counter = 1;






function createScene() {
    let sceneImage = document.createElement('img')
    sceneImage.setAttribute('src', 'img/scene/1/1.png')
    sceneImage.classList.add('img-1')
    return sceneImage
}



createScene()

function startScene() {
    comics.forEach((elem) => {
       if ( elem.getAttribute('data-scene') == 1) {
           elem.appendChild(createScene())
       }
    })
}
startScene()

function stepScene(stepImage) {
    comics.forEach((elem) => {
       if ( elem.getAttribute('data-scene') == 1) {
           elem.insertAdjacentElement('afterbegin',stepImage)
       }
    })
}








function scene() {
    let orel = document.querySelector('.orel')
    orel.classList.add('show')
    
    let stepImage = document.createElement('img')
    stepImage.setAttribute('src', `/img/scene/1/2.png`)
    stepImage.classList.add(`img-2`)
    console.log(stepImage)
    stepScene(stepImage);
}

