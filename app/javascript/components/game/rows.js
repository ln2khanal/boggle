import React from "react";
import Row from './row'

class Rows extends React.Component{
    render() {
        let items = this.props.items;
        return (
            <>
                {
                    items.map((row, rowIndex) => (
                        <div className='row' key={rowIndex}>
                            <Row row={row} />
                        </div>
                    ))}
            </>
        )

    }
}
export default Rows