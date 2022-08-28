class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0 };


    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1 });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("nav", { className: "navbar" }, /*#__PURE__*/
      React.createElement("a", { href: "#" }, "Create Token"), /*#__PURE__*/
      React.createElement("a", { href: "#" }, "List Viewer"), /*#__PURE__*/
      React.createElement("a", { href: "#" }, "Transaction"), /*#__PURE__*/
      React.createElement("a", { href: "#" }, "Released Patients")), /*#__PURE__*/


      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "title" }, "Wudam Health Center"), /*#__PURE__*/
      React.createElement("input", {
        type: "button",
        className: "token",
        value: "Create Token",
        onClick: this.handleClick }), /*#__PURE__*/

      React.createElement("div", { className: "last-token" }, "Last Token: ", this.state.counter))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MyApp, null), document.getElementById("root"));