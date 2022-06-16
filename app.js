require("colors")


const {guardarDB,leerDB} = require('./helpers/db')
const Tareas = require('./models/tareas');
console.clear();
//const {mostrarMenu,pausa}=require('./helpers/mensajes');
const {inquirerMenu,
    pausaMenu,
    leerInput,
    listadoTareasBorrar,
    confirm,
    mostrarListadoCheacklist
    }=require('./helpers/inquirer');
const main = async()=>{
    let opt = -1;
    const tareas= new Tareas();
    const tareasDB = leerDB()
    if(tareasDB){
        tareas.recuperarTarea(tareasDB)
    }
    do{
        opt=await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción');
                tareas.crearTarea(desc)
                break;
            case '2':
                tareas.listadoCompleto()
               
                break;
            case '3':
                tareas.listarPendientesCompletadas("a")
                break;
            case '4':
                tareas.listarPendientesCompletadas(null)
                break;
            case '5':
                const ids = await mostrarListadoCheacklist(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
                console.log({ids})
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)
                const des = await confirm('¿Está seguro');
                if(des){
                    tareas.borrartarea(id);
                    console.log('Tarea borrada')
                }
                
                console.log(id)
                break;    
            
            default:
                break;
        }
        if( opt !== '0')await pausaMenu()
        guardarDB(tareas.listadoArr)
        //console.log(tareas)
    }while(opt !=='0' );
        
}

main()