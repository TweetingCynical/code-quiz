# Code Quiz

# Pseudocode for how operate quiz

Steps to achieving the working quiz:

* Set an intial timer of 60 seconds, and a score of 0;
* When user clicks start button:
  - Timer begins countdown;
  - Start button disappears;
  - h1 tag (Coding Quiz Challenge) reads: QUESTION *ONE*;
  - p tag reads question.one.question content;
  - Four buttons for answer choices appear next to content of answers;
* When user clicks correct answer:
  - Timer +=5;
  - Score ++;
  - Display next question;
* When user clicks incorrect answer:
  - Timer -+5;
  - Score no change;
  - Display next question;
* When either no more questions, or timer == 0, game ends:
  - Hide questions; 
  - Display end screen and score;
* When user submits initials:
  - Add score and initials to saved highscores object;
  - Display highscores page, listing stored scores in descending order from top;
    - This may require a for loop to append new child, and then access each child by index, assigning the text content by highest in the stored object;
* When user clicks Go Back, return to initial state;
* When user clicks clear Highscores, empty stored score and initial history.