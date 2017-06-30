var Generator = require('yeoman-generator');
var fs = require('fs');

module.exports = class extends Generator {
    // method1() {
    //   this.log('method 1 just ran--' + this.sourceRoot());
    // }

    // method2() {
    //   this.log('method 2 just ran');
    // }

    writing() {
        this.fs.copy(
            this.templatePath('icons/icon-48.png'),
            this.destinationPath('icons/icon-48.png')
        );
        this.fs.copy(
            this.templatePath('scripts/content.js'),
            this.destinationPath('scripts/content.js')
        );
        this.fs.copyTpl(
            this.templatePath('manifest.json'),
            this.destinationPath('manifest.json'),
            {
                AUTHOR_NAME: 'Author',
                EXTENSION_DESCRIPTION: 'An Edge Extension made with Yeoman',
                EXTENSION_NAME: 'EdgeExtension'
            }
        );
    }

};