/*         初期セット        */

var parent_image = document.getElementById('background');

var parent_option = new Array(3);
parent_option[0] = document.getElementById('birth_year');
parent_option[1] = document.getElementById('birth_month');
parent_option[2] = document.getElementById('birth_day');

var parent_div = document.getElementById('result_content');

var view = 1;
var flag = 0;

var date = new Date();
// フォームデータ
var birth_year = 0;
var birth_month = 0;
var birth_day = 0;

let color = new Array(2);

// タブ・ボタンカラー・鑑定結果画面背景

if (date.getMonth() + 1 >= 9 && date.getMonth() + 1 <= 11) {
    color[0] = "#e05000";
    color[1] = "#e0a000";
} else if (date.getMonth() + 1 == 12 || date.getMonth() + 1 == 1 || date.getMonth() + 1 == 2) {
    color[0] = "#2050e0";
    color[1] = "#80c0ff";
} else {
    color[0] = "#50c080";
    color[1] = "#70f0a0";
}

var bg_num_result = 0;

switch (Math.floor(Math.random() * 4)) {
    case 0:
        bg_num_result = 0;
        break;
    case 1:
        bg_num_result = 1;
        break;
    case 2:
        bg_num_result = 2;
        break;
    case 3:
        bg_num_result = 3;
        break;
}

document.getElementById('tab_1').style = "background-color:" + color[0] + ";";
document.getElementById('tab_2').style = "background-color:" + color[1] + ";";
document.getElementById('tab_3').style = "background-color:" + color[1] + ";";
document.getElementById('button').style = "background-color:" + color[0] + "; border-color:" + color[0] + ";";
document.getElementById('return').style = "background-color:" + color[0] + "; border-color:" + color[0] + ";";

// 鑑定結果データ
var result_data = new Array(2);
for (var i = 0; i < 4; i++)
    result_data[i] = new Array(10);

// 吉
result_data[0][0] = "何をやってもうまくいきそうです。積極的に行動しましょう！！";
result_data[0][1] = "仕事がスムーズに捗るでしょう。余裕ができ、困っている人がいた場合は積極的に助けることで、対人運がアップできます。";
result_data[0][2] = "出会い運に恵まれます。通りがかる人に積極的に挨拶したり、イベントなどで積極的に会話をしたり、困っている人をみかけたら積極的に助けてあげましょう。良い関係に発展するでしょう。";
result_data[0][3] = "今まで頑張って来たことが結果になるでしょう。スポーツの大会での活躍や、受験、就活での合格に期待ができそうです。";
result_data[0][4] = "対人運がアップできそうです。上司や友人からの飲み会やイベントの誘いを積極的にうけてください。新たな出会いに期待できそうです。";
result_data[0][5] = "今まで溜め込んでいた悩みが解消できそうです。些細なことでも身近な人に相談してみてください。";
result_data[0][6] = "外出することであらゆるアイディアが浮かぶでしょう。ドライブやショッピングに出かけると吉です。";
result_data[0][7] = "神社でお参りすることであらゆる運気がアップしそうです。とりあえず1日のスタートに神社へ行きましょう。";

// 凶
result_data[1][0] = "何をやってもうまくいかない１日となりそうです。仕事や作業でうまくいかない場合は、失敗する前にとにかく助けを求めてください。また、お出かけの際はあらゆるところに注意を払い、転倒や交通事故に遭わないように心がけましょう。";
result_data[1][1] = "不注意が原因で特に仕事でのミスが目立ちそうな１日となりそうです。ミスをしそうになったりした場合には、とにかく気持ちを落ち着かせる工夫をして下さい。";
result_data[1][2] = "不注意による事故に注意が必要です。お出かけの際はあらゆるところの目視チェックを徹底してください。";
result_data[1][3] = "対人運がダウンしそうです。調子が良い時こそ注意が必要です。特に仕事では調子のままにこなすと嫉妬の原因となりそうです。なんでも程々な言動に留めましょう。";
result_data[1][4] = "ウィンドウショッピングに出かけるとついつい高価なものを買ってしまいそうです。お金の使い過ぎに注意しましょう。";
result_data[1][5] = "疲れがたまりやすいでしょう。無理のしすぎには注してください。体調不良や怪我などの原因になります。";
result_data[1][6] = "ストレスにより暴飲暴食してしまいそうです。趣味などでストレスを発散させるように心がけましょう。";

