import React from "react"
import "../itemListContainer/itemListContainer.css"
import { useEffect } from "react"
import { useState } from "react"
import ItemList from "../itemList/ItemList.js"
const ItemListContainer = () => {
   const [products,setproducts]=useState([])
   const [error,setError]=useState(null)
   const [isPutPost, setPutPost] = useState (false)
  
   useEffect(()=>{
         fetch('https://fakestoreapi.com/products?limit=15')
        .then(res=>res.json())
        .then((res)=> setproducts(res))
        .catch((err)=>setError(err))
    },[])


    const ProductoPut = ()=>{
    fetch('https://fakestoreapi.com/products/1',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'Minecraft',
                    price: 2000,
                    description: 'El juego se centra en la colocación y destrucción de bloques, siendo que este se compone de objetos tridimensionales cúbicos, colocados sobre un patrón de rejilla fija. Estos cubos o bloques representan principalmente distintos elementos de la naturaleza, como tierra, piedra, minerales, troncos, entre otros.',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420614/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I_k5yscq.webp',
                    category: 'multijugador'
                }),
                headers: {
                    "Content-type": "application/json",
                }
        
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/2',{
                method:"PUT",
                body:JSON.stringify(
                    {
                        title: 'The legend of Zelda',
                        price: 3500,
                        description: 'Su trama por lo general describe las heroicas aventuras del joven guerrero Link, que debe enfrentarse a peligros y resolver acertijos para ayudar a la Princesa Zelda a derrotar a Ganondorf y salvar su hogar, el reino de Hyrule.',
                        image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420612/BOTW-Share_icon_ujdp0a.jpg',
                        category: 'aventura'
                    }),
                    headers: {
                        "Content-type": "application/json",
                    }
                
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
                fetch('https://fakestoreapi.com/products/3',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'Fallout 4',
                    price: 5000,
                    description: ' encarnamos a la única persona con vida en el Refugio 111, en un mundo devastado por la guerra nuclear. Deberemos sobrevivir al Yermo, reconstruir refugios y combatir contra criaturas, mutantes, vestigios robóticos y carroñeros en los alrededores de una Boston apocalíptica.',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420611/maxresdefault_m47vux.jpg',
                    category: 'acción'
                } ),
                headers: {
                    "Content-type": "application/json",
                }
           
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/4',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'Tomb Raider',
                    price: 2000,
                    description: 'TEl juego transcurre en Yamatai, una isla del Triángulo del Dragón, en la costa de Japón. La isla y el reino que una vez existieron es un misterio, debido a las tormentas y corrientes marítimas que la rodean. Yamatai fue gobernada por la Reina del Sol, llamada Himiko, quien, acorde a la leyenda, tenía poderes místicos que la permitían controlar el tiempo atmosférico. Se sabe poco acerca de la historia de Yamatai desde que Himiko murió.he Escapists 2 es un juego que mezcla el género de aventuras con el de rol bajo una estética claramente retro propia de los años 80 del siglo pasado. En él, tu objetivo será el de escapar de una prisión o, al menos, intentarlo, para lo cual tendrás que desarrollar las habilidades del personaje y trazar complicadas estrategias. Además, como principal novedad respecto a su precursor, en esta ocasión cuenta con un sofisticado modo multijugador cooperativo para hasta cuatro personas, lo que permite sacar aún más jugo a la historia.',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420612/SHJEL4EFBRDNBIPLDN4TN2RRWY_uxlyjn.webp',
                    category: 'aventura'
                }),
                headers: {
                    "Content-type": "application/json",
                }
            
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/5',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'The Escapists 2',
                    price: 700,
                    description: 'The Escapists 2 es un juego que mezcla el género de aventuras con el de rol bajo una estética claramente retro propia de los años 80 del siglo pasado. En él, tu objetivo será el de escapar de una prisión o, al menos, intentarlo, para lo cual tendrás que desarrollar las habilidades del personaje y trazar complicadas estrategias. Además, como principal novedad respecto a su precursor, en esta ocasión cuenta con un sofisticado modo multijugador cooperativo para hasta cuatro personas, lo que permite sacar aún más jugo a la historia.',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420611/mejores-juegos-multijugador_bhivxb.webp',
                    category: 'multijugador'
                }),
                headers: {
                    "Content-type": "application/json",
                }
            
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/6',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'Gears of War: Judgment',
                    price: 2800,
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420611/imagesa_w77pqo.jpg',
                    category: 'acción'
                }),
                headers: {
                    "Content-type": "application/json",
                }
            
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'Gears of War: Judgment',
                    price: 1200,
                    description: 'Ambientado 30 días después del Día de Emergencia, 14 años antes de Gears of War 1. Narra la historia del Escuadrón Kilo, un comando liderado por dos viejos conocidos de la saga: Damon Baird y Augustus Cole. A ellos se unirán nuevos personajes como Sofía Hendrick y Garron Paduk, en su intento por salvar la asediada ciudad de Halvo Bay de un nuevo y terrible enemigo conocido como General Karn.',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420611/GOW-Judgment_Horiz_32x18_FINAL_rgba_yqpcyn.jpg',
                    category: 'acción'
                }),
                headers: {
                    "Content-type": "application/json",
                }
            
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/8',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'Fall Guys',
                    price: 1000,
                    description: 'Es un juego que hasta 60 jugadores pueden competir en partidas similares a un Battle Royale. Los jugadores, representados como alubias vivas con brazos y piernas,se mueven por un campo de juego tridimensional, con movimientos adicionales como saltar, agarrar/trepar o zambullirse para ayudar en el juego.El objetivo es calificar para las rondas posteriores completando con éxito cada uno de los minijuegos seleccionados al azar.Ciertos minijuegos implican correr hacia una línea de meta al final del mapa, mientras que otros agregan elementos de trabajo en equipo.En cada minijuego aparecen obstáculos alrededor del mapa para mayor complejidad.',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420611/EGS_FallGuys_Mediatonic_S1_2560x1440-187aa50ffaa014885d6702a0b632f848_fbuo17.jpg',
                    category: 'multijugador'
                } ),
                headers: {
                    "Content-type": "application/json",
                }
           
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/9',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'Call of Duty: Black Ops',
                    price: 2750,
                    description: 'La historia del juego transcurre durante la Guerra Fría (mayoritariamente durante la Guerra de Vietnam). El protagonista de la trama es Alex Mason, un agente del Grupo de Estudios y Obsevaciones (SOG), y además agente de la División de Actividades Especiales (SAD) de la CIA. Como en otras ediciones de la serie, el videojuego es de disparos en primera persona del tipo bélico, y el ambiente cerrado y lineal se sigue manteniendo al igual que otros títulos de la serie, debido a que cada misión es necesaria para progresar a través del juego y desbloquear más contenido sobre esta misma.',
                    image: 'https://i.pravatar.cchttps://res.cloudinary.com/dabjc3dh1/image/upload/v1670420611/icono_bannera_kariis.jpg',
                    category: 'acción'
                }),
                headers: {
                    "Content-type": "application/json",
                }
            
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/10',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'Horizon Forbidden West',
                    price: 4000,
                    description: 'Los jugadores controlan una vez más a Aloy, una joven guerrera y cazadora de la tribu Nora. Al igual que Horizon Zero Dawn, Aloy puede participar en misiones secundarias además de las principales, entre otras actividades. Al completar las diferentes misiones, Aloy obtiene experiencia y aumenta de nivel ganando puntos de habilidad. ',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420610/horizon-forbidden-west_2v57a_mxejkp.jpg',
                    category: 'aventura'
                }),
                headers: {
                    "Content-type": "application/json",
                }
            
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/11',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'The Last of Us',
                    price: 4300,
                    description: 'De acuerdo con la trama de The Last of Us, en septiembre de 2013 se desata una pandemia en Estados Unidos ocasionada por una cepa del hongo Cordyceps, que al infectar a los humanos los convierte en criaturas caníbales, y que se transmite a través de una simple mordedura. En medio de la histeria colectiva, Joel (Troy Baker), su hija Sarah (Hana Hayes) y su hermano Tommy (Jeffrey Pierce) abandonan su hogar en los suburbios de Austin, Texas para evitar la infección, pero en el camino son interceptados por un oficial que asesina a Sarah al creer que está infectada.',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420610/EQFXRNE255BAZNAORHFGGM56YY_vg7ygi.jpg',
                    category: 'aventura'
                }),
                headers: {
                    "Content-type": "application/json",
                }
            
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/12',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'God of War: Ragnarök',
                    price: 5000,
                    description: 'El jugador controla al personaje Kratos en elementos de juego de rompecabezas y combate basados en combo. Las armas principales de Kratos son un hacha de batalla mágica llamada Hacha Leviatán, y sus espadas de doble cadena, las Espadas del Caos. También tiene un escudo, cuya versión original se llama Escudo del Guardián. Kratos también utiliza el combate cuerpo a cuerpo. El Hacha Leviatán está imbuida de magia elemental de hielo. Puede arrojarse a los enemigos y volver a invocarse mágicamente en su mano, de forma similar al martillo Mjölnir de Thor. ',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420610/assassin-s-creed-odyssey-principala_bfjaqx.jpg',
                    category: 'acción'
                } ),
                headers: {
                    "Content-type": "application/json",
                }
           
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/13',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'Assassins Creed Odyssey',
                    price: 4500,
                    description: 'Assassins Creed: Odyssey pone más énfasis en los elementos rol que en los juegos anteriores de la serie. El juego contiene opciones de diálogo, misiones ramificadas y múltiples finales.1​El jugador puede elegir entre los hermanos Alexios y Kassandra en cuanto a quién usan como personaje principal.El juego presenta un sistema de notoriedad en el que los mercenarios persiguen al jugador si comete crímenes como matar o robar en presencia de otros.',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420610/2022generico_fhx0gu.jpg',
                    category: 'aventura'
                }),
                headers: {
                    "Content-type": "application/json",
                }
            
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/14',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'Counter-Strike: Global Offensive',
                    price: 500,
                    description: 'El juego consiste en dos equipos, los Terroristas y los Antiterroristas (T y CT, respectivamente), los cuales se enfrentan entre ellos en diferentes modos de juego. El modo más común es en el cual el bando Terrorista tienen que plantar y defender una bomba mientras los Antiterroristas defender las zonas de plante de la bomba y su posterior desactivación. Hay 9 modos de juego oficiales, cada uno con sus características específicas. ',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420610/capsule_616x353_to3qgz.jpg',
                    category: 'multijugador'
                } ),
                headers: {
                    "Content-type": "application/json",
                }
           
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            fetch('https://fakestoreapi.com/products/15',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'PlayerUnknowns Battlegrounds',
                    price: 350,
                    description: 'PUBG es un videojuego de acción en el cual hasta 100 jugadores pelean en una Batalla Real (Battle Royale), un tipo de combate a muerte en el cual hay enfrentamientos para ser el último con vida. Los jugadores pueden ingresar a la partida en solitario, o con un pequeño equipo compuesto por el propio jugador y una, dos o tres personas más, formando respectivamente un dúo, un escuadrón de tres o cuatro jugadores. La última persona o equipo con vida gana la partida.',
                    image: 'https://res.cloudinary.com/dabjc3dh1/image/upload/v1670420609/505550_1200872_dmwxij.jpg',
                    category: 'multijugador'
                }),
                headers: {
                    "Content-type": "application/json",
                }
            
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}

    return (
      <div>
         <ItemList products={products}/>
   
     <button onClick={ProductoPut}>Producto nuevo</button>
     </div>

    )
}
export default ItemListContainer