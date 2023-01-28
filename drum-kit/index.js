// getting access to keys from HTML

const key = document.querySelectorAll(".key-list-item")

// creating function to play audio

function playAudio(src) {
    let audio = new Audio(`sounds/${src}.wav`)
    if (!audio) return
    audio.currentTime = 0;
    audio.play()
}


// adding audio event on clicked button

for (let i = 0; i< key.length; i++) {
    key[i].addEventListener('click', () => {
        key[i].classList.add("playing")
        setTimeout(() => {
            key[i].classList.remove('playing')
        },200)
        playAudio(key[i].id)
    })
}



// adding audio event on pressed key 

document.addEventListener('keydown',(e) => {
    const key = document.querySelector(`[data-set="${e.keyCode}"]`);
    if (!key) return;
    key.classList.add("playing")
    setTimeout(() => {
        key.classList.remove('playing')
    },250)
    playAudio(key.id)
})




