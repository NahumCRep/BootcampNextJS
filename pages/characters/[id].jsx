import React from "react";
import { useRouter } from "next/router";

export async function getStaticPaths() {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const {results:characters} = await res.json();

    // console.log(data);

    const rutas = characters.map(character => ({
            params:{
                id: ""+character.id
            }
    }));

    // console.log(rutas);

    return {
        paths: rutas,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const res = await fetch('https://rickandmortyapi.com/api/character/'+params.id);
    const character = await res.json();

    return {
        props: {
            character
        }
    }
}

 export default function Usuario({character}){
     const router = useRouter();
     const {id} = router.query;
    return(
        <div>
            <h1>Personaje: {character.name}</h1>
        </div>
    )
 }