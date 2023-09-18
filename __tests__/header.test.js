const Header = require("../lib/header.js");

describe("Header Class", () => {
  describe("Instantiation", () => {
    //it should create an object of type header
    it("should instantiate without any errors", () => {
      //arrange
      //act
      const header = new Header();
      //assert
      expect(header).toBeInstanceOf(Header);
    });
    //it should have an empty childrenList array
    it("it should have an empty childrenList array", () => {
      //arrange
      //act
      const header = new Header();
      //assert
      expect(header.childrenList).toEqual([]);
    });
    //it should have a populated list in childrenList
    it("it should have a populated list in childrenList", () => {
      //arrange
      const testArray = [1, 2, 3];
      //act
      const header = new Header(testArray);
      //assert
      expect(header.childrenList).toEqual(testArray);
    });
  });

  describe("render()", () => {
    //it should return an error to implement render in child class
    it("should return an HTML string", () => {
      //act
      const header = new Header();
      const html = header.render();

      expect(typeof html).toBe("string");
    });
  });
});
