$(function() {
  $box1 = $("#box1");
  $box2 = $("#box2");

  // convert string from box1 and place into box2
  $box1.on("keyup", function() {
    var txt = $box1.val();
    $box2.val(textToCSV(txt));
  });

  // clear contents in box1 & 2
  $("#clear-boxes").on('click', function() {
    clearBoxes($box1, $box2);
  });

  // copy text from box2
  $("#copy-box").on('click', function() {
    copyText($box2);
  });

});

// split array on every new line and then join by comma
function textToCSV(text) {
  return text.split("\n").join(",");
}

function clearBoxes(one, two) {
  one.val("");
  two.val("");
}

function copyText(box) {
  box.select();
  document.execCommand("Copy");
}
