<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/forget_id_or_password/forget_id_or_passwd_PC.css">
    <link rel="stylesheet" type="text/css" href="./css/forget_id_or_password/forget_id_or_passwd_Tablet.css">
    <link rel="stylesheet" type="text/css" href="./css/forget_id_or_password/forget_id_or_passwd_Phone.css">
    <title>コミュニティー</title>
</head>
<body>
    <div class="form-wrapper">
        <div>
            <h2>登録したメールアドレス宛に登録ID及びパスワード再設定用ページURLを記載したメールを送信致します。</h2>
            <p></p>
            <div class="flex">
                <div>
                    <input class="mail" type="text" placeholder="登録メールアドレス">
                </div>
                <form style="display: none;" class="send-mail-form" action="./send_mail.php" method="POST">
                    <input name="mail" class='copy-mail' type="text">
                </form>
                <div>
                    <button class="btn-send">送信</button>
                </div>
                <form class="margin-top" action="./login.php" method="POST">
                    <button>戻る</button>
                </form>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="./javascript/jquery.js"></script>
    <script type="text/javascript" src="./javascript/validate_send_mail.js"></script>
</body>
</html>