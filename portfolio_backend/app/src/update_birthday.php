<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        if ($_POST['new_birth_year'] != "未選択" && $_POST['new_birth_month'] != "未選択" && $_POST['new_birth_day'] != "未選択") {
            $sql = $pdo->prepare("UPDATE accounts SET birthday = :birthday WHERE id_name = :id_name;");
            $sql->execute(array(
                ":birthday" => $_POST['new_birth_year'] . "年" . $_POST['new_birth_month'] . "月". $_POST['new_birth_day'] . "日" ,
                ":id_name" => $_POST['login_user_id_name']
            ));
            $text = ["error" => 0, "text" => $_POST['new_birth_year'] . "年" . $_POST['new_birth_month'] . "月". $_POST['new_birth_day'] . "日"];
            header('Content-type: application/json');
            echo json_encode($text);
        } else if ($_POST['new_birth_year'] == "未選択" && $_POST['new_birth_month'] == "未選択" && $_POST['new_birth_day'] == "未選択") {
            $text = ["error" => 1];
            header('Content-type: application/json');
            echo json_encode($text);
        } else if ($_POST['new_birth_year'] == "未選択" && $_POST['new_birth_month'] == "未選択") {
            $text = ["error" => 2];
            header('Content-type: application/json');
            echo json_encode($text);
        } else if ($_POST['new_birth_month'] == "未選択" && $_POST['new_birth_day'] == "未選択") {
            $text = ["error" => 3];
            header('Content-type: application/json');
            echo json_encode($text);
        } else if ($_POST['new_birth_year'] == "未選択" && $_POST['new_birth_day'] == "未選択") {
            $text = ["error" => 4];
            header('Content-type: application/json');
            echo json_encode($text);
        } else if ($_POST['new_birth_year'] == "未選択") {
            $text = ["error" => 5];
            header('Content-type: application/json');
            echo json_encode($text);
        } else if ($_POST['new_birth_month'] == "未選択") {
            $text = ["error" => 6];
            header('Content-type: application/json');
            echo json_encode($text);
        } else if ($_POST['new_birth_day'] == "未選択") {
            $text = ["error" => 7];
            header('Content-type: application/json');
            echo json_encode($text);
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>