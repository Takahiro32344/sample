<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/login_page/style_PC_1.css">
    <link rel="stylesheet" type="text/css" href="./css/login_page/style_Tablet_1.css">
    <link rel="stylesheet" type="text/css" href="./css/login_page/style_Phone_1.css">
    <title>コミュニティー</title>
</head>
<body>
    <div class='form-wrapper'>
        <div>
            <h1>ログイン</h1>
            <div class='form-border'>
                <div class="margin">
                    <div class="login_form">
                        <div>
                            <p class='alert'></p>
                            <input class="id_name" type='text' placeholder='ID'><br>
                            <input class="password" type='password' placeholder='パスワード'><br>
                            <div class="btn_pos">
                                <form action="./create_account.php" method="POST">
                                    <button class="regist_btn">アカウント新規作成</button><br>
                                </form>
                                <div>
                                    <button class="btn-login">ログイン</button>
                                </div>
                            </div>
                            <div class="margin-top">
                                <a href="./forgot_id_or_passwd.php">IDまたはパスワードを忘れた場合</a>
                            </div>
                            <form class="login-1" style="display: none;" action="./index.php" method="POST">
                                <input class="login_id_name" name="id_name">
                                <input class="menu_num" name="menu_num" value=1>
                                <input class="chat_view" name="chat_view" value=1>
                            </form>
                            <form class="login-2" style="display: none;" action="./login_question.php" method="POST">
                                <input class="login_id_name" name="id_name">
                                <input class="question" name="question">
                                <input class="answer" name="answer">
                            </form>
                            <form class="login-3" style="display: none;" action="./login_one_time.php" method="POST">
                                <input class="login_id_name" name="id_name">
                                <input class="code" name='password_onetime'>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="./javascript/jquery.js"></script>
    <script type="text/javascript" src="./javascript/validate_login.js"></script>
</body>
</html>