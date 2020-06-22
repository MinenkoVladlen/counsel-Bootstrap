const languageToogle = document.querySelector('.language_toggle');
const language = document.querySelector('.language');
const languageImg = document.querySelector('.language_toggle img:nth-child(2)');

function ToggleLang() {
    language.classList.toggle('hidden');
    languageImg.classList.toggle('hidden');
}

languageToogle.addEventListener('click', ToggleLang)