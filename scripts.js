


$(function() {

    $(".carousel").carousel( { interval: 1000000, autoplay: false} );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });



        $("#reserveButton").on("click", function(){
            $("#reserveModal").modal("show");
        });

        $("#loginButton").on("click",function (){
            $('#loginModal').modal("show");
        });





        function getFullName(firstName, lastName){
            return firstName + " " + lastName;
        }

        const getFullName = function (firstName, lastName){
            return firstName + " " + lastName;
        }

        const getFullName = (firstName, lastName) => firstName + " "  + lastName;




        ///////////////////////////////////////////////
        // LOCAL VAR HAS FUNCTION SCOPE
        
        // code here can NOT use carName

        function myFunction() {
        var carName = "Volvo";
    
        // code here CAN use carName
  
        }




        ///////////////////////////////////////////////
        //GLOBAL VAR HAS GLOBAL SCOPE

        var carName = "Volvo";

        // code here can use carName

        function myFunction() {

        // code here can also use carName

        }




        ///////////////////////////////////////////////
        //LET IS BLOCK SCOPED AND CAN BE UPDATED, BUT NOT RE-DECLARED
        
        //So while this will work
        let greeting = "say Hi";
        greeting = "say Hello instead";

        //This will not
        let greeting = "say Hi";
        let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
        




        ///////////////////////////////////////////////
        //CONST IS BLOCK SCOPED AND CANNOT BE UPDATED OR RE-DECLARED

        //This will not work
        const greeting = "say Hi";
        greeting = "say Hello instead";// error: Assignment to constant variable.

        //Nor will this
        const greeting = "say Hi";
        const greeting = "say Hello instead";

        //THINGS CHANGE WHEN THE CONST HOLDS AN OBJECT

        //ORIGINAL DECLARATION
        const greeting = {
            message: "say Hi",
            times: 4
        }

        //CAN NOT DO THIS
        greeting = {
            words: "Hello",
            number: "five"
        } // error:  Assignment to constant variable.

        //BUT....
        greeting.message = "say Hello instead";
});