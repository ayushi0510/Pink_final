$(document).ready(function(){
    addQues(quizs);

    $('.btn').on('click', function(){
        var ans = collectAns();
        var score = calculateScore(ans);
        $("#result").css('color','red').text(score);
    })
/*
    $('.ans').change(function(){
        console.log("change event");
        if($(this).value()=="Yes"){
            displaySubQuiz(this);
        }
    }) 
*/   
})

function displaySubQuiz(select){
    select.parent().children($('subquizs')).css('display', '')
}

function addQues(ques){
    ques.forEach(
        function(que){
            addQue(que);
        }
    );
}

function addQue(que){
    var quiz = '<li class="quiz"><select class="ans" name='+que.quiz_no+'>'
    +'<option value=""></option>'
    +'<option value="No">No</option>'
    +'<option value="Yes">Yes</option>'
    +'</select><br>'
    +'<span>'+que.questions+'</span>'

    if (que.sub_questions.length != 0){
        quiz += '<div class="subquizs" style="display: none"><hr>' + addSubQue(que.sub_questions) +'</div>';
    }

    quiz +='<hr>'+'</li>';
    var newQue = $(quiz);
    newQue.data('id', que.quiz_no);
    newQue.data('score', que.score);
    $('#quizContent').append(newQue);
}

function addSubQue(subQues){
    var quiz = "";
    subQues.forEach(function(subque){
         quiz += '<select class="ans" style="padding: 10px" name='+subque.quiz_no+'>'
        +'<option value=""></option>'
        +'<option value="No">No</option>'
        +'<option value="Yes">Yes</option>'
        +'</select><br>'
        +'<span>'+subque.questions+'</span>'+'<br>'
    })
    return quiz;
}

function calculateScore(ans){
    var score=0;
    ans.forEach(function(an){
        score += an;
    })
    return score;
}

function collectAns(){
    var a=0;
    var ans=[];
    $(".ans").each(function(){
        if ($(this).val()=="Yes"){
            var score=$(this).parent().data('score');
            if(score==null)
                score = $(this).parent().parent().data('score');
            ans.push(1*score);
            $(this).val("");
        }
        else{
            ans.push(0);
            $(this).val("");
        }
        a +=1;
    })

    return ans;
}

var quizs=[
    {
        quiz_no: "1",
        questions: "Has the frequency of physical voilence or severity increased over the past few years? ",
        sub_questions:[],
        score: 4
    },
    {
        quiz_no: "2",
        questions: "Does she use any voilent weapon such as knife? ",
        sub_questions:[],
        score: 3
    },
    {
        quiz_no: "3",
        questions: "Are you living with her from past few years? ",
        sub_questions:[],
        score: 2
    },
    {
        quiz_no: "4",
        questions: "Has she ever threatened to kill you? ",
        sub_questions: [],
        score: 2
    },
    {
        quiz_no: "5",
        questions: "Has either of you experienced physical or emotional trauma? ",
        sub_questions:[],
        score: 2
    },
    {
        quiz_no: "6",
        questions: " Is she scared of getting arrested for domestic voilence? ",
        sub_questions:[],
        score: 2
    },
    {
        quiz_no: "7",
        questions: 'Have you or your partner ever filled for the divorce? ',
        sub_questions:[],
        score: 1
    },
    /*{
        quiz_no: "8",
        questions: " Have you or your partner ever filled for the divorce? ",
        sub_questions:[],
        score: 1
    },
     {
        quiz_no: "9",
        questions: "Do you have a child that is not hers? ",
        sub_questions:[],
        score: 1
    },
     {
        quiz_no: "10",
        questions: "Does she constantly blame you and/or put you down? ",
        sub_questions:[],
        score: 1
    },
    {
        quiz_no: "11",
        questions: "Has she destroyed or threatened to destroy things that belong to you? ",
        sub_questions:[],
        score: 1
    },
    {
        quiz_no: "12",
        questions: "Has she threatened to harm a: ",
        sub_questions:[
            {
                quiz_no: "12.a",
                questions: "Pet?",
                score: 1
            },
            {
                quiz_no: "12.b",
                questions: "Elderly family member?",
                score: 1
            },
            {
                quiz_no: "12.c",
                questions: "Person you care for with a disability?",
                score: 1
            }
        ],
        score: 1
    },
    {
        quiz_no: "13",
        questions: "Has she ever violated a restraining order?  ",
        sub_questions:[],
        score: 1
    },
    {
        quiz_no: "14",
        questions: "Does she stalk you, for example, follow or spy on you, leave threatening notes or messages on answering machine or cell phone, call you when you do not want her to?",
        sub_questions:[],
        score: 1
    },
    {
        quiz_no: "15",
        questions: "If you were being abused by her and tried to get help, do you think people would not take you seriously?  ",
        sub_questions:[],
        score: 1
    },
    {
        quiz_no: "16",
        questions: "If you were being abused by her, would fear of reinforcing negative stereotypes about female same-sex relationships and/or being discriminated against prevent you from seeking help, for example help from friends, domestic violence advocates, or health care providers?  ",
        sub_questions:[],
        score:1
    },
    {
        quiz_no: "17",
        questions: "If you were having serious difficulties with her, would you keep it a secret out of fear or shame? ",
        sub_questions:[],
        score: 1
    },
    {
        quiz_no: "18",
        questions: "Have you threatened or tried to kill yourself?  ",
        sub_questions:[],
        score: 0
    }, */

]

