// Add general logic including

const themeSwitcher = document.querySelector('#light-dark-mode-toggle');
const container = document.querySelector('.container');
const blogC = document.querySelectorAll('#bx');
const subButton = document.querySelector('#submit-button-style');
const words = document.querySelector('.content-box');
// const blogC = document.querySelector('#bx');



// console.log(themeSwitcher)
// // HELP!
// function isDark(themeSwitcher) {
//     // document.getElementById(light-dark-mode-toggle)[0]
//     if (themeSwitcher.background-color === light-color) {

//     }

// }


// function renderBlogsToScreen() {
//     blogC.addEventListener('click', function(){
//         for (let i = 0; i < blogC) {
//             if ()
//         }
//     })

// }



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
let buttonClicked = false;
console.log(buttonClicked)
console.log(subButton)

subButton.addEventListener('click', function(){
    console.log(buttonClicked)
    buttonClicked = true
    console.log(buttonClicked)
})

if (buttonClicked){
    console.log(buttonClicked)
    console.log(blogC) 
    console.log(words.textContent)
    function renderBlogsToScreen() {
        for (const blogBox of blogC) {
            blogBox.textContent = words.value
        
        }
    }

subButton.addEventListener('click', renderBlogsToScreen)

}


// const changeTheme = function() {
//     if (mode === 'dark') {
//         mode = 'light';
//         container.setAttribute('class', 'light');
//     } else {
//         mode = 'dark'
//         container.setAttribute('class', 'dark')
//     }
// }
