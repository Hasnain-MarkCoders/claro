
$('.bar').slick({
  customPaging : function(slider, i) {
    if(i==0){
      return '<a class="first_slide">01</a>';
    }
    if(i==slider.$slides.length-1){
      return '<a class="last_slide">'+"0"+slider.$slides.length+'</a>';
    }
    
    return '<a>'+'</a>';
},
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });