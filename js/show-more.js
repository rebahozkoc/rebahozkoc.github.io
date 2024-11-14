$(document).ready(function () {
  var $grid = $("#folio-wrapper").masonry();
  $("#showMoreBtn").click(function () {
    $(".folio-item.hidden").each(function () {
      $(this).removeClass("hidden");
    });
    $grid.masonry("layout"); // Relayout after showing items
    $(this).hide();
  });
});
