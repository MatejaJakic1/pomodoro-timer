# 25 + 5 Clock

A Pen created on CodePen.

Original URL: [https://codepen.io/Jaki-Mateja/pen/zYgvjLW](https://codepen.io/Jaki-Mateja/pen/zYgvjLW).

# Pomodoro Timer

A simple Pomodoro Timer built using React, CSS, and JavaScript. This project allows users to set up a session and break length, start and stop the timer, and reset it when needed. When the timer finishes, a sound is played to notify the user that it's time to switch between sessions and breaks.

## Features
- Set the session and break lengths (in minutes).
- Start and stop the timer.
- Reset the timer to the default session and break times.
- Visual updates for the timer status (Session or Break).
- Sound notification when the timer reaches 0.
  
## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling the user interface.
- **Font Awesome**: For the timer's icon buttons (play, pause, reset).

Usage

- **Break Length**: Increase or decrease the break length (in minutes) using the `+` and `-` buttons.
- **Session Length**: Increase or decrease the session length (in minutes) using the `+` and `-` buttons.
- **Start/Stop Timer**: Start and pause the timer using the play/pause button.
- **Reset Timer**: Reset the timer back to the default session and break times using the reset button.
- When the timer reaches `0`, the Pomodoro timer will switch between session and break, and a beep sound will notify you.

## File Structure
/pomodoro-timer
  /pomodoro-timer
├── /public
│ └── index.html # HTML file that serves as the template
├── /src
│ ├── script.js # Main React Component
│ ├── index.js # Entry point for React
│ ├── styles.css # Styling for the Pomodoro Timer
└── package.json # Project metadata and dependencies
