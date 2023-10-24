<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        // チャットデータ取得
        $sql = $pdo->prepare("SELECT * FROM chat WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id ORDER BY send_date DESC;");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id'],
            ":account_id" => $_POST['list_id'],
            ":to_id" => $_POST['login_user_id']
        ));
        $chat_data = $sql->fetchAll(PDO::FETCH_ASSOC);

        if ($_POST['now_chat_data_size'] == 0 && $_POST['now_chat_data_size'] == sizeof($chat_data)) {
            $text = ["size" => sizeof($chat_data), "flg" => 0];
            header('Content-type: application/json');
            echo json_encode($text);
        } else {
            $sql = $pdo->prepare("SELECT * FROM accounts WHERE id = :id;");
            $sql->execute(array(
                ":id" => $_POST['list_id'],
            ));
            $user_data = $sql->fetch(PDO::FETCH_ASSOC);

            if ($user_data['update_image_name'] != NULL)
                $image_name = $user_data['update_image_name'];
            else {
                if ($user_data['gender'] == "男性")
                    $image_name = './images/icon_man.png';
                else
                    $image_name = './images/icon_woman.png';
            }

            $text = ["size" => sizeof($chat_data), "flg" => 1, "time" => $chat_data[0]['time'], "text" => $chat_data[0]['message'], "login_status" => $user_data['login_status'],"image_name" => $image_name];
            header('Content-type: application/json');
            echo json_encode($text);
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>