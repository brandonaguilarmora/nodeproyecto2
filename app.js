require("colors")

const Tareas = require('./models/tareas');
console.clear();
//const {mostrarMenu,pausa}=require('./helpers/mensajes');
const {inquirerMenu,pausaMenu, leerInput}=require('./helpers/inquirer');
const main = async()=>{
    let opt = -1;
    const tareas= new Tareas();
    do{
        opt=await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción');
                console.log(desc)
                tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas.listadoArr)
                break;
            default:
                break;
        }
        if( opt !== '0')await pausaMenu()
        //console.log(tareas)
    }while(opt !=='0' );
        
}

main()