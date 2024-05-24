// Add general logic including

const themeSwitcher = document.querySelector('#light-dark-mode-toggle');
const container = document.querySelector('.container');

console.log(themeSwitcher)
// HELP!
function isDark(themeSwitcher) {
    // document.getElementById(light-dark-mode-toggle)[0]
    if (themeSwitcher.background-color === light-color) {

    }

}


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




// const changeTheme = function() {
//     if (mode === 'dark') {
//         mode = 'light';
//         container.setAttribute('class', 'light');
//     } else {
//         mode = 'dark'
//         container.setAttribute('class', 'dark')
//     }
// }
