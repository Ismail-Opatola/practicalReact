import React from 'react';
import Image1 from '../img/im1.png';
import Image2 from '../img/im2.png';
import Image3 from '../img/im3.png';
import Image4 from '../img/im4.png';

/*
    1. shallow merge
    2. async
*/

export default class ImageSlider extends React.Component {
    state = {
        images: [
            Image1,
            Image2,
            Image3,
            Image4
        ],
        idx: 0 
        //track which img we're on using this.state.idx
    }

    handleNext = () => {
        this.setState ({
            idx: this.state.idx + 1 
        });
    }
    handlePrevious = () => {
        this.setState ({
            idx: this.state.idx - 1 
        });
    }

    render() {
        return (
            <div>
                <h1>Image Slider...</h1>
                <div>
                    {/*<img style={maxWidth} src={this.state.images[0]} alt="new camp"/>*/}
                    <img style={maxWidth} src={this.state.images[this.state.idx]} alt="new camp"/>
                </div>
                <div>
                    <button onClick={this.handlePrevious}>previous</button>
                    <button onClick={this.handleNext}>next</button>
                </div>
            </div>)
        ;
    }
}


const maxWidth = {
    witdh: "50vw",
    height: "50vh"
};

//setState() is async, meaning the value is not going to be updated right away... you could use it callback func to wait and do something only after its updated 

//You can also pass in a inline func like this
//  ....
// <div>
//  <button 
//    onClick={() => { 
//      this.setState({
//        idx: this.state.idx - 1
//      });
//    }}>
//        next
//  </button>
// </div>
//  ....