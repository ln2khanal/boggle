import React from "react";

class Score extends React.Component{
    render() {
        return (
            <div className="result">
                Score:{this.props.result.score | 0}
            </div>
        )
    }
}

export default Score