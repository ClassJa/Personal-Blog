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
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('style', 'dark');
    } else {
        mode = 'light'
        document.container.setAttribute('style', 'background-color: 240, 248, 255')
        container.setAttribute('style', 'light')
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
