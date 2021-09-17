
 import {
  BrowserRouter as Router,
   Switch,
   Route
 } from "react-router-dom";
 import Home from './components/Home';
 import Navigation from './components/Navigation';
 import About from "./components/About";
 import Store from "./components/Store";

 function App() {
   return (
    <Router>
      <div>
        <Navigation />
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/store" component={Store}/>
       </Switch>
      </div>
    </Router>
   )
 }

 export default App;
