<?php
    // 電話番号
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        if (!empty($_POST['new_tel'])) {
            $sql = $pdo->prepare("UPDATE accounts SET tel = :tel WHERE id_name = :id_name;");
            $sql->execute(array(
                ":tel" => $_POST['new_tel'],
                ":id_name" => $_POST['login_user_id_name']
            ));
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>