const hobbySlide = document.querySelector('.my-hobby');
const hobbyImage = document.querySelectorAll('.hobby-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter =1;
const size = hobbyImage[0].clientWidth;

hobbySlide.style.transform ='translateX(' +(-size * counter) +'px)';

nextBtn.addEventListener('click',()=> {
if (counter <= hobbyImages.lenght -1) return;
hobbySlide.style.transition = "transform 0.4s ease-in-out";
counter++;
hobbySlide.style.transform ='translateX(' +(-size * counter) +'px)';
});

prevBtn.addEventListener('click',()=> {
if (counter <= 0) return;
hobbySlide.style.transition = "transform 0.4s ease-in-out";
counter--;
hobbySlide.style.transform ='translateX(' +(-size * counter) +'px)';

});

hobbySlide.addEventListener('transition',()={
 if (hobbyImages[counter].id==='lastClone'){
hobbySlide.style.transition="none";
counter = hobbyImages.length -2;
hobbySlide.style.transform ='translateX(' +(-size * counter) +'px)';
}

 if (hobbyImages[counter].id==='firstClone'){
hobbySlide.style.transition="none";
counter = hobbyImages.length - counter;
hobbySlide.style.transform ='translateX(' +(-size * counter) +'px)';









});
