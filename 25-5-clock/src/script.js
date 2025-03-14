class PomodoroTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5, 
      sessionLength: 25, 
      seconds: 1500, 
      running: false, 
      isBreak: false 
    };
  }

  toggleTimer = () => {
    const startStop = document.getElementById("start_stop");
    if (this.state.running) {
      startStop.classList.remove("fa-pause");
      startStop.classList.add("fa-play");
      clearInterval(this.timerId);
      this.setState({ running: false });
    } else {
      startStop.classList.remove("fa-play");
      startStop.classList.add("fa-pause");
      this.timerId = setInterval(() => {
        this.setState((prevState) => {
          if (prevState.seconds > 0) {
            return { seconds: prevState.seconds - 1 };
          } else {
            const beep = document.getElementById("beep");
            if (beep) {
              beep.play();
            }
            const isBreak = !prevState.isBreak;
            const nextSeconds = isBreak
              ? prevState.breakLength * 60
              : prevState.sessionLength * 60; // Convert to seconds
            document.getElementById("timer-label").textContent = isBreak
              ? "Break"
              : "Session";
            return { seconds: nextSeconds, running: true, isBreak };
          }
        });
      }, 1000);
      this.setState({ running: true });
    }
  };

  resetTimer = () => {
    const startStop = document.getElementById("start_stop");
    startStop.classList.remove("fa-pause");
    startStop.classList.add("fa-play");
    clearInterval(this.timerId);
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      seconds: 1500,
      running: false,
      isBreak: false
    });
    
    const beep = document.getElementById("beep");
    if (beep.play()) {
      beep.pause();
      beep.currentTime = 0;
    }
    document.getElementById("timer-label").textContent = "Session";
  };

  increment = (type) => {
    this.setState((prevState) => {
      if (type === "session" && prevState.sessionLength < 60) {
        return {
          sessionLength: prevState.sessionLength + 1,
          seconds: prevState.isBreak
            ? prevState.seconds
            : (prevState.sessionLength + 1) * 60 
        };
      } else if (type === "break" && prevState.breakLength < 60) {
        return { breakLength: prevState.breakLength + 1 };
      }
      return null;
    });
  };

  decrement = (type) => {
    this.setState((prevState) => {
      if (type === "session" && prevState.sessionLength > 1) {
        return {
          sessionLength: prevState.sessionLength - 1, 
          seconds: prevState.isBreak
            ? prevState.seconds
            : (prevState.sessionLength - 1) * 60 
        };
      } else if (type === "break" && prevState.breakLength > 1) {
        return { breakLength: prevState.breakLength - 1 }; 
      }
      return null;
    });
  };

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }
  
  componentWillUnmount() {
  clearInterval(this.timerId);
}

  render() {
    return (
      <div id="container" className="d-flex flex-column justify-content-center align-items-center">
        <div id="timer-settings" className="d-flex">
          <div id="break" className="m-4">
            <div id="break-label">Break Length</div>
            <div
              id="break-container"
              className="d-flex justify-content-center align-items-center"
            >
              <i
                className="fa-solid fa-minus m-2"
                id="break-decrement"
                onClick={() => this.decrement("break")}
              ></i>
              <div id="break-length">{this.state.breakLength}</div>
              <i
                className="fa-solid fa-plus m-2"
                id="break-increment"
                onClick={() => this.increment("break")}
              ></i>
            </div>
          </div>
          <div id="session" className="m-4">
            <div id="session-label">Session Length</div>
            <div
              id="session-container"
              class="d-flex justify-content-center align-items-center"
            >
              <i
                className="fa-solid fa-minus m-2"
                id="session-decrement"
                onClick={() => this.decrement("session")}
              ></i>
              
              <div id="session-length">{this.state.sessionLength}</div>
              <i
                className="fa-solid fa-plus m-2"
                id="session-increment"
                onClick={() => this.increment("session")}
              ></i>
            </div>
          </div>
        </div>
        <div id="timer" className="d-flex flex-column justify-content-center align-items-center border rounded">
        <div id="timer-label" className="mt-2">Session</div>
        <div id="time-left">{this.formatTime(this.state.seconds)}</div>
          <div id="start-stop-reset" className="d-flex">
        <i
          className="fa-solid fa-play m-1 mb-4"
          id="start_stop"
          onClick={this.toggleTimer}
        ></i>
        <i
          className="fa-solid fa-arrows-rotate m-1"
          id="reset"
          onClick={this.resetTimer}
        ></i>
          </div>
        </div>
        <audio
          id="beep"
          src="https://bigsoundbank.com/UPLOAD/aac/1102.aac"
        ></audio>
      </div>
    );
  }
}

ReactDOM.render(<PomodoroTimer />, document.querySelector("main"));
