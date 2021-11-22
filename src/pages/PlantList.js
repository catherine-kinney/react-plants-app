import React from 'react';
import PlantCard from '../components/PlantCard';

export default function PlantList(props) {
    return (
        <>
            <h1>Plant Pets</h1>
            <div className='d-flex flex-wrap'>
                {/* Note that mapping through the array in props can happen right in the JSX */}
                {props.plantList.map(plant => 
                    <PlantCard
                        key={plant.id}
                        plant={plant}
                        removePlant={props.removePlant}
                    />
                )}
            </div>
        </>
    )
}