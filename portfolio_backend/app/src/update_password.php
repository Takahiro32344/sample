<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        // 変更パスワード更新
        if (!empty($_POST['new_password'])) {
            $sql = $pdo->prepare("UPDATE accounts SET password = :password WHERE id_name = :id_name;");
            $sql->execute(array(
                ":password" => password_hash($_POST['new_password'], PASSWORD_DEFAULT),
                ":id_name" => $_POST['login_user_id_name']
            ));
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>