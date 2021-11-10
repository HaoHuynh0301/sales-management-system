import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import {
    Login,
} from './Screens';
import { ProtectedRoute } from './protected.route';

function App() {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = '/login'>
                    <Login />
                </Route>
                <Route path = "*" component = {() => {
                    return(
                        <div>
                            404
                        </div>
                    );
                }}></Route>
            </Switch>
        </BrowserRouter>
    ); 
}

export default App;
