/*  質問の答え  */

$('input').on('focusin', function() {
    $('.alert').text("");
});

$('button').on('click', function() {
    $.post('../check_answer.php', {id_name: id_name, answer: $('.answer').val()}).done(function(res) {
        if (res.error == 0)
            $('.login').submit();
        else
            $('.alert').text("答えが間違っております");
    });
});