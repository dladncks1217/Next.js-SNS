import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu, Input, Button, Row, Col, Card, Avatar } from "antd";

const dummy = {
  nickname: "임우찬",
  Post: [],
  Followings: [],
  Followers: [],
};

const AppLayout = ({ children }) => {
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
      <Link href="/signup">
        <a>
          <Button>회원가입</Button>
        </a>
      </Link>
      <Row>
        <Col xs={24} md={6}>
          <Card
            actions={[
              <div key="twit">
                짹짹
                <br />
                {dummy.Post.length}
              </div>,
              <div key="following">
                짹짹
                <br />
                {dummy.Followings.length}
              </div>,
              <div key="follower">
                짹짹
                <br />
                {dummy.Followers.length}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
              title={dummy.nickname}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          세번째
        </Col>
      </Row>
      {children}
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
