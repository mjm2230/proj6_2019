const playButtons = document.querySelectorAll('.button')
const spot1 = document.querySelector('#one')
const spot2 = document.querySelector('#two')
const spot3 = document.querySelector('#three')
const spot4 = document.querySelector('#four')
const spot5 = document.querySelector('#five')
const spot6 = document.querySelector('#six')
const spot7 = document.querySelector('#seven')
const spot8 = document.querySelector('#eight')
const spot9 = document.querySelector('#nine')
const resultDiv = document.querySelector("#result")
const resetButton = document.querySelector("#reset")

playButtons.forEach(playButton => {
    playButton.addEventListener('click', (e) => {
        if (e.shiftKey) {
            playButton.classList.remove("red")
            playButton.classList.add("blue")
        }
        else if (e.metaKey) {
            playButton.classList.remove("blue")
            playButton.classList.add("red")
        }
        else {
            playButton.classList.remove("blue")
            playButton.classList.remove("red")
        } 
    }) 
})

playButtons.forEach(playButton => {
    playButton.addEventListener('click', (e) => {
        if (winChecker("blue") == true) {
            resultDiv.innerHTML = `<h2> Blue Wins!</h2>`
        }
        
        else if (winChecker("red") == true) {
            resultDiv.innerHTML = `<h2> Red Wins!</h2>`
        }
    }) 
})

resetButton.addEventListener('click', (e) => {
    resultDiv.innerHTML = ""
    playButtons.forEach(playButton => {
         playButton.classList.remove("blue")
        playButton.classList.remove("red")
    })
})


const winChecker = (color) => {
    if (spot1.classList.contains(color) && spot2.classList.contains(color) && spot3.classList.contains(color)) {
        console.log("win!")
        return true
    }
    else if (spot4.classList.contains(color) && spot5.classList.contains(color) && spot6.classList.contains(color)) {
        console.log("win!")
        return true
    }
    else if (spot7.classList.contains(color) && spot8.classList.contains(color) && spot9.classList.contains(color)) {
        console.log("win!")
        return true
    }
    else if (spot2.classList.contains(color) && spot5.classList.contains(color) && spot8.classList.contains(color)) {
        console.log("win!")
        return true
    }
    else if (spot1.classList.contains(color) && spot5.classList.contains(color) && spot9.classList.contains(color)) {
        console.log("win!")
        return true
    }
    else if (spot3.classList.contains(color) && spot5.classList.contains(color) && spot7.classList.contains(color)) {
        console.log("win!")
        return true
    }
    else if (spot1.classList.contains(color) && spot4.classList.contains(color) && spot7.classList.contains(color)) {
        console.log("win!")
        return true
    }
    else if (spot3.classList.contains(color) && spot6.classList.contains(color) && spot9.classList.contains(color)) {
        console.log("win!")
        return true
    }
    else {
        return false
    }
}

