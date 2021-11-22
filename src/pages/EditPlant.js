import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EditPlant extends Component {
    state = {
        // create formData property in state and set its
        // value to this.props.location.state.selectedPuppy
        formData: this.props.location.state.plantToEdit
    }

    handleChange = e => {
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
        this.props.updatePlant(this.state.formData);
    }

    render() {
        return (
            <>
                <h1>Edit Puppy</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        {/* TODO: Create name attribute for each input */}
                        <label>Species</label>
                        <input
                            className="form-control"
                            value={this.state.formData.species}
                            onChange={this.handleChange}
                            name="species"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Water</label>
                        <input
                            className="form-control"
                            value={this.state.formData.water}
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
                    <div>
                        <button
                            type="submit"
                            className="btn btn-info mr-2"
                        >
                            UPDATE PLANT
                        </button>
                        <Link className="btn btn-dark" to='/'>CANCEL</Link>
                    </div>
                </form>
            </>
        );
    }
}