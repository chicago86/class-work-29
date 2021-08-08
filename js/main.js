(function ($) {
  "use strict";
  let accordion = $(".ba-accordion");
  accordion.find("dd").hide();
  accordion.find("dt").on("click", function (e) {
    $(this).next("dd").slideToggle();
  });

  //   let accordionTitles = document.querySelectorAll(".ba-accordion dt");
  //   console.log(accordionTitles);

  //   accordionTitles.forEach((el) => {
  //     el.addEventListener("click", (e) => {
  //       console.log(el);

  //       el.nextElementSibling.hidden = !el.nextElementSibling.hidden;
  //     });
  //   });
})(jQuery);
