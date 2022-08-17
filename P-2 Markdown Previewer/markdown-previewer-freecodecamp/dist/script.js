marked.setOptions({
  breaks: true });


class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder,
      markedText: marked.parse(placeholder) };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
    this.setState({ markedText: marked.parse(event.target.value) });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("h2", { className: "headings" }, "Text to Markdown"), /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        text: this.state.text,
        onChange: this.handleChange },

      this.state.text)), /*#__PURE__*/



      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("h2", { className: "headings" }, "Preview Markdown Text"), /*#__PURE__*/
      React.createElement("div", {
        id: "preview"
        //markedText={this.state.text}
        , dangerouslySetInnerHTML: { __html: this.state.markedText } }))));




  }}


//a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

const placeholder = `# Markdown Previewer 
## Front End Development Libraries
#### My 2nd Project for [freeCodeCamp](https://www.freecodecamp.org)

This is inline code: \`<h1>Hello World!</h1>\`

Following is Code block:
\`\`\`
marked.setOptions({
  breaks: true
});
\`\`\`

List of What I have learned:
- HTML
- CSS
- Javascript
- React

> Block Quotes!

![Heart Icon](https://cdn-icons-png.flaticon.com/512/1244/1244695.png)
**Love Never Fails You!**
`;

ReactDOM.render( /*#__PURE__*/React.createElement(MyApp, null), document.getElementById("root"));