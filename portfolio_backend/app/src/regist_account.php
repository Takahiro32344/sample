<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        /*  データベースに追加  */
        if (!empty($_POST['regist'])) {
            $sql = $pdo->prepare("INSERT INTO accounts set birthday = :birthday, gender = :gender, id_name = :id_name, name = :name, email = :email, tel = :tel, address_1 = :address_1, address_2 = :address_2, password = :password");
            $sql->execute(array(
                ":birthday" => $_POST['birth_year'] . "年" . $_POST['birth_month'] . "月" . $_POST['birth_day'] . "日",
                ":gender" => $_POST['gender'],
                ":id_name" => $_POST['id_name'],
                ":name" => $_POST['name'],
                ":email" => $_POST['mail'],
                ":tel" => "未設定",
                ":address_1" => "未設定",
                ":address_2" => "未設定",
                ":password" => password_hash($_POST['password'], PASSWORD_DEFAULT)
            ));
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>
