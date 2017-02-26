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