import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import About from "./components/About"
import Contact from "./components/Contact"
import Menus from './components/Menus';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

    return (
      <div className="App">
        <Router>
          <ToastContainer />
          <Container>
            <Header />
            <Row>
              <Col md={4}>
                <Menus />
              </Col>
              <Col md={8}>
                <Route path="/" component={Home} exact />
                <Route path="/add-course" component={AddCourse} exact />
                <Route path="/view-courses" component={AllCourses} exact />
                <Route path="/about" component={About} exact />
                <Route path="/contact" component={Contact} exact />
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }

export default App;