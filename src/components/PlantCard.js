export default function PlandCard(props) {
    return (
        <div className="p-2">
            <div className="card" style={{'width': '18rem'}}>
                <img className="card-img-top" src={props.plant.image} alt={props.plant.species} />
                <div className="card-body">
                    <h5 className="card-title">{props.plant.species}</h5>
                    <p className="card-text"><strong>Water: </strong>{props.plant.water}</p>
                    <div>
                        <div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            {/* Create Details button */}
                            {/* Create Edit button */}
                            {/* Create Delete button */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}