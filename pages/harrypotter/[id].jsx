import React from "react";
import { useRouter } from "next/router";
import characterStyle from '../../styles/character.module.css';
import Image from 'next/image';

export async function getStaticPaths() {
    const res = await fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes');
    const personajes = await res.json();

    const rutas = personajes.map(personaje => ({
        params: {
            id: "" + personaje.id
        }
    }));

    return {
        paths: rutas,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes/' + params.id);
    const personaje = await res.json();

    return {
        props: {
            personaje
        }
    }
}

export default function Personaje({ personaje }) {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className={characterStyle.character_container}>
            <div className={characterStyle.character_photo}>
                <img src={personaje.imagen} alt={personaje.apodo} />
            </div>
            <div className={characterStyle.character_content}>
                <h1>{personaje.personaje}</h1>
                <div className={characterStyle.content_left}>
                    <h4>Interpretado por:</h4>
                    <h3>{personaje.interpretado_por}</h3>
                    <h4>Casa: </h4>
                    <h3>{personaje.casaDeHogwarts}</h3>
                    <div>
                        <h4>Hijos</h4>
                        <ul>
                            {
                                personaje.hijos.map((hijo, index) => {
                                    return (
                                        <li key={index}>{hijo}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={characterStyle.content_right}>
                    <Image src="/harrypotter.png" alt="hat" width="300" height="350" />
                </div>
            </div>
        </div>
    )
}