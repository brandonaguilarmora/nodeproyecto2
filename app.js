require("colors")

console.clear();
//const {mostrarMenu,pausa}=require('./helpers/mensajes');
const {inquirerMenu,pausaMenu}=require('./helpers/inquirer');
const main = async()=>{
    let opt = -1;
    do{
        opt=await inquirerMenu();
        //if( opt !== '0')await pausa()
        await pausaMenu()
    }while(opt !=='0' );
        
}

main()