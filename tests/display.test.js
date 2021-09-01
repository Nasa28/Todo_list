import Display from '../src/display'
describe("test displayTask", ()=>{
  it('it test that displayTask has been called', ()=>{
    const spy = jest.spyOn(Display, 'displayTask')
    Display.displayTask()
    expect(spy).toHaveBeenCalled()
  })

  it('it test that displayproject has been called', ()=>{
    const spy = jest.spyOn(Display, 'displayProject')
    Display.displayProject()
    expect(spy).toHaveBeenCalled()
  })

  it('it test that displayProjectTask has been called', ()=>{
    const spy = jest.spyOn(Display, 'displayProjectTask')
    Display.displayProjectTask()
    expect(spy).toHaveBeenCalled()
  })

  it('it test that editProjectTask has been called', ()=>{
    const spy = jest.spyOn(Display, 'displayEditTask')
    Display.displayEditTask()
    expect(spy).toHaveBeenCalled()
  })
})