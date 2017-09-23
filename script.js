var main = document.getElementsByClassName("icons")[0];
main.children[1].addEventListener("click", next);

var margin = 0;
var prew = 0;

var slide_div_length = document.getElementsByClassName("slide")[0].clientWidth; 
var slider_length = document.querySelectorAll(".slider_main .slide").length; 

document.getElementsByClassName("slider_main")[0].style.transition = "all 0.5s"; 

function next() {
    prew++;
    console.log("next" + prew);
    margin -= slide_div_length + 20; 
    var slides_div_margin = document.getElementsByClassName("slider_main")[0].style.marginLeft = margin + 'px'; 
    console.log(slides_div_margin);

    if (prew >= slider_length - 4) {
        margin = 0;
        slides_div_margin = document.getElementsByClassName("slider_main")[0].style.marginLeft = margin + 'px'; 
        prew = 0;
    }
}



main.children[0].addEventListener("click", previous);

function previous() {
    prew--;
    margin += slide_div_length + 20;
    var slides_div_margin = document.getElementsByClassName("slider_main")[0].style.marginLeft = margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
    console.log("prew" + prew);

    if (prew <= 0) {
        margin = -(slide_div_length + 20) * 4;
        console.log(margin);
        prew = 5;
        var slides_div_margin = document.getElementsByClassName("slider_main")[0].style.marginLeft = margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
    }
}
