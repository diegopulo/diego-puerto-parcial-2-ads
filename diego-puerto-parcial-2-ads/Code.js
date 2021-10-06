
function Duelista(nombre)
{
    this.nombre = nombre;
    this.tipo = "Duelista"
    this.descripcion = "iniciar Combates generando bajas para el equipo"
}
function Controlador(nombre)
{
    this.nombre = nombre;
    this.tipo = "Controlador"
    this.descripcion = "bloquear defensas del enemigo y supervisar el control de posiciones"
}
function Centinela(nombre)
{
    this.nombre = nombre;
    this.tipo = "Centinela"
    this.descripcion = "proteger objetivos con su utilidad para evitar ataques enemigos"
}

function NullPersonaje()
{
    this.nombre = "Guest";
    this.tipo = "no selecionado"
    this.descripcion = "no disponible"
}

function Iniciador(nombre)
{
    this.nombre = nombre
    this.tipo = "Iniciador"
    this.descripcion = "entrar a Zonas para abrir paso al equipo"
}

function SeleccionPersonaje()
{
    this.crearPersonaje = (nombre, tipo) => {
        if(tipo == "Duelista")
        {
            return new Duelista(nombre)
        }
        if(tipo == "Iniciador")
        {
            return new Iniciador(nombre)
        }
        if(tipo == "Controlador")
        {
            return new Controlador(nombre)
        }
        if(tipo == "Centinela")
        {
            return new Centinela(nombre)
        }
        if(tipo == null || nombre == null)
        {
            return new NullPersonaje()
        }
    }
}
//Prueba

const seleccionPersonaje = new SeleccionPersonaje()
const personajes = []


function test()
{
    console.log("El jugador " + this.nombre + " es un agente " + this.tipo + " Por lo que su rol será " + this.descripcion)
}

//PRUEBAME CON CADA UNO DE LOS CASOS QUE SE PODRÍAN DAR!!! 

//Personaje existente y duelista
personajes.push(seleccionPersonaje.crearPersonaje("User1", "Duelista"))
//Personaje No existente donde se indica el nombre pero se asigna el preterminado para un usuario que no escogio agente
personajes.push(seleccionPersonaje.crearPersonaje("Nulltest1"))
//Personaje No existente donde se asigna el predeterminado
personajes.push(seleccionPersonaje.crearPersonaje())
//Personaje existente y iniciador
personajes.push(seleccionPersonaje.crearPersonaje("CamiloPro", "Iniciador"))


personajes.forEach( per => {
    test.call(per)
})