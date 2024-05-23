const themeSwitcher = document.querySelector('#light-dark-mode-toggle');
const container = document.querySelector('.container');

let mode = 'light';


themeSwitcher.addEventListener('click', function(){
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    } else {
        mode = 'light'
        document.setAttribute('style', 'background-color: 240, 248, 255')
        container.setAttribute('class', 'light')
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
