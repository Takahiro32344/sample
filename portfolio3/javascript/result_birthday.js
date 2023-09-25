/*          誕生日占い          */

function result_birthday() {
    var date = new Date();

    document.getElementById('result').innerText = document.getElementById('birth_year').value + "年" + document.getElementById('birth_month').value + "月" + document.getElementById('birth_day').value + "日";

    if (parseInt(document.getElementById('birth_year').value) % 2 == 0) {
        if (parseInt(document.getElementById('birth_month').value) % 2 == 0) {
            if (parseInt(document.getElementById('birth_day').value) % 2 == 0) {
                switch (date.getDate() % 15) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 10:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 11:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 12:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 13:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 14:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                }
            } else {
                switch (date.getDate() % 15) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 10:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 11:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 12:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 13:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 14:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                }
            }
        } else {
            if (parseInt(document.getElementById('birth_day').value) % 2 == 1) {
                switch (date.getDate() % 15) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 10:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 11:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 12:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 13:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 14:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                }
            } else {
                switch (date.getDate() % 15) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 10:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 11:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 12:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 13:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 14:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                }
            }
        }
    } else {
        if (parseInt(document.getElementById('birth_month').value) % 2 == 0) {
            if (parseInt(document.getElementById('birth_day').value) % 2 == 0) {
                switch (date.getDate() % 15) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 10:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 11:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 12:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 13:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 14:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                }
            } else {
                switch (date.getDate() % 15) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 10:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 11:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 12:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 13:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 14:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                }
            }
        } else {
            if (parseInt(document.getElementById('birth_day').value) % 2 == 1) {
                switch (date.getDate() % 15) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 10:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 11:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 12:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 13:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 14:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                }
            } else {
                switch (date.getDate() % 16) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 10:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 11:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 12:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 13:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 14:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 15:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                }
            }
        }
    }
}