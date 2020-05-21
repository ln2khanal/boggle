import React from "react";
import Form from "react-bootstrap/Form";

class ResultForm extends React.Component{
    render() {
        return(
            <>
                <Form.Group>
                    <Form.Label>
                        Type Words
                    </Form.Label>
                    <Form.Text className="text-muted">Press space after typing a word</Form.Text>
                    <Form.Control type="text" value={this.props.currentValue} name='words' onChange={this.props.changeHandler.bind(this)} disabled={this.props.formDisabled}/>
                    <Form.Text className="text-muted">
                        Score is the sum of number of letters in correctly typed words from the presented letters. A word with adjacent letters only would be accounted.
                    </Form.Text>
                </Form.Group>
            </>
        )
    }
}

export default ResultForm