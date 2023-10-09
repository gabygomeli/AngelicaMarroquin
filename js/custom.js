$(document).ready(function(){
  // index : banner slider
	if($("#banner-slider").length>0){
		$("#banner-slider").owlCarousel({
      		items:1,
      		autoplay:true,
      		autoplayTimeout:2500,
      		loop:true,
      		dots:true,
      		margin:0
  		});
	}
  // index : project-slider
	if($("#project-slider").length>0){
		init_project_slider("#project-slider");    
	}
	if($("#project-slider2").length>0){
		init_project_slider("#project-slider2");   
	}
  // aboutus : about-slider
	if($("#about-slider").length>0){
		$("#about-slider").owlCarousel({
			items: 1,
			autoplay:true,
  		margin:0,
  		loop:true,
  		dots: true,
  		nav: false
		});    
	}
  //index : investor-slider
	if($("#investor-slider").length>0){
		$("#investor-slider").owlCarousel({
			  items: 3,
        autoplay:true,
  			margin:30,
  			loop:true,
  			dots: true,
  			nav: true,
  			responsiveClass: true,
  			responsive:{
              0:{
                  items:0,
                  nav:false
              },
              320:{
                items:1,
                loop:true,
                nav:false,
                dots:true,
                margin:0
              },
              600:{
                  items:2,
                  nav:false,
                  dots:true,
                  margin:30
              },
              1000:{
                  items:3,
                  loop:true,
                  nav:false,
                  dots:true,
                  margin:30
              },
              1200:{
                  items:3,
                  loop:true,
                  nav:false,
                  margin:30
              },
              1400:{
                  items:3,
                  loop:true,
                  nav:false,
                  margin:30
              }
          }
		});    
	}
  //index,aboutus : advisor-slider
	if($("#advisor-slider").length>0){
		$("#advisor-slider").owlCarousel({
  			loop:true,
        autoplay:true,
  			dots: true,
  			nav: true,
  			responsiveClass: true,
  			responsive:{
              0:{
                  items:0,
                  nav:false
              },
              320:{
                items:1,
                loop:true,
                nav:false,
                dots:true,
                margin:0
              },
              330:{
                items:2,
                loop:true,
                nav:false,
                dots:true,
                margin:0
              },
              600:{
                  items:2,
                  nav:false,
                  dots:true,
                  margin:0
              },
              1000:{
                  items:3,
                  loop:true,
                  nav:false,
                  dots:true,
                  margin:0
              },
              1200:{
                  items:3,
                  loop:true,
                  nav:false,
                  margin:0
              },
              1400:{
                  items:3,
                  loop:true,
                  nav:false,
                  margin:0
              }
          }
		});    
	}
  //index : news slider
	if($("#news-slider").length>0){
		$("#news-slider").owlCarousel({
  			loop:true,
  			dots: true,
  			nav: true,
  			responsiveClass: true,
  			responsive:{
              0:{
                  items:0,
                  nav:false
              },
              320:{
                items:1,
                loop:true,
                nav:false,
                dots:true,
                margin:0
              },
              600:{
                  items:2,
                  nav:false,
                  dots:true,
                  margin:30
              },
              1000:{
                  items:3,
                  loop:true,
                  nav:false,
                  dots:true,
                  margin:30
              },
              1200:{
                  items:3,
                  loop:true,
                  nav:false,
                  margin:30
              },
              1400:{
                  items:3,
                  loop:true,
                  nav:false,
                  margin:30
              }
          }
		});    
	}
  //index : brand slider
	if($("#brand-slider").length>0){
		$("#brand-slider").owlCarousel({
  			loop:true,
        autoplay:true,
  			dots: true,
  			nav: true,
  			responsiveClass: true,
  			responsive:{
              0:{
                  items:0,
                  nav:false
              },
              320:{
                items:1,
                loop:true,
                nav:false,
                dots:true,
                margin:0
              },
              600:{
                  items:4,
                  nav:false,
                  dots:true,
                  margin:0
              },
              1000:{
                  items:5,
                  loop:true,
                  nav:false,
                  dots:true,
                  margin:10
              },
              1200:{
                  items:6,
                  loop:true,
                  nav:false,
                  margin:0
              },
              1400:{
                  items:6,
                  loop:true,
                  nav:false,
                  margin:0
              }
          }
		});    
	}
});
// index : project slider,project-navigation
function init_project_slider(eleid){
	var projnav = eleid + ' .proj-nav',
		sliderEle = eleid + ' .project-slider';

	$(sliderEle).on('initialized.owl.carousel changed.owl.carousel', function(e){
		if(!e.namespace){
	      return;
	    }
	    var carousel = e.relatedTarget;
	    if($(eleid + " .owl-nav").length > 0){
		    if($(eleid + " .owl-nav .slider-counter").length <= 0){
		    	$(eleid + " .owl-nav").append("<div class='slider-counter'></div>");
		    }
		}
	    $(eleid + ' .slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  	}).owlCarousel({
		items: 1,
		margin:0,
		loop:true,
		dots: true,
		nav: true,
		navContainer: projnav
	});
}
//gallery : filter category wise image show
filterSelection("all")
function filterSelection(c) {
  x = $(".column");
  if(c=="all")
  { 
    $(".column").fadeIn(200,function(){
      $(".column").addClass("showimg");
    }) 
  }
  else
  {
    $(".column.showimg").fadeOut(200,function(){ 
        $(".column.showimg").removeClass('showimg');
        $(".column."+c).fadeIn(200).addClass("showimg"); 
     }); 
  }
}
  // footer
  // add minus icon for colapse element which is open by default
  $(".collapse.show").each(function(){
    $(this).parent(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });

  // toggle plus minus icon in show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).parent(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    $(this).parent(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });

  //dropdown menu hover animation
  $('.navbar-nav .dropdown').hover(function(){
  $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
  }, 
    function(){
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();});
    $('.navbar .dropdown > a').click(function(){
    location.href = this.href;
  });

/*--------preloader-------*/
$(window).on("load",function(){
  $('#preloader').delay(2000).fadeOut(500);
});
/*------End----------*/