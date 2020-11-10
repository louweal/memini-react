$(document).ready(function () {
	var randInt = Math.floor(Math.random()*2);

	if(randInt == 1) {
		$('.demo-text').html('Buy flowers for Emma');
		
		$('.hero-img1').toggleClass("hero-flower1");
		$('.hero-img2').toggleClass("hero-flower2");
		$('.problem-img').toggleClass("problem-flower");
		$('.features-img').toggleClass("features-flower");
		$('.welcome-img').toggleClass("welcome-flower");
	}

    window.addEventListener('scroll', function (event) {
		if ($('#problems').visible()) {
			$('.cross-first').addClass("cross-span1"); 
			$('.cross-second').addClass("cross-span2"); 
		} 

        if ($('#features').visible()) {
			$('.check-first').addClass("check-span1"); 
			$('.check-second').addClass("check-span2"); 
        }
	}, false);
});