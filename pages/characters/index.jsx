import Link  from "next/link";
export async function getStaticProps() {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await res.json();

    return {
        props: {
            characters: characters.results
        }
    }
}

const index = ({ characters }) => {
    return (
        <div>
            {characters.map((character) => {
                return (
                    <Link key={character.id} href={`/characters/${character.id}`}>{character.name}</Link>
                )
            })}
        </div>
    )
}

export default index;