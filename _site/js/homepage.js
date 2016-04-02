// setup specs for masonry
$(function() {
  $("div.grid-container").masonry({
    isFitWidth: true,
    columnWidth: 'div.block',
    itemSelector: 'div.block'
  });
});