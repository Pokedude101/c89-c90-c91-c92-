var name1 = "";
var name2 = "";

function startgame(){
    name1 = document.getElementById("player_1_name_ti").value;
    name2 = document.getElementById("player_2_name_ti").value;

    localStorage.setItem("Name_1", name1);
    localStorage.setItem("Name_2", name2);

    window.location = "game_page.html";
}