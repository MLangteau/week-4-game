$(document).ready(function() {

	var ScoreToGet = 0;
	var ScoreGuessTot = 0;

	var wins = 0;
	var losses = 0;
	
	var gems = {
				red: 	{
						name: "red",
						value: 0
				},
				blue: 	{
						name: "blue",
						value: 0
				},
				yellow: {
						name: "yellow",
						value: 0
				},
				green: {
						name: "green",
						value: 0
				}
	};

//	var redImg = "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR69L_07SDo00sGEnJymXCNLZoCwpQ3NQ6QvQfJPTXB2cyYr-_ZIA";
//	var blueImg = "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR69L_07SDo00sGEnJymXCNLZoCwpQ3NQ6QvQfJPTXB2cyYr-_ZIA";
//	var yellowImg = "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR69L_07SDo00sGEnJymXCNLZoCwpQ3NQ6QvQfJPTXB2cyYr-_ZIA";
//	var greenImg = "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR69L_07SDo00sGEnJymXCNLZoCwpQ3NQ6QvQfJPTXB2cyYr-_ZIA";

	function startGame() {
	//  Start and Reset function
	
		console.log("Starting game:");
		}

	//var ScoreToGet = Math.floor(Math.random() * (120-19) + 19;

	//  THIS MY FUNCTION TO GET A RANDOM NUMBER
	    var genRand function(minNum, maxNum) {
	    	return Math.floor(Math.random() * (maxNum-minNum + 1)) + minNum;
	    };
	};

//  THIS IS MY FUNCTION TO ******************

    function gemsAdder() {
        // body...
        
        $(".gems").on("click" , function(){

            var user = $(this);
     
            var user_pick = user.data("index");
            console.log(user);
            console.log(user_pick);


            $("index").html(user_pick);

        }) //  end of on.click function for gems

    }; // end of gemsAdder function

//  ******************    START THE GAME   ********************************************
	startGame();

    ScoreToGet = genRand (19,120);

    console.log("ScoreToGet: " + ScoreToGet);
	
	gems.red.value = genRand(1,12);

	console.log("redGemRand: " + gems.red.value);
	gems.blue.value = genRand(1,12);
	console.log("blueGemRand: " + gems.blue.value);
	gems.yellow.value = genRand(1,12);
	console.log("yellowGemRand: " + gems.yellow.value);
	gems.green.value = genRand(1,12);
	console.log("greenGemRand: " + gems.green.value);

	$('#randomGen').html(ScoreToGet);

	$('.calcScore').html(ScoreGuessTot);

	$('#gem1').attr("value", gems.red.value);
	var whatever = $('#gem1').attr("value");

	alert("New Guessing Total: " + ScoreGuessTot);

    if (ScoreGuessTot === ScoreToGet) {
      alert("You win!");
    }

    else if (ScoreGuessTot >= ScoreToGet) {
      alert("You lose!!");
    }


});  // end of document.ready function


/*
	$('#gem1').attr("value", redGemRand);
	var whatever = $('#gem1').attr("value");
	console.log ('regGem: ' + whatever);   // hiding from the user

	$('blueGem').attr("value", blueGemRand);
	var whatever = $('blueGem').attr("value");
	console.log ('blueGem: ' + whatever);      // hiding from the user

	$('yellowGem').attr("value", yellowGemRand);
	var whatever = $('yellowGem').attr("value");
	console.log ('yellowGem: ' + whatever);     // hiding from the user

	$('greenGem').attr("value", greenGemRand);
	var whatever = $('greenGem').attr("value");
	console.log ('greenGem: ' + whatever);      // hiding from the user
*/

	//When clicked to saved to final score;
/*  *******************************************************************  @@@@@@   ********************************
	$("#crystal-start").on("click" , function(){ 
	}

	$('gems').on("click", function () {
		// body...
//		var test1 = 
	}

	if (ScoreToGet === ScoreGuessTot) {
		alert("win");
	}
	else if (ScoreToGet < ScoreGuessTot){
		alert("You Lose");
	}
}

	$("#crystal-start").text("Crystal Start");
    // get the math generated number

    var gem_types = ["redGem","blueGem","yellowGem","greenGem"];

 //   var sources = ["../assets/images/redgem.png","../assets/images/yellowgem.png"];


    $("#crystal-start").on("click" , function(){
    //    console.log("on clicks");
    //  $(".crystal-panel").html()

//		for (var i in gem_types.length) {
        for (var i=0; i < gem_types.length; i++) {            //   SAME AS the previous for
            console.log("i: " + i);

            var btn_multi = $("<buttons>");

     //      btn_multi.text(gem_types[i]);  ///later will put the images here

     //       console.log("i: " + i + " " + gem_types[i]);

            $("#crystal-panel").append(btn_multi);

        //  btn_multi.addClass();                               Could do it this place
        //  btn_multi.text("put something")                     Could do it this place  

            btn_multi.attr({
                "class": "btn btn-default text-center btn-success gems",
                "data-index": gem_types[i],        //  unique way to get info  
              "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR69L_07SDo00sGEnJymXCNLZoCwpQ3NQ6QvQfJPTXB2cyYr-_ZIA"
            });   // end of attribute

        };  // end of for loop

        gemsAdder(a, b);
        

//*/
 //   });  // end of on.click function




