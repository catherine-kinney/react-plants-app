import React from 'react';
// import Link from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function ShowPlant(props) {
    // Destructure selectedPuppy from props.location.state
    const { plantToShow } = props.location.state;

    return (
        <div className="p-2">
            <div className="card" style={{'width': '38rem', marginTop:'5rem'}}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-3">{plantToShow.species.toUpperCase()}</h2>
                    <div className="d-flex justify-content-around">
                        <div className="card-text"><strong>Species: </strong>{plantToShow.species}</div>
                        <div className="card-text"><strong>Water: </strong>{plantToShow.water}</div>
                    </div>
                </div>
                <img className="card-img-top border-top border-bottom" src={plantToShow.image} alt={plantToShow.species} />
                <div className="card-body">
                    <div className='d-flex justify-content-center'>
                        {/* Create Edit button */}
                        {/* Create Delete button */}
                        <Link
                            className="btn btn-xs btn-warning mr-2"
                            to={{ pathname: `/plants/edit/${plantToShow.id}`, state: { plantToEdit: plantToShow } }}
                        >
                            EDIT
                        </Link>
                        {/* Create Delete button */}
                        <button
                            className="btn btn-xs btn-danger"
                            onClick={() => props.removePlant(plantToShow.id)}
                        >
                            DELETE
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}