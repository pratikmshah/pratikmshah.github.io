$(function(){
  (".tab-btns a").on('click', 'a', function(e){
    e.preventDefault();

    // grab item clicked on
    $tabClicked = $(this);
    console.log($tabClicked);
  });
});