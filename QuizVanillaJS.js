//$(document).ready(function () {
    
//    jQuery.extend({
//        percentage: function (a, b) {
//            return Math.round((a / b) * 100);
//        }
//    });
//    var questions = [{
//        question: 'What is my name?',
//        answer1: 'Brian',
//        answer2: 'Kristi',
//        correctAnswer: '1'
//    },
//    {
//        question: 'What is your name?',
//        answer1: 'Riko',
//        answer2: 'Boots',
//        correctAnswer: '2'
//    }];

//    var quiz = function (ques) {

//        var counter = 1, qCounter = 0, correctAnswers = 0, questionBox = $('#question'), ansOne = $('label[for="ansOne"]'), ansTwo = $('label[for="ansTwo"]'), section = $('section > h2'), q = $('.qq'), currentTotal = $('#currentTotal'), questions = ques;

//        $('#enter').on('click', function () {
//            var selectedValue = $("input[type='radio'][name='quiz']:checked").val();
//            submit(selectedValue);
//        });
//        var init = function () {
//            ansOne.append(questions[qCounter].answer1);
//            ansTwo.append(questions[qCounter].answer2);
//            questionBox.html('Question ' + counter + " :" + questions[qCounter].question);
//        };

//        var submit = function (selectedValue) {

//            if (selectedValue === questions[qCounter].correctAnswer) {
//                alert('Correct Answer!');
//                correctAnswers++;

//            }
//            else {
//                alert('Wrong Answer!');
//            }
//            if (counter < questions.length) {
//                counter++;
//                qCounter++;
//            }
//            else {
//                qCounter++;
//                complete();
//            }
//            currentTotal.empty(); 
//            next();
//        };
//        var next = function () {
//            section.empty(); 
//            q.empty();
//            currentTotal.append('Current Percent: ' + $.percentage(correctAnswers, qCounter) + '%');
//            init();
//        };
//        var complete = function () {
//            $('#quizSection').empty();
//            $('#score').html('You answered ' + correctAnswers + ' out of ' + questions.length + ' questions correctly!');
//        };
//        return { init: init };
//    }(questions);

//    quiz.init();
//});


//$(document).ready(function () {

//    jQuery.extend({
//        percentage: function (a, b) {
//            return Math.round((a / b) * 100);
//        }
//    });

//    var questions = [{
//        question: 'What is my name?',
//        answer1: 'Brian',
//        answer2: 'Kristi',
//        correctAnswer: '1'
//    },
//    {
//        question: 'What is your name?',
//        answer1: 'Riko',
//        answer2: 'Boots',
//        correctAnswer: '2'
//    }];

//    var Quiz = function (ques) {
//        //variables here
//        this.counter = 1;
//        this.qCounter = 0;
//        this.correctAnswers = 0;
//        this.questionBox = $('#question');
//        this.ansOne = $('label[for="ansOne"]');
//        this.ansTwo = $('label[for="ansTwo"]');
//        this.section = $('section > h2');
//        this.q = $('.qq');
//        this.currentTotal = $('#currentTotal');
//        this.questions = ques;

//    };

//    Quiz.prototype = function () {

//        $('#enter').on('click', function() {
//            var selectedValue = $("input[type='radio'][name='quiz']:checked").val();
//            this.submit.call(this,selectedValue);
//        });
//        //functions defined here
//                    var init = function () {
//                        this.ansOne.append(questions[qCounter].answer1);
//                        this.ansTwo.append(questions[qCounter].answer2);
//                        this.questionBox.html('Question ' + counter + " :" + questions[qCounter].question);
//                    };

//                    var submit = function (obj,selectedValue) {

//                        if (selectedValue === this.questions[qCounter].correctAnswer) {
//                            alert('Correct Answer!');
//                            this.correctAnswers++;
                            

//                        }
//                        else {
//                            alert('Wrong Answer!');
//                        }
//                        if (this.counter < this.questions.length) {
//                            this.counter++;
//                            this.qCounter++;
//                        }
//                        else {
//                            this.qCounter++;
//                            this.call.complete(this);
//                        }
//                        this.currentTotal.empty(); this.next();
//                    };
//                    var next = function () {
//                        this.section.empty(); this.q.empty();
//                        this.currentTotal.append('Current Percent: ' + $.percentage(this.correctAnswers, this.qCounter) + '%');
//                        this.init.call(this);
//                    };
//                    var complete = function (obj) {
//                        $('#quizSection').empty();
//                        $('#score').html('You answered ' + this.correctAnswers + ' out of ' + this.questions.length + ' questions correctly!');
//                    };
//                    return { init: init };

        

//    }();

//    var q = new Quiz(questions);
//    q.init();

$(document).ready(function () {
    
    var questions = [{
        question: 'What is my name?',
        answer1: 'Brian',
        answer2: 'Kristi',
        correctAnswer: '1'
    },
    {
        question: 'What is your name?',
        answer1: 'Riko',
        answer2: 'Boots',
        correctAnswer: '2'
    }];

    var quiz = function (ques) {

        var counter = 1,
            qCounter = 0,
            correctAnswers = 0,
            questionBox = document.getElementById('question'),
            ansOne = document.getElementById('labelOne'),
            ansTwo = document.getElementById('labelTwo'),
            section = $('section > h2'),
            q = document.getElementsByClassName('qq'),
            currentTotal = document.getElementById('currentTotal'),
            questions = ques,
            subButton = document.getElementById('enter');

        subButton.addEventListener('click', function() {
            var radios = document.getElementsByTagName('input');
            var selectedValue;
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].type === 'radio' && radios[i].checked) {                 
                    selectedValue = radios[i].value;
                    submit(selectedValue);
                }                
            }
        });
        function percentage(a, b) {
            return Math.round((a / b) * 100);
        }

        ;       
        var init = function () {
            ansOne.innerHTML = questions[qCounter].answer1;
            ansTwo.innerHTML = questions[qCounter].answer2;
            questionBox.innerHTML = 'Question ' + counter + " :" + questions[qCounter].question;
        };
        var submit = function (selectedValue) {

            if (selectedValue === questions[qCounter].correctAnswer) {
                alert('Correct Answer!');
                correctAnswers++;
            }
            else {
                alert('Wrong Answer!');
            }
            if (counter < questions.length) {
                counter++;
                qCounter++;
            }
            else {
                qCounter++;
                complete();
            }
            currentTotal.innerHTML = "";
            next();
        };
        var next = function () {
            section.innerHTML = '';
            q.innerHtml = '';
            currentTotal.innerHTML = 'Current Percent: ' + percentage(correctAnswers, qCounter) + '%';
            init();
        };
        var complete = function () {
            document.getElementById('quizSection').innerHTML= "";
            document.getElementById('score').innerHTML= 'You answered ' + correctAnswers + ' out of ' + questions.length + ' questions correctly!'; 
        };
        return { init: init };
    }(questions);

    quiz.init();
});
