<?php
    /*  投稿内容をデータベースに登録 */
    try {
        date_default_timezone_set('Asia/Tokyo');
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("INSERT INTO bullentin_board SET user_id = :user_id, text = :text, date = :date;");
        $sql->execute(array(
            ":user_id" => $_POST['login_user_id'],
            ":text" => $_POST['board_text'],
            ":date" => date('Y/m/d G:i:s')
        ));

        $sql = $pdo->prepare("SELECT * FROM bullentin_board WHERE user_id = :user_id ORDER BY date DESC");
        $sql->execute(array(
            ":user_id" => $_POST['login_user_id']
        ));
        $bullentin_board_data = $sql->fetchAll(PDO::FETCH_ASSOC);

        $text = ["id" => $bullentin_board_data[0]['id'],"time" => $bullentin_board_data[0]['date'], "text" => $bullentin_board_data[0]['text']];
        header('Content-type: application/json');
        echo json_encode($text);
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>

