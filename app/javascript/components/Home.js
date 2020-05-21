import React from 'react'
import Header from './header'
import GameHome from './gameHome'

class Home extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <GameHome />
            </div>
        );
    }
}
export default Home