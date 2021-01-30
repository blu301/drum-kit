let buttons = document.querySelectorAll('button.drum');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playAudio(button.innerHTML);
        playAnimation(button.innerHTML);
    });
});

document.addEventListener('keypress', (e) => {
    playAudio(e.key);
    playAnimation(e.key);
})

function playAudio (key) {
    switch (key) {
        case "w":
            let wAudio = new Audio('sounds/tom-1.mp3');
            wAudio.play();
            break;
        
        case "a":
            let aAudio = new Audio('sounds/tom-2.mp3');
            aAudio.play();
            break;
            
        case "s":
            let sAudio = new Audio('sounds/tom-3.mp3');
            sAudio.play();
            break;


        case "d":
            let dAudio = new Audio('sounds/tom-4.mp3');
            dAudio.play();
            break;

        case "j":
            let jAudio = new Audio('sounds/snare.mp3');
            jAudio.play();
            break;

        case "k":
            let kAudio = new Audio('sounds/crash.mp3');
            kAudio.play();
            break;

        case "l":
            let lAudio = new Audio('sounds/kick-bass.mp3');
            lAudio.play();
            break;

        default:
            break;
    }
}

function playAnimation(key) {
    document.querySelector('.' + key).classList.add('pressed');

    setTimeout(() => {
        document.querySelector('.' + key).classList.remove('pressed');
    }, 100);
}