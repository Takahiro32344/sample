<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("SELECT * FROM accounts WHERE id_name = :id_name");
        $sql->execute(array(
            ":id_name" => $_POST['id_name']
        ));
        $data = $sql->fetch(PDO::FETCH_ASSOC);

        if (password_verify($_POST['answer'], $data['answer'])) {
            $text = ["error" => 0];
            header('Content-type: application/json');
            echo json_encode($text);
        } else {
            $text = ["error" => 1];
            header('Content-type: application/json');
            echo json_encode($text);
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>