//import { on } from "cluster";


$(document).ready(function() {
//listen user clicking a button

    let userScore = 0;

    $('form').on('submit', function(e) {
        e.preventDefault();
        console.log(`${e} clicked`);
    
// read the users answer
        let usersAnswer = $(this).children();
        console.log(usersAnswer);

// change the clicked button's color
        $(usersAnswer).addClass("answer-clicked");

//show the answer
        $(this).siblings().removeClass("before-click")

//if the answer is right, +1 to the score
        
        rightAnswer = usersAnswer.attr('name');
        console.log(rightAnswer);
        
        if (rightAnswer === "right") {
            userScore = userScore + 1;
            };
        console.log(userScore);

//when the quizz is finished, show the result
    
        let score = function () {
            let winningScore = $('div').find('.result-right');
            let loserScore = $('div').find('.result-wrong');
            if (userScore >= 3) {
                winningScore.addClass("final-score");
                loserScore.removeClass("final-score");
                
            } else if (userScore <3) {
                winningScore.removeClass("final-score");
                loserScore.addClass("final-score");
            }
        }
        score();
        console.log(score)
    })
//hide the input/email and input/submit after btn-email clicked
    $('.btn-email').click('submit', function(e) {
        e.preventDefault();
        console.log(`${e} clicked2`);
//reset the input to an empty string
        $('#email').val('');
//show a thank you message after hide the items
        alert("Thank you for subscribing!");
    })

    
})