<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/login_page/style_PC_2.css">
    <link rel="stylesheet" type="text/css" href="./css/login_page/style_Tablet_2.css">
    <link rel="stylesheet" type="text/css" href="./css/login_page/style_Phone_2.css">
    <title>コミュニティー</title>
</head>
<body>
    <div class="form-wrapper">
        <div>
            <h1>以下の質問に答えてください</h1>
            <h2>質問：<?php echo $_POST['question']; ?></h2>
            <div class='form'>
                <label>答え</label>
                <input type="text" class="answer">
                <button>送信</button>
            </div>
            <p class='alert'></p>
            <form class="login" action="./index.php" method="POST">
                <input type='hidden' name='id_name' value='<?php echo $_POST['id_name'] ?>'>
                <input type='hidden' name="menu_num" value=1>
                <input type='hidden' name="chat_view" value=1>
            </form>
        </div>
    </div>

    <script type="text/javascript">
        let id_name = JSON.parse('<?php echo json_encode($_POST['id_name']); ?>');
    </script>
    <script type="text/javascript" src='./javascript/jquery.js'></script>
    <script type="text/javascript" src='./javascript/validate_login_question.js'></script>
</body>
</html>