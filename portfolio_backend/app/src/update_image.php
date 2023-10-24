<?php
    if (!empty($_FILES['upload_image']['name'])) {
        $dirpass = "./images/{$_POST['login_user_id_name']}";
        if (file_exists($dirpass) == true) {
            $dir = glob($dirpass . '/*');
            foreach ($dir as $file)
                unlink($file);
        } else
            mkdir($dirpass, 0755, true);

        $uploaded_path = $dirpass . '/' . $_FILES['upload_image']['name'];
        $result = move_uploaded_file($_FILES['upload_image']['tmp_name'], $uploaded_path);

        try {
            $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
            $sql = $pdo->prepare("UPDATE accounts SET update_image_name = :update_image_name WHERE id_name = :id_name;");
            $sql->execute(array(
                ":update_image_name" => $uploaded_path,
                ":id_name" => $_POST['login_user_id_name']
            ));
        } catch (PDOException $e) {
            echo 'エラー:' . $e->getMessage() . '<br>';
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>コミュニティー</title>
</head>
<body onload="document.FRM.submit();">
    <?php
        echo "
            <form name='FRM' action='./index.php' method='POST'>
                <input type='hidden' name='id_name' value='{$_POST['login_user_id_name']}'>
                <input type='hidden' name='menu_num' value=5>
                <input type='hidden' name='setting_view' value=3>
            </form>
        ";
    ?>
</body>
</html>

