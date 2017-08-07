const Generator = require('yeoman-generator');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

module.exports = class extends Generator {

  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your component name',
      default: 'MyComponent'
    },
    {
      type: 'list',
      name: 'type',
      message: 'Component type',
      choices: ['Functional', 'Class']
    }
    ]).then(answers => {
      this.answers = answers;
    });
  }

  writing() {
    const that = this;
    // Default component template
    let template = 'MyFunctionalComponent';
    if (this.answers.type === 'Class') {
      template = 'MyClassComponent';
    }
    const replacement = new RegExp(template, 'g');

    this.registerTransformStream(rename(path => {
      path.basename = path.basename.replace(replacement, that.answers.name);
    }));

    this.registerTransformStream(replace(template, that.answers.name));

    this.fs.copy(
        this.templatePath(template + '/'),
        this.destinationPath(this.answers.name)
      );
  }
};
