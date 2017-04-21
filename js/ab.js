function submitAnswers(){
	var total =5 ;

	var score=0;

	 //get user input 
	 var q1 = document.forms["quizform"]["q1"].value;
	 var q2 = document.forms["quizform"]["q2"].value;
	 var q3 = document.forms["quizform"]["q3"].value;
	 var q4 = document.forms["quizform"]["q4"].value;
	 var q5 = document.forms["quizform"]["q5"].value;
	 //alert(q1);
	  
	 //validation 
	 for(var i=1 ; i<=total ;i++)
	 {
		 if(eval('q'+i) == null || eval('q'+i)==''){
		 	alert("you missed question" + i)
		 	return false ;
		 }
	}

	var answers = ['b', 'a', 'd', 'b', 'd'];

	for(var i=1; i<=total ; i++)
	{
		if(answers[i-1]==eval("q"+i))
			score++;
	}

	var results = document.getElementById('results');
	results.innerHTML = "<p>Congratulations! You scored " + score + " out of " + total + " points.</p>";

	alert("You scored " + score + " out of " + total + " points.")

	 return false;

}