//chapter: variables for number:

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box:

var age = 15;
alert( "I am " + (age) + " years old");



// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”:


var webpage = 14;
alert("you have visited this site " + (webpage) +" times ");



// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthyear = 1999;
document.write("My birth year is "); 
document.write (birthyear + "<br/>");
document.write("Data type of my declared variable is number <br/>" )



// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”:


var clothingStore = "<b> XYZ </b>";
var visitorsName = " <b> John Doe </b>";
var product = " <b> T-shirt </b>";
var quantity = "<b>5</b>";

document.write ( (visitorsName) + " ordered  " + (quantity)  + " " + (product) + "(s) on " + (clothingStore) + " Clothing store" );
