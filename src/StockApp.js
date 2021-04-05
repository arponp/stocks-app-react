import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Portfolio from './components/Portfolio/Portfolio';
import Add from './components/Add/Add';
import UserContext from './user/UserContext';
import StockSearch from './components/StockSearch/StockSearch';

const StockApp = () => {
    const [user, setUser] = useState(null);
    return (
        <Router>
            <div>
                <Nav />
            </div>
            <Switch>
                <UserContext.Provider value={{ user, setUser }}>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/portfolio/add" component={Add} />
                    <Route path="/stocks/search" component={StockSearch} />
                </UserContext.Provider>
            </Switch>
        </Router>
    );
};

export default StockApp;
