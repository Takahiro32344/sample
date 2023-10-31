/*  サイドバーアニメーション  */

function sidebar_animation() {
    if (login_user_gender == "男性")
        book = "📘";
    else
        book = "📕";

        // サイドバー
    if (window.matchMedia('(min-width: 1100px)').matches) {
        min_left = "5px";
        max_left = "148px";
        min_width = "60px";
        max_width = "200px";
        main_content_min_width_1 = "90%";
        main_content_min_width_2 = "89.3%";
        main_content_max_width_1 = "98%";
        main_content_max_width_2 = "97.3%";
        main_content_min_left = "50px";
        main_content_max_left = "200px";

        $('.side-bar-change-button').on('mouseover', function() {
            if (side_bar == 0)
                $(this).text("☜");
            else
                $(this).text("☞");
        });

        $('.side-bar-change-button').on('mouseout', function() {
            if (side_bar == 0)
                $(this).text("⇦");
            else
                $(this).text("⇨");
        });

        if ($('.side-bar-wrapper').width() >= 160) {
            $('.btn-1').text("掲示板");
            $('.btn-2').text("チャット");
            $('.btn-3').text("ユーザー検索");
            $('.btn-4').text("お気に入り");
            $('.btn-5').text("設定");
        } else {
            $('.btn-1').text("🪧");
            $('.btn-2').text("💬");
            $('.btn-3').text("🔍");
            $('.btn-4').text(book);
            $('.btn-5').text("🛠️");
        }
    } else if (window.matchMedia('(min-width: 770px)').matches) {
        min_left = "0.5vw";
        max_left = "10.5vw";
        min_width = "5vw";
        max_width = "15vw";
        main_content_min_width_1 = "85%";
        main_content_min_width_2 = "85%";
        main_content_max_width_1 = "95%";
        main_content_max_width_2 = "95%";
        main_content_min_left = "5vw";
        main_content_max_left = "15vw";

        if ($('.side-bar-wrapper').width() >= 100) {
            $('.btn-1').text("掲示板");
            $('.btn-2').text("チャット");
            $('.btn-3').text("ユーザー検索");
            $('.btn-4').text("お気に入り");
            $('.btn-5').text("設定");
        } else {
            $('.btn-1').text("🪧");
            $('.btn-2').text("💬");
            $('.btn-3').text("🔍");
            $('.btn-4').text(book);
            $('.btn-5').text("🛠️");
        }
    } else {
        min_left = "0vw";
        max_left = "0vw";
        min_width = "0vw";
        max_width = "0vw";
        main_content_min_width_1 = "100%";
        main_content_min_width_2 = "100%";
        main_content_max_width_1 = "100%";
        main_content_max_width_2 = "100%";
        main_content_min_left = "0vw";
        main_content_max_left = "0vw";
    }

    if (side_bar == 1) {
        $('.side-bar-change-button').css({'transition':'.5s', 'left': min_left});
        $('.btn-1').css({'transition':'.5s', 'width': min_width});
        $('.btn-2').css({'transition':'.5s', 'width': min_width});
        $('.btn-3').css({'transition':'.5s', 'width': min_width});
        $('.btn-4').css({'transition':'.5s', 'width': min_width});
        $('.btn-5').css({'transition':'.5s', 'width': min_width});
        $('.border-bottom').css({'transition':'.5s', 'width': min_width});
        $('.side-bar-wrapper').css({'transition':'.5s', 'width': min_width});
        $('.chat-form-wrapper').css({'transition':'.5s', 'left': main_content_min_left, 'width': main_content_max_width_1});
        $('.main-content-position').css({'transition':'.5s', 'left': main_content_min_left, 'width': main_content_max_width_2});
    } else {
        $('.side-bar-change-button').css({'transition':'.5s', 'left': max_left});
        $('.btn-1').css({'transition':'.5s', 'width': max_width});
        $('.btn-2').css({'transition':'.5s', 'width': max_width});
        $('.btn-3').css({'transition':'.5s', 'width': max_width});
        $('.btn-4').css({'transition':'.5s', 'width': max_width});
        $('.btn-5').css({'transition':'.5s', 'width': max_width});
        $('.border-bottom').css({'transition':'.5s', 'width': max_width});
        $('.side-bar-wrapper').css({'transition':'.5s', 'width': max_width});
        $('.chat-form-wrapper').css({'transition':'.5s', 'left': main_content_max_left, 'width': main_content_min_width_1});
        $('.main-content-position').css({'transition':'.5s', 'left': main_content_max_left, 'width': main_content_min_width_2});
    }
}