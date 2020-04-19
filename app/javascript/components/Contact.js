import React from 'react'
import axios from 'axios'

class Contact extends React.Component{
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
                This is my home page
            </div>
        );
    }

}
export default Contact