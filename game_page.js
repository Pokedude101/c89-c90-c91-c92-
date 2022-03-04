Name_1 = localStorage.getItem("Name_1")
Name_2 = localStorage.getItem("Name_2")
player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = Name_1 + ": ";
document.getElementById("player_2_name").innerHTML = Name_2 + ": ";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn is for " + Name_1;
document.getElementById("player_answer").innerHTML = "Answer Turn is for " + Name_2;

function send(){
    get_word = document.getElementById("question").value;
    word = get_word.toLowerCase();
    console.log("Question word is " + word);

    letter1 = word.charAt(1);
    console.log("First letter taken out is " + letter1);

    splitword = Math.floor(word.length/2);
    letter2 = word.charAt(splitword);
    console.log("Second letter taken out is " + letter2);

    minusword = word.length-1;
    letter3 = word.charAt(minusword);
    console.log("Third letter taken out is " + letter3);

    replacel1 = word.replace(letter1, "_");
    replacel2 = replacel1.replace(letter2, "_");
    replacel3 = replacel2.replace(letter3, "_");
    console.log(replacel3);

    question_word = "<h4 id='word_display'> Q. " + replacel3 + "</h4>"
    input_box = "<br>Answer: <input id='input_check_box' type='text'>"
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    player_answer = get_answer.toLowerCase();
    if(player_answer == word){
        if(answer_turn == "player_1"){
            player_1_score = player_1_score + 1;
            document.getElementById("player_1_score").innerHTML = player_1_score;
        }

        else{
            player_2_score = player_2_score + 1;
            document.getElementById("player_2_score").innerHTML = player_2_score;
        }
    }

    if(question_turn == "player_1"){

        question_turn = "player_2"; 
        document.getElementById("player_question").innerHTML = "Question turn is for " + Name_2;
    }
    else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question turn is for " + Name_1;
    }

    if(answer_turn == "player_1"){
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer turn is for " + Name_2;
    }
    else{
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer turn is for " + Name_1;
    }

    document.getElementById("output").innerHTML = ""  
}


