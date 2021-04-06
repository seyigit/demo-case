var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 50,
    grabCursor: true,
    breakpoints: {
        300: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 180,
          },
    }

  });

      const dropDownLink = document.getElementById("toggle");
      const dropDown = document.getElementById("nav-dropdown");
      dropDownLink.addEventListener("click", function() {
        if (dropDown.style.display === "none") {
          dropDown.style.display = "block";
        } else {
          dropDown.style.display = "none";
        }
      });

    //   const dropDownMenu = document.getElementById("bar");
    //   const leftDownMenu = document.getElementById("mobile-menu");
    //   dropDownMenu.addEventListener("click", function() {
    //     if (leftDownMenu.style.display === "none") {
    //         leftDownMenu.style.display = "flex";
    //     } else {
    //         leftDownMenu.style.display = "none";
    //     }
    //   });

                  $(function(){
          $("#bar").click(function(){
                $("#mobile-menu").toggle(800);
          })
      });
