<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("SELECT * FROM accounts WHERE id_name = :id_name");
        $sql->execute(array(
            ":id_name" => $_POST['id_name']
        ));
        $data = $sql->fetch(PDO::FETCH_ASSOC);

        if (empty($_POST['time_over'])) {
            if (mb_strlen($_POST['input_code']) == 8) {
                if (password_verify($_POST['input_code'], $data['one_time_code']) == 1) {
                    $sql = $pdo->prepare("UPDATE accounts SET one_time_code = :code WHERE id_name = :id_name");
                    $sql->execute(array(
                        ":code" => NULL,
                        ":id_name" => $_POST['id_name']
                    ));

                    $text = ["error" => 0, "password_onetime" => $_POST['input_code']];
                    header('Content-type: application/json');
                    echo json_encode($text);
                } else {
                    $text = ["error" => 1, "password_onetime" => $_POST['input_code']];
                    header('Content-type: application/json');
                    echo json_encode($text);
                }
            } else {
                $text = ["error" => 1, "password_onetime" => $_POST['input_code']];
                header('Content-type: application/json');
                echo json_encode($text);
            }
        } else {
            $sql = $pdo->prepare("UPDATE accounts SET one_time_code = :code WHERE id_name = :id_name");
            $sql->execute(array(
                ":code" => NULL,
                ":id_name" => $_POST['id_name']
            ));
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>