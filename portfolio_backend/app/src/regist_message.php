<?php
    try {
        date_default_timezone_set('Asia/Tokyo');
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("INSERT INTO chat SET room_no = :room_no, account_id = :account_id, to_id = :to_id, message = :message, send_date = :send_date, time = :time;");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id'],
            ":account_id" => $_POST['login_user_id'],
            ":to_id" => $_POST['list_id'],
            ":message" => $_POST['message'],
            ":send_date" => date('Y/m/d G:i:s'),
            ":time" => date('G:i')
        ));

        $sql = $pdo->prepare("INSERT INTO chat SET room_no = :room_no, account_id = :account_id, to_id = :to_id, message = :message, send_date = :send_date, time = :time;");
        $sql->execute(array(
            ":room_no" => $_POST['list_id'],
            ":account_id" => $_POST['login_user_id'],
            ":to_id" => $_POST['list_id'],
            ":message" => $_POST['message'],
            ":send_date" => date('Y/m/d G:i:s'),
            ":time" => date('G:i')
        ));

        $sql = $pdo->prepare("SELECT * FROM chat WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id ORDER BY send_date DESC");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id'],
            ":account_id" => $_POST['login_user_id'],
            ":to_id" => $_POST['list_id']
        ));
        $chat_data = $sql->fetchAll(PDO::FETCH_ASSOC);

        $text = ["text" => $chat_data[0]['message'], "time" => $chat_data[0]['time'], "open" => $chat_data[0]['open']];
        header('Content-type: application/json');
        echo json_encode($text);
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>