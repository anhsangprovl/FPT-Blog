import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import CreateBlog from './pages/CreateBlog/CreateBlog';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '1024px' }}>
          <Router>
            <Navbar />
            {/* <TopBar /> */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/register">{user ? <Home /> : <Register />}</Route>
              <Route path="/login">{user ? <Home /> : <Login />}</Route>
              <Route path="/write">
                {user ? <CreateBlog /> : <Register />}
              </Route>
              <Route path="/settings">
                {user ? <Settings /> : <Register />}
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
