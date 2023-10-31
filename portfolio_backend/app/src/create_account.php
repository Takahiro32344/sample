<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/regist_page/style_PC.css">
    <link rel="stylesheet" type="text/css" href="./css/regist_page/style_Tablet.css">
    <link rel="stylesheet" type="text/css" href="./css/regist_page/style_Phone.css">
    <title>コミュニティー</title>
</head>
<body>
    <div class='form-wrapper'>
        <div>
            <h1>アカウント新規作成</h1>
            <div class='form-border'>
                <div class='margin'>
                    <div class="regist-form">
                        <div>
                            <div class="display-phone birth-form">
                                <label>誕生日：</label>
                                <select class="birth-year-Phone">
                                    <option>未選択</option>
                                    <?php
                                        for ($i = 1960; $i <= date("Y") - 15; $i++)
                                            echo "<option>" . $i . "</option>";
                                    ?>
                                </select>
                                <label>年</label>
                                <div class="margin-left">
                                    <div class="select-margin">
                                        <select class="birth-month-Phone">
                                            <option>未選択</option>
                                            <?php
                                                for ($i = 1; $i <= 12; $i++)
                                                    echo "<option>" . $i . "</option>";
                                            ?>
                                        </select>
                                        <label>月</label>
                                    </div>
                                    <select class="birth-day-Phone">
                                        <option>未選択</option>
                                        <?php
                                            for ($i = 1; $i <= 31; $i++)
                                                echo "<option>" . $i . "</option>";
                                        ?>
                                    </select>
                                    <label>日</label>
                                </div>
                            </div>
                            <div class="display-PC birth-form">
                                <label>誕生日：</label>
                                <select class="birth-year-PC">
                                    <option value="未選択">未選択</option>
                                    <?php
                                        for ($i = 1960; $i <= date("Y") - 15; $i++)
                                            echo "<option>" . $i . "</option>";
                                    ?>
                                </select>
                                <label>年</label>
                                <select class="birth-month-PC">
                                    <option value="未選択">未選択</option>
                                    <?php
                                        for ($i = 1; $i <= 12; $i++)
                                            echo "<option>" . $i . "</option>";
                                    ?>
                                </select>
                                <label>月</label>
                                <select class="birth-day-PC">
                                    <option value="未選択">未選択</option>
                                    <?php
                                        for ($i = 1; $i <= 31; $i++)
                                            echo "<option>" . $i . "</option>";
                                    ?>
                                </select>
                                <label>日</label>
                            </div>
                            <div class="gender-form">
                                <label>性別：</label>
                                <select class="gender">
                                    <option>未選択</option>
                                    <option>男性</option>
                                    <option>女性</option>
                                </select>
                            </div>
                            <p class="alert-id"></p>
                            <input class="id-name" type='text' placeholder='ID名:半角英数記号50字以内'><br>
                            <p class="alert-name"></p>
                            <input class="name" type='text' placeholder="氏名:15字以内">
                            <p class="alert-mail"></p>
                            <input class="mail" type='text' placeholder='メールアドレス:50字以内'><br>
                            <p class="alert-password"></p>
                            <input class="password" type='password' placeholder='パスワード:半角英数記号8〜30字'><br>
                            <p class="alert-password-retype"></p>
                            <input class="password-retype" type='password' placeholder='パスワード(確認用)'><br>
                            <div class="btn-pos">
                                </form>
                                <form action="./login.php" method="POST">
                                    <button>戻る</button><br>
                                </form>
                                <div>
                                    <button class='btn-regist'>登録</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="./javascript/jquery.js"></script>
    <script type="text/javascript" src="./javascript/validate_regist_form.js"></script>
</body>
</html>