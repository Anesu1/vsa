



  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    autoplay:true,
    nav:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

let next = document.querySelector(".owl-next");
let prev = document.querySelector(".owl-prev");
next.innerHTML = "NEXT";
prev.innerHTML = "PREVIOUS";

document.querySelector(".toggle").addEventListener('click', () =>{
    let dropMenu = document.querySelector(".dropDown");
    dropMenu.classList.toggle("active");
});

document.querySelector(".country").addEventListener('click', () => {
    rotateIcon();
    let dropCountries = document.querySelector(".countries");
    dropCountries.classList.toggle("active");
})
document.querySelector(".field").addEventListener("click", () => {
    rotateIcon1();
    let dropCountries = document.querySelector(".fields");
    dropCountries.classList.toggle("active");
})


function rotateIcon(){
   let rotate = document.querySelector(".country");
   rotate.classList.toggle("rotate");
}

function rotateIcon1(){
    let rotate = document.querySelector(".field");
    rotate.classList.toggle("rotate");
}





var containerEl = document.querySelector('.card-deck');
var inputSearch = document.querySelector("#input");
var mixer = mixitup(containerEl,{
  animation:{
    effectsOut:'fade scale(.5)',
    duration: 350,
  },
  callbacks: {
    onMixClick: function() {
        // Reset the search if a filter is clicked

        if (this.matches('[data-filter]')) {
            inputSearch.value = '';
        }
    }
}
});

inputSearch.addEventListener('keyup', function() {
    var searchValue;

    if (inputSearch.value.length < 1) {
        searchValue = '';
    } else {
        searchValue = inputSearch.value.toLowerCase().trim();
    }


    clearTimeout(keyupTimeout);

    keyupTimeout = setTimeout(function() {
        filterByString(searchValue);
    }, 350);
});

function filterByString(searchValue) {
    if (searchValue) {
        // Use an attribute wildcard selector to check for matches

        mixer.filter('[class*="' + searchValue + '"]');
    } else {
        // If no searchValue, treat as filter('all')

        mixer.filter('all');
    }
}



$('.li').on('click', function () {
 
    $('.li').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');   
    }
    
});

$('.lii').on('click', function () {
  
    $('.lii').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');   
    }
    
});




$(window).on('scroll', function(){
    if($(window).scrollTop()){
    $('header').addClass('bgColor');
    
    }
    else{
    $('header').removeClass('bgColor');
    
    }
    })
    
    
    
  