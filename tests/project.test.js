import Project from '../src/project';

describe('Project class', () => {
  test('Test if project class is defined', () => {
    const project = new Project();
    expect(project).toBeDefined();
  });
  const project = new Project('myProject');
  it('test project name', () => {
    expect(project.topic).toBe('myProject');
  });
  it('tests for wrong project name', () => {
    expect(project.topic).not.toBe('Project');
  });

  it('tests typeOf topic', () => {
    expect(typeof project.topic).toBe('string');
  });

  it('tests typeOf project', () => {
    expect(typeof project).toBe('object');
  });
});