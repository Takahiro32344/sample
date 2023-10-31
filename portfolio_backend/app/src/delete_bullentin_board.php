<?php
    /*  掲示板削除  */
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("DELETE FROM bullentin_board WHERE id = :id;");
        $sql->execute(array(
            ":id" => $_POST['board_text']
        ));

        $text = ["id" => $_POST['board_text']];
        header('Content-type: application/json');
        echo json_encode($text);
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>