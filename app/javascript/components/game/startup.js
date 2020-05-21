import React from "react";
import {Image} from "react-bootstrap";

class Startup extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                        <div className='row'>
                            <p>
                                Boggle is a word game invented by Allan Turoff and originally distributed by Parker Brothers. The game is played using a plastic grid of lettered dice, in which players attempt to find words in sequences of adjacent letters.
                            </p>
                            <a href="https://en.wikipedia.org/wiki/Boggle">Explore further ...</a>
                        </div>
                        <div className='row'>
                            <div className='col-4 pic'>
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Boggle.jpg" height={400} />
                            </div>
                            <div className='col-8'>
                                <button type="button" className="btn start-btn col-12 btn-primary" onClick={this.props.initiator}>Start Game</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Startup