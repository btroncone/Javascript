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
