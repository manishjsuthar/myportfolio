import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar1";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ContactAdmin from "./components/ContactAdmin";
import Editprojectadmin from "./components/Editprojectadmin";
import Projectadmin from "./components/Projectadmin";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/admin/contact" exact component={ContactAdmin} />
        <Route path="/projectadmin" exact component={Editprojectadmin} />
        <Route path="/projectadmin1" exact component={Projectadmin} />
        <Route path="/uploadimage" exact component={FileUpload} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
