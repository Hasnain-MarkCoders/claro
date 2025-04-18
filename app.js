
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
      const con = document.querySelector('.row.mobile_tablet_padding.g-4.products');
      console.log(window.location.pathname)
  
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
          const selectedText = button.innerText;
          heading.textContent = selectedText;
  
          // Update button styles
          buttons.forEach(btn => {
            btn.classList.add('outlined');
          });
          button.classList.remove('outlined');
          button.classList.add('btn-maroon');
          // Clear existing content
          con.innerHTML = "";
  
          // Add product blocks based on button index (index + 1)
          const count = index + 1;
  
          for (let i = 0; i < count; i++) {
            const html = document.createElement("div");
            html.className = "col-12 col-md-6 col-lg-3";
            html.innerHTML = `
              <div class="row">
                <div class="col-12">
                  <div class="hover-container">
                    <img class="col-12" src=
                    ${
                      window.location.pathname ==="/index.html"?
                      "./assets/portrait_product_image.png"
                      :"./../assets/portrait_product_image.png"

                    }
                     />
                    <div class="hover-overlay">
                      <div class="hover-text">
                        <h2>See more looks</h2>
                        <button
                          type="button"
                          class="btn btn-maroon text-dark rounded-pill d-flex mx-auto mt-4 fw-bold justify-content-center px-5 py-3"
                        >
                          See All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
            con.appendChild(html);
          }
        });
      });
  
      // Trigger click on the first button to initialize the section
      if (buttons.length > 0) {
        buttons[0].click();
      }
    });
  };
  
  handleDynamicSection();
  



  // 


  const handleDynamicSectionBasedOnRoute = () => {
    document.addEventListener('DOMContentLoaded', function () {
      const buttons = document.querySelectorAll('.button_container button');
      const heading = document.getElementById('lookbook-heading');
      const con = document.querySelector('.row.mobile_tablet_padding.g-4.products');
      const path = window.location.pathname;
      
      // Helper to get image path based on route
      const getImageSrc = () => {
        return path === "/index.html" ? "./assets/portrait_product_image.png" : "./../assets/portrait_product_image.png";
      };
  
      // Add click listeners to buttons
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
          const selectedText = button.innerText;
          heading.textContent = selectedText;
  
          // Update button styles
          buttons.forEach(btn => {
            btn.classList.add('outlined');
          });
          button.classList.remove('outlined');
          button.classList.add('btn-maroon');
  
          // Clear existing content
          con.innerHTML = "";
  
          // Add product blocks based on button index
          const count = index + 1;
  
          for (let i = 0; i < count; i++) {
            const html = document.createElement("div");
            html.className = "col-12 col-md-6 col-lg-3";
            html.innerHTML = `
              <div class="row">
                <div class="col-12">
                  <div class="hover-container">
                    <img class="col-12" src="${getImageSrc()}" />
                    <div class="hover-overlay">
                      <div class="hover-text">
                        <h2>See more looks</h2>
                        <button
                          type="button"
                          class="btn btn-maroon text-dark rounded-pill d-flex mx-auto mt-4 fw-bold justify-content-center px-5 py-3"
                        >
                          See All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
            con.appendChild(html);
          }
        });
      });
  
      // Automatically select button based on route
      let selectedIndex = 0; // default to first
  
      if (path.includes("summer_look")) {
        selectedIndex = 1;
      } else if (path.includes("winter_look")) {
        selectedIndex = 4;
      } else if (path.includes("abaya_look")) {
        selectedIndex = 2;
      } else if (path.includes("ramadhan_look")) {
        selectedIndex = 3;
      } else if (path.includes("sale")) {
        selectedIndex = 5;
      }
  
      if (buttons[selectedIndex]) {
        buttons[selectedIndex].click();
      }
    });
  };
  
  // handleDynamicSectionBasedOnRoute();
  