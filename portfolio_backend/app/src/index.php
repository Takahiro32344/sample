<?php
    // ログイン画面へ
    if (empty($_POST))
        header("location: ./login.php");

    $menu_num = $_POST['menu_num'];

    if (!empty($_POST['search_view']))
        $search_view = $_POST['search_view'];
    else
        $search_view = 0;

    if (!empty($_POST['setting_view']))
        $setting_view = $_POST['setting_view'];

    $id_chat_room_json = json_encode(0);
    $id_favorite_list_json = json_encode(0);
    $list_id_json = json_encode(NULL);
    $id_counter_json = json_encode(0);
    $login_user_id_json = json_encode(0);
    $chat_room_counter_json = array();
    $id_counter = 1;
    $id_read_json = json_encode(1);

    $login_status_json = json_encode(false);

    try {
        // ログインユーザー情報取得
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("SELECT * FROM accounts WHERE id_name = :id_name");
        $sql->execute(array(
            ":id_name" => $_POST['id_name']
        ));
        $login_user_data = $sql->fetch(PDO::FETCH_ASSOC);
        $login_user_id = $login_user_data['id'];
        $login_user_id_json = json_encode($login_user_data['id']);
        $login_user_birth = $login_user_data['birthday'];
        $login_user_id_name = $login_user_data['id_name'];
        $login_user_name = $login_user_data['name'];
        $login_user_id_name_json = json_encode($login_user_data['id_name']);
        $login_user_gender = $login_user_data['gender'];
        $login_user_gender_json = json_encode($login_user_gender);
        $login_user_address_1 = $login_user_data['address_1'];
        $login_user_address_2 = $login_user_data['address_2'];
        $login_user_email = $login_user_data['email'];
        $login_user_tel = $login_user_data['tel'];
        $login_user_login = $login_user_data['login_status'];
        $login_user_publish_email = $login_user_data['publish_email'];
        $login_user_publish_tel = $login_user_data['publish_tel'];
        $login_user_certification = $login_user_data['certification_flag'];
        $login_user_image = $login_user_data['update_image_name'];

        if ($login_user_gender == "男性") {
            $btn_color = "btn-color-man";
            $book = "📘";
        } else {
            $btn_color = "btn-color-woman";
            $book = "📕";
        }

        if ($login_user_image != NULL) {
            $image_name = $login_user_image;
            $login_user_image_json = json_encode($login_user_image);
        } else {
            if ($login_user_gender == "男性") {
                $image_name = "./images/icon_man.png";
                $login_user_image_json = json_encode($image_name);
            } else {
                $image_name = "./images/icon_woman.png";
                $login_user_image_json = json_encode($image_name);
            }
        }
        // ログインステータス更新
        if ($_POST['menu_num'] == 2 && !empty($_POST['chat_view']) && $_POST['chat_view'] == 2) {
            $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
            $sql = $pdo->prepare("UPDATE accounts SET login_status = :login_status WHERE id_name = :id_name");
            $sql->execute(array(
                ":login_status" => 2,
                ":id_name" => $_POST['id_name']
            ));
            $login_status_json = json_encode(true);
        } else {
            $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
            $sql = $pdo->prepare("UPDATE accounts SET login_status = :login_status WHERE id_name = :id_name");
            $sql->execute(array(
                ":login_status" => 1,
                ":id_name" => $_POST['id_name']
            ));
            $login_status_json = json_encode(false);
        }
        // 全ユーザーデータ取得
        if ($_POST['menu_num'] != 3) {
            if (!empty($_POST['search_chat_room'])) {
                $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
                $sql = $pdo->prepare("SELECT * FROM accounts WHERE name LIKE '%{$_POST['search_chat_room']}%';");
                $sql->execute();
                $all_user_data = $sql->fetchAll(PDO::FETCH_ASSOC);
            } else if (!empty($_POST['search_favorite_list'])) {
                $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
                $sql = $pdo->prepare("SELECT * FROM accounts WHERE name LIKE '%{$_POST['search_favorite_list']}%';");
                $sql->execute();
                $all_user_data = $sql->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
                $sql = $pdo->prepare("SELECT * FROM accounts;");
                $sql->execute();
                $all_user_data = $sql->fetchAll(PDO::FETCH_ASSOC);
            }
        } else {

        }
        // 掲示板データ取得
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("SELECT * FROM bullentin_board WHERE user_id = :user_id ORDER BY date DESC;");
        $sql->execute(array(
            ":user_id" => $login_user_id
        ));
        $bullentin_board_data = $sql->fetchAll(PDO::FETCH_ASSOC);
        $board_data_size = json_encode(sizeof($bullentin_board_data));
        // チャットルームデータ取得
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("SELECT * FROM chat_room WHERE room_no = :room_no AND account_id = :account_id");
        $sql->execute(array(
            ":room_no" => $login_user_id,
            ":account_id" => $login_user_id
        ));
        $chat_room_data = $sql->fetchAll(PDO::FETCH_ASSOC);
        // チャットデータ取得
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("SELECT * FROM chat;");
        $sql->execute();
        $chat_data = $sql->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/main_page/Common.css">
    <link rel="stylesheet" type="text/css" href="./css/main_page/style_PC.css">
    <link rel="stylesheet" type="text/css" href="./css/main_page/style_Tablet.css">
    <link rel="stylesheet" type="text/css" href="./css/main_page/style_Phone.css">
    <title>コミュニティー</title>
</head>
<body>
    <div class="background <?php if ($login_user_gender == "男性") echo 'bg-color-man1'; else echo 'bg-color-woman1'; ?>"></div>
    <div class="main-content-position">
        <div class="main-content-wrapper">
                <?php
                    switch ($menu_num) {
                        // 掲示板
                        case 1:
                            $login_user_id_name_json = json_encode($login_user_id_name);
                            $login_user_gender_json = json_encode($login_user_gender);
                            $board_data_size = json_encode(sizeof($bullentin_board_data));
                            echo "
                                <h1>掲示板</h1>
                                <textarea class='board-text' name='board_text' placeholder='200文字以内'></textarea><br>
                                <button class='btn-post $btn_color'>投稿</button>
                                <div class='post-now'></div>
                            ";
                            for ($i = 0, $j = 1; $i < sizeof($bullentin_board_data); $i++, $j++) {
                                echo "
                                    <div class='text-{$bullentin_board_data[$i]['id']} bullentin-board-wrapper'>
                                        <div class='flex-header'>
                                            <p class='date'>{$bullentin_board_data[$i]['date']}</p>
                                            <input class='text-id-$i' type='hidden' value={$bullentin_board_data[$i]['id']}>
                                            <button class='delete-text-$i $btn_color'>削除</button>
                                        </div>
                                        <div class='text-wrapper'>" .
                                            "<p class='text'>" . nl2br($bullentin_board_data[$i]['text']) . "</p>
                                        </div>
                                    </div>
                                ";
                            }
                            break;
                        // チャット
                        case 2:
                            $login_user_id_name_json = json_encode($login_user_id_name);
                            $board_data_size = json_encode(0);
                            switch ($_POST['chat_view']) {
                                case 1:
                                    $id_counter = 1;
                                    if ($login_user_gender == "男性") {
                                        $bg_color = "#80d0ff";
                                        $btn_color = "#50a0ff";
                                    } else {
                                        $bg_color = "pink";
                                        $btn_color =  "palevioletred";
                                    }
                                    echo "<p class='info-chat-room'></p>";
                                    echo "<h1>履歴</h1>";
                                    echo "<h2 class='none-chat-room'></h2>";
                                    if ($chat_room_data == NULL)
                                        echo "<h2>履歴はありません</h2>";
                                    else {
                                        echo "
                                            <form class='search-box-form' action='./index.php' method='POST'>
                                                <input type='hidden' name='id_name' value='$login_user_id_name'>
                                                <input name='menu_num' type='hidden' value=2>
                                                <input name='chat_view' type='hidden' value=1>
                                                <input name='page_chat_history' type='hidden' value=1>
                                                <input name='search_chat_room' type='text' placeholder='名前'>
                                                <button>検索</button>
                                            </form>
                                        ";
                                        echo "<div class='chat-history-wrapper'>";
                                        $index = 0;
                                        $counter = 0;
                                        if (sizeof($all_user_data) != 0) {
                                            for ($i = 0; $i < sizeof($all_user_data); $i++) {
                                                if ($all_user_data[$i]['update_image_name'] != NULL)
                                                    $chat_history_list_image_name = $all_user_data[$i]['update_image_name'];
                                                else {
                                                    if ($all_user_data[$i]['gender'] == "男性")
                                                        $chat_history_list_image_name = "./images/icon_man.png";
                                                    else
                                                        $chat_history_list_image_name = "./images/icon_woman.png";
                                                }
                                                for ($j = $_POST['page_chat_history'] * 150 - 150; $j < $_POST['page_chat_history'] * 150; $j++) {
                                                    if ($j < sizeof($chat_room_data)) {
                                                        if ($all_user_data[$i]['id'] == $chat_room_data[$j]['from_id']) {
                                                            try {
                                                                $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
                                                                $sql = $pdo->prepare("SELECT * FROM chat WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id AND open = :open;");
                                                                $sql->execute(array(
                                                                    ":room_no" => $login_user_id,
                                                                    ":account_id" => $all_user_data[$i]['id'],
                                                                    ":to_id" => $login_user_id,
                                                                    ":open" => 0
                                                                ));
                                                                $chat_not_read = $sql->fetchAll(PDO::FETCH_ASSOC);

                                                                $chat_room_counter_json[$index] = $chat_room_data[$j]['from_id'];

                                                                echo "
                                                                    <div class='chat-room-wrapper chat-room-wrapper-$id_counter'>
                                                                        <div class='padding'>
                                                                            <div class='flex'>
                                                                                <img src='$chat_history_list_image_name'>
                                                                                <p id='n$index'>{$all_user_data[$i]['name']}</p>
                                                                                <p id='chat-not-read-counter-$index'></p>
                                                                            </div>
                                                                            <div class='flex margin-top'>
                                                                                <form action='./index.php' method='POST'>";
                                                                                if (!empty($_POST['search_chat_room']))
                                                                                    echo "<input type='hidden' name='search_chat_room' value='{$_POST['search_chat_room']}'>";
                                                                                echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                                                    <input type='hidden' name='user_image' value='$chat_history_list_image_name'>
                                                                                    <input type='hidden' name='user_id' value='{$all_user_data[$i]['id']}'>
                                                                                    <input type='hidden' name='user_name' value='{$all_user_data[$i]['name']}'>
                                                                                    <input type='hidden' name='user_login' value='{$all_user_data[$i]['login_status']}'>
                                                                                    <input type='hidden' name='menu_num' value=2>
                                                                                    <input type='hidden' name='chat_view' value=2>
                                                                                    <button style='background-color: $btn_color; border-color: $btn_color;'>チャット</button>
                                                                                </form>
                                                                                <button value={$chat_room_data[$j]['from_id']} style='background-color: $btn_color; border-color: $btn_color;' class='btn-delete-chat-room-$id_counter'>削除</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ";
                                                                $index++;
                                                                $id_counter++;
                                                                $counter++;
                                                            } catch (PDOException $e) {
                                                                echo 'エラー:' . $e->getMessage() . '<br>';
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                            echo "<h2>検索結果はありません</h2>";
                                        echo "</div>";
                                        if ($counter != 0) {
                                            echo "<div class='chat-history-page-btn-wrapper'>";
                                                $back = $_POST['page_chat_history'];
                                                if ($back > 1)
                                                    $back = $_POST['page_chat_history'] - 1;
                                                echo "
                                                    <form action='./index.php' method='POST'>";
                                                        if (!empty($_POST['search_chat_room']))
                                                            echo "<input type='hidden' name='search_chat_room' value='{$_POST['search_chat_room']}'>";
                                                    echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                        <input type='hidden' name='menu_num' value=2>
                                                        <input type='hidden' name='chat_view' value=1>
                                                        <input type='hidden' name='page_chat_history' value=$back>
                                                        <button style='border-color: $btn_color; background-color: $btn_color;' class='btn-change-page'><</button>
                                                    </form>
                                                ";
                                                echo "<p class='page-list'>{$_POST['page_chat_history']}</p>";

                                                $next = $_POST['page_chat_history'];
                                                if (((double)(sizeof($chat_room_data) / $_POST['page_chat_history'] - 150)) > 0)
                                                    $next = $_POST['page_chat_history'] + 1;
                                                echo "
                                                    <form action='./index.php' method='POST'>";
                                                        if (!empty($_POST['search_chat_room']))
                                                            echo "<input type='hidden' name='search_chat_room' value='{$_POST['search_chat_room']}'>";
                                                    echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                        <input type='hidden' name='menu_num' value=2>
                                                        <input type='hidden' name='chat_view' value=1>
                                                        <input type='hidden' name='page_chat_history' value=$next>
                                                        <button style='border-color: $btn_color; background-color: $btn_color;' class='btn-change-page'>></button>
                                                    </form>
                                                ";
                                            echo "</div>";
                                        }
                                    }
                                    $id_counter_json = json_encode($id_counter);
                                    break;
                                case 2:
                                    if ($login_user_gender == "男性") {
                                        $bg_color = "#80d0ff";
                                        $btn_color = "#50a0ff";
                                    } else {
                                        $bg_color = "pink";
                                        $btn_color =  "palevioletred";
                                    }
                                    echo "
                                        <h1>{$_POST['user_name']}さんとチャット</h1>
                                        <div class='chat-wrapper'>
                                            <div class='padding'>
                                    ";
                                    $id_counter = 0;
                                    $list_id_json = json_encode($_POST['user_id']);
                                    $id_read = 1;
                                    try {
                                        // チャットデータ取得
                                        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
                                        $sql = $pdo->prepare("SELECT * FROM chat;");
                                        $sql->execute();
                                        $chat_data = $sql->fetchAll(PDO::FETCH_ASSOC);
                                        for ($i = 0; $i < sizeof($chat_data); $i++) {
                                            if ($chat_data[$i]['room_no'] == $login_user_id && ($chat_data[$i]['account_id'] == $login_user_id || $chat_data[$i]['to_id'] == $login_user_id)) {
                                                if ($chat_data[$i]['account_id'] == $login_user_id && $chat_data[$i]['to_id'] == $_POST['user_id']) {
                                                    $chat_view = $login_user_id;
                                                    if ($login_user_gender == "男性") {
                                                        $bg_color_1 = "#50a0ff";
                                                    } else {
                                                        $bg_color_1 =  "palevioletred";
                                                    }
                                                    if ($chat_data[$i]['open'] == 1)
                                                        $read = "既読";
                                                    else
                                                        $read = "未読";
                                                    echo "
                                                        <div class='message-wrapper'>
                                                            <div class='padding'>
                                                    ";
                                                    echo  "
                                                                <div style='display: flex; justify-content: end;'>
                                                                    <div style='display: flex; align-items: end;'>
                                                                        <div>
                                                                            <p id='read-{$id_read}' class='read'>$read</p>
                                                                            <p class='time'>{$chat_data[$i]['time']}</p>
                                                                        </div>
                                                                        <p style='background-color: $bg_color_1;' class='text-1'>" . nl2br($chat_data[$i]['message']) . "</p>";
                                                    echo "
                                                                    </div>
                                                                    <img src='$image_name'>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ";
                                                    $id_read++;
                                                    $id_read_json = json_encode($id_read);
                                                } else if ($chat_data[$i]['account_id'] == $_POST['user_id'] && $chat_data[$i]['to_id'] == $login_user_id) {
                                                    $chat_view = $_POST['user_id'];
                                                    if ($login_user_gender == "男性") {
                                                        $bg_color_2 = "#80d0ff";
                                                    } else {
                                                        $bg_color_2 =  "pink";
                                                    }
                                                    echo "
                                                        <div class='message-wrapper'>
                                                            <div class='padding'>
                                                                <div style='display: flex; justify-content: start;'>
                                                                    <img src='{$_POST['user_image']}'>
                                                                    <div style='display: flex; align-items: end;'>
                                                    ";
                                                    echo "              <p style='background-color: $bg_color_2;' class='text-2'>" . nl2br($chat_data[$i]['message']) . "</p>";
                                                    echo "
                                                                        <p class='time'>{$chat_data[$i]['time']}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ";
                                                }
                                            }
                                        }
                                    } catch (PDOException $e) {
                                        echo 'エラー:' . $e->getMessage() . '<br>';
                                    }

                                    echo "
                                                <div class='append-message'></div>
                                            </div>
                                        </div>
                                    ";

                                    echo "
                                        <div style='background-color: $bg_color;' class='chat-form-wrapper'>
                                            <div class='chat-area-wrapper'>
                                                <form action='./index.php' method='POST'>";
                                                    if (!empty($_POST['search_chat_room']))
                                                        echo "<input type='hidden' name='search_chat_room' value='{$_POST['search_chat_room']}'>";
                                                echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                    <input type='hidden' name='user_image' value='{$_POST['user_image']}'>
                                                    <input type='hidden' name='user_id' value='{$_POST['user_id']}'>
                                                    <input type='hidden' name='user_name' value='{$_POST['user_name']}'>
                                                    <input type='hidden' name='menu_num' value=2>
                                                    <input type='hidden' name='chat_view' value=1>
                                                    <input type='hidden' name='page_chat_history' value=1>
                                                    <button style='background-color: $btn_color; border-color: $btn_color;'>戻る</button>
                                                </form>
                                                <textarea class='chat-text' placeholder='1000字以内'></textarea>
                                                <div>
                                                    <button value={$_POST['user_id']} style='background-color: $btn_color; border-color: $btn_color;' class='btn-send'>送信</button>
                                                    <button value={$_POST['user_id']} style='background-color: $btn_color; border-color: $btn_color;' class='btn-clear-message'>クリア</button>
                                                </div>
                                                <form class='submit' method='POST'>
                                                    <input type='hidden' name='id_name' value='$login_user_id_name'>
                                                    <input type='hidden' name='user_image' value='{$_POST['user_image']}'>
                                                    <input type='hidden' name='user_id' value='{$_POST['user_id']}'>
                                                    <input type='hidden' name='user_name' value='{$_POST['user_name']}'>
                                                    <input type='hidden' name='menu_num' value=2>
                                                    <input type='hidden' name='chat_view' value=2>
                                                </form>
                                            </div>
                                        </div>
                                    ";

                                    break;
                            }
                            break;

                        // ユーザー検索
                        case 3:
                            $login_user_id_name_json = json_encode($login_user_id_name);
                            if ($search_view == 0)
                                echo "<h1>ユーザー検索</h1>";
                            echo "<div class='search-user-wrapper'>";
                                switch ($search_view) {
                                    case 0:
                                        echo "<div>";
                                            echo "
                                                <form class='search-box-form' action='./index.php' method='POST'>
                                                    <input type='hidden' name='id_name' value='$login_user_id_name'>
                                                    <input name='menu_num' type='hidden' value=3>
                                                    <input name='search_view' type='hidden' value=0>
                                                    <input name='page_search' type='hidden' value=1>

                                                    <input name='search_user_name' type='text' placeholder='名前'><br class='display-br'>
                                                    <input name='search_user_address' type='text' placeholder='居住地'><br class='display-br'>
                                                    <select name='search_user_gender'>
                                                        <option>未選択</option>
                                                        <option>男性</option>
                                                        <option>女性</option>
                                                    </select><br class='display-br'>
                                                    <button>検索</button>
                                                </form>
                                            ";
                                            try {
                                                // ユーザーデータ取得
                                                if (!empty($_POST['search_user_name']) && !empty($_POST['search_user_address']) && $_POST['search_user_gender'] != "未選択") {
                                                    $sql = $pdo->prepare("SELECT * FROM accounts WHERE gender = :gender AND name LIKE '%{$_POST['search_user_name']}%' AND address_1 LIKE '%{$_POST['search_user_address']}%';");
                                                    $sql->execute(array(
                                                        ":gender" => $_POST['search_user_gender']
                                                    ));
                                                    $all_user_data = $sql->fetchAll(PDO::FETCH_ASSOC);
                                                } else if (empty($_POST['search_user_name']) && !empty($_POST['search_user_address']) && $_POST['search_user_gender'] != "未選択") {
                                                    $sql = $pdo->prepare("SELECT * FROM accounts WHERE gender = :gender AND address_1 LIKE '%{$_POST['search_user_address']}%';");
                                                    $sql->execute(array(
                                                        ":gender" => $_POST['search_user_gender']
                                                    ));
                                                    $all_user_data = $sql->fetchAll(PDO::FETCH_ASSOC);
                                                } else if (!empty($_POST['search_user_name']) && empty($_POST['search_user_address']) && $_POST['search_user_gender'] != "未選択") {
                                                    $sql = $pdo->prepare("SELECT * FROM accounts WHERE gender = :gender AND name LIKE '%{$_POST['search_user_name']}%';");
                                                    $sql->execute(array(
                                                        ":gender" => $_POST['search_user_gender']
                                                    ));
                                                    $all_user_data = $sql->fetchAll(PDO::FETCH_ASSOC);
                                                } else if (!empty($_POST['search_user_name']) && !empty($_POST['search_user_address']) && $_POST['search_user_gender'] == "未選択") {
                                                    $sql = $pdo->prepare("SELECT * FROM accounts WHERE name LIKE '%{$_POST['search_user_name']}%' AND address_1;");
                                                    $sql->execute();
                                                    $all_user_data = $sql->fetchAll(PDO::FETCH_ASSOC);
                                                } else if (!empty($_POST['search_user_name'])) {
                                                    $sql = $pdo->prepare("SELECT * FROM accounts WHERE name LIKE '%{$_POST['search_user_name']}%';");
                                                    $sql->execute();
                                                    $all_user_data = $sql->fetchAll(PDO::FETCH_ASSOC);
                                                } else if (!empty($_POST['search_user_address'])) {
                                                    $sql = $pdo->prepare("SELECT * FROM accounts WHERE address_1 LIKE '%{$_POST['search_user_address']}%';");
                                                    $sql->execute();
                                                    $all_user_data = $sql->fetchAll(PDO::FETCH_ASSOC);
                                                } else if (!empty($_POST['search_user_gender']) && $_POST['search_user_gender'] != "未選択") {
                                                    $sql = $pdo->prepare("SELECT * FROM accounts WHERE gender = :gender;");
                                                    $sql->execute(array(
                                                        ":gender" => $_POST['search_user_gender']
                                                    ));
                                                    $all_user_data = $sql->fetchAll(PDO::FETCH_ASSOC);
                                                } else {
                                                    $sql = $pdo->prepare("SELECT * FROM accounts;");
                                                    $sql->execute();
                                                    $all_user_data = $sql->fetchAll(PDO::FETCH_ASSOC);
                                                }
                                                // お気に入りリストデータ
                                                $sql = $pdo->prepare("SELECT * FROM favorite_list WHERE id = :id");
                                                $sql->execute(array(
                                                    ":id" => $login_user_id
                                                ));
                                                $favorite_list_login_user = $sql->fetchAll(PDO::FETCH_ASSOC);
                                                echo "<div class='search_user_list_wrapper'>";
                                                if (sizeof($all_user_data) != 0) {
                                                    for ($i = ($_POST['page_search'] - 1) * 105; $i < ($_POST['page_search']) * 105; $i++) {
                                                        if ($i < sizeof($all_user_data)) {
                                                            if ($all_user_data[$i]['gender'] == "男性") {
                                                                $search_button_bordercolor = '#50a0ff';
                                                                $search_button_bgcolor = '#50a0ff';
                                                            } else {
                                                                $search_button_bordercolor = 'palevioletred';
                                                                $search_button_bgcolor = 'palevioletred';
                                                            }

                                                            if ($all_user_data[$i]['update_image_name'] != NULL)
                                                                $user_image_name = $all_user_data[$i]['update_image_name'];
                                                            else {
                                                                if ($all_user_data[$i]['gender'] == "男性")
                                                                    $user_image_name = "./images/icon_man.png";
                                                                else
                                                                    $user_image_name = "./images/icon_woman.png";
                                                            }
                                                            echo "
                                                                <form class='user-status-form' action='./index.php' method='POST'>
                                                                    <input type='hidden' name='id_name' value='$login_user_id_name'>
                                                                    <input type='hidden' name='menu_num' value=3>
                                                                    <input type='hidden' name='search_view' value=1>
                                                                    <input type='hidden' name='page_search' value={$_POST['page_search']}>";
                                                                    for ($j = 0; $j < sizeof($favorite_list_login_user); $j++) {
                                                                        if ($favorite_list_login_user[$j]['id'] == $login_user_id && $all_user_data[$i]['id'] == $favorite_list_login_user[$j]['list_id']) {
                                                                            echo "
                                                                                <input type='hidden' name='favorite_list_id' value={$favorite_list_login_user[$j]['id']}>
                                                                                <input type='hidden' name='favorite_list_list_id' value={$favorite_list_login_user[$j]['list_id']}>
                                                                            ";
                                                                        }
                                                                    }
                                                                    if (!empty($_POST['search_user_name']))
                                                                        echo "<input type='hidden' name='search_user_name' value='{$_POST['search_user_name']}'>";
                                                                    if (!empty($_POST['search_user_address']))
                                                                        echo "<input type='hidden' name='search_user_address' value='{$_POST['search_user_address']}'>";
                                                                    if (!empty($_POST['search_user_gender']))
                                                                        echo "<input type='hidden' name='search_user_gender' value='{$_POST['search_user_gender']}'>";
                                                                    echo "
                                                                    <input type='hidden' name='user_image' value='{$all_user_data[$i]['update_image_name']}'>
                                                                    <input type='hidden' name='user_id' value='{$all_user_data[$i]['id']}'>
                                                                    <input type='hidden' name='user_name' value='{$all_user_data[$i]['name']}'>
                                                                    <input type='hidden' name='user_birthday' value='{$all_user_data[$i]['birthday']}'>
                                                                    <input type='hidden' name='user_gender' value='{$all_user_data[$i]['gender']}'>
                                                                    <input type='hidden' name='user_address_1' value='{$all_user_data[$i]['address_1']}'>
                                                                    <input type='hidden' name='user_address_2' value='{$all_user_data[$i]['address_2']}'>
                                                                    <input type='hidden' name='user_email' value='{$all_user_data[$i]['email']}'>
                                                                    <input type='hidden' name='user_tel' value='{$all_user_data[$i]['tel']}'>
                                                                    <input type='hidden' name='user_publish_email' value='{$all_user_data[$i]['publish_email']}'>
                                                                    <input type='hidden' name='user_publish_tel' value='{$all_user_data[$i]['publish_tel']}'>
                                                                    <button style='border-color: $search_button_bordercolor; background-color: $search_button_bgcolor;'>
                                                                        <img src='{$user_image_name}'>
                                                                        <p>{$all_user_data[$i]['name']}</p>
                                                                        <p>{$all_user_data[$i]['birthday']}</p>
                                                                        <p>{$all_user_data[$i]['gender']}</p>
                                                                        <p>{$all_user_data[$i]['address_1']}</p>
                                                                    </button>
                                                                </form>
                                                            ";
                                                        }
                                                    }
                                                    echo "</div>";
                                                    $back = $_POST['page_search'];
                                                    if ($_POST['page_search'] > 1)
                                                        $back = $_POST['page_search'] - 1;

                                                    echo "
                                                    <div class='margin-top'>
                                                        <form action='./index.php' method='POST'>";
                                                            if (!empty($_POST['search_user_name']))
                                                                echo "<input type='hidden' name='search_user_name' value='{$_POST['search_user_name']}'>";
                                                            if (!empty($_POST['search_user_address']))
                                                                echo "<input type='hidden' name='search_user_address' value='{$_POST['search_user_address']}'>";
                                                            if (!empty($_POST['search_user_gender']))
                                                                echo "<input type='hidden' name='search_user_gender' value='{$_POST['search_user_gender']}'>";
                                                        echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                            <input type='hidden' name='menu_num' value=3>
                                                            <input type='hidden' name='search_view' value=0>
                                                            <input type='hidden' name='page_search' value=$back>
                                                            <button class='$btn_color btn-change-page'><</button>
                                                        </form>";

                                                    $next = $_POST['page_search'];
                                                    if (((double)(sizeof($all_user_data) / $_POST['page_search'] - 105)) > 0)
                                                        $next = $_POST['page_search'] + 1;

                                                    echo "
                                                        <p class='page-search'>{$_POST['page_search']}</p>
                                                        <form action='./index.php' method='POST'>";
                                                            if (!empty($_POST['search_user_name']))
                                                                echo "<input type='hidden' name='search_user_name' value='{$_POST['search_user_name']}'>";
                                                            if (!empty($_POST['search_user_address']))
                                                                echo "<input type='hidden' name='search_user_address' value='{$_POST['search_user_address']}'>";
                                                            if (!empty($_POST['search_user_gender']))
                                                                echo "<input type='hidden' name='search_user_gender' value='{$_POST['search_user_gender']}'>";
                                                        echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                            <input type='hidden' name='menu_num' value=3>
                                                            <input type='hidden' name='search_view' value=0>
                                                            <input type='hidden' name='page_search' value=$next>
                                                            <button class='$btn_color btn-change-page'>></button>
                                                        </form>
                                                    </div>
                                                    ";
                                                } else {
                                                    echo "<h2>検索結果はありません</h2>";
                                                }
                                            } catch (PDOException $e) {
                                                echo 'エラー:' . $e->getMessage() . '<br>';
                                            }
                                        echo "</div>";
                                        break;
                                    case 1:
                                        $list_id_json = json_encode($_POST['user_id']);
                                        if ($_POST['user_image'] != NULL) {
                                            $user_image_name = $_POST['user_image'];
                                        } else {
                                            if ($_POST['user_gender'] == "男性")
                                                $user_image_name = "./images/icon_man.png";
                                            else
                                                $user_image_name = "./images/icon_woman.png";
                                        }
                                        echo "
                                            <div>
                                                <h1>詳細情報</h1>
                                                <div class='detail-data-wrapper'>
                                                    <div class='padding'>
                                                        <div>
                                                            <div class='flex'>
                                                                <div>
                                                                    <div class='text-align'>
                                                                        <img src='$user_image_name'>
                                                                    </div>
                                                                    <p>氏名：{$_POST['user_name']}</p>
                                                                    <p>誕生日：{$_POST['user_birthday']}</p>
                                                                    <p>性別：{$_POST['user_gender']}</p>
                                                                    <p>居住地：{$_POST['user_address_1']}：{$_POST['user_address_2']}</p>";
                                                                    if ($_POST['user_publish_email'] == 1)
                                                                        echo "<p>メールアドレス：{$_POST['user_email']}</p>";
                                                                    if ($_POST['user_publish_tel'] == 1)
                                                                        echo "<p>電話番号：{$_POST['user_tel']}</p>";
                                                            echo "
                                                                    </div>
                                                                </div>
                                                            ";

                                                            if ($login_user_gender == "男性")
                                                                $btn_color = '#50a0ff';
                                                            else
                                                                $btn_color = 'palevioletred';

                                                        echo "
                                                            <div class='button-wrapper'>";
                                                            if ($login_user_id != $_POST['user_id']) {
                                                                echo "<form class='btn-return' action='./index.php' method='POST'>
                                                                        <input type='hidden' name='id_name' value='$login_user_id_name'>";
                                                                        if (!empty($_POST['search_user_name']))
                                                                            echo "<input type='hidden' name='search_user_name' value='{$_POST['search_user_name']}'>";
                                                                        if (!empty($_POST['search_user_address']))
                                                                            echo "<input type='hidden' name='search_user_address' value='{$_POST['search_user_address']}'>";
                                                                        if (!empty($_POST['search_user_gender']))
                                                                            echo "<input type='hidden' name='search_user_gender' value='{$_POST['search_user_gender']}'>";
                                                                    echo "<input type='hidden' name='user_image' value='{$_POST['user_image']}'>
                                                                        <input type='hidden' name='user_id' value='{$_POST['user_id']}'>
                                                                        <input type='hidden' name='user_name' value='{$_POST['user_name']}'>
                                                                        <input type='hidden' name='user_birthday' value='{$_POST['user_birthday']}'>
                                                                        <input type='hidden' name='user_gender' value='{$_POST['user_gender']}'>
                                                                        <input type='hidden' name='user_address_1' value='{$_POST['user_address_1']}'>
                                                                        <input type='hidden' name='user_address_2' value='{$_POST['user_address_2']}'>
                                                                        <input type='hidden' name='user_email' value='{$_POST['user_email']}'>
                                                                        <input type='hidden' name='user_tel' value='{$_POST['user_tel']}'>
                                                                        <input type='hidden' name='user_publish_email' value='{$_POST['user_publish_email']}'>
                                                                        <input type='hidden' name='user_publish_tel' value='{$_POST['user_publish_tel']}'>
                                                                        <input type='hidden' name='menu_num' value=3>
                                                                        <input type='hidden' name='search_view' value=2>
                                                                        <input type='hidden' name='page_search' value={$_POST['page_search']}>
                                                                        <button style='border-color: $btn_color; background-color: $btn_color;'>掲示板</button>
                                                                    </form>
                                                                ";
                                                                echo "<div class='margin'>
                                                                        <form action='./index.php' method='POST'>
                                                                            <input type='hidden' name='id_name' value='$login_user_id_name'>
                                                                            <input type='hidden' name='user_image' value='$user_image_name'>
                                                                            <input type='hidden' name='user_id' value='{$_POST['user_id']}'>
                                                                            <input type='hidden' name='user_name' value='{$_POST['user_name']}'>
                                                                            <input type='hidden' name='menu_num' value=2>
                                                                            <input type='hidden' name='chat_view' value=2>
                                                                            <button value={$_POST['user_id']} style='border-color: $btn_color; background-color: $btn_color;' class='btn-chat'>チャット</button>
                                                                        </form>
                                                                ";
                                                                    if (!empty($_POST['favorite_list_id']) && $_POST['favorite_list_list_id'] && ($_POST['favorite_list_id'] == $login_user_id) && ($_POST['favorite_list_list_id'] == $_POST['user_id']))
                                                                        echo "<button style='border-color: $btn_color; background-color: $btn_color;' class='btn-favorite'>お気に入りから削除</button>";
                                                                    else
                                                                        echo "<button style='border-color: $btn_color; background-color: $btn_color;' class='btn-favorite'>お気に入りに追加</button>";
                                                                echo "</div>";
                                                            }
                                                        echo "</div>
                                                            <form class='btn-return' action='./index.php' method='POST'>";
                                                                if (!empty($_POST['search_user_name']))
                                                                    echo "<input type='hidden' name='search_user_name' value='{$_POST['search_user_name']}'>";
                                                                if (!empty($_POST['search_user_address']))
                                                                    echo "<input type='hidden' name='search_user_address' value='{$_POST['search_user_address']}'>";
                                                                if (!empty($_POST['search_user_gender']))
                                                                    echo "<input type='hidden' name='search_user_gender' value='{$_POST['search_user_gender']}'>";
                                                            echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                                <input type='hidden' name='menu_num' value=3>
                                                                <input type='hidden' name='search_view' value=0>
                                                                <input type='hidden' name='page_search' value={$_POST['page_search']}>
                                                                <button style='border-color: $btn_color; background-color: $btn_color;'>戻る</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        " ;
                                        break;
                                    case 2:
                                        try {
                                            $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
                                            // 掲示板データ
                                            $sql = $pdo->prepare("SELECT * FROM bullentin_board WHERE user_id = :user_id ORDER BY date DESC");
                                            $sql->execute(array(
                                                ":user_id" => $_POST['user_id'],
                                            ));
                                            $bullentin_data = $sql->fetchAll(PDO::FETCH_ASSOC);
                                            $board_data_size = json_encode(sizeof($bullentin_data));

                                            if ($login_user_gender == "男性")
                                                $btn_color = '#50a0ff';
                                            else
                                                $btn_color = 'palevioletred';
                                            echo "
                                                <div class='user-bullentin'>";
                                                echo "<h1>{$_POST['user_name']}さんの掲示板</h1>";
                                                if (sizeof($bullentin_data) == 0)
                                                    echo "<h2>投稿はありません</h2>";
                                                    for ($i = 0; $i < sizeof($bullentin_data); $i++) {
                                                        echo "<div class='user-bullentin-wrapper'>";
                                                            echo "<p>{$bullentin_data[$i]['date']}</p>";
                                                            echo "<div class='user-bullentin-text-wrapper'>";
                                                                echo "<div class='padding'>" . nl2br($bullentin_data[$i]['text'] . "</div>");
                                                            echo "</div>";
                                                        echo "</div>";
                                                    }
                                            echo "
                                                    <form class='btn-return' action='./index.php' method='POST'>";
                                                        if (!empty($_POST['search_user_name']))
                                                            echo "<input type='hidden' name='search_user_name' value='{$_POST['search_user_name']}'>";
                                                        if (!empty($_POST['search_user_address']))
                                                            echo "<input type='hidden' name='search_user_address' value='{$_POST['search_user_address']}'>";
                                                        if (!empty($_POST['search_user_gender']))
                                                            echo "<input type='hidden' name='search_user_gender' value='{$_POST['search_user_gender']}'>";
                                                    echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                        <input type='hidden' name='user_image' value='{$_POST['user_image']}'>
                                                        <input type='hidden' name='user_id' value='{$_POST['user_id']}'>
                                                        <input type='hidden' name='user_name' value='{$_POST['user_name']}'>
                                                        <input type='hidden' name='user_birthday' value='{$_POST['user_birthday']}'>
                                                        <input type='hidden' name='user_gender' value='{$_POST['user_gender']}'>
                                                        <input type='hidden' name='user_address_1' value='{$_POST['user_address_1']}'>
                                                        <input type='hidden' name='user_address_2' value='{$_POST['user_address_2']}'>
                                                        <input type='hidden' name='user_email' value='{$_POST['user_email']}'>
                                                        <input type='hidden' name='user_tel' value='{$_POST['user_tel']}'>
                                                        <input type='hidden' name='user_publish_email' value='{$_POST['user_publish_email']}'>
                                                        <input type='hidden' name='user_publish_tel' value='{$_POST['user_publish_tel']}'>
                                                        <input type='hidden' name='menu_num' value=3>
                                                        <input type='hidden' name='search_view' value=1>
                                                        <input type='hidden' name='page_search' value={$_POST['page_search']}>
                                                        <button style='border-color: $btn_color; background-color: $btn_color;'>戻る</button>
                                                    </form>
                                                </div>
                                            ";
                                        } catch (PDOException $e) {
                                            echo 'エラー:' . $e->getMessage() . '<br>';
                                        }
                                        break;
                                }
                            echo "</div>";
                            break;
                        // お気に入りリスト
                        case 4:
                            $login_user_id_name_json = json_encode($login_user_id_name);
                            switch ($_POST['list_view']) {
                                case 1:
                                    try {
                                        if ($login_user_gender == "男性")
                                            $btn_color = '#50a0ff';
                                        else
                                            $btn_color = 'palevioletred';
                                        // お気に入りリストデータ
                                        $sql = $pdo->prepare("SELECT * FROM favorite_list WHERE id = :id");
                                        $sql->execute(array(
                                            ":id" => $login_user_id
                                        ));
                                        $favorite_list_login_user = $sql->fetchAll(PDO::FETCH_ASSOC);
                                        echo "<h1>お気に入りリスト</h1>";
                                        echo "<h2 class='regist-list-none'></h2>";
                                        if (sizeof($favorite_list_login_user) == NULL)
                                            echo "<h2 class='regist-list-none'>現在登録されておりません</h2>";
                                        else {
                                            echo "
                                                <form class='search-box-form' action='./index.php' method='POST'>
                                                    <input type='hidden' name='id_name' value='$login_user_id_name'>
                                                    <input name='search_favorite_list' type='text' placeholder='名前'>
                                                    <input name='menu_num' type='hidden' value=4>
                                                    <input name='list_view' type='hidden' value=1>
                                                    <input name='page_list' type='hidden' value=1>
                                                    <button>検索</button>
                                                </form>
                                            ";
                                            echo "<div class='user-list-wrapper'>";
                                                echo "<div class='flex-wrap'>";
                                                    $id_counter = 1;
                                                    if (sizeof($all_user_data) != 0) {
                                                        for ($i = 0; $i < sizeof($all_user_data); $i++) {
                                                            if ($all_user_data[$i]['update_image_name'] != NULL)
                                                                $list_image_name = $all_user_data[$i]['update_image_name'];
                                                            else {
                                                                if ($all_user_data[$i]['gender'] == "男性")
                                                                    $list_image_name = './images/icon_man.png';
                                                                else
                                                                    $list_image_name = './images/icon_woman.png';
                                                            }
                                                            for ($j = $_POST['page_list'] * 150 - 150; $j < $_POST['page_list'] * 150; $j++) {
                                                                if ($j < sizeof($favorite_list_login_user)) {
                                                                    if ($all_user_data[$i]['id'] == $favorite_list_login_user[$j]['list_id']) {
                                                                        echo "
                                                                            <div class='list-data-wrapper list-data-wrapper-$id_counter'>
                                                                                <div class='padding'>
                                                                                    <div class='flex'>
                                                                                        <img src='$list_image_name'>
                                                                                        <p>{$all_user_data[$i]['name']}</p>
                                                                                    </div>
                                                                                    <div class='flex'>
                                                                                        <form action='./index.php' method='POST'>";
                                                                                            if (!empty($_POST['search_favorite_list']))
                                                                                                echo "<input name='search_favorite_list' type='hidden' value='{$_POST['search_favorite_list']}'>";
                                                                                        echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                                                            <input type='hidden' name='user_image' value='{$all_user_data[$i]['update_image_name']}'>
                                                                                            <input type='hidden' name='user_id' value='{$all_user_data[$i]['id']}'>
                                                                                            <input type='hidden' name='user_name' value='{$all_user_data[$i]['name']}'>
                                                                                            <input type='hidden' name='user_birthday' value='{$all_user_data[$i]['birthday']}'>
                                                                                            <input type='hidden' name='user_gender' value='{$all_user_data[$i]['gender']}'>
                                                                                            <input type='hidden' name='user_address_1' value='{$all_user_data[$i]['address_1']}'>
                                                                                            <input type='hidden' name='user_address_2' value='{$all_user_data[$i]['address_2']}'>
                                                                                            <input type='hidden' name='user_email' value='{$all_user_data[$i]['email']}'>
                                                                                            <input type='hidden' name='user_tel' value='{$all_user_data[$i]['tel']}'>
                                                                                            <input type='hidden' name='user_publish_email' value='{$all_user_data[$i]['publish_email']}'>
                                                                                            <input type='hidden' name='user_publish_tel' value='{$all_user_data[$i]['publish_tel']}'>
                                                                                            <input type='hidden' name='menu_num' value=4>
                                                                                            <input type='hidden' name='list_view' value=2>
                                                                                            <input type='hidden' name='page_list' value={$_POST['page_list']}>
                                                                                            <button style='border-color: $btn_color; background-color: $btn_color;'>詳細</button>
                                                                                        </form>
                                                                                        <form action='./index.php' method='POST'>
                                                                                            <input type='hidden' name='id_name' value='$login_user_id_name'>
                                                                                            <input type='hidden' name='user_image' value='$list_image_name'>
                                                                                            <input type='hidden' name='user_id' value='{$all_user_data[$i]['id']}'>
                                                                                            <input type='hidden' name='user_name' value='{$all_user_data[$i]['name']}'>
                                                                                            <input type='hidden' name='menu_num' value=2>
                                                                                            <input type='hidden' name='chat_view' value=2>
                                                                                            <button value={$all_user_data[$i]['id']} style='border-color: $btn_color; background-color: $btn_color;' class='btn-chat'>チャット</button>
                                                                                        </form>
                                                                                        <button value='{$favorite_list_login_user[$j]['list_id']}' style='border-color: $btn_color; background-color: $btn_color;' class='btn-delete-list-$id_counter'>削除</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ";
                                                                        $id_counter++;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        echo "<h2>検索結果はありません</h2>";
                                                    $id_counter_json = json_encode($id_counter);
                                                echo "</div>";
                                            echo "</div>";
                                            if (sizeof($all_user_data) != 0) {
                                                echo "<div class='list-page-btn-wrapper'>";
                                                    $back = $_POST['page_list'];
                                                    if ($back > 1)
                                                        $back = $_POST['page_list'] - 1;
                                                    echo "
                                                        <form action='./index.php' method='POST'>";
                                                            if (!empty($_POST['search_favorite_list']))
                                                                echo "<input type='hidden' name='search_favorite_list' value='{$_POST['search_favorite_list']}'>";
                                                        echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                            <input type='hidden' name='menu_num' value=4>
                                                            <input type='hidden' name='list_view' value=1>
                                                            <input type='hidden' name='page_list' value=$back>
                                                            <button style='border-color: $btn_color; background-color: $btn_color;' class='btn-change-page'><</button>
                                                        </form>
                                                    ";
                                                    echo "<p class='page-list'>{$_POST['page_list']}</p>";

                                                    $next = $_POST['page_list'];
                                                    if (((double)(sizeof($favorite_list_login_user) / $_POST['page_list'] - 150)) > 0)
                                                        $next = $_POST['page_list'] + 1;
                                                    echo "
                                                        <form action='./index.php' method='POST'>";
                                                        if (!empty($_POST['search_favorite_list']))
                                                            echo "<input type='hidden' name='search_favorite_list' value='{$_POST['search_favorite_list']}'>";
                                                        echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                            <input type='hidden' name='menu_num' value=4>
                                                            <input type='hidden' name='list_view' value=1>
                                                            <input type='hidden' name='page_list' value=$next>
                                                            <button style='border-color: $btn_color; background-color: $btn_color;' class='btn-change-page'>></button>
                                                        </form>
                                                    ";
                                                echo "</div>";
                                            }
                                        }
                                    } catch (PDOException $e) {
                                        echo 'エラー:' . $e->getMessage() . '<br>';
                                    }
                                    break;
                                case 2:
                                    if ($_POST['user_image'] != NULL) {
                                        $user_image_name = $_POST['user_image'];
                                    } else {
                                        if ($_POST['user_gender'] == "男性")
                                            $user_image_name = "./images/icon_man.png";
                                        else
                                            $user_image_name = "./images/icon_woman.png";
                                    }
                                    echo "
                                        <div>
                                            <h1>詳細情報</h1>
                                            <div class='detail-data-wrapper'>
                                                <div class='padding'>
                                                    <div>
                                                        <div class='flex'>
                                                            <div>
                                                            <div class='text-align'>
                                                                <img src='$user_image_name'>
                                                            </div>
                                                            <p>氏名：{$_POST['user_name']}</p>
                                                            <p>誕生日：{$_POST['user_birthday']}</p>
                                                            <p>性別：{$_POST['user_gender']}</p>
                                                            <p>居住地：{$_POST['user_address_1']}：{$_POST['user_address_2']}</p>";
                                                            if ($_POST['user_publish_email'] == 1)
                                                                echo "<p>メールアドレス：{$_POST['user_email']}</p>";
                                                            if ($_POST['user_publish_tel'] == 1)
                                                                echo "<p>電話番号：{$_POST['user_tel']}</p>";
                                                    echo "
                                                            </div>
                                                        </div>
                                                    ";

                                                        if ($login_user_gender == "男性")
                                                            $btn_color = '#50a0ff';
                                                        else
                                                            $btn_color = 'palevioletred';

                                                    echo "
                                                        <div class='button-wrapper-list'>
                                                            <form class='btn-return' action='./index.php' method='POST'>";
                                                                if (!empty($_POST['search_favorite_list']))
                                                                    echo "<input name='search_favorite_list' type='hidden' value='{$_POST['search_favorite_list']}'>";
                                                            echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                                <input type='hidden' name='menu_num' value=4>
                                                                <input type='hidden' name='list_view' value=1>
                                                                <input type='hidden' name='page_list' value={$_POST['page_list']}>
                                                                <button style='border-color: $btn_color; background-color: $btn_color;'>戻る</button>
                                                            </form>
                                                            <div class='flex-PC'>
                                                                <form class='btn-return' action='./index.php' method='POST'>";
                                                                    if (!empty($_POST['search_favorite_list']))
                                                                        echo "<input name='search_favorite_list' type='hidden' value='{$_POST['search_favorite_list']}'>";
                                                                echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                                    <input type='hidden' name='user_image' value='{$_POST['user_image']}'>
                                                                    <input type='hidden' name='user_id' value='{$_POST['user_id']}'>
                                                                    <input type='hidden' name='user_name' value='{$_POST['user_name']}'>
                                                                    <input type='hidden' name='user_birthday' value='{$_POST['user_birthday']}'>
                                                                    <input type='hidden' name='user_gender' value='{$_POST['user_gender']}'>
                                                                    <input type='hidden' name='user_address_1' value='{$_POST['user_address_1']}'>
                                                                    <input type='hidden' name='user_address_2' value='{$_POST['user_address_2']}'>
                                                                    <input type='hidden' name='user_email' value='{$_POST['user_email']}'>
                                                                    <input type='hidden' name='user_tel' value='{$_POST['user_tel']}'>
                                                                    <input type='hidden' name='user_publish_email' value='{$_POST['user_publish_email']}'>
                                                                    <input type='hidden' name='user_publish_tel' value='{$_POST['user_publish_tel']}'>
                                                                    <input type='hidden' name='menu_num' value=4>
                                                                    <input type='hidden' name='list_view' value=3>
                                                                    <input type='hidden' name='page_list' value={$_POST['page_list']}>
                                                                    <button style='border-color: $btn_color; background-color: $btn_color;'>掲示板</button>
                                                                </form>
                                                                <form action='./index.php' method='POST' class='margin'>
                                                                    <input type='hidden' name='id_name' value='$login_user_id_name'>
                                                                    <input type='hidden' name='user_image' value='$user_image_name'>
                                                                    <input type='hidden' name='user_id' value='{$_POST['user_id']}'>
                                                                    <input type='hidden' name='user_name' value='{$_POST['user_name']}'>
                                                                    <input type='hidden' name='menu_num' value=2>
                                                                    <input type='hidden' name='chat_view' value=2>
                                                                    <button value={$_POST['user_id']} style='border-color: $btn_color; background-color: $btn_color;' class='btn-chat'>チャット</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    " ;
                                    break;
                                case 3:
                                    try {
                                        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
                                        // 掲示板データ
                                        $sql = $pdo->prepare("SELECT * FROM bullentin_board WHERE user_id = :user_id ORDER BY date DESC");
                                        $sql->execute(array(
                                            ":user_id" => $_POST['user_id'],
                                        ));
                                        $bullentin_data = $sql->fetchAll(PDO::FETCH_ASSOC);
                                        $board_data_size = json_encode(sizeof($bullentin_data));

                                        if ($login_user_gender == "男性")
                                            $btn_color = '#50a0ff';
                                        else
                                            $btn_color = 'palevioletred';
                                        echo "
                                            <div class='list-user-bullentin'>";
                                            echo "<h1>{$_POST['user_name']}さんの掲示板</h1>";
                                            if (sizeof($bullentin_data) == 0)
                                                echo "<h2>投稿はありません</h2>";
                                            for ($i = 0; $i < sizeof($bullentin_data); $i++) {
                                                echo "<div class='user-bullentin-wrapper'>";
                                                    echo "<p>{$bullentin_data[$i]['date']}</p>";
                                                    echo "<div class='user-bullentin-text-wrapper'>";
                                                        echo "<div class='padding'>" . nl2br($bullentin_data[$i]['text'] . "</div>");
                                                    echo "</div>";
                                                echo "</div>";
                                            }
                                            echo "
                                                <form class='btn-return' action='./index.php' method='POST'>";
                                                    if (!empty($_POST['search_favorite_list']))
                                                        echo "<input name='search_favorite_list' type='hidden' value='{$_POST['search_favorite_list']}'>";
                                                echo "<input type='hidden' name='id_name' value='$login_user_id_name'>
                                                    <input type='hidden' name='user_image' value='{$_POST['user_image']}'>
                                                    <input type='hidden' name='user_id' value='{$_POST['user_id']}'>
                                                    <input type='hidden' name='user_name' value='{$_POST['user_name']}'>
                                                    <input type='hidden' name='user_birthday' value='{$_POST['user_birthday']}'>
                                                    <input type='hidden' name='user_gender' value='{$_POST['user_gender']}'>
                                                    <input type='hidden' name='user_address_1' value='{$_POST['user_address_1']}'>
                                                    <input type='hidden' name='user_address_2' value='{$_POST['user_address_2']}'>
                                                    <input type='hidden' name='user_email' value='{$_POST['user_email']}'>
                                                    <input type='hidden' name='user_tel' value='{$_POST['user_tel']}'>
                                                    <input type='hidden' name='user_publish_email' value='{$_POST['user_publish_email']}'>
                                                    <input type='hidden' name='user_publish_tel' value='{$_POST['user_publish_tel']}'>
                                                    <input type='hidden' name='menu_num' value=4>
                                                    <input type='hidden' name='list_view' value=2>
                                                    <input type='hidden' name='page_list' value={$_POST['page_list']}>
                                                    <button style='border-color: $btn_color; background-color: $btn_color;'>戻る</button>
                                                </form>
                                            </div>
                                        ";
                                    } catch (PDOException $e) {
                                        echo 'エラー:' . $e->getMessage() . '<br>';
                                    }
                                break;
                            }
                            break;
                        // 設定
                        case 5:
                            echo "<h1>設定</h1>";
                            switch ($setting_view) {
                                case 1:
                                    echo "
                                        <div class='btn-wrapper'>
                                            <form action='./index.php' method='POST'>
                                                <input name='id_name' type='hidden' value='$login_user_id_name'>
                                                <input name='menu_num' type='hidden' value='5'>
                                                <input name='setting_view' type='hidden' value='2'>
                                                <button class='$btn_color'>$book 登録情報確認</button>
                                            </form>
                                            <form action='./index.php' method='POST'>
                                                <input name='id_name' type='hidden' value='$login_user_id_name'>
                                                <input name='menu_num' type='hidden' value='5'>
                                                <input name='setting_view' type='hidden' value='3'>
                                                <button class='$btn_color'>$book 登録情報変更</button>
                                            </form>
                                            <form action='./index.php' method='POST'>
                                                <input name='id_name' type='hidden' value='$login_user_id_name'>
                                                <input name='menu_num' type='hidden' value='5'>
                                                <input name='setting_view' type='hidden' value='4'>
                                                <button class='$btn_color'>🔑 パスワード変更</button>
                                            </form>
                                            <button class='delete-account $btn_color'>🗑️ アカウント削除</button>
                                        </div>
                                    ";
                                    break;
                                case 2:
                                    if ($login_user_certification == 0)
                                        $text_certification = "未設定";
                                    else
                                        $text_certification = "設定済み";

                                    echo "
                                        <div class='personal-data-wrapper'>
                                            <div class='padding'>
                                            <h2>登録情報</h2>
                                            <div class='flex-center'>
                                                <div>
                                                    <img class='registed-img' src='$image_name'>
                                                    <p>ID：$login_user_id_name</p>
                                                    <p>氏名：$login_user_name</p>
                                                    <p>誕生日：$login_user_birth</p>
                                                    <p>性別：$login_user_gender</p>
                                                    <p>メールアドレス：$login_user_email</p>";
                                                if ($login_user_publish_email == 0)
                                                    echo "<p>メールアドレス公開：しない</p>";
                                                else
                                                    echo "<p>メールアドレス公開：する</p>";
                                                echo "<p>電話番号：$login_user_tel</p>";
                                                if ($login_user_publish_tel == 0)
                                                    echo "<p>電話番号公開：しない</p>";
                                                else
                                                    echo "<p>電話番号公開：する</p>";
                                                echo "<p>居住地：{$login_user_address_1}：{$login_user_address_2}</p>
                                                    <p>2要素認証：$text_certification</p>
                                                </div>
                                                </div>
                                                <form action='./index.php' method='POST'>
                                                    <input name='id_name' type='hidden' value='$login_user_id_name'>
                                                    <input name='menu_num' type='hidden' value='5'>
                                                    <input name='setting_view' type='hidden' value='1'>
                                                    <button class='$btn_color'>戻る</button>
                                                </form>
                                            </div>
                                        </div>
                                    ";
                                    break;
                                case 3:
                                    echo "
                                        <div class='change-data-wrapper'>
                                            <div class='display-PC-setting padding'>
                                                <h2>登録情報変更</h2>
                                                <table border='1'>
                                                    <tr>
                                                        <td>登録画像</td>
                                                        <td>
                                                            <form enctype='multipart/form-data' class='upload-image-PC' action='./update_image.php' method='POST'>
                                                                <input type='hidden' name='login_user_id_name' value='$login_user_id_name'>
                                                                <input name='upload_image' type='file'>
                                                            </form>
                                                        </td>
                                                        <td><button class='btn-change-image-PC $btn_color'>変更</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>誕生日</td>
                                                        <td>
                                                            <p style='font-size: 0;' class='alert-birthday-PC'></p>
                                                            <select class='change-birth-year-PC'>
                                                                <option>未選択</option>";
                                                                for ($i = 1960; $i <= date("Y") - 15; $i++)
                                                                    echo "<option>" . $i . "</option>";
                                                            echo "</select>
                                                                <label>年</label>
                                                                <select class='change-birth-month-PC'>
                                                                    <option>未選択</option>";
                                                                    for ($i = 1; $i <= 12; $i++)
                                                                        echo "<option>" . $i . "</option>";
                                                            echo "</select>
                                                                <label>月</label>
                                                                <select class='change-birth-day-PC'>
                                                                    <option>未選択</option>";
                                                                    for ($i = 1; $i <= 31; $i++)
                                                                        echo "<option>" . $i . "</option>";
                                                            echo "</select>
                                                                <label>日</label>
                                                        </td>
                                                        <td><button class='btn-change-birthday-PC $btn_color'>変更</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>氏名</td>
                                                        <td>
                                                            <p style='font-size: 0;' class='alert-name-PC'></p>
                                                            <input class='change-name-PC' type='text' placeholder='15字以内'>
                                                        </td>
                                                        <td><button class='btn-change-name-PC $btn_color'>変更</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>メールアドレス</td>
                                                        <td>
                                                            <p style='font-size: 0;' class='alert-mail-PC'></p>
                                                            <input class='change-mail-PC' type='text' placeholder='50字以内'>
                                                        </td>
                                                        <td><button class='btn-change-mail-PC $btn_color'>変更</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>電話番号</td>
                                                        <td>
                                                            <p style='font-size: 0;' class='alert-tel-PC'></p>
                                                            <input class='change-tel-PC' type='text' placeholder='携帯番号:半角数字11桁'>
                                                        </td>
                                                        <td><button class='btn-change-tel-PC $btn_color'>変更</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>公開設定</td>
                                                        <td>
                                                            <div style='display: flex; justify-content: center; text-align: left;'>
                                                                <div>
                                                                    <p style='font-size: 0;' class='alert-publish-setting-PC'></p>
                                                                    <label>メールアドレス</label>
                                                                    <select class='publish-email-PC'>
                                                                        <option>公開しない</option>
                                                                        <option>公開する</option>
                                                                    </select><br>
                                                                    <label>電話番号</label>
                                                                    <select class='publish-tel-PC'>
                                                                        <option>公開しない</option>
                                                                        <option>公開する</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><button class='btn-change-publish-PC $btn_color'>変更</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>居住地</td>
                                                        <td>
                                                            <p style='font-size: 0;' class='alert-address-PC'></p>
                                                            <div class='change-address-form-wrapper'>
                                                                <select class='change-address-1-PC'>
                                                                    <option>未選択</option>
                                                                    <option>北海道</option>
                                                                    <option>青森県</option>
                                                                    <option>秋田県</option>
                                                                    <option>山形県</option>
                                                                    <option>岩手県</option>
                                                                    <option>宮城県</option>
                                                                    <option>福島県</option>
                                                                    <option>群馬県</option>
                                                                    <option>栃木県</option>
                                                                    <option>茨城県</option>
                                                                    <option>埼玉県</option>
                                                                    <option>東京都</option>
                                                                    <option>神奈川県</option>
                                                                    <option>山梨県</option>
                                                                    <option>新潟県</option>
                                                                    <option>長野県</option>
                                                                    <option>静岡県</option>
                                                                    <option>愛知県</option>
                                                                    <option>岐阜県</option>
                                                                    <option>富山県</option>
                                                                    <option>石川県</option>
                                                                    <option>福井県</option>
                                                                    <option>滋賀県</option>
                                                                    <option>大阪府</option>
                                                                    <option>京都府</option>
                                                                    <option>兵庫県</option>
                                                                    <option>和歌山県</option>
                                                                    <option>奈良県</option>
                                                                    <option>兵庫県</option>
                                                                    <option>三重県</option>
                                                                    <option>岡山県</option>
                                                                    <option>島根県</option>
                                                                    <option>鳥取県</option>
                                                                    <option>広島県</option>
                                                                    <option>山口県</option>
                                                                    <option>高知県</option>
                                                                    <option>愛媛県</option>
                                                                    <option>徳島県</option>
                                                                    <option>香川県</option>
                                                                    <option>佐賀県</option>
                                                                    <option>福岡県</option>
                                                                    <option>大分県</option>
                                                                    <option>熊本県</option>
                                                                    <option>宮崎県</option>
                                                                    <option>鹿児島県</option>
                                                                    <option>長崎県</option>
                                                                    <option>沖縄県</option>
                                                                </select>
                                                                <input class='change-address-2-PC' type='text' placeholder='市町村:10字以内'>
                                                            </div>
                                                        </td>
                                                        <td><button class='btn-change-address-PC $btn_color'>変更</button></td>
                                                    </tr>
                                                    <tr class='authentication'>
                                                        <td>2要素認証</td>
                                                        <td colspan='2'>
                                                            <p style='font-size: 0;' class='alert-authentication-PC'></p>
                                                            <select class='authentication-setting-PC'>
                                                                <option>設定しない</option>
                                                                <option>質問</option>
                                                                <option>ワンタイムパスワード</option>
                                                            </select>
                                                            <select class='question-PC' disabled>
                                                                <option>趣味</option>
                                                                <option>好きな食べ物</option>
                                                                <option>あだ名</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>質問の答え</td>
                                                        <td>
                                                            <p style='font-size: 0;' class='alert-answer-PC'></p>
                                                            <input class='answer-PC' placeholder='30字以内' disabled>
                                                        </td>
                                                        <td><button class='btn-authentication-setting-PC $btn_color'>変更</button></td>
                                                    </tr>
                                                </table>
                                                <form action='./index.php' method='POST'>
                                                    <input name='id_name' type='hidden' value='$login_user_id_name'>
                                                    <input name='menu_num' type='hidden' value='5'>
                                                    <input name='setting_view' type='hidden' value='1'>
                                                    <button class='$btn_color'>戻る</button>
                                                </form>
                                            </div>
                                            <div class='display-Phone-setting padding'>
                                                <h2>登録情報変更</h2>
                                                <div class='margin-bottom'>
                                                    <label>登録画像変更</label><br>
                                                    <p style='font-size: 0;' class='alert-image-Phone'></p>
                                                    <form enctype='multipart/form-data' class='upload-image-Phone' action='./update_image.php' method='POST'>
                                                        <input type='hidden' name='login_user_id_name' value='$login_user_id_name'>
                                                        <input class='input-image-Phone' name='upload_image' type='file'>
                                                    </form>
                                                    <button class='btn-change-image-Phone $btn_color'>変更</button>
                                                </div>
                                                <div class='margin-bottom'>
                                                    <label>誕生日</label><br>
                                                    <p style='font-size: 0;' class='alert-birthday-Phone'></p>
                                                    <select class='change-birth-year-Phone'>
                                                        <option>未選択</option>";
                                                        for ($i = 1969; $i < date("Y") - 15; $i++)
                                                            echo "<option>" . $i . "</option>";
                                                echo "</select>
                                                    <label>年</label><br>
                                                    <select class='change-birth-month-Phone'>
                                                        <option>未選択</option>";
                                                        for ($i = 1; $i <= 12; $i++)
                                                            echo "<option>" . $i . "</option>";
                                                echo "</select>
                                                    <label>月</label><br>
                                                    <select class='change-birth-day-Phone'>
                                                        <option>未選択</option>";
                                                        for ($i = 1; $i <= 31; $i++)
                                                            echo "<option>" . $i . "</option>";
                                                echo "</select>
                                                    <label>日</label><br>
                                                    <button class='btn-change-birthday-Phone $btn_color'>変更</button>
                                                </div>
                                                <div class='margin-bottom'>
                                                    <label>氏名</label><br>
                                                    <p style='font-size: 0;' class='alert-name-Phone'></p>
                                                    <input class='change-name-Phone' type='text' placeholder='15字以内'><br>
                                                    <button class='btn-change-name-Phone $btn_color'>変更</button>
                                                </div>
                                                <div class='margin-bottom'>
                                                    <label>メールアドレス</label><br>
                                                    <p style='font-size: 0;' class='alert-mail-Phone'></p>
                                                    <input class='change-mail-Phone' type='text' placeholder='50字以内'><br>
                                                    <button class='btn-change-mail-Phone $btn_color'>変更</button>
                                                </div>
                                                <div class='margin-bottom'>
                                                    <label>電話番号</label><br>
                                                    <p style='font-size: 0;' class='alert-tel-Phone'></p>
                                                    <input class='change-tel-Phone' type='text' placeholder='携帯番号：半角数字11桁'><br>
                                                    <button class='btn-change-tel-Phone $btn_color'>変更</button>
                                                </div>
                                                <div class='margin-bottom'>
                                                    <label>公開設定</label><br>
                                                    <p style='font-size: 0;' class='alert-publish-setting-Phone'></p>
                                                    <label>メールアドレス<label>
                                                    <select class='publish-email-Phone'>
                                                        <option>公開しない</option>
                                                        <option>公開する</option>
                                                    </select><br>
                                                    <label>電話番号<label>
                                                    <select class='publish-tel-Phone'>
                                                        <option>公開しない</option>
                                                        <option>公開する</option>
                                                    </select><br>
                                                    <button class='btn-change-publish-Phone $btn_color'>変更</button>
                                                </div>
                                                <div class='margin-bottom'>
                                                    <label>居住地</label><br>
                                                    <p style='font-size: 0;' class='alert-address-Phone'></p>
                                                    <select class='change-address-1-Phone'>
                                                        <option>未選択</option>
                                                        <option>北海道</option>
                                                        <option>青森県</option>
                                                        <option>秋田県</option>
                                                        <option>山形県</option>
                                                        <option>岩手県</option>
                                                        <option>宮城県</option>
                                                        <option>福島県</option>
                                                        <option>群馬県</option>
                                                        <option>栃木県</option>
                                                        <option>茨城県</option>
                                                        <option>埼玉県</option>
                                                        <option>東京都</option>
                                                        <option>神奈川県</option>
                                                        <option>山梨県</option>
                                                        <option>新潟県</option>
                                                        <option>長野県</option>
                                                        <option>静岡県</option>
                                                        <option>愛知県</option>
                                                        <option>岐阜県</option>
                                                        <option>富山県</option>
                                                        <option>石川県</option>
                                                        <option>福井県</option>
                                                        <option>滋賀県</option>
                                                        <option>大阪府</option>
                                                        <option>京都府</option>
                                                        <option>兵庫県</option>
                                                        <option>和歌山県</option>
                                                        <option>奈良県</option>
                                                        <option>兵庫県</option>
                                                        <option>三重県</option>
                                                        <option>岡山県</option>
                                                        <option>島根県</option>
                                                        <option>鳥取県</option>
                                                        <option>広島県</option>
                                                        <option>山口県</option>
                                                        <option>高知県</option>
                                                        <option>愛媛県</option>
                                                        <option>徳島県</option>
                                                        <option>香川県</option>
                                                        <option>佐賀県</option>
                                                        <option>福岡県</option>
                                                        <option>大分県</option>
                                                        <option>熊本県</option>
                                                        <option>宮崎県</option>
                                                        <option>鹿児島県</option>
                                                        <option>長崎県</option>
                                                        <option>沖縄県</option>
                                                    </select><br>
                                                    <input class='change-address-2-Phone' type='text' placeholder='15字以内'><br>
                                                    <button class='btn-change-address-Phone $btn_color'>変更</button>
                                                </div>
                                                <div class='margin-bottom'>
                                                    <label>２要素認証</label><br>
                                                    <p style='font-size: 0;' class='alert-authentication-Phone'></p>
                                                    <select class='authentication-setting-Phone'>
                                                        <option>設定しない</option>
                                                        <option>質問</option>
                                                        <option>ワンタイムパスコード</option>
                                                    </select><br>
                                                    <select class='margin-bottom question-Phone' disabled>
                                                        <option>趣味</option>
                                                        <option>好きな食べ物</option>
                                                        <option>あだ名</option>
                                                    </select><br>
                                                    <label class='margin-top'>質問の答え</label><br>
                                                    <p style='font-size: 0;' class='alert-answer-Phone'></p>
                                                    <input class='answer-Phone' type='text' placeholder='30字以内' disabled><br>
                                                    <button class='btn-authentication-setting-Phone $btn_color'>変更</button>
                                                </div>
                                                <form action='./index.php' method='POST'>
                                                    <input name='id_name' type='hidden' value='$login_user_id_name'>
                                                    <input name='menu_num' type='hidden' value='5'>
                                                    <input name='setting_view' type='hidden' value='1'>
                                                    <button class='$btn_color'>戻る</button>
                                                </form>
                                            </div>
                                        </div>
                                    ";
                                    break;
                                case 4:
                                    echo "
                                        <div class='change-password-wrapper'>
                                            <div class='padding'>
                                                <h2>パスワード変更</h2>
                                                <p class='alert alert-password'></p>
                                                <input class='new-password' type='password' placeholder='新パスワード:半角英数記号8〜30字'><br>
                                                <p class='alert alert-password-retype'></p>
                                                <input class='new-password-retype' type='password' placeholder='新パスワード(確認用)'><br>
                                                <div class='flex-center'>
                                                    <div class='btn-wrapper'>
                                                        <form action='./index.php' method='POST'>
                                                            <input name='id_name' type='hidden' value='$login_user_id_name'>
                                                            <input name='menu_num' type='hidden' value='5'>
                                                            <input name='setting_view' type='hidden' value='1'>
                                                            <button class='$btn_color'>戻る</button>
                                                        </form>
                                                        <button class='update-password $btn_color'>変更</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ";
                                    break;
                            }
                            break;
                    }
                ?>
        </div>
    </div>
    <div class="side-bar-wrapper <?php if ($login_user_gender == "男性") echo 'bg-color-man2'; else echo 'bg-color-woman2'; ?>">
        <div class="margin">
            <div class="side-bar-change-button">⇦</div>
            <div class="side-bar-PC">
                <form action="./index.php" method="POST">
                    <input name="id" type="hidden" value="<?php echo $login_user_id; ?>">
                    <input name="id_name" type="hidden" value="<?php echo $login_user_id_name; ?>">
                    <input name="login_user_gender" type="hidden" value="<?php echo $login_user_gender; ?>">
                    <input name="chat_view" type="hidden" value=1>
                    <div <?php if ($menu_num == 1) echo 'style="background-color: rgba(255,255,255,0.7);"'; ?> class="border-bottom">
                        <button <?php if ($menu_num == 1) echo 'style="color: black;"'; ?> class="btn-1" type="submit" name="menu_num" value=1>掲示板</button>
                    </div>
                </form>
                <form action="./index.php" method="POST">
                    <input name="id" type="hidden" value="<?php echo $login_user_id; ?>">
                    <input name="id_name" type="hidden" value="<?php echo $login_user_id_name; ?>">
                    <input name="login_user_gender" type="hidden" value="<?php echo $login_user_gender; ?>">
                    <input name="chat_view" type="hidden" value=1>
                    <input name="page_chat_history" type="hidden" value=1>
                    <div <?php if ($menu_num == 2) echo 'style="background-color: rgba(255,255,255,0.7);"'; ?> class="border-bottom">
                        <button <?php if ($menu_num == 2) echo 'style="color: black;"'; ?> class="btn-2" type="submit" name="menu_num" value=2>チャット</button>
                        <span class='info-mark'></span>
                    </div>
                </form>
                <form action="./index.php" method="POST">
                    <input name="id" type="hidden" value="<?php echo $login_user_id; ?>">
                    <input name="id_name" type="hidden" value="<?php echo $login_user_id_name; ?>">
                    <input name="login_user_gender" type="hidden" value="<?php echo $login_user_gender; ?>">
                    <input name="search_view" type="hidden" value=0>
                    <input name="page_search" type="hidden" value=1>
                    <div <?php if ($menu_num == 3) echo 'style="background-color: rgba(255,255,255,0.7);"'; ?> class="border-bottom">
                        <button <?php if ($menu_num == 3) echo 'style="color: black;"'; ?> class="btn-3" type="submit" name="menu_num" value=3>ユーザー検索</button>
                    </div>
                </form>
                <form action="./index.php" method="POST">
                    <input name="id" type="hidden" value="<?php echo $login_user_id; ?>">
                    <input name="id_name" type="hidden" value="<?php echo $login_user_id_name; ?>">
                    <input name="login_user_gender" type="hidden" value="<?php echo $login_user_gender; ?>">
                    <input name="list_view" type="hidden" value=1>
                    <input name="page_list" type="hidden" value=1>
                    <div <?php if ($menu_num == 4) echo 'style="background-color: rgba(255,255,255,0.7);"'; ?> class="border-bottom">
                        <button <?php if ($menu_num == 4) echo 'style="color: black;"'; ?> class="btn-4" type="submit" name="menu_num" value=4>お気に入り</button>
                    </div>
                </form>
                <form action="./index.php" method="POST">
                    <input name="id" type="hidden" value="<?php echo $login_user_id; ?>">
                    <input name="id_name" type="hidden" value="<?php echo $login_user_id_name; ?>">
                    <input name="login_user_gender" type="hidden" value="<?php echo $login_user_gender; ?>">
                    <input name="setting_view" type="hidden" value=1>
                    <div <?php if ($menu_num == 5) echo 'style="background-color: rgba(255,255,255,0.7);"'; ?> class="border-bottom">
                        <button <?php if ($menu_num == 5) echo 'style="color: black;"'; ?> class="btn-5" type="submit" name="menu_num" value=5>設定</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="flex-header header <?php if ($login_user_gender == "男性") echo 'bg-color-man2'; else echo 'bg-color-woman2'; ?>">
        <div class="flex-header">
            <img class="image" src="<?php echo $image_name; ?>">
            <div class="status">
                <div class="margin-top">
                    <p class="birthday">誕生日：<?php echo $login_user_birth; ?></p>
                    <p class="address">
                        居住地：<?php if ($login_user_address_1 == NULL) echo "未設定"; else echo $login_user_address_1; ?>：<?php if ($login_user_address_2 == NULL || $login_user_address_2 == "未設定") echo "未設定"; else echo $login_user_address_2; ?></p>
                    <p class='mail'>メールアドレス：<?php echo $login_user_email; ?></p>
                </div>
            </div>
        </div>
        <div class="display-Phone">
            <div class="menu">
                <div class="border-1"></div>
                <div class="border-2"></div>
                <div class="border-3"></div>
            </div>
            <div class="menu-list">
                <div class="menu-item-1 <?php if ($login_user_gender == "男性") echo "bg-color-man2"; else echo "bg-color-woman2"; ?>"><p><?php echo $login_user_name ?></p></div>
                <div class="margin-bottom">
                    <form action="./index.php" method="POST">
                        <input name="id" type="hidden" value="<?php echo $login_user_id; ?>">
                        <input name="id_name" type="hidden" value="<?php echo $login_user_id_name; ?>">
                        <input name="login_user_gender" type="hidden" value="<?php echo $login_user_gender; ?>">
                        <input name="chat_view" type="hidden" value=1>
                        <div class="<?php if ($menu_num == 1) { if ($login_user_gender == "男性") echo "bg-color-man2"; else echo "bg-color-woman2"; } ?>">
                            <button <?php if ($menu_num == 1) echo "style='color: white;'"; ?> type="submit" name="menu_num" value=1>掲示板</button>
                        </div>
                    </form>
                    <form action="./index.php" method="POST">
                        <input name="id" type="hidden" value="<?php echo $login_user_id; ?>">
                        <input name="id_name" type="hidden" value="<?php echo $login_user_id_name; ?>">
                        <input name="login_user_gender" type="hidden" value="<?php echo $login_user_gender; ?>">
                        <input name="chat_view" type="hidden" value=1>
                        <input name="page_chat_history" type="hidden" value=1>
                        <div class="<?php if ($menu_num == 2) { if ($login_user_gender == "男性") echo "bg-color-man2"; else echo "bg-color-woman2"; } ?>">
                            <button <?php if ($menu_num == 2) echo "style='color: white;'"; ?> type="submit" name="menu_num" value=2>チャット<span class="info-mark-Phone"></span></button>
                        </div>
                    </form>
                    <form action="./index.php" method="POST">
                        <input name="id" type="hidden" value="<?php echo $login_user_id; ?>">
                        <input name="id_name" type="hidden" value="<?php echo $login_user_id_name; ?>">
                        <input name="login_user_gender" type="hidden" value="<?php echo $login_user_gender; ?>">
                        <input name="search_view" type="hidden" value=0>
                        <input name="page_search" type="hidden" value=1>
                        <div class="<?php if ($menu_num == 3) { if ($login_user_gender == "男性") echo "bg-color-man2"; else echo "bg-color-woman2"; } ?>">
                            <button <?php if ($menu_num == 3) echo "style='color: white;'"; ?> type="submit" name="menu_num" value=3>ユーザー検索</button>
                        </div>
                    </form>
                    <form action="./index.php" method="POST">
                        <input name="id" type="hidden" value="<?php echo $login_user_id; ?>">
                        <input name="id_name" type="hidden" value="<?php echo $login_user_id_name; ?>">
                        <input name="login_user_gender" type="hidden" value="<?php echo $login_user_gender; ?>">
                        <input name="list_view" type="hidden" value=1>
                        <input name="page_list" type="hidden" value=1>
                        <div class="<?php if ($menu_num == 4) { if ($login_user_gender == "男性") echo "bg-color-man2"; else echo "bg-color-woman2"; } ?>">
                            <button <?php if ($menu_num == 4) echo "style='color: white;'"; ?> type="submit" name="menu_num" value=4>ユーザーリスト</button>
                        </div>
                    </form>
                    <form action="./index.php" method="POST">
                        <input name="id" type="hidden" value="<?php echo $login_user_id; ?>">
                        <input name="id_name" type="hidden" value="<?php echo $login_user_id_name; ?>">
                        <input name="login_user_gender" type="hidden" value="<?php echo $login_user_gender; ?>">
                        <input name="setting_view" type="hidden" value=1>
                        <div class="<?php if ($menu_num == 5) { if ($login_user_gender == "男性") echo "bg-color-man2"; else echo "bg-color-woman2"; } ?>">
                            <button <?php if ($menu_num == 5) echo "style='color: white;'"; ?> type="submit" name="menu_num" value=5>設定</button>
                        </div>
                    </form>
                    <form class="margin" action="./logout.php" method="POST">
                        <input type='hidden' name='id_name' value=<?php echo $login_user_id_name; ?>>
                        <button class='logout' type="submit">ログアウト</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="display-PC display-Tablet">
            <div class="header-right">
                <p class="user-name"><?php echo $login_user_name; ?></p>
                <form action='./logout.php' method='POST'>
                    <input type='hidden' name='id_name' value=<?php echo $login_user_id_name; ?>>
                    <button class="<?php if ($login_user_gender == "男性") echo "btn-color-man-header"; else echo "btn-color-woman-header"; ?>">ログアウト</button>
                </form>
            </div>
        </div>
    </div>

    <script>
        let login_user_id = JSON.parse('<?php echo $login_user_id_json; ?>');
        let list_id = JSON.parse('<?php echo $list_id_json; ?>');
        let login_user_id_name = JSON.parse('<?php echo $login_user_id_name_json; ?>');
        let login_user_gender = JSON.parse('<?php echo $login_user_gender_json; ?>');
        let login_user_image_name = JSON.parse('<?php echo $login_user_image_json; ?>');
        let chat_room_counter = JSON.parse('<?php echo json_encode($chat_room_counter_json); ?>');
        let board_data_size = JSON.parse('<?php echo json_encode($board_data_size); ?>');
        let id_counter = JSON.parse('<?php echo json_encode($id_counter_json); ?>');
        let id_read = JSON.parse('<?php echo $id_read_json; ?>');
    </script>
    <script type="text/javascript" src="./javascript/jquery.js"></script>
    <script type="text/javascript" src="./javascript/moment.js"></script>
    <script type="text/javascript" src="./javascript/validate_main.js"></script>
    <script type="text/javascript" src="./javascript/sidebar_animation.js"></script>
    <script type="text/javascript" src="./javascript/check_exist_chat_room.js"></script>
    <script type="text/javascript" src="./javascript/update_chat_realtime_check.js"></script>
    <script type="text/javascript" src="./javascript/check_chat_not_read.js"></script>
    <script type="text/javascript" src="./javascript/check_read_chat.js"></script>
    <script type="text/javascript" src="./javascript/event.js"></script>
</body>
</html>
