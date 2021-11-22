import React from 'react';

export default function Home(props) {
    return (
        <div className='panel panel-default homepage'>
            <h1>WELCOME TO</h1>
            <h1><strong>PLANT PETS</strong></h1>
            <p>Create your own virtual Plant Pets.</p>
            <p>Each plant will have a: Species, Water Amount (the amount of times you water weekly), and Image</p>
            <p>The goal is to keep them alive and not over or under water them each week.</p> 
            <p>If you over water a plant, there will be an alert. If you under water the plant, there will be a message, "Water me!"</p>
        </div>
    )
}