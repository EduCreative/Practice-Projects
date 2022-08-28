class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      move: 1,
      sign: "X",
      scorePlayer1: 0,
      scorePlayer2: 0,
      boxes: Array("", "", "", "", "", "", "", "", ""),
      playerTurn: "Player-1",
      winner: "?" };


    this.handleClick = this.handleClick.bind(this);
    this.startAgain = this.startAgain.bind(this);
    this.reset = this.reset.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  startAgain() {
    this.setState({
      move: 1,
      sign: "X",
      scorePlayer1: 0,
      scorePlayer2: 0,
      boxes: Array("", "", "", "", "", "", "", "", ""),
      playerTurn: "Player-1",
      winner: "?" });

  }

  reset() {
    let winner = this.state.winner;
    this.setState({
      move: 1,
      sign: "X",
      boxes: Array("", "", "", "", "", "", "", "", ""),
      scorePlayer1:
      this.state.winner === "Player-1" ?
      this.state.scorePlayer1 + 1 :
      this.state.scorePlayer1,
      scorePlayer2:
      this.state.winner === "Player-2" ?
      this.state.scorePlayer2 + 1 :
      this.state.scorePlayer2,
      playerTurn: "Player-1",
      winner: "?" });

  }

  checkWinner(BoxValues) {
    // check both sides of box[0]
    if (BoxValues[0] !== "") {
      if (BoxValues[0] === BoxValues[1] && BoxValues[0] === BoxValues[2]) {
        return this.state.playerTurn;
      }

      if (BoxValues[0] === BoxValues[3] && BoxValues[0] === BoxValues[6]) {
        return this.state.playerTurn;
      }
    }

    // check both sides of box[8]
    if (BoxValues[8] !== "") {
      if (BoxValues[8] === BoxValues[7] && BoxValues[8] === BoxValues[6]) {
        return this.state.playerTurn;
      }

      if (BoxValues[8] === BoxValues[5] && BoxValues[8] === BoxValues[2]) {
        return this.state.playerTurn;
      }
    }

    // check all sides of box[4]
    if (BoxValues[4] !== "") {
      if (BoxValues[4] === BoxValues[0] && BoxValues[4] === BoxValues[8]) {
        return this.state.playerTurn;
      }

      if (BoxValues[4] === BoxValues[2] && BoxValues[4] === BoxValues[6]) {
        return this.state.playerTurn;
      }

      if (BoxValues[4] === BoxValues[1] && BoxValues[4] === BoxValues[7]) {
        return this.state.playerTurn;
      }

      if (BoxValues[4] === BoxValues[3] && BoxValues[4] === BoxValues[5]) {
        return this.state.playerTurn;
      }
    }
    if (this.state.move < 9) {
      return "?";
    } else {
      return "DRAW";
    }
  }

  handleClick(event) {
    let key = event.target.id;

    if (this.state.winner === "?") {
      let newSign = this.state.sign === "X" ? "0" : "X";
      let newPlayerTurn =
      this.state.playerTurn === "Player-1" ? "Player-2" : "Player-1";
      let newBoxValue = this.state.boxes;

      if (newBoxValue[key] === "") {
        newBoxValue[key] = this.state.sign;
        this.setState({
          boxes: newBoxValue,
          sign: newSign,
          playerTurn: newPlayerTurn,
          winner: this.checkWinner(newBoxValue),
          move: this.state.move < 9 ? this.state.move + 1 : this.state.move });

      }
    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "title" }, "TIC-TAC-TOE GAME"), /*#__PURE__*/
      React.createElement("div", { className: "scorePlayer" }, "Player 1: ", this.state.scorePlayer1), /*#__PURE__*/
      React.createElement("div", { className: "scorePlayer" }, "Player 2: ", this.state.scorePlayer2), /*#__PURE__*/

      React.createElement("div", { className: "winner", id: "winner" }, "WINNER: ",
      this.state.winner), /*#__PURE__*/


      React.createElement("div", { className: "box-container" },
      this.state.boxes.map((box, key) => /*#__PURE__*/
      React.createElement("div", { className: "box", id: key, onClick: this.handleClick },
      box))), /*#__PURE__*/




      React.createElement("div", { className: "move", id: "move" }, "MOVE: ",
      this.state.move), /*#__PURE__*/


      React.createElement("div", { className: "player", id: "player" }, "Turn: ",
      this.state.playerTurn), /*#__PURE__*/

      React.createElement("button", { className: "reset", id: "reset", onClick: this.reset }, "Reset Board"), /*#__PURE__*/


      React.createElement("button", { className: "reset", id: "reset", onClick: this.startAgain }, "Reset Game")));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MyApp, null), document.getElementById("root"));