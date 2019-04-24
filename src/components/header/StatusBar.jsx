import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';

const StatusBarData = [
  {
    title: '首页',
    icon: 'home'
  },
  {
    title: '登录',
    icon: 'user'
  },
  {
    title: '位置',
    icon: 'location arrow'
  },
  {
    title: '购物车',
    icon: 'shop'
  }
];

const ToolBtn = (index, msg, icon) => (
  <Button 
    className="tool-btn" 
    animated='fade' 
    floated='right' 
    tabIndex={index}
  >
    <Button.Content as='span' hidden>{msg}</Button.Content>
    <Button.Content as='span' visible>
      <Icon name={icon} />
    </Button.Content>
  </Button>
)

const ToolBar = (props) => {
  let iCon = StatusBarData.map((item,index) => {
    let title = item.title
      .replace(/\-/g,' ')
      .replace(/^[a-z]?/,function($0){
        return $0.toUpperCase();
      })

    let popupWrap = null;

    let btnTool = ToolBtn(index,title,item.icon);

    switch(item.title){
      case '首页':
        popupWrap = (btnTool);
        break;
      case '登录':
        popupWrap = (btnTool);
        break;
      case '位置':
        popupWrap = (btnTool);
        break;
      case '购物车':
        popupWrap = (btnTool);
        break;
    }
    return (
      <Menu.Item key={index} as='li'>
        {popupWrap}
      </Menu.Item>
    )
  })

  return(
    <Menu.Menu as='ul'>
      {iCon}
    </Menu.Menu>
  )
}

export default ToolBar;