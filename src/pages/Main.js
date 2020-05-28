import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from '../App';
function Main(){
    return (
        <Router>      
            <Route path="/" exact component={App} />
        </Router>
    )
}
export default Main