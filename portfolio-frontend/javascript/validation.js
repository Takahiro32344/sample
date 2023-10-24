/*         バリデーション          */

function validation() {
    var check = new Array(2);
    check[0] = 0;
    check[1] = 0;

    regex = /^[ぁ-ん]+$/u;

    if (document.getElementById('family_name').value == "" || document.getElementById('family_name').value == "姓が未入力です") {
        document.getElementById('family_name').value = "姓が未入力です";
        document.getElementById('family_name').style = "color: red;";
        check[0] = 0;
    } else {
        if (regex.test(document.getElementById('family_name').value)) {
            check[0] = 1;
            document.getElementById('family_name').style = "color: black;";
        } else {
            document.getElementById('family_name').value = "姓をひらがなで入力してください";
            document.getElementById('family_name').style = "color: red;";
            check[0] = 0;
        }
    }

    if (document.getElementById('name').value == "" || document.getElementById('name').value == "名が未入力です") {
        document.getElementById('name').value = "名が未入力です";
        document.getElementById('name').style = "color: red;";
        check[1] = 0;
    } else {
        if (regex.test(document.getElementById('name').value)) {
            check[1] = 1;
            document.getElementById('name').style = "color: black;";
        } else {
            document.getElementById('name').value = "名をひらがなで入力してください";
            document.getElementById('name').style = "color: red;";
            check[1] = 0;
        }
    }

    if (check[0] == 1 && check[1] == 1)
        return 1;
    else
        return 0;
}