/*           星座占い           */

function result_constellation() {
    var date = new Date();

    document.getElementById('result').innerText = document.getElementById('constellation').value;
    switch (document.getElementById('constellation').value) {
        case "おとめ座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                }
            }
            break;
        case "おうし座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                }
            }
            break;
        case "おひつじ座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                }
            }
            break;
        case "みずがめ座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                }
            }
            break;
        case "ふたご座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                }
            }
            break;
        case "かに座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][2];
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
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                }
            }
            break;
        case "しし座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                }
            }
            break;
        case "さそり座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                }
            }
            break;
        case "やぎ座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][3];
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
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                }
            }
            break;
        case "うお座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                }
            }
            break;
        case "いて座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][0];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                }
            }
            break;
        case "てんびん座":
            if (date.getDate() >= 1 && date.getDate() <= 10) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][0];
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
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][2];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                }
            } else if (date.getDate() >= 11 && date.getDate() <= 20) {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][6];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][3];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[1][4];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[1][5];
                        break;
                }
            } else {
                switch (date.getDate() % 10) {
                    case 0:
                        document.getElementById('result_text').innerText = result_data[1][3];
                        break;
                    case 1:
                        document.getElementById('result_text').innerText = result_data[0][5];
                        break;
                    case 2:
                        document.getElementById('result_text').innerText = result_data[0][4];
                        break;
                    case 3:
                        document.getElementById('result_text').innerText = result_data[1][0];
                        break;
                    case 4:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 5:
                        document.getElementById('result_text').innerText = result_data[1][2];
                        break;
                    case 6:
                        document.getElementById('result_text').innerText = result_data[0][7];
                        break;
                    case 7:
                        document.getElementById('result_text').innerText = result_data[0][6];
                        break;
                    case 8:
                        document.getElementById('result_text').innerText = result_data[1][1];
                        break;
                    case 9:
                        document.getElementById('result_text').innerText = result_data[0][1];
                        break;
                }
            }
            break;
    }
}

