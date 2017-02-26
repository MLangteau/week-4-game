//  bottom part is the working part at the beginning.  The top part is when it was in the index.html working
//  in the final stages.


$(document).ready(function() {

    var ScoreToGet = 0;
    var ScoreGuessTot = 0;

    var wins = 0;
    var losses = 0;
    
    var gems = [{
        name: "red",
        imgURL: "assets/images/redgem.png",
        value: 0
        },
        {
        name: "blue",
        imgURL: "assets/images/bluegem.png",
        value: 0
        },
        {
        name: "yellow",
        imgURL: "assets/images/yellowgem.png",
        value: 0
        },
        {
        name: "green",
        imgURL: "assets/images/greengem.png",
        value: 0
        }];

    function startGame() {
    // Doing your setup 
    //  Start and Reset function
        console.log("Starting game:");

        ScoreToGet = genRand (19,120);

        $('#randomGen').html(ScoreToGet);
      
        console.log("ScoreToGet : " + ScoreToGet);
  
        for (i = 0; i < gems.length; i++) {
        // Generate gem values
            gems [i].value = genRand (1,12);

            console.log("[i]: " + i + " gems[i].value: " + gems[i].value);

            $('<img>').attr('id', 'gem' + i )
            .addClass('gem')
            .data('value', gems[i].value)
            .on('click', calculateTotal)  //This is the on-click for calculateTotal function for the gems
            .attr('src', gems[i].imgURL)
            .appendTo('#crystal-panel');

        };  //  end of for loop
    };  // end of StartGame function


    function calculateTotal() {
          // logic
        var valueOfGemClicked = $(this).data('value');

        console.log("WHO AH!  " + $(this).data('value'));

 //     valueOfGemClicked = parseInt(valueOfGemClicked);
        console.log("valueOfGemClicked: " + valueOfGemClicked);
// We then add the valueOfGemClicked to the user's "ScoreGuessTot" which is a global variable.
        ScoreGuessTot += valueOfGemClicked;
        $('#calcScore').html(ScoreGuessTot);

        console.log("New ScoreGuessTot: " + ScoreGuessTot);
//        alert("New Guessing Total: " + ScoreGuessTot);
        
        if (ScoreGuessTot === ScoreToGet) {
            wins++;
            $('#wins-on-pg').html(wins);
            $('#losses-on-pg').html(losses);
            alert("You win!");
            refreshScreen();
        }
        else if (ScoreGuessTot > ScoreToGet) {
            losses++;
            $('#wins-on-pg').html(wins);
            $('#losses-on-pg').html(losses);
            alert("You lose!!");
            refreshScreen();
        }
    };

 /*      $(".crystal-image").on("click", function() {
        
            var crystalValue = ($(this).attr("data-index"));
            // must parse, since it is could be considered string
            crystalValue = parseInt(crystalValue);
            //  then add to the ScoreGuessTot counter
            ScoreGuessTot += crystalValue;
            console.log(" New Score: " + ScoreGuessTot);
*/

    //  THIS MY FUNCTION TO GET A RANDOM NUMBER
/*        var genRand2 = function(minNum,maxNum) {
            return Math.floor(Math.random() * (maxNum -minNum + 1)) + minNum;
        };

        This is how you call that function - or something like this
            ScoreToGet = genRand2 (19,120);
*/    
    function genRand (minNum, maxNum) {
        var gitNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        return gitNum;
    };

    function refreshScreen() {

        ScoreGuessTot = 0;
        ScoreToGet = genRand (19,120);

        $('#calcScore').html(ScoreGuessTot);
        $('#randomGen').html(ScoreToGet);
      
        console.log("ScoreToGet NOWWWWWWWWWWW: " + ScoreToGet);

       for (i = 0; i < gems.length; i++) {
            // Generate NEW gem values
            gems [i].value = genRand (1,12);
 
            // storing the above values in the object
             $('#gem' + i).data('value', gems[i].value); 
 
            console.log("refreshScreen [i]: " + i + " gems[i].value: " + gems[i].value);

         };  //  end of for loop
    };  //  end of refreshScreen function


//  ******************    START THE GAME   ********************************************

    
    console.log("I am starting everything here:");

    $('#randomGen').html(ScoreToGet);
//      $('#randomGen').text(ScoreToGet);

    $('#calcScore').html(ScoreGuessTot);
    console.log("I am here:");

    startGame();


 });  // end of document.ready function


    </script>      

