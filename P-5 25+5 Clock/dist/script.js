class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5, //in Minutes
      session: 25, //in Minutes
      timeLeft: 1500, //in seconds
      intervalName: "Session",
      timeLeftString: "25:00",
      timeVar: "",
      timerState: "Start" };

    this.breakChange = this.breakChange.bind(this);
    this.sessionChange = this.sessionChange.bind(this);
    this.numberToTime = this.numberToTime.bind(this);
    this.startStopTimer = this.startStopTimer.bind(this);
    this.checkTimeLimits = this.checkTimeLimits.bind(this);
    this.reset = this.reset.bind(this);
  }

  sessionChange(event) {
    let sessionTime = this.state.session;
    if (event.target.id === "session-decrement") {
      if (sessionTime > 1) {
        this.setState({
          session: this.state.session - 1,
          timeLeft: (this.state.session - 1) * 60,
          timeLeftString: this.numberToTime((this.state.session - 1) * 60) });

      }
    } else {
      if (sessionTime < 60) {
        this.setState({
          session: this.state.session + 1,
          timeLeft: (this.state.session + 1) * 60,
          timeLeftString: this.numberToTime((this.state.session + 1) * 60) });

      }
    }
  }

  breakChange(event) {
    let breakTime = this.state.break;
    if (event.target.id === "break-decrement") {
      if (breakTime > 1) {
        this.setState({ break: this.state.break - 1 });
      }
    } else {
      if (breakTime < 60) {
        this.setState({ break: this.state.break + 1 });
      }
    }
  }

  startStopTimer() {
    if (this.state.timerState === "Stop") {
      this.setState({
        timeVar: clearInterval(this.state.timeVar),
        timerState: "Start" });

    } else {
      this.setState({
        timeVar: setInterval(this.checkTimeLimits, 1000),
        timerState: "Stop" });

    }
  }

  checkTimeLimits() {
    if (this.state.timeLeft < 1) {
      this.audioBeep.play();
      if (this.state.intervalName === "Session") {
        this.setState({
          timeLeft: this.state.break * 60,
          intervalName: "Break",
          timeLeftString: this.numberToTime(this.state.break * 60) });

      } else {
        this.audioBeep.play();
        this.setState({
          timeLeft: this.state.session * 60,
          intervalName: "Session",
          timeLeftString: this.numberToTime(this.state.session * 60) });

      }
    } else {
      this.numberToTime(this.state.timeLeft);
      this.setState({
        timeLeft: this.state.timeLeft - 1,
        timeLeftString: this.numberToTime(this.state.timeLeft - 1) });

    }
  }

  numberToTime(props) {
    let minutes = Math.floor(props / 60);
    let seconds = props - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return minutes + ":" + seconds;
  }

  reset() {
    this.setState({
      break: 5,
      session: 25,
      intervalName: "Session",
      timeLeft: 1500,
      timeLeftString: "25:00",
      timeVar: clearTimeout(this.state.timeVar),
      timerState: "Start" });

    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "title" }, " 25 + 5 Clock "), /*#__PURE__*/
      React.createElement("div", { className: "subTitle", id: "break-label" }, "Break Length",
      " "), /*#__PURE__*/


      React.createElement("div", { className: "sub-container" }, /*#__PURE__*/
      React.createElement("button", { id: "break-increment", onClick: this.breakChange },
      " ", "Break Increment"), /*#__PURE__*/


      React.createElement("div", { id: "break-length" },
      " ", /*#__PURE__*/
      React.createElement("h1", null, this.state.break, " ")), /*#__PURE__*/

      React.createElement("button", { id: "break-decrement", onClick: this.breakChange },
      " ", "Break Decrement")), /*#__PURE__*/



      React.createElement("div", { className: "subTitle", id: "session-label" }, "Session Length",
      " "), /*#__PURE__*/


      React.createElement("div", { className: "sub-container" }, /*#__PURE__*/
      React.createElement("button", { id: "session-increment", onClick: this.sessionChange },
      " ", "Session Increment"), /*#__PURE__*/



      React.createElement("div", { id: "session-length" },
      " ", /*#__PURE__*/
      React.createElement("h1", null, this.state.session)), /*#__PURE__*/

      React.createElement("button", { id: "session-decrement", onClick: this.sessionChange },
      " ", "Session Decrement")), /*#__PURE__*/



      React.createElement("div", { className: "subTitle", id: "timer-label" },
      " ",
      this.state.intervalName, " "), /*#__PURE__*/


      React.createElement("div", { className: "sub-container" }, /*#__PURE__*/
      React.createElement("button", { id: "start_stop", onClick: this.startStopTimer },
      " ",
      this.state.timerState), /*#__PURE__*/


      React.createElement("div", { id: "time-left" },
      " ", /*#__PURE__*/
      React.createElement("h1", null, this.state.timeLeftString), " "), /*#__PURE__*/

      React.createElement("button", { id: "reset", onClick: this.reset },
      " ", "Reset")), /*#__PURE__*/



      React.createElement("audio", {
        id: "beep",
        preload: "auto",
        ref: audio => {
          this.audioBeep = audio;
        },
        src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));