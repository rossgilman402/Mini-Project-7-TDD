const TaskListItem = require("../lib/tasklistitem.js");

describe("TaskListItem Class", () => {
  describe("Instantiation", () => {
    //it should create an object of type TaskListItem
    it("should instantiate without any errors", () => {
      //arrange
      //act
      const taskListTest = new TaskListItem();
      //assert
      expect(taskListTest).toBeInstanceOf(TaskListItem);
    });
    //it should have an empty childrenList array
    it("it should have an empty childrenList array", () => {
      //arrange
      //act
      const taskListTest = new TaskListItem();
      //assert
      expect(taskListTest.childrenList).toEqual([]);
    });
    //it should have a populated list in childrenList
    it("it should have a populated list in childrenList", () => {
      //arrange
      const testArray = [1, 2, 3];
      //act
      const taskListTest = new TaskListItem(testArray);
      //assert
      expect(taskListTest.childrenList).toEqual(testArray);
    });
  });

  // describe("render()", () => {
  //   //it should return an html string
  //   it("should return an HTML string", () => {
  //     //act
  //     const TaskListItem = new TaskListItem();
  //     const html = TaskListItem.render();

  //     expect(typeof html).toBe("string");
  //   });
  // });
  // //it should return a string that calls tas
  // it("should return an HTML string", () => {
  //   //act
  //   const TaskListItem = new TaskListItem();
  //   const html = TaskListItem.render();

  //   expect(typeof html).toBe("string");
  // });
});
