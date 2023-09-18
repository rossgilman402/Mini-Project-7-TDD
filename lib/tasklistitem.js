const Component = require("./component.js");

class TaskListItem extends Component {
  constructor(childList, priority) {
    super(childList);
    this.priority = priority;
  }

  render() {}
}

module.exports = TaskListItem;
