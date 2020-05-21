import React from 'react'
import Home from "./home"

import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch} from "react-router-dom"

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App