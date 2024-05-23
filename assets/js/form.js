const submitEl = document.querySelector('#submit-button-style');
const titleInput = document.querySelector('#blog-title');
const usernameInput = document.querySelector('#username');
const blogPostInput = document.querySelector('#blog-post-content');
const submittedEntry = document.querySelector('#user-input')



function showResponse(event) {
    event.preventDefault();
    console.log(event);
    const response = titleInput.value + usernameInput.value + blogPostInput.value;

    submittedEntry.textContent = response;

}

submitEl.addEventListener('click', showResponse);



function submitForm(event) {
    event.preventDefault()


}

// addEventListener('click', submitForm) {

// }


// localStorage.setItem()


