import React, { useState } from 'react';
// import Link from 'react-router-dom'
import { Link } from 'react-router-dom';

const PlantCard = (props) => {

    let [watercounter, setCounter] = useState(0);

	const increment = () => {
		setCounter(watercounter + 1);
	}

    if (watercounter > 5) {
        alert('overwatered!');
    } else {
        console.log(watercounter);
    }

    return (
        <div className="p-2">
            <div className="card" style={{'width': '18rem'}}>
                <img className="card-img-top" src={props.plant.image} alt={props.plant.species} />
                <div className="card-body">
                    <h2 className="card-title">{props.plant.species}</h2>
                    <p className="card-text"><strong>Water per Week: </strong>{props.plant.water}</p>


                    <div>
                        <div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            {/* Create Details button */}
                            <Link 
                                className="btn btn-xs btn-primary"
                                to={{ pathname: `/plants/details/${props.plant.id}`, state: { plantToShow: props.plant } }}
                            >    
                                DETAILS
                            </Link>
                            {/* Create Edit button */}
                            <Link 
                                className="btn btn-xs btn warning"
                                to={{ pathname: `/plants/edit/${props.plant.id}`, state: { plantToEdit: props.plant } }}
                            >
                                EDIT
                            </Link>
                            {/* Create Delete button */}
                            <button
                                className="btn btn-xs btn-danger"
                                onClick={() => props.removePlant(props.plant.id)}
                                >
                                    DELETE
                                </button>
                        </div>
                        <div>
                            {/* Create Add Water button */}
                            <button
                                id="waterbutton"
                                className="btn btn-xs "
                                onClick={increment}>
                                    ADD WATER
                            </button>
                        </div>
                        <div>
                            Watered:{watercounter}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantCard;