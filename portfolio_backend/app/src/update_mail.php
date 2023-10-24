<?php
    // メールアドレス
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        if (!empty($_POST['new_mail'])) {
            $sql = $pdo->prepare("UPDATE accounts SET email = :email WHERE id_name = :id_name;");
            $sql->execute(array(
                ":email" => $_POST['new_mail'],
                ":id_name" => $_POST['login_user_id_name']
            ));
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>

