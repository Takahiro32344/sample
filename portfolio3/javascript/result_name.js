/*           名前占い            */

function result_name() {
    var date = new Date();

    document.getElementById('result').innerText = document.getElementById('family_name').value + " " + document.getElementById('name').value;
    if (document.getElementById('family_name').value.charAt(0) >= 'あ' && document.getElementById('family_name').value.charAt(0) <= 'お' ||
        document.getElementById('family_name').value.charAt(0) >= 'さ' && document.getElementById('family_name').value.charAt(0) <= 'そ' ||
        document.getElementById('family_name').value.charAt(0) >= 'な' && document.getElementById('family_name').value.charAt(0) <= 'の') {
        if (document.getElementById('name').value.charAt(0) >= 'あ' && document.getElementById('name').value.charAt(0) <= 'そ') {
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
        } else if (document.getElementById('name').value.charAt(0) >= 'た' && document.getElementById('name').value.charAt(0) <= 'ほ') {
            switch (date.getDate() % 16) {
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
                    document.getElementById('result_text').innerText = result_data[1][1];
                    break;
                case 15:
                    document.getElementById('result_text').innerText = result_data[0][0];
                    break;
            }
        } else if (document.getElementById('name').value.charAt(0) >= 'ま' && document.getElementById('name').value.charAt(0) <= 'も' ||
            document.getElementById('name').value.charAt(0) >= 'ら' && document.getElementById('name').value.charAt(0) <= 'ろ') {
            switch (date.getDate() % 15) {
                case 0:
                    document.getElementById('result_text').innerText = result_data[0][1];
                    break;
                case 1:
                    document.getElementById('result_text').innerText = result_data[0][2];
                    break;
                case 2:
                    document.getElementById('result_text').innerText = result_data[1][1];
                    break;
                case 3:
                    document.getElementById('result_text').innerText = result_data[1][2];
                    break;
                case 4:
                    document.getElementById('result_text').innerText = result_data[0][3];
                    break;
                case 5:
                    document.getElementById('result_text').innerText = result_data[0][4];
                    break;
                case 6:
                    document.getElementById('result_text').innerText = result_data[1][3];
                    break;
                case 7:
                    document.getElementById('result_text').innerText = result_data[1][4];
                    break;
                case 8:
                    document.getElementById('result_text').innerText = result_data[0][5];
                    break;
                case 9:
                    document.getElementById('result_text').innerText = result_data[0][6];
                    break;
                case 10:
                    document.getElementById('result_text').innerText = result_data[1][5];
                    break;
                case 11:
                    document.getElementById('result_text').innerText = result_data[1][6];
                    break;
                case 12:
                    document.getElementById('result_text').innerText = result_data[0][7];
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
                    document.getElementById('result_text').innerText = result_data[1][1];
                    break;
                case 1:
                    document.getElementById('result_text').innerText = result_data[1][2];
                    break;
                case 2:
                    document.getElementById('result_text').innerText = result_data[0][1];
                    break;
                case 3:
                    document.getElementById('result_text').innerText = result_data[0][2];
                    break;
                case 4:
                    document.getElementById('result_text').innerText = result_data[1][3];
                    break;
                case 5:
                    document.getElementById('result_text').innerText = result_data[1][4];
                    break;
                case 6:
                    document.getElementById('result_text').innerText = result_data[0][3];
                    break;
                case 7:
                    document.getElementById('result_text').innerText = result_data[0][4];
                    break;
                case 8:
                    document.getElementById('result_text').innerText = result_data[1][5];
                    break;
                case 9:
                    document.getElementById('result_text').innerText = result_data[1][6];
                    break;
                case 10:
                    document.getElementById('result_text').innerText = result_data[0][5];
                    break;
                case 11:
                    document.getElementById('result_text').innerText = result_data[0][6];
                    break;
                case 12:
                    document.getElementById('result_text').innerText = result_data[1][0];
                    break;
                case 13:
                    document.getElementById('result_text').innerText = result_data[1][1];
                    break;
                case 14:
                    document.getElementById('result_text').innerText = result_data[0][7];
                    break;
                case 15:
                    document.getElementById('result_text').innerText = result_data[0][0];
                    break;
            }
        }
    } else if (document.getElementById('family_name').value.charAt(0) >= 'か' && document.getElementById('family_name').value.charAt(0) <= 'こ' ||
        document.getElementById('family_name').value.charAt(0) >= 'た' && document.getElementById('family_name').value.charAt(0) <= 'と' ||
        document.getElementById('family_name').value.charAt(0) >= 'は' && document.getElementById('family_name').value.charAt(0) <= 'ほ') {
        if (document.getElementById('name').value.charAt(0) >= 'あ' && document.getElementById('name').value.charAt(0) <= 'そ') {
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
        } else if (document.getElementById('name').value.charAt(0) >= 'た' && document.getElementById('name').value.charAt(0) <= 'ほ') {
            switch (date.getDate() % 16) {
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
                    document.getElementById('result_text').innerText = result_data[1][1];
                    break;
                case 15:
                    document.getElementById('result_text').innerText = result_data[0][7];
                    break;
            }
        } else if (document.getElementById('name').value.charAt(0) >= 'ま' && document.getElementById('name').value.charAt(0) <= 'も' ||
            document.getElementById('name').value.charAt(0) >= 'ら' && document.getElementById('name').value.charAt(0) <= 'ろ') {
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
    } else if (document.getElementById('family_name').value.charAt(0) >= 'ま' && document.getElementById('family_name').value.charAt(0) <= 'も' ||
        document.getElementById('family_name').value.charAt(0) >= 'や' && document.getElementById('family_name').value.charAt(0) <= 'よ' ||
        document.getElementById('family_name').value.charAt(0) >= 'ら' && document.getElementById('family_name').value.charAt(0) <= 'ろ') {
        if (document.getElementById('name').value.charAt(0) >= 'あ' && document.getElementById('name').value.charAt(0) <= 'そ') {
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
        } else if (document.getElementById('name').value.charAt(0) >= 'た' && document.getElementById('name').value.charAt(0) <= 'ほ') {
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
        } else if (document.getElementById('name').value.charAt(0) >= 'ま' && document.getElementById('name').value.charAt(0) <= 'も' ||
            document.getElementById('name').value.charAt(0) >= 'ら' && document.getElementById('name').value.charAt(0) <= 'ろ') {
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
            switch (date.getDate() % 16) {
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
                    document.getElementById('result_text').innerText = result_data[1][1];
                    break;
                case 15:
                    document.getElementById('result_text').innerText = result_data[0][7];
                    break;
            }
        }
    } else {
        if (document.getElementById('name').value.charAt(0) >= 'あ' && document.getElementById('name').value.charAt(0) <= 'そ') {
            switch (date.getDate() % 15) {
                case 0:
                    document.getElementById('result_text').innerText = result_data[1][1];
                    break;
                case 1:
                    document.getElementById('result_text').innerText = result_data[1][2];
                    break;
                case 2:
                    document.getElementById('result_text').innerText = result_data[0][1];
                    break;
                case 3:
                    document.getElementById('result_text').innerText = result_data[0][2];
                    break;
                case 4:
                    document.getElementById('result_text').innerText = result_data[1][3];
                    break;
                case 5:
                    document.getElementById('result_text').innerText = result_data[1][4];
                    break;
                case 6:
                    document.getElementById('result_text').innerText = result_data[0][3];
                    break;
                case 7:
                    document.getElementById('result_text').innerText = result_data[0][4];
                    break;
                case 8:
                    document.getElementById('result_text').innerText = result_data[1][5];
                    break;
                case 9:
                    document.getElementById('result_text').innerText = result_data[1][6];
                    break;
                case 10:
                    document.getElementById('result_text').innerText = result_data[0][5];
                    break;
                case 11:
                    document.getElementById('result_text').innerText = result_data[0][6];
                    break;
                case 12:
                    document.getElementById('result_text').innerText = result_data[1][0];
                    break;
                case 13:
                    document.getElementById('result_text').innerText = result_data[1][1];
                    break;
                case 14:
                    document.getElementById('result_text').innerText = result_data[0][7];
                    break;
            }
        } else if (document.getElementById('name').value.charAt(0) >= 'た' && document.getElementById('name').value.charAt(0) <= 'ほ') {
            switch (date.getDate() % 15) {
                case 0:
                    document.getElementById('result_text').innerText = result_data[0][1];
                    break;
                case 1:
                    document.getElementById('result_text').innerText = result_data[0][2];
                    break;
                case 2:
                    document.getElementById('result_text').innerText = result_data[1][1];
                    break;
                case 3:
                    document.getElementById('result_text').innerText = result_data[1][2];
                    break;
                case 4:
                    document.getElementById('result_text').innerText = result_data[0][3];
                    break;
                case 5:
                    document.getElementById('result_text').innerText = result_data[0][4];
                    break;
                case 6:
                    document.getElementById('result_text').innerText = result_data[1][3];
                    break;
                case 7:
                    document.getElementById('result_text').innerText = result_data[1][4];
                    break;
                case 8:
                    document.getElementById('result_text').innerText = result_data[0][5];
                    break;
                case 9:
                    document.getElementById('result_text').innerText = result_data[0][6];
                    break;
                case 10:
                    document.getElementById('result_text').innerText = result_data[1][5];
                    break;
                case 11:
                    document.getElementById('result_text').innerText = result_data[1][6];
                    break;
                case 12:
                    document.getElementById('result_text').innerText = result_data[0][7];
                    break;
                case 13:
                    document.getElementById('result_text').innerText = result_data[0][0];
                    break;
                case 14:
                    document.getElementById('result_text').innerText = result_data[1][0];
                    break;
            }
        } else if (document.getElementById('name').value.charAt(0) >= 'ま' && document.getElementById('name').value.charAt(0) <= 'も' ||
            document.getElementById('name').value.charAt(0) >= 'ら' && document.getElementById('name').value.charAt(0) <= 'ろ') {
            switch (date.getDate() % 16) {
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
                    document.getElementById('result_text').innerText = result_data[1][1];
                    break;
                case 15:
                    document.getElementById('result_text').innerText = result_data[0][0];
                    break;
            }
        } else {
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
        }
    }
}

