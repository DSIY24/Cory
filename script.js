const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
       if (entry.isIntersecting) {
        entry.target.classList.add('show');
       } else {
         entry.target.classList.remove('show');
       }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))



var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("Slider-width")[0];
var itemDisplay = 0;

var item = document.getElementsByClassName("Gallaryimg");
var itemleft = item.length % itemDisplay;
var itemSlide = Math.floor(item.lenght / itemDisplay) - 1;
for (i=0; i < item.lenght; i++) {
   item[i].style.width = (screen.width / itemDisplay) + 'px';
}

function next() {
  if (inc !== itemSlide) {
   if(inc === itemSlide) {
    inc = inc + itemleft
    count = count = (screen.width / itemDisplay) * itemleft
   }
   else {
    inc ++
    count = count - screen.width
   }
  }
  if (inc < 5) {
    slider.style.left = count + 'px';
  console.log(inc)
  } else {
    console.log('No space left')
  }
  
}

function prev() {
  if (inc !== 0) {
   if(inc === itemleft) {
    inc = inc + itemleft;
    count = count = (screen.width / itemDisplay) * itemleft;
   }
   else {
    inc --;
    count = count + screen.width;
   }
  }
  slider.style.left = count + 'px';
  
}

