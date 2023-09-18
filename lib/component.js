class Component {
  constructor(childrenList = []) {
    this.childrenList = childrenList;
  }

  render() {
    throw new Error("Child class must implement render() method.");
  }

  renderInnerHTML() {
    return this.childrenList.map((child) => child.render());
  }
}

module.exports = Component;
