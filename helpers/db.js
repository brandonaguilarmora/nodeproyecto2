const fs = require('fs');
const path = './DB/data.json'

const guardarDB=(data)=>{
    fs.writeFileSync(path, JSON.stringify(data));

}
const leerDB = ()=>{
    if(!fs.existsSync(path)) return null
    
    const data= JSON.parse(fs.readFileSync(path, {encoding:'utf-8'}))
    return data;
}

module.exports = {
    guardarDB,
    leerDB
}
