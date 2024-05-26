// Add general logic including

const themeSwitcher = document.querySelector('#light-dark-mode-toggle');
const container = document.querySelector('.container');
// const blogC = document.querySelectorAll('#bx');
// const subButton = document.getElementById('submit-button-style');
// const subButton = document.querySelector('#submit-button-style');
// const words = document.querySelector('.content-box');
// const blogC = document.querySelector('#bx');


let mode = 'light';


themeSwitcher.addEventListener('click', function(){
    console.log(mode)
    if (mode === 'light') {
        mode = 'dark';
        document.body.setAttribute('class', 'dark');
    } else {
        mode = 'light'
        document.body.setAttribute('class', 'light')
    }
})


// should allow blog post to show on screen 
// debug why the id attribut is returning null
// let buttonClicked = false;
// console.log(buttonClicked)
// console.log(subButton)

// subButton.addEventListener('click', function(){
//     buttonClicked = true
//     console.log(subButton)
//     console.log(buttonClicked)
// })



// if (buttonClicked){
//     console.log(buttonClicked)
//     console.log(blogC) 
//     console.log(words.textContent)
//     console.log(words.value)
//     function renderBlogsToScreen() {
//         for (const blogBox of blogC) {
//             blogBox.textContent = words.value
        
//         }
//     }

// subButton.addEventListener('click', renderBlogsToScreen)

// }


