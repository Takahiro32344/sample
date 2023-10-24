<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        // チャットデータ削除
        $sql = $pdo->prepare("DELETE FROM chat WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id;");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id'],
            ":account_id" => $_POST['login_user_id'],
            ":to_id" => $_POST['list_id']
        ));

        $sql = $pdo->prepare("DELETE FROM chat WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id;");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id'],
            ":account_id" => $_POST['list_id'],
            ":to_id" => $_POST['login_user_id']
        ));

    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>