const quizData=[
  {
    question: "Who is Prime minister of canada?",
    a: "Trudeau",
    b: "Poilievre",
    c: "Truimph",
    d: "Biden",
    answer:"a"
  }, {
    question: "which city is capital of Canada?",
    a: "Toronto",
    b: "Ottawa",
    c: "Yellow Knife",
    d: "London",
    answer:"b"
  }, {
    question: "In which year Toronto Reptors won World Championship?",
    a: "2020",
    b: "2022",
    c: "2019",
    d: "2018",
    answer:"c"
  }, {
    question: "where Northwest terretories are located in Canada?",
    a: "North",
    b: "south",
    c: "North-East",
    d: "North-West",
    answer:"d"
  }
];

let i=0;

const question = document.getElementById("question");
const ans1 = document.getElementById("1");
const ans2 = document.getElementById("2");
const ans3 = document.getElementById("3");
const ans4 = document.getElementById("4");

function pullQue(){
  question.innerHTML = quizData[i]["question"];
  ans1.innerHTML = quizData[i]["a"];
  ans2.innerHTML = quizData[i]["b"];
  ans3.innerHTML = quizData[i]["c"];
  ans4.innerHTML = quizData[i]["d"];
}
pullQue();

const givenAnswer=[];
let wrongAnswers=0;

function submitAns(){
  let answers = document.getElementsByName('answer');
  let answer;
  for(let i = 0; i < answers.length; i++){
    if(answers[i].checked){
      answer = answers[i].value;
    }
  }

  if(answer == undefined){
    document.getElementById("alert").innerHTML = "Please select one from above";
  }
  else{
    document.getElementById("alert").innerHTML = null;
    givenAnswer.push(answer);
      if(quizData[i]["answer"]!=answer){
        wrongAnswers++;
      }
    i++;
      if(i>=quizData.length){
        document.getElementsByTagName("button")[0].disabled = true;
        document.getElementById("result").innerHTML = "You have given " + wrongAnswers + " answers." ;
      } 
      else{
        pullQue();
      }
  }
 }
