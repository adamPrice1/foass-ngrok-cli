#!/usr/bin/env node
const Ngrok = require('ngrok');
const chalk = require('chalk');
const express = require("express");
(async function() {
  const ngrok = await Ngrok.connect(8000);
  console.log(chalk.blue(ngrok));
})();
//example: $> fo -path anyway -from Adam
// possible args -path, -name, -from, -company, -tool, -something, -reference,
// -noun, -reaction, -thing

FOASS = 'https://foaas.com/';
variables = ["-path",
      "-name",
      "-from",
      "-company",
      "-tool",
      "-something",
      "-reference",
      "-noun",
      "-reaction",
      "-thing",
      "-do",
      "-behaviour",
      "-language"
      ];
args = {
  "-name":"",
  "-from":"",
  "-company":"",
  "-tool":"",
  "-something":"",
  "-reference":"",
  "-noun":"",
  "-reaction":"",
  "-thing":"",
  "-path":"",
  "-do":"",
  "-behaviour":"",
  "-language":""
};
variables.forEach(function(value){
  i = process.argv.indexOf(value);
  if(i != -1){
    args[value] = process.argv[i+1];

  }
});

url = FOASS + args["-path"];

switch(args["-path"]){

  case "anyway":
    url += "/" + args["-company"] + "/" + args["-from"];
    break;
  case "asshole":
    url += "/" + args["-from"];
    break;
  case "awesome":
    url += "/" + args["-from"];
    break;
  case "back":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "bag":
    url += "/" + args["-from"];
    break;
  case "ballmer":
    url += "/" + args["-name"] + "/" + args["-company"] + "/" + args["-from"];
    break;
  case "bday":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "because":
    url += "/" + args["-from"];
    break;
  case "blackadder":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "bm":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "bucket":
    url += "/" + args["-from"];
    break;
  case "bus":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "bye":
    url +=  "/" + args["-from"];
    break;
  case "caniuse":
    url += "/" + args["-tool"] + "/" + args["-from"];
    break;
  case "chainsaw":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "cocksplat":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "cool":
    url += "/" + args["-from"];
    break;
  case "cup":
    url += "/" + args["-from"];
    break;
  case "dalton":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "deraadt":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "diabetes":
    url += "/" + args["-from"];
    break;
  case "donut":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "dosomething":
    url += "/" + args["-do"] + "/" + args["-something"] + "/" + args["-from"];
    break;
  case "equity":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "everyone":
    url += "/" + args["-from"];
    break;
  case "everything":
    url +=  "/" + args["-from"];
    break;
  case "family":
    url += "/" + args["-from"];
    break;
  case "fascinating":
    url += "/" + args["-from"];
    break;
  case "field":
    url += "/" + args["-name"] + "/" + args["-from"] + "/" + args["-reference"];
    break;
  case "flying":
    url += "/" + args["-from"];
    break;
  case "ftfy":
    url += "/" + args["-from"];
    break;
  case "fts":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "fyyff":
    url +=  "/" + args["-from"];
    break;
  case "gfy":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "give":
    url += "/" + args["-from"];
    break;
  case "greed":
    url += "/" + args["-noun"] + "/" + args["-from"];
    break;
  case "horse":
    url += "/" + args["-from"];
    break;
  case "immensity":
    url += "/" + args["-from"];
    break;
  case "ing":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "jinglebells":
    url +=  "/" + args["-from"];
    break;
  case "keep":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "keepcalm":
    url += "/" + args["-reaction"] + "/" + args["-from"]
    break;
  case "king":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "life":
    url += "/" + args["-from"];
    break;
  case "linus":
    url += "/" + args["-name"] + "/" + args["-from"]
    break;
  case "look":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "looking":
    url +=  "/" + args["-from"];
    break;
  case "madison":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "maybe":
    url += "/" + args["-from"];
    break;
  case "me":
    url += "/" + args["-from"];
    break;
  case "mornin":
    url += "/" + args["-from"];
    break;
  case "no":
    url += "/" + args["-from"];
    break;
  case "nugget":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "off":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "off-with":
    url +=  "/" + args["-behaviour"] + "/" + args["-from"];
    break;
  case "outside":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "particular":
    url += "/" + args["-thing"] + "/" + args["-from"]
    break;
  case "pink":
    url += "/" + args["-from"];
    break;
  case "problem":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "programmer":
    url += "/" + args["-from"]
    break;
  case "pulp":
    url += "/" + args["-language"] + "/" + args["-from"];
    break;
  case "question":
    url +=  "/" + args["-from"];
    break;
  case "ratsarse":
    url += "/" + args["-from"];
    break;
  case "ridiculous":
    url += "/" + args["-from"];
    break;
  case "rtfm":
    url += "/" + args["-from"];
    break;
  case "sake":
    url += "/" + args["-from"];
    break;
  case "shakespeare":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "shit":
    url += "/" + args["-from"];
    break;
  case "shutup":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "single":
    url += "/" + args["-from"];
    break;
  case "thanks":
    url += "/" + args["-from"]
    break;
  case "that":
    url += "/" + args["-from"];
    break;
  case "think":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "thinking":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "this":
    url +=  "/" + args["-from"];
    break;
  case "thumbs":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "too":
    url += "/" + args["-from"];
    break;
  case "tucker":
    url += "/" + args["-from"];
    break;
  case "what":
    url += "/" + args["-from"];
    break;
  case "xmas":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "yoda":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "you":
    url += "/" + args["-name"] + "/" + args["-from"];
    break;
  case "zayn":
    url +=  "/" + args["-from"];
    break;
  case "zero":
    url += "/" + args["-from"];
    break;
}
var app = express();

app.listen(process.env.PORT || 8000);

app.get("*", (req, res) => {
  res.redirect(url);
});
