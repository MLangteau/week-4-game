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

    //  Starts Game 

        ScoreToGet = genRand (19,120);
        $('#randomGen').html(ScoreToGet);
        $('#calcScore').html(ScoreGuessTot);
        $('.winLossBox').html("Wins: " + wins + "<p>" + "<p>" +  "Losses: " + losses);

        // Generates initial gem values and gem sets up the gems on screen
        for (var i = 0; i < gems.length; i++) {
            gems [i].value = genRand (1,12);
            $('<img>').attr('id', 'gem' + i )
            .addClass('gem')
            .data('value', gems[i].value)
            .on('click', calculateTotal)  //This is the on-click for calculateTotal function for the gems
            .attr('src', gems[i].imgURL)
            .appendTo('#crystal-panel');

            $('#gem' + i).css({
                    'width': '20%',
                    'margin-right':'30px'});
       };  //  end of for loop
 
    };  // end of StartGame function


    function calculateTotal() {
        // logic
        var valueOfGemClicked = $(this).data('value');
 //     valueOfGemClicked = parseInt(valueOfGemClicked);      Unnecessary

// We then add the valueOfGemClicked to the user's "ScoreGuessTot" - global variable
        ScoreGuessTot += valueOfGemClicked;

        $('#calcScore').html(ScoreGuessTot);  // puts new score on the screen

        if (ScoreGuessTot === ScoreToGet) {
            wins++;
             alert("You Win!!");
            refreshScreen();
        }
        else if (ScoreGuessTot > ScoreToGet) {
            losses++;
            alert("You lose!!");
            refreshScreen();
        };   // end of else if
    };  // end of calculateTotal function

    function genRand (minNum, maxNum) {
        var gitNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        return gitNum;
    };

    function refreshScreen() {
// refreshes scores, I will refresh the screen at the end after it replaces the gam values
        ScoreGuessTot = 0;
        ScoreToGet = genRand (19,120);
   
       for (var i = 0; i < gems.length; i++) {
            // Generate NEW gem values
            gems [i].value = genRand (1,12);
            // storing the above values in the object
            $('#gem' + i).data('value', gems[i].value); 
            $('#gem' + i).slideToggle(1000).slideToggle(1000);
            $('#gem' + i).css({'width': '20%','margin':'5px'});
         };  //  end of for loop

// refreshes scores to screen
        $('#calcScore').html(ScoreGuessTot);
        $('#randomGen').html(ScoreToGet);
        $('.winLossBox').html
        ("Wins: " + wins + "<p>" + "<p>" +  "Losses: " + losses);

    };  //  end of refreshScreen function

    function setUpLayout() {

        $('h1').css({
                'background-color': '#D2691E',
                'padding':'3% 3% 3% 1px',
                'margin-left': '1%',
                'display': 'block',
                'font-size': '95%',
                'width':'40%',
                'color': 'white'
            });  // end of css 

        $('.para').css({
                'background-color': '#FFF8DC',
                'margin-left': '1%',
                'display': 'block',
                'font-size': '40%',
                'font-family': 'Helvetica',
                'width':'70%',
                'padding': '2%',
                'color': '#32CD32'
            });  // end of css 

        $('#randomGen').css({
                    'background-color': '#32CD32',
                    'padding-top': '3%',
                    'padding-bottom': '3%',
                    'padding-left': '10%',
                    'padding-right': '10%',                    
                    'display': 'block',
                    'float': 'left',
                    'margin-left': '1%'
                    });  // end of css   

        $('.winLossBox').css({
                'background-color': '#00FFFF',
                'width': '15%',
                'padding-top':'.5%',
                'padding-bottom': '.5%',
                'padding-left': '.5%',
                'padding-right': '10%', 
                'font-size': '50%',
                'clear': 'both',
                'display': 'inline-block'
                });  // end of css 

        $('#totalScoreText').css({
                'background-color': '#3CB371',
                'padding':'1%',
                'margin-left': '1%',
                'font-size': '60%',
                'width':'25%'
            });  // end of css 

        $('#calcScore').css({
                'background-color': '#3CB371',
                'display': 'block',
                'overflow': 'auto',
                'clear': 'both',
                'margin-left': '1%',
                'margin-bottom': '1%',
                'padding': '1% 10% 10% 1%',
                'width':'25%'
                 });  // end of css 

    }  // end of setUpLayout function

//  ******************    START THE GAME   ********************************************
    setUpLayout();
    startGame();
 });  // end of document.ready function