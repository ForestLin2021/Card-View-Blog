function onheart1(){
    console.log(document.getElementById("heart1").name);
    heart_status = document.getElementById("heart1").name;
    like_number = parseInt(document.getElementById("blog1-like").innerHTML);

    if (heart_status === 'heart-dislike-outline') {
        heart_status = 'heart-outline';
        like_number += 1;
    }else{
        heart_status = 'heart-dislike-outline';
        like_number -= 1;
    }

    document.getElementById("heart1").name = heart_status;
    document.getElementById("blog1-like").innerHTML = like_number;
}

function onheart2(){
    console.log(document.getElementById("heart2").name);
    heart_status = document.getElementById("heart2").name;
    like_number = parseInt(document.getElementById("blog2-like").innerHTML);


    if (heart_status === 'heart-dislike-outline') {
        heart_status = 'heart-outline';
        like_number += 1;
    }else{
        heart_status = 'heart-dislike-outline';
        like_number -= 1;
    }

    document.getElementById("heart2").name = heart_status;
    document.getElementById("blog2-like").innerHTML = like_number;

}

function onheart3(){
    console.log(document.getElementById("heart3").name);
    heart_status = document.getElementById("heart3").name;
    like_number = parseInt(document.getElementById("blog3-like").innerHTML);


    if (heart_status === 'heart-dislike-outline') {
        heart_status = 'heart-outline';
        like_number += 1;
    }else{
        heart_status = 'heart-dislike-outline';
        like_number -= 1;
    }

    document.getElementById("heart3").name = heart_status;
    document.getElementById("blog3-like").innerHTML = like_number;

}