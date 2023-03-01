
//read more text

const showMore = () => {
    const dots = document.getElementById("dots");
    const text = document.getElementById("more");
    const button = document.getElementById("showTextBtn");

    if (dots.style.display === "none") {
        dots.style.display = 'inline';
        button.innerHTML = 'Read More';
        text.style.display = 'none';
    } else {
        dots.style.display = 'none';
        button.innerHTML = 'Read Less';
        text.style.display = 'inline';
    }

}

//dark mode

const darkMode = () => {
    const element = document.body;
    element.classList.toggle('dark-mode')
}