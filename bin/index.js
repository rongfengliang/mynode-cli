#!/usr/bin/env node

const Program = require("commander");
const Prompt = require("inquirer");
const initQuestions = [{
    type: 'list',
    name: 'plattype',
    message: '请选择平台类型?',
    choices: [
        'pass',
        'sass',
        'iaas'
    ]
},
{
    type: 'list',
    name: 'vmCounts',
    message: '请选择您包含的虚拟机数量?',
    choices: ['100', '200', '500', '1000']
}
];
const loginQuestions = [{
    type: 'input',
    name: 'username',
    message: '请输入用户名',
},
{
    type: 'password',
    name: 'password',
    message: '请输入用户密码'
}
];

Program
    .version("0.1.0")
    .description("系统平台初始化工具")
    .option("-i, --init","平台初始化")

Program
    .command("init")
    .alias("i")
    .description("初始化平台")
    .action(() => {
        Prompt.prompt(initQuestions).then(result => {
            console.log("您选择的平台类型信息如下：");
            console.log(JSON.stringify(result));
        })
    });
    Program
    .command("login")
    .alias("l")
    .description("登陆平台")
    .action(() => {
        Prompt.prompt(loginQuestions).then(result => {
            console.log("您登陆的账户信息如下：");
            console.log(JSON.stringify(result));
        })
    })
Program.parse(process.argv);