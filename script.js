const darkLight = document.getElementById('dark-light-mode');
darkLight.addEventListener('click', () => {
    document.getElementById('dark-light-mode__image').src = document.body.classList.contains('dark-mode') ? "./images/Moon.png" : "./images/sun.svg"
    document.body.classList.toggle('dark-mode')
})