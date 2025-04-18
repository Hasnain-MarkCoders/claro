
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
  const handleDynamicSection = () => {
    document.addEventListener('DOMContentLoaded', function () {
      const buttons = document.querySelectorAll('.button_container button');
      const heading = document.getElementById('lookbook-heading');
      const sections = document.querySelectorAll('.product-section');
  
      // Initialize first section
      document.querySelector('[data-section="default"]').classList.remove('d-none');
  
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          const targetSection = button.dataset.section;
          heading.textContent = button.innerText;
  
          // Update button styles
          buttons.forEach(btn => {
            btn.classList.add('outlined');
          });
          button.classList.remove('outlined');
          button.classList.add('btn-maroon');
  
          // Toggle sections
          sections.forEach(section => {
            section.classList.add('d-none');
            if(section.dataset.section === targetSection) {
              section.classList.remove('d-none');
            }
          });
        });
      });
    });
  };
  
  handleDynamicSection();