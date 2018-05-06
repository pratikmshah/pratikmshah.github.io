$(function() {
  $box1 = $("#box1");
  $box2 = $("#box2");

  $box1.on("keyup", function() {
    var txt = $box1.val();
    $box2.val(textToCSV(txt));
  });
});

// split array on every new line and then join by comma
function textToCSV(text) {
  return text.split("\n").join(",");
}
