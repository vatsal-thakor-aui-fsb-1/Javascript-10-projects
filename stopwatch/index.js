var init = document.getElementById("timerValue").innerHTML;
var timer = parseFloat(document.getElementById("timerValue").innerHTML);
var time =[];
var relativeDiff = 0;
var relativeDiffArr=[];

//timer button click
document.getElementById("timerButton").onclick = function(){
  var buttonText = document.getElementById("timerButton").innerHTML;
  
  if(buttonText == "Start"){
    document.getElementById("timerButton").innerHTML = "Stop";
    timeInterval = setInterval(timerFun, 100);
  }
  else if (buttonText == "Stop"){
    document.getElementById("timerButton").innerHTML = "Start";
    timerStopFun ();
    time.push(timer.toFixed(1));
    relativeDiff = timer.toFixed(1) - relativeDiff;
    relativeDiffArr.push(relativeDiff);
  } 
};

function timerFun (){
  timer+=0.1;
  document.getElementById("timerValue").innerHTML = timer.toFixed(1);
}

function timerStopFun () {
  clearInterval(timeInterval);
}

// rest button click
document.getElementById("timerReset").onclick = function (){
  timerStopFun ();
  timer = parseFloat(0.0);
  document.getElementById("timerValue").innerHTML = init;
  document.getElementById("timerButton").innerHTML = "Start";
}

//result button click
document.getElementById("resultButton").onclick = function(){
  var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

  for (let index = 0; index < time.length; index++){
      //insert Row
      tableRef.insertRow().innerHTML = 
      "<th scope='row'>" + (index + 1).toString()+ "</th>" + 
      "<td>" +time[index]+ "</td>"+
      "<td>" +relativeDiffArr[index]+ "</td>";
  }
}