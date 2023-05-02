//  Module package CORE

// let number = 0;
// setInterval(function () {
//   console.log("hisob:", number);
//   number++;
// }, 0);

// const { log } = require('console');
// const fs = require('fs');
// const { networkInterfaces} = require("os");
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log("**************************************");

// fs.writeFileSync("./input.txt", `${data} \n\t\t by Sirojiddin`);
// const new_data = fs.readFileSync("./input.txt", "utf8");
// console.log(new_data);

// ######################################################### EXTERNAL start

//  Module package EXTERNAL
// const moment = require('moment');
// const time = moment().format('YYYY-MM-DD'); /*Bubizga faqat yil oy va kunni chiqaradi*/
// const time = moment().format();
// console.log(time);

// setInterval(() => {
//     console.log(`hozirgi vaqt: ${time}`);
// }, 5000);

// ######################################################### EXTERNAL next

/* inquirer => terminalimiz bn bog'liq turli xil javoblarning ichidan 
bittasini tanlash yoki user input kiritish va shunga o'xshagan narsalar uchun ishlatilinadi 
biz terminalda biron input kiritganimizda bizga codimiz ichida paydo bo'lishini ko'ramiz*/

// const inquirer = require("inquirer");
// inquirer
//   .prompt([{type: 'input', name: "raqam", message: "raqamni kiriting? " }])
//   .then((answer) => {
//     console.log("men kiritgan raqam qiymati: ", answer.raqam);
//   })
//   .catch((err) => console.log(err));

// ######################################################### EXTERNAL naxt

// const { log } = require("util");
// const validator = require("validator");
// const test = validator.isEmail('foo@bar.com');
// const test = validator.isInt("as"/*100*/); /* string ichida number true tekshiradi agar string yozsak false qaytaradi*/
// const test = validator.isIP("175.115.165.255"); /* check my IP bu ipni tekshiradi true qaytaradi agar ip 3ta sondan iborat 4ta qattor 175.115.165.255 shunaqa */
// console.log("test:", test);

// ####################################################### EXTERNAL naxt

// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random:", random);  /* takrorlanmaydigan random stringlarini xosil qilib beradi misol: 83967962-165c-40fb-8f8b-23247d9050c1 shu ko'rinishda*/

// const chalk = require("chalk");
// const log = console.log;

// //  log(chalk.blue("Hello") + random + chalk.red(" !"));
//  log(chalk.blue(`uuid creates ${random}`));

// console.log(require("module"));
// ###################################################### EXTERNAL end

// ###################################################### FILE start
//  Module package FILE
/* nima? => o'zimiz malum bir packages ni yasab olib s
 hartli ravishda ishlatamiz */

// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(80, 20);
// console.log("Natija: ", natija);
// console.log('***************');

// const natija2 = calculate.qoshish(70, 20);
// console.log("Natija: ", natija2);
// console.log('**************');

// const natija3 = calculate.ayirish(80, 20);
// console.log("Natija: ", natija3);

// console.log(require('module').wrapper);

// ##################################################### FILE naxt

// const Account = require("./account");
// Account.tellMeAboutClass();
// Account.telMeTime();

// console.log("=====================");

// const myAccount = new Account("Dean", 200000, 964654654654564);
// myAccount.giveMeDetails();

// myAccount.makeDeposit(1000000);

// bugatti chiyron 2,4mln usd
// myAccount.withdrawMoney(400000);

// ferrariz 40000 usd
// myAccount.withdrawMoney(400000);
// myAccount.makeDeposit(200000);

