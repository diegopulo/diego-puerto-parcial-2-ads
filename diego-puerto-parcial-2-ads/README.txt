Explicación General del Programa e Instrucciones de ejecución

La idea de este programa es el de la parte de selección de personajes de un juego basado en roles de ataque 
y defensa, se tiene el problema de que al ser varias clases al momento de crear cada jugador sería de gran ayuda 
crear objetos complejos con solo indicar el tipo de personaje que se escoge, además en caso de que no se escoga agente 
o que algo falle no se quiere que el usuario deje de jugar por lo que se considera la creación de un agente nulo por defecto
para evitar estos posibles errores. Se desarrollo en VSCODE con ayuda de la extensión Quokka.js que permite ejecutar archivos 
javascript y typescript, instalando esta extensión en VSCODE se puede probar de manera sencilla, se desarrollo la misma lógica 
tanto en js como en ts, la parte de prueba estara denotada con la palabra "//PRUEBAME CON CADA UNO DE LOS CASOS QUE SE PODRÍAN DAR!!! "
abajo se encontrarán unas linéas para probar el código.

El primer patrón de diseñó es el creacional Factory ya que como se mencionaba anteriormente se necesita crear
objetos que tienen en común que todos seran agentes pero con diferencias por lo que conviene una "fabrica" que 
me permita dependiendo del que necesite crearlo, en el de js se evidencia de las líneas 37:53, en ts de la 2:4, 37:48 y en cada una 
de las clases que implementan la interfaz IAgente.

El segundo patrón de diseño es el comportamental Null Object ya que al mencionar que se puede no elegir agente, o que por algún fallo
no hay uno selecionado se quiere que el jugador no reciba un error ya que dañaría la experiencia de usuario y podría
desencadenar más fallos, por lo que conviene delimitar estos fallos a una clase concreta, en el js se evidencia 21:26 y de la 54:57, en el de ts 
de la 5:7, 28:32 y 49:51.