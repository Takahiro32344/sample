<?php
    // 氏名変更
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        if (!empty($_POST['new_name'])) {
            $sql = $pdo->prepare("UPDATE accounts SET name = :name WHERE id_name = :id_name;");
            $sql->execute(array(
                ":name" => $_POST['new_name'],
                ":id_name" => $_POST['login_user_id_name']
            ));
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>