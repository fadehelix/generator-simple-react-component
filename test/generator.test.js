/* eslint-env jest, mocha */
const path = require('path');
const rimraf = require('rimraf');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('Functional component', () => {
  const componentName = 'testFnComponent';
  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, 'tmp'))
      .withPrompts({
        name: componentName,
        type: 'Functional'
      });
  });
  afterEach(() => {
    rimraf.sync(path.join(__dirname, 'tmp'));
  });
  it('create component with given name', () => {
    assert.file(path.join(__dirname, `tmp/${componentName}/${componentName}.jsx`));
  });
  it('function has given name', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}/${componentName}.jsx`), `const ${componentName}`);
  });
  it('index imports component', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}/index.js`), `import ${componentName}`);
  });
  it('index exports component', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}/index.js`), `export default ${componentName}`);
  })
});

describe('Class component', () => {
  const componentName = 'testClassComponent';
  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, 'tmp'))
      .withPrompts({
        name: componentName,
        type: 'Class'
      });
  });
  afterEach(() => {
    rimraf.sync(path.join(__dirname, 'tmp'));
  });
  it('create component with given name', () => {
    assert.file(path.join(__dirname, `tmp/${componentName}/${componentName}.jsx`));
  });
  it('function has given name', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}/${componentName}.jsx`), `class ${componentName}`);
  });
  it('index imports component', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}/index.js`), `import ${componentName}`);
  });
  it('index exports component', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}/index.js`), `export default ${componentName}`);
  })
});
