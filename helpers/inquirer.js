const inquirer = require('inquirer')
require('colors')
const preguntas= [
    {
        type: 'list',
        name: 'opcion',
        message: 'Qué desea hacer?',
        choices: [
            {
                value:'1',
                name:`${"1".green}.  Crear tarea`
            },
            {
                value:'2',
                name:`${"2".green}.  Listar tarea`
            },
            {
                value:'3',
                name:`${"3".green}.  Listar tarea completadas`
            },
            {
                value:'4',
                name:`${"4".green}.  Listar tarea pendientes`
            },
            {
                value:'5',
                name:`${"5".green}.  Completar tarea(s)`
            },
            {
                value:'6',
                name:`${"6".green}.  Borrar tarea`
            },
            {
                value:'0',
                name:`${"0".green}.  Salir\n`
            },
        ]
    }
]
const pausa = [
    {
        type:"confirm",
        name: "opcion",
        message: `\nPresione ${'ENTER'.red} para continuar\n`
    }
]
const inquirerMenu = async()=>{
    console.clear();
    console.log("==========================".green)
    console.log("  Seleccione una opción".green)
    console.log("==========================".green)    
    const {opcion}=await inquirer.prompt(preguntas)
    return opcion
}
const pausaMenu = async()=>{
    await inquirer.prompt(pausa)
}

const leerInput = async(message)=>{
    const pregunta=[
        {
            type:"input",
            name:'descripcion',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Ingrese un valor';
                }
                return true;
            }
        }
    ];
    const {descripcion}= await inquirer.prompt(pregunta);
    return descripcion;
}
module.exports ={
    inquirerMenu,
    pausaMenu,
    leerInput
}