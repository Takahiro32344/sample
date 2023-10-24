/*  ログインフォームバリデーション  */

$('.id_name').on('focusin', function(){
    $('.alert').text("");
});

$('.password').on('focusin', function(){
    $('.alert').text("");
});

let click = 0;

$('.btn-login').on('click', function() {
    if (click == 0) {
        click = 1;
        $.post('../login_check.php', {id_name: $('.id_name').val(), password: $('.password').val()}).done(function(res) {
            switch (res.error) {
                case 0:
                    if (res.certification == 0) {
                        $('.login_id_name').val($('.id_name').val());
                        $('.login-1').submit();
                    } else if (res.certification == 1) {
                        $('.login_id_name').val($('.id_name').val());
                        $('.question').val(res.question);
                        $('.answer').val(res.answer);
                        $('.login-2').submit();
                    } else {
                        $('.login_id_name').val($('.id_name').val());
                        $('.code').val(res.code);
                        $('.login-3').submit();
                    }
                    break;
                case 1:
                    $('.alert').text("IDが未入力です。");
                    break;
                case 2:
                    $('.alert').text("パスワードが未入力です。");
                    break;
                case 3:
                    $('.alert').text("IDとパスワードが未入力です。");
                    break;
                case 4:
                    $('.alert').text("IDが存在しません。");
                    break;
                case 5:
                    $('.alert').text("パスワードが正しくありません。");
                    break;
            }
            click = 0;
        });
    }
});
