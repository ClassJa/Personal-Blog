const themeSwitcher2 = document.querySelector('#light-dark-mode-toggle');
const container2 = document.querySelector('.container');
// const blogC = document.querySelectorAll('#bx')
// const subButton = document.querySelector('#submit-button-style')

const prevPage = document.querySelector("#back-button")

// Figure out how to get the back button to connect to the click and take the user back to previous page
prevPage.addEventListener('click', function(){
    console.log(prevPage)
    // history.pushState()
    window.history.go(-1)
})


// console.log(blogC) 
// function renderBlogsToScreen() {
//     for (const blogBox of blogC) {
//         blogC.add
       
//     }
// }

// blogC.addEventListener('submit', )


// let mode = 'light';


// themeSwitcher2.addEventListener('click', function(){
//     console.log(mode)
//     if (mode === 'light') {
//         mode = 'dark';
//         document.body.setAttribute('class', 'dark');
//     } else {
//         mode = 'light'
//         document.body.setAttribute('class', 'light')
//     }
// })


