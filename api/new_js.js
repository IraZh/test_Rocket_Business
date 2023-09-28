$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});


const navIcon = document.getElementById('nav-icon1');
const overlay = document.querySelector('.overlay');
const menuToggle = document.querySelector('.menu-toggle');

navIcon.addEventListener('click', () => {
    overlay.classList.toggle('open');
    menuToggle.classList.toggle('open');
});



document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".header_button_1");
    var form = document.getElementById("contactForm");
    var closeButton = document.getElementById("closeForm");
    
    button.addEventListener("click", function () {
        form.style.display = "block";
    });
    
    

    closeButton.addEventListener("click", function () {
        form.style.display = "none";
    });
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "sendemail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

//Слайдер

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
const paginationText = document.querySelector('.pagination-text');

let currentIndex = 0;

function updatePagination() {
    paginationText.textContent = `${currentIndex + 1}/${slides.length}`;
}

function showSlide(index) {
    slides.forEach((slide, slideIndex) => {
        if (slideIndex === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    updatePagination();
}

prevArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    } else {
        currentIndex = slides.length - 1; 
        showSlide(currentIndex);
    }
});

nextArrow.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    } else {
        currentIndex = 0;
        showSlide(currentIndex);
    }
});

showSlide(currentIndex);