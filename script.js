function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");

 };

const btn = document.querySelector(".btn");
const elements = document.querySelectorAll(".square_light");
let bool = true;

   btn.addEventListener('click', function() {
     for (var i = 0; i < elements.length; i++) {	
   			 elements[i].classList.toggle("square_dark");
     }
     if(bool == true){
        btn.innerHTML = "DARK ☽";
        bool = false;
     }else{
        btn.innerHTML = "LIGHT ☼";
        bool = true;  
     }
   });

// document.getElementById("btnchange").innerHTML = "Light Mode";
// document.getElementById("btnchange").innerHTML = "Dark Mode";

// function changeText(text) {
//     document.getElementById("pText").innerHTML=text;
    
//     }


//  for (var i = 0; i < document.getElementsByClassName('image_box').length; i++) {
//     document.getElementsByClassName('image_box')[i].addEventListener('mousemove',function()
//     {
//     this.children[1].style.width=e.pageX-this.offsetLeft;
//     },false);
// };

// var slide = document.getElementById('slide');
// document.getElementById("contain").onmousemove = function(e){
//     var x = e.clientX;
//     slide.style.left = x+'px';
// }


const beforeAfter = (function() {
    const wrapper = document.body.querySelector(".ba-wrap");
    const right = document.body.querySelector(".ba-wrap .right");
    const handle = document.body.querySelector(".ba-wrap .handle");

    // initials
    let imgWidht = 0;
    let imgHeight = 0;
    let mousePreviousX = -1;
    let handleTranslateX = 0;
    let isDragging = false;

    document.body.onload = () => {
        imgWidht = right.offsetWidth;
        imgHeight = right.height;

        // handle's height
        handle.style.height = imgHeight + "px";

        // handle to middle
        handleTranslateX = imgWidht / 2;
        handle.style.transform = `translateX(${handleTranslateX}px)`;

        // hide right image's half
        right.style.clip = `rect(0, ${imgWidht}px, ${imgHeight}px, ${handleTranslateX}px)`;
    }

    window.addEventListener("mousemove", onDragHandle);

    handle.addEventListener("mousedown", function() {
        isDragging = true;

        handleTranslateX = handleTranslateX < 5 ? 5 : handleTranslateX;
        handleTranslateX = handleTranslateX > wrapper.offsetWidth-5 ? wrapper.offsetWidth-5 : handleTranslateX;
    })

    handle.addEventListener("mouseup", function() {
        mousePreviousX = -1;
        isDragging = false;
    })

    function onDragHandle(e) {
        if(!isDragging) return false;

        e.preventDefault();

        const mouseX = e.clientX;
        mousePreviousX = mousePreviousX < 0 ? mouseX : mousePreviousX;
        
        handleTranslateX = handleTranslateX + mouseX - mousePreviousX;
        handle.style.transform = `translateX(${handleTranslateX}px)`;

        right.style.clip = `rect(0, ${imgWidht}px, ${imgHeight}px, ${handleTranslateX}px)`;

        if(handleTranslateX < 5 || handleTranslateX > wrapper.offsetWidth-5) {
            mousePreviousX = -1;
            isDragging = false;
        } else {
            mousePreviousX = mouseX;
        }
    }

})();

