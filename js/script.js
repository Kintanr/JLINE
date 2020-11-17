/*
-----------------------
menu
-----------------------
*/
jQuery(document).ready(function() {
	$('.garis button').on('click', function(){
		$('.top-menu').toggleClass('active');
		$(this).toggleClass('menu-closed');
	});
	
});

/*
-----------------------------
Foto
-----------------------------
*/

const items = document.querySelectorAll('.foto');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let bil = document.getElementById('num');
let jbil = document.getElementById('jnum');
let b = 1;
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
	b++;
    count++;
  } else {
	b = 1;
    count = 0;
  }

  bil.innerHTML = b;
  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
	b--;
    count--;
  } else {
	b = itemCount;
    count = itemCount - 1;
  }

  bil.innerHTML = b;
  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

jbil.innerHTML = itemCount;
nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);

/*
------------------------------------
Button up
------------------------------------
*/
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () =>{
  if(window.pageYOffset>100){
    toTop.classList.add("active");
  } else{
    toTop.classList.remove("active");
  }

} )

/*
------------------------------------
Animasi Scroll
------------------------------------
*/
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions ={
  threshold: 1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver (
  function(
    entries,
    appearOnScroll
  ){
    entries.forEach(entry =>{
      if (!entry.isIntersecting){
        return;
      } else{
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    })
  }, 
  appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


sliders.forEach(slider=> {
  appearOnScroll.observe(slider);
});