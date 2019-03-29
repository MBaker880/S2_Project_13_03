"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Mackenzie Baker
   Date:   3.28.2019
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/
/*====================================================*/

// Global variable for all letter cells in the crossword
var allLetters;

// References current selected letter
var currentLetter;

// References letters currently selected across and down from clues
var wordLetters;

// References currently selected across clue
var acrossClue;

// References currently selected down clue
var downClue;

// Stores current typing direction, set initial value to right
var typeDirection = "right";

// Runs the init function when the page is loaded
window.onload = init;

// Sets the default values for the puzzle under init
function init() {
      // Targets all letter cells in the table crossword
      allLetters = document.querySelectorAll("table#crossword span");
      // Sets the current letter to the first item in the allLetters array
      currentLetter = allLetters[0];
      // Tagets dataset-clue-a in html
      var acrossID = currentLetter.dataset.clueA;
      // Tagets dataset-clue-d in html
      var downID = currentLetter.dataset.clueD;
      // Targets id acrossID
      acrossClue = document.getElementById("acrossID")
      // Targets id downID
      downClue = document.getElementById("downID")
}

// Formats the colors of the crossword and the clues in the clue list
function formatPuzzle(puzzleLetter) {
      // Sets global variable to the parameter value
      currentLetter = puzzleLetter;
      // Removes current colors
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.backgroundColor = "";
      }
      // Remove the highlighting from current clues
      acrossClue.style.color = "";
      downClue.style.color = "";
      // 
}





   





/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
