import React from "react";
import Table from "react-bootstrap/Table";

class Result extends React.Component{
    render() {
        console.log(this.props.result)
        return (
            <>
                <Table className="striped bordered hover">
                    <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Word</th>
                        <th>Score</th>
                        <th>Remarks</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.result.list_of_words.map((entry, index) => (
                            <tr key={index} className={entry.invalid ? "table-row-error": ""}>
                                <td>
                                    {++index}
                                </td>
                                <td>
                                    {entry.word}
                                </td>
                                <td>
                                    {entry.score}
                                </td>
                                <td>
                                    {entry.message}
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </>
        )
    }
}

export default Result