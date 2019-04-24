import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import { Menu } from 'semantic-ui-react'

import '../../assets/style/header.scss';

const dataHeaderMenu = ['数码产品', '书文杂烩', '服饰鞋包', '美妆捡漏', '生活品质', '游戏装备', '周边租房'];

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ 
      activeItem: name,
    })
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu as='nav' secondary id="header-nav">
      {
        dataHeaderMenu.map((item,index) => {
          return(
            <Menu.Item
              as='span'
              key={index}
              className="nav-item"
              active={activeItem === item}
              onClick={this.handleItemClick} 
            >
              <NavLink
                to={'/' + item}
                activeClassName="active"
              >
                {item.toUpperCase()}
              </NavLink>
            </Menu.Item>
          )
        })
      }
      </Menu>
    );
  }
}