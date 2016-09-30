$(document).ready(function() {

	 $(function(){
            $('.navbar-toggle').click(function(){
                $('.navbar-toggle').toggleClass('active-block');
            });
        });

	$("#owl-about").owlCarousel({
		items : 4,
		pagination : false,
	});

var owl = $("#owl-about");
  owl.owlCarousel({
  	item : 4
  })
	$(".prev_bat").click(function(){
		owl.trigger("owl.prev");
	});
	$(".next_bat").click(function(){
		owl.trigger("owl.next");
	});

	$("#container").mixItUp({});

		$("#owl-coments").owlCarousel({
		items : 1,
		pagination : true,
		singleItem : true
	});


$("#menu").on("click","a", function (event) { 
event.preventDefault(); 
var id = $(this).attr('href'), 
top = $(id).offset().top; 
$('body,html').animate({scrollTop: top}, 1500); 
}); 


$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

});
