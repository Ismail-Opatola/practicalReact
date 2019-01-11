import React from 'react';

export default class MyForm extends React.Component {
    state = {
        name: 'ben',
        favPet: "droid",
        rememberMe: false,
        title: 'Mrs.'
    }

    handleChange = (event) => {
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange} />
                <textarea 
                    name='favPet'
                    value={this.state.favPet} 
                    onChange={this.handleChange} />
                <input
                    name='rememberMe' 
                    type='checkbox' 
                    checked={this.state.rememberMe} 
                    onChange={this.handleChange} />
                <div>
                    <select 
                        name='title'
                        value={this.state.title} 
                        onChange={this.handleChange}>
                        <option>Mr.</option>
                        <option>Miss.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

//Uncontrolled field -- not storing what the user types inside of react
//controlled field -- where you store what the user types inside of react

//onChange() passes your func a parameter called `event` which we can access in our func
// for `Checkboxes`, instead of `onChange()` you want to use `checked`

// Refactoring/Optimizing React Form

/*  
FROM
    ...
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
    ...
    <input value={this.state.name} onChange={this.handleChange} />
    <textarea value={this.state.favPet} onChange={this.handleChangeFavPet} />
    <input type="checkbox" checked={this.state.rememberMe} onChange={this.handleCheck} />
    <div>
        <select value={this.state.title} onChange={this.handleSelect}>
        
TO
    ...
    handleChange = (event, fieldName, checkbox) => {
        this.setState({ [fieldName]: checkbox ? event.target.checked : event.target.value });
    };
    ...
    <input 
        value={this.state.name} 
        onChange={event => this.handleChange(event, "name")} />
    <textarea 
        value={this.state.favPet} 
        onChange={event => this.handleChange(event, "favPet"} />
    <input 
        type="checkbox" 
        checked={this.state.rememberMe} 
        onChange={event => this.handleChange(event, "rememberMe", "isChecKbox")} />
    <div>
        <select value={this.state.title} onChange={event => this.handleChange(event, "title")}>...

MUCH BETTER
    ...
    handleChange = (event) => {
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value });
    };
    ...
    <input
        name='name'
        value={this.state.name}
        onChange={this.handleChange} />
    <textarea 
        name='favPet'
        value={this.state.favPet} 
        onChange={this.handleChange} />
    <input
        name='rememberMe' 
        type='checkbox' 
        checked={this.state.rememberMe} 
        onChange={this.handleChange} />
    <div>
        <select 
            name='title'
            value={this.state.title} 
            onChange={this.handleChange}>
*/

// Use event.preventDefault(); to prevent the default behavour of the <form>. by default on submit the form refresh the page and also include the details of the inputs in the url box.... so use event.preventDefault(); to prevent this behaviour

/*
    handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(this.state);
    };
    ...
    return (
        <form onSubmit={this.handleSubmit}>
            ...
            <button type="submit">Submit</button>
*/

// <form onSubmit={this.handleSubmit}> supports Enter-key in input feild to submit form