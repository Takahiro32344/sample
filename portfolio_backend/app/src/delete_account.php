<?php
    $dirpass = "./images/{$_POST['login_user_id_name']}";
    $dir = glob($dirpass . '/*');
    foreach ($dir as $file)
        unlink($file);
    rmdir($dirpass);
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");

        // 掲示板データ削除
        $sql = $pdo->prepare("DELETE FROM bullentin_board WHERE user_id = :user_id;");
        $sql->execute(array(
            ":user_id" => $_POST['login_user_id']
        ));
        // チャットルーム削除
        $sql = $pdo->prepare("DELETE FROM chat_room WHERE room_no = :room_no;");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id']
        ));
        $sql = $pdo->prepare("DELETE FROM chat_room WHERE from_id = :from_id;");
        $sql->execute(array(
            ":from_id" => $_POST['login_user_id']
        ));
        // チャットデータ削除
        $sql = $pdo->prepare("DELETE FROM chat WHERE account_id = :account_id;");
        $sql->execute(array(
            ":account_id" => $_POST['login_user_id']
        ));
        $sql = $pdo->prepare("DELETE FROM chat WHERE to_id = :to_id;");
        $sql->execute(array(
            ":to_id" => $_POST['login_user_id']
        ));
        // ユーザーリストデータ削除
        $sql = $pdo->prepare("DELETE FROM favorite_list WHERE id = :id;");
        $sql->execute(array(
            ":id" => $_POST['login_user_id']
        ));
        $sql = $pdo->prepare("DELETE FROM favorite_list WHERE list_id = :list_id;");
        $sql->execute(array(
            ":list_id" => $_POST['login_user_id']
        ));
        // アカウント削除
        $sql = $pdo->prepare("DELETE FROM accounts WHERE id = :id");
        $sql->execute(array(
            ":id" => $_POST['login_user_id']
        ));

        unset($_POST);
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>