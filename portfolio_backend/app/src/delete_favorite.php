<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("DELETE FROM favorite_list WHERE id = :id AND list_id = :list_id;");
        $sql->execute(array(
            ":id" => $_POST['login_user_id'],
            ":list_id" => $_POST['list_id']
        ));

        $sql = $pdo->prepare("SELECT * FROM favorite_list WHERE id = :id;");
        $sql->execute(array(
            ":id" => $_POST['login_user_id']
        ));
        $favorite_list_data = $sql->fetchAll(PDO::FETCH_ASSOC);

        $text = ["size" => sizeof($favorite_list_data)];
        header('Content-type: application/json');
        echo json_encode($text);
} catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>