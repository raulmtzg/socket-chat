class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id , nombre, sala){
        
        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }

    getPersona( id ) {

        //Aqui busca la persona dentro del arreglo
        //Si no existe devuelve undefined
        let persona = this.personas.filter( persona => {
            return persona.id === id;
        })[0];

        return persona;
    }

    getPersonas() {

        return this.personas;
    }

    getPersonasPorSala( sala ) {

        let personasEnSala = this.personas.filter( persona => persona.sala === sala);
        
        return personasEnSala;

    }

    borrraPersona( id ){

        let personaBorrada = this.getPersona( id );

        this.personas = this.personas.filter( persona => {
            return persona.id != id;
        });

        return personaBorrada;

        

    }

}


module.exports = {
    Usuarios
}