<!--

/*        $(document).ready(function() {

        //    $('').css('border', '4px solid red');

          $("#red-gem").on("click" , function(){

              $("#red-gem").html("red button");   // replace with gem
                
              console.log("clicking red");

            
          }) //  end of crystal1 function

        });  // end of (document).ready(function().../
*/

/*

$(document).ready(function() {

$("#crystal-start").text("Crystal Start");
    // get the math generated number

    var gem_types = ["redGem","blueGem","yellowGem","greenGem"];

 //   var sources = ["../assets/images/redgem.png","../assets/images/yellowgem.png"];

    $("#crystal-start").on("click" , function(){
    //    console.log("on clicks");
    //  $(".crystal-panel").html()

        for (var i=0; i < gem_types.length; i++) {
   //         console.log("i: " + i);

            var btn_multi = $("<buttons>");

            btn_multi.text(gem_types[i]);  ///later will put the images here

            console.log("i: " + i + " " + gem_types[i]);

            $("#crystal-panel").append(btn_multi);

        //  btn_multi.addClass();                               Could do it this place
        //  btn_multi.text("put something")                     Could do it this place  

            btn_multi.attr({
                "class": "btn btn-default text-center btn-success gems",
                "data-index": gem_types[i]        //  unique way to get info
  //              "text": gem_types[i]
            });   // end of attribute

        };  // end of for loop

        gemsAdder();

    });  // end of on.click function

    function gemsAdder() {
        // body...
        $(".gems").on("click" , function(){

            var user = $(this);
     

            var user_pick = user.data("index");
            console.log(user);
            console.log(user_pick);

            $("index").html(user_pick);

        }) //  end of on.click function for gems

    } // end of gemsAdder function

    });  // end of document.ready function

*/
-->
      



//  *******  BOTTOM PART ********************************************************************************
$(document).ready(function() {

$("#crystal-start").text("Crystal Start");
    // get the math generated number

    var gem_types = ["redGem","blueGem","yellowGem","greenGem"];

 //   var sources = ["../assets/images/redgem.png","../assets/images/yellowgem.png"];

    $("#crystal-start").on("click" , function(){
    //    console.log("on clicks");
    //  $(".crystal-panel").html()

		for (var i in gem_types) {
//        for (var i=0; i < gem_types.length; i++) {            //   SAME AS the previous for
   //         console.log("i: " + i);

            var btn_multi = $("<buttons>");

            btn_multi.text(gem_types[i]);  ///later will put the images here

     //       console.log("i: " + i + " " + gem_types[i]);

            $("#crystal-panel").append(btn_multi);

        //  btn_multi.addClass();                               Could do it this place
        //  btn_multi.text("put something")                     Could do it this place  

            btn_multi.attr({
                "class": "btn btn-default text-center btn-success gems",
                "data-index": gem_types[i]        //  unique way to get info
  //              "text": gem_types[i]
            });   // end of attribute

        };  // end of for loop

        gemsAdder();

    });  // end of on.click function

    function 



    function gemsAdder() {
        // body...
        $(".gems").on("click" , function(){

            var user = $(this);
     
            var user_pick = user.data("index");
            console.log(user);
            console.log(user_pick);
            

            $("index").html(user_pick);

        }) //  end of on.click function for gems

    } // end of gemsAdder function

    });  // end of document.ready function