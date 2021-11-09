import React, { Component } from 'react';

export default class CreatePlant extends Component {
    state = {
        formData: {
            species: '',
            water: '',
            image: '',
        }
    }

    handleChange = e => {
        console.log(e.target.name);
        this.state.formData[e.target.name] = e.target.value
        this.setState({
            formData: {
                // Set state for formData
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.CreatePlant(this.state.formData);
    }

    render() {
        return (
            <div>
                <h1>Add Plant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        {/* TODO: Create name attribute for each input */}
                        <label>Species</label>
                        <input
                            className="form-control"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            name="species"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Water</label>
                        <input
                            className="form-control"
                            value={this.state.formData.breed}
                            onChange={this.handleChange}
                            name="water"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Picture URL</label>
                        <input
                            className="form-control"
                            value={this.state.formData.image}
                            onChange={this.handleChange}
                            name="image"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-info"
                    >
                        ADD PLANT
                    </button>
                </form>
            </div>
        );
    }
}
