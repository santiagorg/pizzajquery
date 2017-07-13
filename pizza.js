// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

	$('.btn-pepperonni').on('click', function(){
		$('.pep').fadeToggle(1000);
	});


	$('.btn-mushrooms').on('click', function(){
		$('.mushroom').fadeToggle(1000);
	});


	$('.btn-green-peppers').on('click', function(){
		$('.green-pepper').fadeToggle(1000);
	});
	
	$('section').removeClass('sauce-white');

	$('.btn-sauce').on('click', function(){
		$('.sauce').toggleClass('sauce-white');
	});

	$('section').removeClass('crust-gluten-free');

		$('.btn-crust').on('click', function(){		
		$('.crust').toggleClass('crust-gluten-free');
	});

/*vamos allaaaaa*/

})