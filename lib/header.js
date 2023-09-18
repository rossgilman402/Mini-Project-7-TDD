const Component = require("./component.js");
const datejs = require("./date.js");

class Header extends Component {
  constructor(childrenList) {
    super(childrenList);
  }

  render() {
    const date = new Date();
    return `<header class="header"><h1>Todo Today</h1><p>${datejs.formatDate(
      date
    )}</p></header>`;
  }
}

module.exports = Header;
