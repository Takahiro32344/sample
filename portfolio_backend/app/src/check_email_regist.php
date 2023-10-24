<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        /*  メールアドレス存在チェック  */
        if (!empty($_POST['mail'])) {
            $sql = $pdo->prepare("SELECT * FROM accounts WHERE email = :email");
            $sql->execute(array(
                ":email" => $_POST['mail']
            ));
            $data = $sql->fetchAll(PDO::FETCH_ASSOC);
            if (sizeof($data) != 0) {
                $text = ["registed_mail" => 1];
                header('Content-type: application/json');
                echo json_encode($text);
            } else {
                $text = ["registed_mail" => 0];
                header('Content-type: application/json');
                echo json_encode($text);
            }
        } else {
            $text = ["registed_mail" => 0];
            header('Content-type: application/json');
            echo json_encode($text);
        }

    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>