import React, { useCallback, useState } from "react";
import { Avatar, Button, Card, Comment, Form, Input, List } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

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
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState("");
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onSubmitComment = useCallback(() => {
    if (!me) {
      return alert(`로그인이 필요합니다.`);
    }
    return dispatch({
      type: ADD_COMMENT_REQUEST,
    });
  }, []);
  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  return (
    <div>
      <Card
        key={+post.createdAt}
        cover={post.img && <img alt="example" src={post.img} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          <HeartOutlined key="heart" />,
          <MessageOutlined key="message" onClick={onToggleComment} />,
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
      {commentFormOpened && (
        <>
          <Form onFinish={onSubmitComment}>
            <Form.Item>
              <Input.TextArea
                rows={4}
                value={commentText}
                onChange={onChangeCommentText}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              삐약
            </Button>
          </Form>
          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comment || []}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                  datetime={item.createdAt}
                />
              </li>
            )}
          />
        </>
      )}
    </div>
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
