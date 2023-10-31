<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        // ログインユーザーデータ取得
        $sql = $pdo->prepare("SELECT * FROM accounts WHERE id = :id;");
        $sql->execute(array(
            ":id" => $_POST['login_user_id']
        ));
        $login_user_data = $sql->fetch(PDO::FETCH_ASSOC);
        // チャット相手データ取得
        $sql = $pdo->prepare("SELECT * FROM accounts WHERE id = :id;");
        $sql->execute(array(
            ":id" => $_POST['list_id']
        ));
        $user_data = $sql->fetch(PDO::FETCH_ASSOC);

        if ($user_data['login_status'] == 2) {
            $text = ["flg" => 1];
            header('Content-type: application/json');
            echo json_encode($text);
        } else {
            $text = ["flg" => 0];
            header('Content-type: application/json');
            echo json_encode($text);
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>