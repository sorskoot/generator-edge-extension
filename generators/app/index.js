var Generator = require('yeoman-generator');
var fs = require('fs');
var inquirer = require('inquirer');
//var edgeManifest = require('./manifest');

module.exports = class extends Generator {
    prompting() {
        var prompts = [
            {
                name: 'name',
                message: 'What would you like to call this extension?',
                default: (this.appname) ? this.appname : 'myEdgeApp'
            }, {
                name: 'description',
                message: 'How would you like to describe this extension?',
                default: 'My Edge Extension'
            }, {
                name: 'authorName',
                message: 'What is your name?',
                default: 'AppAuthor'
            }
        ];

        return this.prompt(prompts).then(function(answers) {
            this.options = {
                authorName: answers.authorName,
                extensionName: answers.name,
                extensionDesc: answers.description
            }
        }.bind(this));
    }

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
                AUTHOR_NAME: this.options.authorName,
                EXTENSION_DESCRIPTION: this.options.extensionDesc,
                EXTENSION_NAME: this.options.extensionName
            }
        );
    }

};