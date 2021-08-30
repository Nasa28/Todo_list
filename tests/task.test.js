import { expect, it } from "@jest/globals";
import Task from "../src/task";
describe("test task constructor function", ()=>{
  const task = new Task("Tea", "tea is great", 2-9-2021,"high",'new')
  it('confirms Task constructor', ()=>{
    expect(task).toBeDefined();
  })

  it('test presence of title', ()=>{
    expect(task.title).toBe("Tea")
  })

  it('test presence of description', ()=>{
    expect(task.description).toBe("tea is great")
  })
})