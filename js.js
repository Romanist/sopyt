let toggleUl = $('.descriptionShow .title');
toggleUl.on('click', function() {
    if (window.innerWidth <= 1023) {
        $(this).toggleClass('opened')
    }
})



$('.tyings-items').owlCarousel({
			items: 5,
			loop: false,
			dots: false,
		  	nav: false,
		  	autoplay: true,
		  	autoplayTimeout: 2000,
		  	autoplayHoverPause: true,
		  	autoplaySpeed: 2000,
		  	responsive:{
		  		1025:{
		  			items:5
		  		},
                768:{
                    items:3
                },
		  		0:{
		  			items:1,
		  			autoplayTimeout: 5000
		  		}
		  	}
		});







