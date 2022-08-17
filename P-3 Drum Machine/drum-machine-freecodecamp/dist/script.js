function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const keySets = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



class MyApp extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleKeyPress",















    event => {
      const searchObject = keySets.find(
      sound => sound.keyTrigger === event.key.toUpperCase());

      if (searchObject !== null && searchObject !== undefined) {
        this.setState({ display: searchObject.id });
        document.getElementById(searchObject.keyTrigger).active;
        const audio = document.getElementById(searchObject.keyTrigger);
        audio.play();
      }
    });_defineProperty(this, "handleClick",

    event => {
      this.setState({ display: event.target.id });
      const audio = event.target.children[0];
      audio.play();
    });this.state = { display: "" };this.handleClick = this.handleClick.bind(this);this.handleKeyPress = this.handleKeyPress.bind(this);}componentDidMount() {document.addEventListener("keydown", this.handleKeyPress);}componentWillUnmount() {document.removeEventListener("keydown", this.handleKeyPress);}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("div", { className: "drum-pad-container", tabIndex: 0 },
      " ",
      keySets.map((keys, idx) => /*#__PURE__*/
      React.createElement("button", {
        className: "drum-pad",
        id: keys.id,
        onClick: this.handleClick,
        key: idx,
        onKeyDown: this.handleKeyPress },

      " ",
      keys.keyTrigger, " ", /*#__PURE__*/
      React.createElement("audio", {
        className: "clip",
        src: keys.url,
        type: "audio/mpeg",
        id: keys.keyTrigger }))), /*#__PURE__*/



      React.createElement("div", { className: "key-title" }, "KEY TITLE", /*#__PURE__*/

      React.createElement("div", { className: "key-name" }, this.state.display))))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MyApp, null), document.getElementById("root"));