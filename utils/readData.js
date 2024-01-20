import * as fs from 'fs';

export default function readData() {

const data = fs.readFileSync("data.json", "utf8")
console.log(JSON.parse.data)
return JSON.parse(data)
};