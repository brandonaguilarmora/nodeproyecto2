let Tarea = require('./tarea') //
const {leerDB} = require('../helpers/db')
require('colors')
class Tareas {

    _listado = {}
    get listadoArr(){
        const listado= [];
        Object.keys(this._listado).forEach(key =>{
            listado.push(this._listado[key])
        })
        return listado
    }

    constructor(){
        this._listado = {}
    }
    recuperarTarea(tareas = []){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea( desc ){
        const tarea = new Tarea(desc)
        this._listado[tarea.id]=tarea;
    }
    listadoCompleto(){
        //console.log(this.listadoArr);
        this.listadoArr.forEach( (tarea, i) => {

            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);

        });   
        
    }
    borrartarea(id=''){
        if(this._listado[id]){
            delete this._listado[id] 
        }
    }
    listarPendientesCompletadas(completadas = null){
        this.listadoArr.forEach( (tarea, i) => {
            const { desc, completadoEn } = tarea;
            if(typeof(completadas)===typeof(completadoEn)){
                const idx = `${i + 1}.`.green;
                
                const estado = ( completadoEn ) 
                                    ? `${completadoEn}`
                                    : 'Pendiente'.red;
                console.log(`${ idx } ${ desc } :: ${ estado }`);                    
            }
                

        });    
    }
    listarPendientesCompletadas(completadas = null){
        this.listadoArr.forEach( (tarea, i) => {
            const { desc, completadoEn } = tarea;
            if(typeof(completadas)===typeof(completadoEn)){
                const idx = `${i + 1}.`.green;
                
                const estado = ( completadoEn ) 
                                    ? `${completadoEn}`.green
                                    : 'Pendiente'.red;
                console.log(`${ idx } ${ desc } :: ${ estado }`);                    
            }
                

        });    
    }
    toggleCompletadas(ids =[]){

        ids.forEach(id => {
            
            const tarea = this._listado[id];
            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();
            }
        });
        this.listadoArr.forEach(tarea =>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null
            }
        })
    }
    
}

module.exports = Tareas;
