import React from 'react';
import Tab from '../components/Tab';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className="tabs">
      <Tab>
        <NavLink to="/" activeClassName="is-active" exact>
          Home
        </NavLink>
      </Tab>

      <Tab>
        <NavLink to="/about" activeClassName="is-active">
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/features" activeClassName="is-active">
          Features
        </NavLink>
      </Tab>
    </div>
  );
}
