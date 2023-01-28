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
        playAudio(key[i].id)
    })
}



// adding audio event on pressed key 

document.addEventListener('keydown',(e) => {
    const key = document.querySelector(`[data-set="${e.keyCode}"]`);
    if (!key) return;
    playAudio(key.id)
})




