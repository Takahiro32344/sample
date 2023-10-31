<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("UPDATE accounts SET login_status = 0 WHERE id_name = :id_name");
        $sql->execute(array(
            ":id_name" => $_POST['id_name']
        ));

        unset($_POST);
        header('Location: ./index.php');
    } catch (PDOException $e) {

    }
?>