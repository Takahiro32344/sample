<?php
    // チャットルーム生成
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        if ($_POST['btn_id'] == 1) {
            $sql = $pdo->prepare("SELECT * FROM chat_room WHERE account_id = :account_id AND from_id = :from_id;");
            $sql->execute(array(
                ":account_id" => $_POST['login_user_id'],
                ":from_id" => $_POST['list_id']
            ));
            $room_data = $sql->fetchAll(PDO::FETCH_ASSOC);
            if ($room_data == NULL) {
                $sql = $pdo->prepare("INSERT INTO chat_room SET room_no = :room_no, account_id = :account_id, from_id = :from_id;");
                $sql->execute(array(
                    ":room_no" => $_POST['login_user_id'],
                    ":account_id" => $_POST['login_user_id'],
                    ":from_id" => $_POST['list_id']
                ));
            }
        } else if ($_POST['btn_id'] == 2) {
            $sql = $pdo->prepare("SELECT * FROM chat_room WHERE account_id = :account_id AND from_id = :from_id;");
            $sql->execute(array(
                ":account_id" => $_POST['list_id'],
                ":from_id" => $_POST['login_user_id']
            ));
            $room_data = $sql->fetchAll(PDO::FETCH_ASSOC);
            if ($room_data == NULL) {
                $sql = $pdo->prepare("INSERT INTO chat_room SET room_no = :room_no, account_id = :account_id, from_id = :from_id;");
                $sql->execute(array(
                    ":room_no" => $_POST['list_id'],
                    ":account_id" => $_POST['list_id'],
                    ":from_id" => $_POST['login_user_id']
                ));
            }
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>