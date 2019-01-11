import React from 'react';

export default class MyForm extends React.Component {
    state = {
        name: 'ben',
        favPet: "droid",
        rememberMe: false,
        title: 'Mrs.'
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({ name: event.target.value });
    };
    handleChangeFavPet = (event) => {
        // console.log(event.target.value);
        this.setState({ favPet: event.target.value });
    };

    handleCheck = event => {
        this.setState({ rememberMe: event.target.checked });
    };

    handleSelect = event => {
        this.setState({ title: event.target.value });
        console.log(this.state.title)
        console.log(event.target.value)
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.handleChange} />
                <textarea value={this.state.favPet} onChange={this.handleChangeFavPet} />
                <input type="checkbox" checked={this.state.rememberMe} onChange={this.handleCheck} />
                <div>
                    <select value={this.state.title} onChange={this.handleSelect}>
                        <option>Mr.</option>
                        <option>Miss.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                    </select>
                </div>
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

//Uncontrolled field -- not storing what the user types inside of react
//controlled field -- where you store what the user types inside of react

//onChange() passes your func a parameter called `event` which we can access in our func
// for `Checkboxes`, instead of `onChange()` you want to use `checked`