import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

class Home extends React.Component{
    componentDidMount() {
        axios.get('getdata.json')
            .then(data=>{
                console.log(data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {
                console.log("Reached to finally block")
            })
    }

    render() {
        return (
            <div>
                <p>Test content</p>
                <Button variant="success">Start The Boggle Game</Button>
            </div>
        );
    }
}
export default Home