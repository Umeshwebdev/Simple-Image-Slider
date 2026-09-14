const imgSlider = document.querySelector(".imgSlider");
const prev = document.querySelector("#prv");
const next = document.querySelector("#nxt");

const images = [
    "./imgs/images.jpg",
    "./imgs/images (2).jpg",
    "./imgs/images (3).jpg",
    "./imgs/images (4).jpg"
];

let currentIndex =0;

function showSlide(index){
    imgSlider.src = images[index];
}
// showSlide(2);

next.addEventListener("click", ()=> {
    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showSlide(currentIndex);
})

prev.addEventListener("click", ()=>{
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length -1;
    }

    showSlide(currentIndex);
})