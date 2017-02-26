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

            //  placing all of these values in the div 
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
 //     valueOfGemClicked = parseInt(valueOfGemClicked);            Unnecessary

// We then add the valueOfGemClicked to the user's "ScoreGuessTot" which is a global variable.
        ScoreGuessTot += valueOfGemClicked;
        $('#calcScore').html(ScoreGuessTot);

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

    function genRand (minNum, maxNum) {
        var gitNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        return gitNum;
    };

    function refreshScreen() {

        ScoreGuessTot = 0;
        ScoreToGet = genRand (19,120);

        $('#calcScore').html(ScoreGuessTot);
        $('#randomGen').html(ScoreToGet);
      
       for (i = 0; i < gems.length; i++) {
            // Generate NEW gem values
            gems [i].value = genRand (1,12);
 
            // storing the above values in the object
             $('#gem' + i).data('value', gems[i].value); 
 
            console.log("refreshScreen [i]: " + i + " gems[i].value: " + gems[i].value);

         };  //  end of for loop
    };  //  end of refreshScreen function


//  ******************    START THE GAME   ********************************************
    
    $('#randomGen').html(ScoreToGet);
//      $('#randomGen').text(ScoreToGet);

    $('#calcScore').html(ScoreGuessTot);

    startGame();

 });  // end of document.ready function