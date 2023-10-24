<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        /*  ID及存在チェック  */
        if (!empty($_POST['id_name'])) {
            $sql = $pdo->prepare("SELECT * FROM accounts WHERE id_name = :id_name");
            $sql->execute(array(
                ":id_name" => $_POST['id_name']
            ));
            $data = $sql->fetchAll(PDO::FETCH_ASSOC);
            if (sizeof($data) != 0) {
                $text = ["registed_id_name" => 1];
                header('Content-type: application/json');
                echo json_encode($text);
            } else {
                $text = ["registed_id_name" => 0];
                header('Content-type: application/json');
                echo json_encode($text);
            }
        } else {
            $text = ["registed_id_name" => 0];
            header('Content-type: application/json');
            echo json_encode($text);
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>