var Generator = require('yeoman-generator'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

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
    var that = this;
    //Default component template
    var template = 'MyFunctionalComponent';
    if (this.answers.type === 'Class') {
      template = 'MyClassComponent';
    }
    var replacement = new RegExp(template,"g");
    
    this.registerTransformStream(rename(function (path) {
        path.basename = path.basename.replace(replacement, that.answers.name)
      }));

      this.registerTransformStream(replace(template, that.answers.name));

      this.fs.copy(
        this.templatePath(template + '/'),
        this.destinationPath(this.answers.name)
      )
  }
}
