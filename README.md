# war

# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day              | Deliverable                                   |
| ---------------- | --------------------------------------------- |
| Day 1: Tuesday   | Game Idea                                     |
| Day 2: Wednesday | Completed wireframes and prioritized features |
| Day 3: Thursday  | Pseudocode                                    |
| Day 4: Friday    | Basic Clickable Model                         |
| Day 5: Saturday  | Working Prototype                             |
| Day 6: Sunday    | Game Completed / Slides                       |
| Day 7: Monday    | Project Presentations                         |

## Project Description

For my 1 player War game, I will have a landing page where the player can input their name in a form and pick from a collection of potential avatar icons. The name and icon will be displayed on the game page after the selections have been made.

I will use two arrays and a function to build my deck of 52 cards. I will then use a function (which will use Math.random) to shuffle the deck and deliver half the deck (26 cards) from the top of the shuffled deck to each player.

The objective of the game is to win all of the cards from the other player. Each player flips a card at the same time. The player with the higher ranking card wins and takes both cards. If the cards are the same rank, this initiates “War”.

In War-state, each player will place 3 cards facedown (on top of the card with the tied value) and then one more face up. The player with the highest ranking card will then take all 10 cards. If the face up cards are the same value once again, War function will run once more.

The only win-state occurs when one player has all 52 cards.

## Priority Matrix

Wednesday: Solidify objectives and break each down into smaller steps. Make wireframe.

Thursday: Finish write code for deck creation, shuffling and dealing. Write pseudocode for Game Logic & Landing page (rules, player turns, winstate), start hard code writing

Friday: Finish hard code for game logic and landing page and be able to test in browser.

Saturday: Start styling and animations/Avatars, start presentation

Sunday: Finishing touches on styling, potentially animation/Avatars, presentation

## MVP

-Create Deck with Shuffle & Deal functions
-Create Game Logic, complete with gameplay rules, turns, "war-state" & winstate
-Create landing page with form for user name

## POST MVP

-Animations
-Scoring system
-Choosable Avatars

## Wireframes

https://imgur.com/tA63dWd

## Game Components

Not sure what to write here that isn't in other sections

### Landing Page

The landing page will include a form for user name and optional avatar choice,
as well as a title "War the Card Game!".

### Game Initialization

Once the game is started, the player will see a green game board with their name, avatar and score on
one side, and the computer player's name, avatar and score on the other. There will be a deck in the middle and when
clicked, each player will be dealt their hand which will lie in front of them. The play area will exist where the Deck
was and each player's cards will lie on their right of the center of the board.

### Playing The Game

Each player flips a card at the same time. The player with the higher ranking card wins and takes both cards. If the cards are the same rank, this initiates “War”.

In War-state, each player will place 3 cards facedown (on top of the card with the tied value) and then one more face up. The player with the highest ranking card will then take all 10 cards. If the face up cards are the same value once again, War function will run once more.

### Winning The Game

One player will have all 52 cards.

### Game Reset

There will be a button to restart the game without resetting the user's nickname, avatar or score count.

## Functional Components

-Create Deck array
-Make arrays holding the information of each property (var suits = ["Spades, "Hearts", "Diamonds", "Clubs"])
-Make function creating array of 52 cards, each card as its own object
-make shuffle function
-create arrays for each player's hand and respective play-area
-create div containers that correspond to the hand and play-area arrays, as well as where the deck lies at the start of the game before dealing (creating HTML element 'div' to represent deck)
-make deal function (dividing the shuffled deck in half and giving each half to the players' hand arrays, making a card div appear in hand area on game board)

//Game-Play & Logic
-create event listener that triggers both players to play a cards upon user clicking their hand

-create comparison function that gives player with the higher ranked card both cards

-create "war-state" (that is triggered by both cards in play being equal) where directions are given to click the deck 4 times to play
3 cards facedown and 1 faceup (this will happen automatically)

-create "win-state" that is triggered when a player has 52 cards in their hand array

| Component    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------ | :------: | :------------: | :-----------: | :---------: |
| Create Cards |    H     |      2hrs      |     3 hrs     |    3hrs     |

| Component    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------ | :------: | :------------: | :-----------: | :---------: |
| Shuffle Func |    H     |      1hr       |      1hr      |   1.5hrs    |

| Component     | Priority | Estimated Time | Time Invested | Actual Time |
| ------------- | :------: | :------------: | :-----------: | :---------: |
| Arrays & Divs |    H     |      1hr       |    1.5hrs     |   1.5hrs    |

| Component     | Priority | Estimated Time | Time Invested | Actual Time |
| ------------- | :------: | :------------: | :-----------: | :---------: |
| Deal function |    H     |      2hrs      |     2hrs      |    3hrs     |

| Component    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------ | :------: | :------------: | :-----------: | :---------: |
| G.Play/Logic |    VH    |     12hrs      |     10hrs     |    10hrs    |

| Component    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------ | :------: | :------------: | :-----------: | :---------: |
| Landing Page |    M     |      4hrs      |     3hrs      |    3hrs     |

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --------- | :------: | :------------: | :-----------: | :---------: |
| Styling   |    M     |      6hrs      |     6 hrs     |    6hrs     |

| Component  | Priority | Estimated Time | Time Invested | Actual Time |
| ---------- | :------: | :------------: | :-----------: | :---------: |
| Animations |    M     |      6hrs      |      N/A      |     N/A     |

| Component    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------ | :------: | :------------: | :-----------: | :---------: |
| ChooseAvatar |    L     |      3hrs      |      N/A      |     N/A     |

| Component    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------ | :------: | :------------: | :-----------: | :---------: |
| Presentation |    M     |      3hrs      |               |             |

## Helper Functions

Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function    |                  Description                   |
| ----------- | :--------------------------------------------: |
| Math.random | Returns "pseudo-random number" between 0 and n |

| Function |                  Description                  |
| -------- | :-------------------------------------------: |
| .unshift | Adds elements to beginning of a defined array |

| Function   |                     Description                     |
| ---------- | :-------------------------------------------------: |
| Math.floor | Rounds down a given number if it has decimal points |

| Function |                   Description                   |
| -------- | :---------------------------------------------: |
| .push    | pushes an element into the end of another array |

| Function |                  Description                   |
| -------- | :--------------------------------------------: |
| .shift   | removes the first element of a specified array |

| Function   |                    Description                    |
| ---------- | :-----------------------------------------------: |
| setTimeout | sets time for the running of a function or action |

| Function |                     Description                     |
| -------- | :-------------------------------------------------: |
| .splice  | removes a set amount elements in array from index # |

## Additional Libraries

Use this section to list all supporting libraries and their role in the project.
-None at the moment...

## jQuery Discoveries

Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.
-None at the moment...

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.

-moved image files out of suit subfolders so they could be accessed easier by my getDeck function
-deal function is actual a variable named dealACard that holds the .shift function

-had to rename card image files so that Ace was ranked 13 (highest) and not 1 (lowest)

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

Problem: had trouble accessing form data on landing page
Solution: Took "input" tag outside of "form" tag

Problem: Ace was lowest value instead of highest
Solution: Changed file names of chards to match value

Problem: Hand count was not updating when cards were returned to Deck
Solution: Added setTimeout to counter function so count would update with returning cards

Problem: User could click deck before cards left play area
Solution: Added setTimeout to remove event listener for click until cards were out of playing area
