<?php
    // 公開設定更新
    try {
        if ($_POST['setting_publish_mail'] == "公開しない")
            $setting_email = 0;
        else
            $setting_email = 1;

        if ($_POST['setting_publish_tel'] == "公開しない")
            $setting_tel = 0;
        else
            $setting_tel = 1;

        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("UPDATE accounts SET publish_email = :publish_email, publish_tel = :publish_tel WHERE id_name = :id_name;");
        $sql->execute(array(
            ":publish_email" => $setting_email,
            ":publish_tel" => $setting_tel,
            ":id_name" => $_POST['login_user_id_name']
        ));
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>

