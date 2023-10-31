<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        /*  電話番号存在チェック  */
        if (!empty($_POST['tel'])) {
            $sql = $pdo->prepare("SELECT * FROM accounts WHERE tel = :tel");
            $sql->execute(array(
                ":tel" => $_POST['tel']
            ));
            $data = $sql->fetchAll(PDO::FETCH_ASSOC);
            if ($data != NULL)
                $error_tel = 1;
            else
                $error_tel = 0;
        }

        $text = ["registed_tel" => $error_tel];
        header('Content-type: application/json');
        echo json_encode($text);
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>