

var userPick;

        var correctAnswer = 0;

        var incorrectAnswer = 0;

        var unAnswer = 0;

        var question = 0;

        var images;

        var count = 30;

        var birdQuestion = [{
            question: "Which Atlanta Falcons Quarterback Did Not In A Play NF Championship Game?",
            choices: ["Matt Ryan", "Steve Bartkowski", "Michael Vick"],
            images: ["..http://gph.is/2j4KIry"],
            correct: 1
        }, {
            question: "What Year Did The Atlanta Falcons Join The NFL?",
            choices: ["1956", "1974", "1966", "1960"],
            correct: 2

        }, {
            question: "What Jersey Number Did Deion Sanders Wear As A Falcon?",
            choices: ["23", "45", "21"],
            correct: 2

        }, {
            question: "In 1998 What Touchdown Dance Did The Falcons Make Famous?",
            choices: ["Icky Shuffle", "The Dirty Bird", "Prime Time Shuffle"],
            correct: 1

        }, {
            question: "What Is The Name Of The Famed Falcons Defense of the 1970's?",
            choices: ["Orange Crush", "Steel Curtain", "Gritz Blitz"],
            correct: 2

        }, {
            question: "How Many Times Have The Falcons Gone To The Super Bowl?",
            choices: [" 2 ", " 4 ", " 0 "],
            correct: 0

        }, {
            question: "What Team Is Falcons' Main Rival?",
            choices: ["Cowboys", "Saints", "Panthers"],
            correct: 1

        }, {
            question: "Who Is The Current Leading Receiver For The Falcons?",
            choices: ["Michael Haynes", "Terrence Mathis", "Julio Jones"],
            correct: 2
        }];

        $("#start_button").click(function() {
            $(this).hide();
            counter = setInterval(timer, 1000);
            displayTrivia();
        });


        function timer() {
            count--;
            if (count <= 0) {
                clearInterval(counter);
                return;
            }

            $("#timer").html("Time remaining: " + "00:" + count + " secs");
        }


        function displayTrivia() {
            $("#question_div").html(birdQuestion[0].question);
            question++;

            var choicesArr = birdQuestion[0].choices;
            var buttonsArr = [];

            for (let i = 0; i < choicesArr.length; i++) {
                var button = $('<button>');
                button.text(choicesArr[i]);
                button.attr('data-id', i);
                $('#choices_div').append(button);
            }

        }

        $('#choices_div').on('click', 'button', function(result) {
            userPick = $(this).data("id");
            birdQuestion[0].validAnswer;
            if (userPick != birdQuestion[0].validAnswer) {

                $('#choices_div').text("Wrong Answer! The correct answer is Steve Bartkowski.");
                incorrectAnswer++;

            } else if (userPick === birdQuestion[0].validAnswer) {
                $('#choices_div').text("Correct!!! The correct answer is Steve Bartkowski.");
                correctAnswer++;

            }

        });


        $.fn.trivia = function() {
            var bird = this;
            bird.userPick = null;
            bird.answers = {
                correct: 0,
                incorrect: 0
            };
            bird.count = 30;
            bird.current = 0;
            bird.questions = [{
                question: "Which Atlanta Falcons Quarterback Did Not Play In NFC Championship Game?",
                choices: ["Matt Ryan", "Steve Bartkowski", "Michael Vick"],
                correct: 1
            }, {
                question: "What Year Did The Atlanta Falcons Join The NFL?",
                choices: ["1956", "1974", "1966", "1960"],
                correct: 2

            }, {
                question: "What Jersey Number Did Deion Sanders Wear As A Falcon?",
                choices: ["23", "45", "21", "1"],
                correct: 2

            }, {
                question: "In 1998 What Touchdown Dance Did The Falcons Make Famous?",
                choices: ["Icky Shuffle", "The Dirty Bird", "Prime Time Shuffle", "Bird Walk"],
                correct: 1

            }, {
                question: "What Is The Name Of The Famed Falcons Defense of the 1970's?",
                choices: ["Orange Crush", "Steel Curtain", "Gritz Blitz", "Legion of Boom"],
                correct: 2

            }, {
                question: "How Many Times Have The Falcons Gone To The Super Bowl?",
                choices: [" 2 ", " 4 ", " 0 ", "1"],
                correct: 0

            }, {
                question: "What Team Is Falcons' Main Rival?",
                choices: ["Cowboys", "Saints", "Panthers", "Patriots"],
                correct: 1
            }, {
                question: "Which Receiver Played For The Falcons in the 1980's?",
                choices: ["Michael Haynes", "Terrence Mathis", "Julio Jones", "Billy 'White Shoes' Johnson"],
                correct: 3

            }, {
                question: "Who Is The Current Leading Receiver For The Falcons?",
                choices: ["Michael Haynes", "Terrence Mathis", "Julio Jones", "Billy 'White Shoes' Johnson"],
                correct: 2
            }];
            bird.ask = function() {
                if (bird.questions[bird.current]) {
                    $("#timer").html("Time remaining: " + "00:" + bird.count + " secs");
                    $("#question_div").html(bird.questions[bird.current].question);
                    var choicesArr = bird.questions[bird.current].choices;
                    var buttonsArr = [];

                    for (var i = 0; i < choicesArr.length; i++) {
                        var button = $('<button>');
                        button.text(choicesArr[i]);
                        button.attr('data-id', i);
                        $('#choices_div').append(button);
                    }
                    window.triviaCounter = setInterval(bird.timer, 1000);
                } else {
                    $('body').append($('<div />', {
                        text: 'Unanswered: ' + (
                            bird.questions.length - (bird.answers.correct + bird.answers.incorrect)),
                        class: 'result'
                    }));
                    $('#start_button').text('Restart').appendTo('body').show();
                }
            };
            bird.timer = function() {
                bird.count--;
                if (bird.count <= 0) {
                    setTimeout(function() {
                        bird.nextQ();
                    });

                } else {
                    $("#timer").html("Time remaining: " + "00:" + bird.count + " secs");
                }
            };
            bird.nextQ = function() {
                bird.current++;
                clearInterval(window.triviaCounter);
                bird.count = 30;
                $('#timer').html("");
                setTimeout(function() {
                    bird.cleanUp();
                    bird.ask();
                }, 1000)
            };
            bird.cleanUp = function() {
                $('div[id]').each(function(item) {
                    $(this).html('');
                });
                $('.correct').html('Correct answers: ' + bird.answers.correct);
                $('.incorrect').html('Incorrect answers: ' + bird.answers.incorrect);
            };
            bird.answer = function(correct) {
                var string = correct ? 'correct' : 'incorrect';
                bird.answers[string] ++;
                $('.' + string).html(string + ' answers: ' + bird.answers[string]);
            };
            return bird;
        };
        var Trivia;

        $("#start_button").click(function() {
            $(this).hide();
            $('.result').remove();
            $('div').html('');
            Trivia = new $(window).trivia();
            Trivia.ask();
        });

        $('#choices_div').on('click', 'button', function(e) {
            var userPick = $(this).data("id"),
                bird = Trivia || $(window).trivia(),
                index = bird.questions[bird.current].correct,
                correct = bird.questions[bird.current].choices[index];

            if (userPick !== index) {
                $('#choices_div').text("Wrong Answer! The correct answer was: " + correct);
                bird.answer(false);
            } else {
                $('#choices_div').text("Correct!!! The correct answer was: " + correct);
                bird.answer(true);
            }
            bird.nextQ();
        });