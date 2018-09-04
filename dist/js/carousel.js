// $(".carousel").carousel({
//   interval: 2000
// });

$(document).ready(function() {
  $(".slide-section").click(function(e) {
    var linkHref = $(this).attr("href");
    // console.log($(linkHref).offset().top);
    $("html, body").animate(
      {
        scrollTop: $(linkHref).offset().top
      },
      1000
    );

    e.preventDefault();
  });
});
