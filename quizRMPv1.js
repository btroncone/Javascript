/// <reference path="Scripts/jquery-2.0.3.intellisense.js" />
/// <reference path="Scripts/jquery-2.0.3.js" />
$(document).ready(function () {

    jQuery.extend({
        percentage: function (a, b) {
            return Math.round((a / b) * 100);
        }
    });
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

        var counter = 1, qCounter = 0, correctAnswers = 0, questionBox = $('#question'), 
        ansOne = $('label[for="ansOne"]'), ansTwo = $('label[for="ansTwo"]'), section = $('section > h2'), 
        q = $('.qq'), currentTotal = $('#currentTotal'), questions = ques;

        $('#enter').on('click', function () {
            var selectedValue = $("input[type='radio'][name='quiz']:checked").val();
            submit(selectedValue);
        });
        var init = function () {
            ansOne.append(questions[qCounter].answer1);
            ansTwo.append(questions[qCounter].answer2);
            questionBox.html('Question ' + counter + " :" + questions[qCounter].question);
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
            currentTotal.empty(); next();
        };
        var next = function () {
            section.empty(); q.empty();
            currentTotal.append('Current Percent: ' + $.percentage(correctAnswers, qCounter) + '%');
            init();
        };
        var complete = function () {
            $('#quizSection').empty();
            $('#score').html('You answered ' + correctAnswers + ' out of ' + questions.length + ' questions correctly!');
        };
        return { init: init };
    }(questions);

    quiz.init();
});
