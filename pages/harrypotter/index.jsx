import CharacterCard from "../components/CharacterCard";
import harryStyle from '../../styles/harryindex.module.css';

export async function getStaticProps() {
    const res = await fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes');
    const personajes = await res.json();

    // console.log(movies);

    return {
        props: {
            personajes
        }
    }
}

const index = ({ personajes }) => {
    return (
        <main>
            <h1 className={harryStyle.harryp_title}>Personajes de Harry Potter</h1>
            <hr />
            <div className={harryStyle.wrap_container}>
                {
                    personajes.map((personaje) => {
                        return (
                            <CharacterCard 
                                key={personaje.id} 
                                name={personaje.apodo} 
                                photo={personaje.imagen} 
                                id={personaje.id}    
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default index;