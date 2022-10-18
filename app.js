let pos = 30;
//radnom number genortator
const player1 = document.getElementById('player1');

const player2 = document.getElementById('player2');


var diceSide = ['dice_side_1.jpg', 'dice_side_1.jpg','dice_side_2.jpg','dice_side_3.jpg','dice_side_4.jpg','dice_side_5.jpg','dice_side_6.jpg'] //array of dice sides

var dir = "images/"; //goes to image directory

var dice = document.getElementById('dice'); //creates variable for dice object

dice.src = dir + diceSide[0]; // sets dice to array [0]


dice.addEventListener('click', //click eventlistener
function ()
{
    var dicerand = Math.ceil(Math.random() * 6); //random number between 1 and 6 (*6 dice sides*)
    console.log(dicerand);
    dice.src = dir + diceSide[dicerand]; //changes dice source


    // change player
    var currentPlayer = player1;

                        /// if (currentPlayer === player1)
                        /// {
                        ///     currentPlayer = player2;
                        /// }
                        /// else if (currentPlayer === player2)
                        /// {
                        ///     currentPlayer = player1;
                        /// }

    // move character {
    if (dicerand == 1)
    {
        currentPlayer.style = "left:" + pos + "vh";


    }

    else if (dicerand == 2)
    {
        
        currentPlayer.style = "left:" + pos*2 + "vh";


    }

    else if (dicerand == 3)
    {

        currentPlayer.style = "left:" + pos*3 +"vh";

    }

    else if (dicerand == 4)
    {
        currentPlayer.style = "left:" + 28*4 + "vh";

    }

    else if (dicerand == 5)
    {
        currentPlayer.style = "left:" + 28*4 + "vh;" + "top:" + 15 + "vh";
        console.log(player1.style);
    }

    else if (dicerand == 6)
    {
        currentPlayer.style = "left:" + 28*4 + "vh;" + "top:" + pos + "vh";
        console.log(player1.style);
    }
    // } move character
})






var gradebox = document.getElementById('gradebox');

function gradefunction () // Function to determine grades
{
    var grades = ["A", "A", "B", "C", "D", "F"]; //grades

    var grade = Math.ceil(Math.random() * 5); //random number genorator for grades
    console.log(grade);

    var endgrade = grades[grade]; //gets grade
    console.log(endgrade);

    if (endgrade == "A" || endgrade == "B" || endgrade == "C") // if passing grade; then pass
    {
        gradebox.innerHTML = "You passed the course!!<br> End Grade was: " + endgrade; // passed class message
        gradebox.style = "color: RGB(41, 140, 11)" //changes text color (green | good grade)

        passedclasses1.push(endgrade); // adds grade to passedclasses1 array
        document.getElementById('passedclasses1').innerHTML = "x" + passedclasses1.length; //tally passed classes
        
        
        console.log("passed course");
    }
    else if (endgrade == "D" || endgrade == "F") // if failing grade; then fail
    {
        gradebox.innerHTML = "You failed the course. <br> End Grade was: " + endgrade;
        gradebox.style = "color: red" //changes color to red (bad grade)

        console.log("Did not pass course");
    }


}

var passedclasses1 = []; //player 1 passed courses tally
var passedclasses2 = []; //player 2 passed courses tally

var CIS260 = document.getElementById('CIS260');







// CIS260 Final grade code here


















    var CIS120 = document.getElementById('CIS120'); //gets img#CIS120
    console.log(CIS120);

    CIS120.addEventListener('click', // click event
    function ()
    {
        document.getElementById('CourseExplination').style = "color: default"; //changes text color to defualt
        document.getElementById('CourseExplination').innerHTML = "CIS-120"; //changes text to "CIS-120"

    })

    var CIS130 = document.getElementById('CIS130')
    CIS130.addEventListener('click', function ()
    {
        document.getElementById('CourseExplination').style = "color: default";
        document.getElementById('CourseExplination').innerHTML = "CIS-130";

    })

    var CIS150 = document.getElementById('CIS150');
    CIS150.addEventListener('click', function ()
    {
        document.getElementById('CourseExplination').style = "color: default";
        document.getElementById('CourseExplination').innerHTML = "CIS-150";

    })

    var CIS131 = document.getElementById('CIS131');
    CIS131.addEventListener('click', function ()
    {
        document.getElementById('CourseExplination').style = "color: default";
        document.getElementById('CourseExplination').innerHTML = "CIS-131";

    })


    var life = document.getElementById('LIFE'); // gets img#LIFE
    console.log(life);

    life.addEventListener('click',
    function ()
    {
        var cards = ["You studied really hard for your exam and did great! :)","You studied really hard for your exam and did great! :)", "You partied hard last night and failed an exam.:(", "You got 100% on your assignments! :)", "You slept in and missed class. :(", "You got Extra Credit for participating in an out of class activity! :)", "You didn't get to study for your exam and did bad. :(", "You passed the test you were stressing about! :)","Your friend needed help moving so you weren't able to do your assignment. :(", "You made it to class on time! :)", "You missed class for a dentist appointment. :("]; //Life Happens cards

        var i = Math.ceil(Math.random() * 10); //random number generator to pick life happens card

        var lifecard = cards[i]; //gets the life happens card
        console.log(lifecard)

        document.getElementById('CourseExplination').innerHTML = lifecard; //changes text to life happens card

        document.getElementById('CourseExplination').style = "color: RGB(57, 22, 199)"; // changes text color



    })
    



    document.getElementById('canvas').addEventListener('click', gradefunction); //click on canvas to get a grade
