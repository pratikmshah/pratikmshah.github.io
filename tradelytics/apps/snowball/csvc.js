$(function () {

    // focus and highlight first text box
    $('textarea, input[type="text"]').first().focus().select();

    $("#box1").keyup(function () {
        process(false);
    });


    $("#box1").on('paste', function () {
        setTimeout(function () {
            process(true);
        }, 1);
    });


    function process(pasted) {
        var input = $('#box1').val();

        if (typeof convert === 'function') {
            $('#box2').val(convert(input, pasted));
        }
    }

});
