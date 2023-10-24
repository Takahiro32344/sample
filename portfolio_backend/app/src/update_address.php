<?php
    // 居住地
    try {
        $update_address_1 = 0;
        $update_address_2 = 0;
        $update = 0;

        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");

        if ($_POST['new_address_1'] != "未選択") {
            $sql = $pdo->prepare("UPDATE accounts SET address_1 = :address_1 WHERE id_name = :id_name;");
            $sql->execute(array(
                ":address_1" => $_POST['new_address_1'],
                ":id_name" => $_POST['login_user_id_name']
            ));
            $update_address_1 = 1;
        }
        if (mb_strlen($_POST['new_address_2']) != 0) {
            $sql = $pdo->prepare("UPDATE accounts SET address_2 = :address_2 WHERE id_name = :id_name;");
            $sql->execute(array(
                ":address_2" => $_POST['new_address_2'],
                ":id_name" => $_POST['login_user_id_name']
            ));
            $update_address_2 = 1;
        }

        $sql = $pdo->prepare("SELECT * FROM accounts WHERE id_name = :id_name;");
        $sql->execute(array(
            ":id_name" => $_POST['login_user_id_name']
        ));
        $user_data = $sql->fetch(PDO::FETCH_ASSOC);

        if ($update_address_1 == 0 && $update_address_2 == 0)
            $update = 0;
        else if ($update_address_1 == 1 && $update_address_2 == 0)
            $update = 1;
        else if ($update_address_1 == 0 && $update_address_2 == 1)
            $update = 2;
        else
            $update = 3;

        $text = ["update" => $update, "address_1" => $user_data['address_1'], "address_2" => $user_data['address_2']];
        header('Content-type: application/json');
        echo json_encode($text);
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>