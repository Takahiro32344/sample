<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/forget_id_or_password/forget_id_or_passwd_PC.css">
    <link rel="stylesheet" type="text/css" href="./css/forget_id_or_password/forget_id_or_passwd_Tablet.css">
    <link rel="stylesheet" type="text/css" href="./css/forget_id_or_password/forget_id_or_passwd_Phone.css">
    <title>メール送信</title>
</head>
<body>
    <?php
        try {
            $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
            $sql = $pdo->prepare("SELECT * FROM accounts WHERE email = :email;");
            $sql->execute(array(
                ":email" => $_POST['mail']
            ));
            $user_data = $sql->fetchAll(PDO::FETCH_ASSOC);

            if ($user_data != NULL) {
                mb_language("Japanese");
                mb_internal_encoding("UTF-8");
                mb_send_mail($_POST['mail'], "ID及びパスワード再設定について", "ID:{$user_data[0]['id_name']}\r\r\rパスワード再設定URL:https://idwq3-ew-f3bf-ds.www2.jp/ocnasnf/ifj34pmlffw/d77euf/reset_password.php?id_name={$user_data[0]['id_name']}");

                echo "
                    <div class='message-wrapper'>
                        <h1>送信宛にメールを送信しました。</h1>
                    </div>
                ";
            } else {
                echo "
                    <div class='message-wrapper'>
                        <h1>アカウントが存在しないためメールが送信されませんでした</h1>
                    </div>
                ";
            }
        } catch (PDOException $e) {
            echo 'エラー:' . $e->getMessage() . '<br>';
        }
    ?>
</body>
</html>