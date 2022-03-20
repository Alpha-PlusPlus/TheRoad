// Array.from(document.querySelectorAll('.navigation-button')).forEach((item) => {
//     item.onClick = () => {
//         item.parentElement.parentElement.classList.toggle('change');
//     }
// });

document.querySelectorAll('.navigation-button').forEach((item) => {
    item.addEventListener('click', () => {
        item.parentElement.parentElement.classList.toggle('change');
    });
});