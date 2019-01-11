import React from 'react';

//COMPONENTS AS CLASSES
export default class Counter extends React.Component {
    constructor(props) {
        super( props);

        this.state = {
            //count: 0
            count: props.initialCount //here the state depends on the props
        };
    }

    //Lifecycle func
    componentWillUnmount () {
        console.log("unmounting...");
    }
    //Lifecycle func
    componentDidMount () {
        console.log("mounting...");
    }

    increament = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decreament = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div>
                <div>count: {this.state.count}</div>
                <button onClick={this.increament}>Increament</button>
                <button onClick={this.decreament}>Decreament</button>
            </div>
        );
    }
}

//a shotcut to binding a function to a component is to use the  ` => ` func
// only Class Components can access Lifecycle Functions
