<?php
    // 2要素認証
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        if ($_POST['authentication_setting'] == "設定しない") {
            $sql = $pdo->prepare("UPDATE accounts SET certification_flag = :certification_flag, question = :question, answer = :answer, one_time_code = :one_time_code WHERE id_name = :id_name;");
            $sql->execute(array(
                ":certification_flag" => 0,
                ":question" => NULL,
                ":answer" => NULL,
                ":id_name" => $_POST['login_user_id_name'],
                ":one_time_code" => NULL
            ));
            $update = 0;
        } else if ($_POST['authentication_setting'] == "質問") {
            $sql = $pdo->prepare("UPDATE accounts SET certification_flag = :certification_flag, question = :question, answer = :answer, one_time_code = :one_time_code WHERE id_name = :id_name;");
            $sql->execute(array(
                ":certification_flag" => 1,
                ":question" => $_POST['question'],
                ":answer" => password_hash($_POST['answer'], PASSWORD_DEFAULT),
                ":id_name" => $_POST['login_user_id_name'],
                ":one_time_code" => NULL
            ));
            $update = 1;
        } else {
            $sql = $pdo->prepare("UPDATE accounts SET certification_flag = :certification_flag, question = :question, answer = :answer WHERE id_name = :id_name;");
            $sql->execute(array(
                ":certification_flag" => 2,
                ":question" => NULL,
                ":answer" => NULL,
                ":id_name" => $_POST['login_user_id_name']
            ));
            $update = 2;
        }
        $text = ["update" => $update];
        header('Content-type: application/json');
        echo json_encode($text);
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>