import React from "react";

class Row extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.row.map((column, columnIndex) => (
                        <div className="col-3 itemCard" key={columnIndex}>
                            {column}
                        </div>
                    ))
                }
            </>
        )
    }

}
export default Row