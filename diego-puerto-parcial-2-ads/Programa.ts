
interface IAgente {
    rol():void
}
interface INull {
    rol():void
}
class Duelist implements IAgente {
    rol(): void {
    console.log("Soy Duelista y mi rol es iniciar Combates generando bajas para el equipo")
    }
}
class Iniciator implements IAgente {
    rol(): void {
    console.log("Soy Iniciador y mi rol es entrar a Zonas para abrir paso al equipo")
    }
}
class Controller implements IAgente {
    rol(): void {
    console.log("Soy Controlador y mi rol es bloquear defensas del enemigo y supervisar el control de posiciones")
    }
}
class Centinell implements IAgente {
    rol(): void {
    console.log("Soy Centinela y mi rol es proteger objetivos con su utilidad para evitar ataques enemigos")
    }
}
class AgentNull implements INull {
    rol(): void {
        console.log("Soy Nulo y no tengo rol asignado")
    }
}


class AgenteFabrica {
    static create(entity: string) {
        if(entity == "DUELISTA") {
            return new Duelist
        }
        else if(entity == "INICIADOR") {
            return new Iniciator
        }
        else if(entity == "CONTROLADOR") {
            return new Controller
        }
        else if(entity == "CENTINELA") {
            return new Centinell
        }
        else {
            return new AgentNull()
        }
    }
}


//PRUEBAME CON CADA UNO DE LOS CASOS QUE SE PODRÍAN DAR!!! 

const player = AgenteFabrica.create("DUELISTA")
// const player = AgenteFabrica.create()
// const player = AgenteFabrica.create("INICIADOR")
// const player = AgenteFabrica.create("CENTINELA")
// const player = AgenteFabrica.create("CONTROLADOR")
// const player = AgenteFabrica.create("xxx")
player.rol()
