import { expect, test } from '@jest/globals';
import Project from '../src/project'

describe('Project class', () =>{
  test('Test if project class is defined', ()=>{
    const project = new Project()
    expect(project).toBeDefined();
  })

  test('test project name', ()=>{
    const project = new Project("myProject")
    expect(project.topic).toBe("myProject")
  })

  test('tests for wrong project name', ()=>{
    const project = new Project("myProject")
    expect(project.topic).not.toBe("Project")
  })
})