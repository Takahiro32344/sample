<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("SELECT * FROM accounts WHERE id_name = :id_name;");
        $sql->execute(array(
            ":id_name" => $_POST['id_name']
        ));
        $user_data = $sql->fetch(PDO::FETCH_ASSOC);

        mb_language("Japanese");
        mb_internal_encoding("UTF-8");
        mb_send_mail($user_data['email'], "ワンタイムパスワード", "パスワード：{$_POST['password_onetime']}\n\n\nこのパスワードは制限時間を過ぎると無効になります");
        $send = 1;
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/login_page/style_PC_3.css">
    <link rel="stylesheet" type="text/css" href="./css/login_page/style_Tablet_3.css">
    <link rel="stylesheet" type="text/css" href="./css/login_page/style_Phone_3.css">
    <title>コミュニティー</title>
</head>
<body>
    <div class="form-wrapper">
        <div>
            <h1>ワンタイムパスワード</h1>
            <h2>登録されたメールアドレス宛にパスワード記載のメールを送信しました。</h2>
            <h2 class="timer"></h2>
            <div class="form">
                <input class="code" type='text' placeholder='8桁'>
                <button>送信</button>
            </div>
            <p class="alert"></p>
        </div>
    </div>
    <form class="login" style='display: none;' action="./index.php" method="POST">
        <input name="id_name" value="<?php echo $_POST['id_name'] ?>">
        <input name="menu_num" value=1>
        <input name="chat_view" value=1>
    </form>
    <script type="text/javascript">
        let id_name = JSON.parse('<?php echo json_encode($_POST['id_name']); ?>');
    </script>
    <script type="text/javascript" src="./javascript/jquery.js"></script>
    <script type="text/javascript" src="./javascript/validate_one_time.js"></script>
</body>
</html>