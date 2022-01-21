import React from 'react';
import cardStyle from '../../styles/charactercard.module.css';

const CharacterCard = (props) => {
  return(
    <div className={cardStyle.card_container}>
        <a href={`/harrypotter/${props.id}`}><img className={cardStyle.card_img} src={props.photo} alt={props.name}/></a>
        <h2 className={cardStyle.card_title} >{props.name}</h2>
    </div>
  )
}

export default CharacterCard;
