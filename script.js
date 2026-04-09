
const body = document.body;
const lightBox = document.querySelector('.image-background');
const cupcakeImg = document.getElementById('image-cupcake');

const bgColors = ["#52352B", "#8DBB9D", "#DA3135", "#9D2B28", "#CD4D66", "#5FA29A", "#3E8347", "#7BA54F", "#047BBB"];
const boxColors = ["#C88F78", "#F5C5CC", "#F1CFD0", "#96E0D8", "#F4C7D1", "#BBF8F2", "#D8EACC", "#abc78d", "#61aecc"];
const images = [
    "./Images/image 1.png",
    "./Images/image 2.png",
    "./Images/image 3.png",
    "./Images/image 4.png",
    "./Images/image 5.png",
    "./Images/image 6.png",
    "./Images/image 7.png",
    "./Images/image 8.png",
    "./Images/image 9.png"
];

let index = 0;


const applyVisuals = () => {
    body.style.backgroundColor = bgColors[index];
    lightBox.style.backgroundColor = boxColors[index];

    cupcakeImg.style.opacity = 0;
    setTimeout(() => {
        cupcakeImg.src = images[index];
        cupcakeImg.style.opacity = 1;
    }, 500);
};


applyVisuals();

const changeVisuals = () => {
    index = (index + 1) % bgColors.length;
    applyVisuals();
};


setInterval(changeVisuals, 2500);


//Hamburger Menu Script

const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
 });