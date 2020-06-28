import React from "react";
import './card.styles.css'

export const Card = props => {
    return <div className='card-container'>
        <img alt='robot' src={`https://robohash.org/${props.robot.id + 10}?set=set2&size=300x300`} />
        <h1> {props.robot.name}</h1>
        <p>{props.robot.email}</p>
    </div>
}