const yaml = require('yaml')
const fs = require('fs-extra')

const workshopData = fs.readFileSync('workshopData.yml', 'utf8')

const data = yaml.parse(workshopData)
console.log(data)

