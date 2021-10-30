import React from "react";
import { Avatar, Button, Card } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  User: {
    id: 1,
    nickname: "임우찬",
  },
  content: "첫 번째 게시글",
  img: "https://postfiles.pstatic.net/MjAyMTEwMjNfMTA5/MDAxNjM0OTYyNDE2NDkx.j1uNggieQ9TNwfUuFPuFQyhswOa22AghXhMPfZEkVAMg.XnxkbHou8bLqRcA4DF76Qb9AqLBe2naGVE_99t8hhpkg.PNG.dlaxodud2388/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2021-10-23_%EC%98%A4%ED%9B%84_1.13.33.png?type=w773",
};

const PostCard = ({ post }) => {
  return (
    <Card
      key={+post.createdAt}
      cover={post.img && <img alt="example" src={post.img} />}
      actions={[
        <RetweetOutlined key="retweet" />,
        <HeartOutlined key="heart" />,
        <MessageOutlined key="message" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.nickname}
        description={post.content}
      />
    </Card>
  );
};

PostCard.PropTypes = {
  post: PropTypes.shape({
    // shape가 객체임.
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object,
  }),
};

export default PostCard;
