import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="https://blog.naver.com/dlaxodud2388">
            <a target="_blank">made by Limwoochan</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
// antd는 기본적으로 반응형. (한 줄이 24임.)
// xs는 모바일, md는 데스크탑
AppLayout.propTypes = {
  // ts하는게 아니라 prop-types로 검증해주면 좋을듯.
  Component: PropTypes.node,
};

export default AppLayout;
