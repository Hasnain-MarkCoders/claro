$(document).ready(function() {
    $('.hero_carousel').slick({
        infinite: true,          // Enables infinite scroll
        slidesToShow: 1,         // Always show 1 slide at a time
        slidesToScroll: 1,       // Scroll 1 slide at a time
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 3000,     // Autoplay speed (3 seconds)
        speed: 500,              // Animation speed (500ms)
        arrows: true,            // Enable arrows for navigation
        dots: true,              // Enable dots for navigation
        centerMode: true,        // Center the active slide for a better visual experience
        focusOnSelect: true,     // Click to select a slide
        responsive: [
            {
                breakpoint: 1200, // For large tablets and desktops
                settings: {
                    slidesToShow: 2,  // Show 2 slides
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,  // For small tablets and phones
                settings: {
                    slidesToShow: 1,  // Show only 1 image per slide
                    slidesToScroll: 1,
                    dots: true         // Show dots on mobile
                }
            }
        ]
    });
});
