function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const link =
"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const r = document.querySelector(":root");
const colors = [
"#800800",
"#800880",
"#123456",
"#654321",
"#987321",
"#321321",
"#456321"];


class MyApp extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "getRandom",















    () => {
      const { quotes } = this.state;

      if (quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({ index });
        this.setColors();
      }
    });_defineProperty(this, "setColors",

    () => {
      let index = Math.floor(Math.random() * colors.length);
      r.style.setProperty("--backgroundColor", colors[index]);
    });this.state = { quotes: [], index: 0 };this.setColors = this.setColors.bind(this);}componentDidMount() {fetch(link).then(res => res.json()).then(res => {this.setState({ quotes: res.quotes }, this.getRandom);});}

  render() {
    const { quotes, index } = this.state;

    const quote = quotes[index];

    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { id: "text" },
      " ", /*#__PURE__*/
      React.createElement("i", { class: "fa fa-quote-left pr-3" }, " "), " ", quote && quote.quote), /*#__PURE__*/

      React.createElement("div", { id: "authorDashes" },
      " ", "-- ", /*#__PURE__*/
      React.createElement("span", { id: "author" }, " ", quote && quote.author, " ")), /*#__PURE__*/

      React.createElement("hr", null), /*#__PURE__*/
      React.createElement("div", { id: "links" }, /*#__PURE__*/
      React.createElement("a", {
        id: "tweet-quote",
        href: "https://twitter.com/intent/tweet",
        target: "_top" },

      " ", /*#__PURE__*/
      React.createElement("i", { className: "fa-brands fa-square-twitter" }, " "), " Twitter", " "), /*#__PURE__*/

      React.createElement("a", { id: "tumblr-quote", href: "#" },
      " ", /*#__PURE__*/
      React.createElement("i", { className: "fa-brands fa-square-tumblr" }, " "), " Tumblr", " "), /*#__PURE__*/

      React.createElement("button", { id: "new-quote", onClick: this.getRandom }, /*#__PURE__*/
      React.createElement("i", { class: "fa-solid fa-circle-chevron-right" }), " New Quote", " "))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MyApp, null), document.getElementById("root"));