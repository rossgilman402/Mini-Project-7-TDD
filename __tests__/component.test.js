const Component = require("../lib/component.js");
const Header = require("../lib/header.js");
const datejs = require("../lib/date.js");

describe("Component Class", () => {
  describe("Instantiation", () => {
    //it should create an object of type component
    it("should instantiate without any errors", () => {
      //arrange
      //act
      const component = new Component();
      //assert
      expect(component).toBeInstanceOf(Component);
    });
    //it should have an empty childrenList array
    it("it should have an empty childrenList array", () => {
      //arrange
      //act
      const component = new Component();
      //assert
      expect(component.childrenList).toEqual([]);
    });
    //it should have a populated list in childrenList
    it("it should have a populated list in childrenList", () => {
      //arrange
      const testArray = [1, 2, 3];
      //act
      const component = new Component(testArray);
      //assert
      expect(component.childrenList).toEqual(testArray);
    });
  });

  describe("render()", () => {
    //it should return an error to implement render in child class
    it("it should return an error to implement render in child class", () => {
      //arrange
      const error = new Error("Child class must implement render() method.");
      //act
      const component = new Component();
      expect(() => component.render()).toThrowError(error);
    });
  });

  describe("renderInnerHTML()", () => {
    //it should return a list of only strings
    it("it should return a list of only strings", () => {
      //arrange
      const enterList = [new Header()];
      const date = new Date();
      const returnList = [
        `<header class="header"><h1>Todo Today</h1><p>${datejs.formatDate(
          date
        )}</p></header>`,
      ];

      //act
      const component = new Component(enterList);

      expect(component.renderInnerHTML()).toEqual(returnList);
    });
  });
});
