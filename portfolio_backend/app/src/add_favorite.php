<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("INSERT INTO favorite_list SET id = :id, list_id = :list_id;");
        $sql->execute(array(
            ":id" => $_POST['login_user_id'],
            ":list_id" => $_POST['list_id']
        ));
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>