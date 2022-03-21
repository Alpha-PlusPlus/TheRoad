
// Navbar

// Add event listeners to container
const container = document.querySelector('.container');

// Open navbar
document.querySelector('.open-navbar-icon').addEventListener('click', () => {
    container.classList.add('change');
});

// Close navbar
document.querySelector('.close-navbar-icon').addEventListener('click', () => {
    container.classList.remove('change');
})

// Add bg colors to nav links

const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];

document.querySelectorAll('.nav-link').forEach((item, i) => {

    item.style.cssText = `background-color: ${colors[i]}`;

});

// Tours - Switch front/back tour card

document.querySelectorAll('.navigation-button').forEach((item) => {
    item.addEventListener('click', () => {
        item.parentElement.parentElement.classList.toggle('change');
    });
});

