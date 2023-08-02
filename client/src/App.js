import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import CreateBlog from './pages/CreateBlog/CreateBlog';
import About from './pages/AboutUs/About';
import Contact from './pages/ContactUs/Contact';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <div style={{ width: '1024px' }}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route path="/signup">{user ? <Home /> : <Signup />}</Route>
              <Route path="/login">{user ? <Home /> : <Login />}</Route>
              <Route path="/write">
                {user ? <CreateBlog /> : <Signup />}
              </Route>
              <Route path="/settings">
                {user ? <Settings /> : <Signup />}
              </Route>
              <Route path="/post/:postId">
                <BlogDetails />
              </Route>
            </Switch>
          </Router>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default App;
