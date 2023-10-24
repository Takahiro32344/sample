<?php
    if (!empty($_POST['id_name']) && !empty($_POST['password'])) {
        try {
            $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
            $sql = $pdo->prepare("SELECT * FROM accounts WHERE id_name = :id_name");
            $sql->execute(array(
                ":id_name" => $_POST['id_name']
            ));
            $data = $sql->fetch(PDO::FETCH_ASSOC);

            if ($data == NULL) {
                $text = ["error" => 4];
                header('Content-type: application/json');
                echo json_encode($text);
            } else if (password_verify($_POST['password'], $data['password']) != 1) {
                $text = ["error" => 5];
                header('Content-type: application/json');
                echo json_encode($text);
            } else {
                switch ($data['certification_flag']) {
                    case 0:
                        $text = ["error" => 0, "certification" => $data['certification_flag']];
                        header('Content-type: application/json');
                        echo json_encode($text);
                        break;
                    case 1:
                        $text = ["error" => 0, "certification" => $data['certification_flag'], "question" => $data['question'], "answer" => $data['answer']];
                        header('Content-type: application/json');
                        echo json_encode($text);
                        break;
                    case 2:
                        $code = rand(0, 9) . rand(0, 9) . rand(0, 9) . rand(0, 9) . rand(0, 9) . rand(0, 9) . rand(0, 9) . rand(0, 9);

                        $sql = $pdo->prepare("UPDATE accounts SET one_time_code = :code WHERE id_name = :id_name");
                        $sql->execute(array(
                            ":code" => password_hash($code, PASSWORD_DEFAULT),
                            ":id_name" => $_POST['id_name']
                        ));
                        $text = ["error" => 0, "certification" => $data['certification_flag'], "code" => $code];
                        header('Content-type: application/json');
                        echo json_encode($text);
                        break;
                }
            }
        } catch(PDOException $e) {
            echo 'エラー:' . $e->getMessage() . '<br>';
        }
    } else if (empty($_POST['id_name']) && !empty($_POST['password'])) {
        $text = ["error" => 1];
        header('Content-type: application/json');
        echo json_encode($text);
    } else if (!empty($_POST['id_name']) && empty($_POST['password'])) {
        $text = ["error" => 2];
        header('Content-type: application/json');
        echo json_encode($text);
    } else {
        $text = ["error" => 3];
        header('Content-type: application/json');
        echo json_encode($text);
    }
?>

