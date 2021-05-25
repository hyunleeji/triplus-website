import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <SubMenu title={<span>Country</span>}>
      <MenuItemGroup title="유럽">
        <Menu.Item key="setting:1">독일/이탈리아/프랑스</Menu.Item>
        <Menu.Item key="setting:2">벨기에/스위스/스페인</Menu.Item>
        <Menu.Item key="setting:3">그리스/네덜란드/노르웨이</Menu.Item>
        <Menu.Item key="setting:4">영국/스웨덴/아이슬란드</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="아시아">
        <Menu.Item key="setting:5">한국/일본/중국</Menu.Item>
        <Menu.Item key="setting:6">태국/필리핀/베트남</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="오세아니아">
        <Menu.Item key="setting:7">뉴질랜드/오스트레일리아/인도네시아</Menu.Item>
        <Menu.Item key="setting:8">괌/파푸아뉴기니</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="북아메리카">
        <Menu.Item key="setting:9">미국/캐나다</Menu.Item>
        <Menu.Item key="setting:10">멕시코/자메이카/온두라스</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="남아메리카">
        <Menu.Item key="setting:11">아르헨티나/볼리비아/브라질</Menu.Item>
        <Menu.Item key="setting:12">칠레/콜롬비아/에콰도르</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="아프리카">
        <Menu.Item key="setting:13">케냐/탄자니아/리비아</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
    <Menu.Item key="mail">
      <a href="/images/bestregion">베스트지역</a>
    </Menu.Item>
    <Menu.Item key="res">
      <a href="#reservation">예약</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu