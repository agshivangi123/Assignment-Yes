const fs = require('fs')
const path = require("path")

const automation = 'task_automation'

if(!fs.existsSync(automation)){
    fs.mkdirSync(automation)
}

//Creating three files
fs.writeFileSync('./task_automation/file1.txt',"My name is Shivangi Agrawal.")
fs.writeFileSync('./task_automation/file2.txt'," I live in Ujjain.")
fs.writeFileSync('./task_automation/file3.txt'," Ujjain is a holy city.")


//Joining files
fs.writeFileSync("./task_automation/cocatenated.txt","Cocatenated Content: ")
const cocatenatedContent = fs.readFileSync(path.join(automation,'file1.txt')) + fs.readFileSync(path.join(automation,'file2.txt')) + fs.readFileSync(path.join(automation,'file3.txt'))
fs.writeFileSync("./task_automation/cocatenated.txt", cocatenatedContent)

//Printing the data
const data = fs.readFileSync("./task_automation/cocatenated.txt" , "utf-8")
console.log(data)

//Deleting the files
fs.unlinkSync("./task_automation/file1.txt")
fs.unlinkSync("./task_automation/file2.txt")
fs.unlinkSync("./task_automation/file3.txt")

