$(document).ready(function() {
        //Array of answers

        function startGame() {
            startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block startBtn' href='#' role='button'>Start Quiz</a></p>";
            $(".main").html(startScreen);
        }
        startGame();

        $(".main").on("click", ".startBtn", function(event) {
            showQuestions();
            questionTiming();
            $(".startBtn").hide();  
            // timeWrapper()
            // timeCounter();
        });

        $("button").on("click",function(event){
            userAnswer = $(this).text();
            if(userAnswer === rightAnswers[questionNo]){
                clearInterval(stopwatcher);
                win();
                // alert("Correct!");
                // clearInterval(stopwatcher);
            }
            else{
                clearInterval(stopwatcher);
                lose();
                // alert("Err");

            }
        });


        function showQuestions() {   
            $(".question").html(questionsArr[questionNo]);
            $("#btn0").html(answersArr[questionNo][0]);
            $("#btn1").html(answersArr[questionNo][1]);
            $("#btn2").html(answersArr[questionNo][2]);
            $("#btn3").html(answersArr[questionNo][3]);
            
          
        };

        
        function win(){
            corrects++
            $(".main").html("<h3 class='text-center'>Correct! The answer is:</h3>" + "<h3 class='text-center'>" +rightAnswers[questionNo] + "</h3>" + "<h3>" + imageArr[questionNo]);
            setTimeout(timeWait, 3000); 

                // "<p class='text-center'>Correct! The answer is: " + rightAnswers[0]) + "<p>" + imageArr[0];
        };

        function lose(){
            incorrects++
            $(".main").html("<h3 class='text-center'>Sorry, the correct answer is: </h3>" + "<h3 class='text-center'>" + rightAnswers[questionNo] + "</h3>");
            setTimeout(timeWait, 3000); 
        }

        function timeout(){
            unanswered++
            $(".main").html("<h3 class='text-center'>Timeout!, the correct answer is: </h3>" + "<h3 class='text-center'>" + rightAnswers[questionNo] + "</h3>");
            setTimeout(timeWait, 3000); 

        }

        function timeWait(){
            if(questionNo < 7){
                questionNo++;
                showQuestions();
                timeCounter = 30;
                questionTiming();
            }
            else{
                finalScore();
            }

        }

        function questionTiming(){
            stopwatcher = setInterval(timeQ, 1000);
            function timeQ(){

                if(timeCounter === 0){
                    clearInterval(stopwatcher);
                    timeout();
                }
                if(timeCounter > 0){
                    timeCounter--;
                }
                
                $(".timer").html(timeCounter);
            }


        }

        function finalScore(){
            $("#instruction").hide();
            $(".question").hide();
            if(corrects > incorrects){
                $(".bottons").html("<h3 class='text-center'>Well done! Your score is: </h3>" + "<h4 class='text-center'>Corrects: " + corrects + "<h4 class='text-center'>Incorrects: " + incorrects + "<h4 class='text-center'>Unansered: " + unanswered);
            }
            else{
                $(".bottons").html("<h3 class='text-center'>Keep Trying! Your score is: </h3>" + "<h4 class='text-center'>Corrects: " + corrects + "<h4 class='text-center'>Incorrects: " + incorrects + "<h4 class='text-center'>Unansered: " + unanswered);
            }
        }


       });
 


        var startScreen
        var answersDisplay = [];
        //Question targeted
        var questionDisplay = [];
        //Selected answer by user
        var userAnswer
        // count the 30 secs
        var timeCounter = 30
        var stopwatcher
        //will count the question in place
        var questionNo = 0
        //score variables
        var corrects = 0
        var incorrects = 0
        var unanswered = 0

        //Array of questions and answers
        var questionsArr = ["Bonjour", "Konnichiwa", "Buon Giorno", "Buenos dias", "Guten tag",
            "Marhaba", "Ni Hau", "Zdras-Tvuy-Te"
        ];


        var answersArr = [
            ["Japan", "Germany", "France", "Mexico"],
            ["Italy", "Japan", "Mexico", "China"],
            ["Italy", "Japan", "Mexico", "Russia"],
            ["Mexico", "France", "United States", "Saudi Arabia"],
            ["Russia", "France", "Germany", "Saudi Arabia"],
            ["Saudi Arabia", "France", "Germany", "Italy"],
            ["Russia", "China", "Germany", "Japan"],
            ["China", "France", "Russia", "Russia"]
        ];

        var rightAnswers = ["France", "Japan", "Italy", "Mexico", "Germany", "Saudi Arabia", "China", "Russia"];

        var imageArr = ["<img class='center-block img-right' src='assets/images/france.jpg' width='22%'>", "<img class='center-block img-right' src='assets/images/japan.jpg' width=22%>", "<img class='center-block img-right' src='assets/images/italy.jpg' width=22%>", "<img class='center-block img-right' src='assets/images/mexico.jpg' width=22%>", "<img class='center-block img-right' src='assets/images/germany.jpg' width=22%>", "<img class='center-block img-right' src='assets/images/saudi.jpg' width=22%>", "<img class='center-block img-right' src='assets/images/china.jpg' width=22%>", "<img class='center-block img-right' src='assets/images/russia.jpg' width=22%>"];

