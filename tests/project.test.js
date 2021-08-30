import { expect, test } from '@jest/globals';
import Project from '../src/project'

describe('Project class', () =>{
  test('Test if project class is defined', ()=>{
    const project = new Project()
    expect(project).toBeDefined();
  })
})