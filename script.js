const toggle = document.querySelector('#toggle')
const theme = document.querySelector('body')

toggle.addEventListener('click', function () {
    if (theme.className == "light") {
        theme.className = "dark";
        toggle.className = "active";
    }

    else {
        theme.className = "light";
        toggle.className = "inactive";
    }
})