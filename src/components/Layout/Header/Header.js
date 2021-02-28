import React from 'react';
//import {Link} from 'react-router-dom';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render() {
        return (
            <div className="container-fluid">
              <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top navmain">
              <a className="navbar-brand" href="# ">Logo</a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link  className="nav-link"  to="/map"> Map</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="# ">Graph</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="# ">Alert</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="# ">Add User</a>
                </li>
                <li className="nav-item">
                  {/* <button className="nav-link btn btn-primary loginbutton" >Login</button> */}
                  <Link  className="nav-link btn btn-primary loginbutton"  to="/login"> Login</Link>
                </li>
              </ul>
            </nav>
            </div> 
        );
    }
}
export default Header;