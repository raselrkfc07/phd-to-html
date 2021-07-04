    $(document).ready(function(){

      //  slick slider  
     $('.portfolio-active').slick({
      centerMode: true,
      centerPadding: '400px',
      slidesToShow: 1,
      nextArrow: false,
      prevArrow: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '400px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '400px',
            slidesToShow: 1
          }
        }
      ]
    });  
        
        
        
        
        
        
        //  port-service 
     $('.port-service-active').slick({
      centerMode: true,
      slidesToShow: 3,
      centerPadding: '0px',
      loop: true,
      nextArrow: false,
      prevArrow: false,
      autoplay: true,
      autoplayTimeout: 3000,
    
    }); 

    });















