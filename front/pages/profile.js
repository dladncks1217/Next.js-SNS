import { StopOutlined } from "@ant-design/icons";
import { Input, Form, Button, List, Card } from "antd";
import React from "react";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  return (
    <div>
      <NicknameEditForm />
      <List
        style={{ marginBottom: "20px" }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로워 목록</div>}
        loadMore={<Button style={{ width: "100%" }}></Button>}
        bordered // 테두리 줄지안줄지 옵션
        dataSource={["임우찬", "가나다", "아야어여오요우유으이오피셜"]}
        renderItem={(item) => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card actions={[<StopOutlined />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
      />
      <List
        style={{ marginBottom: "20px" }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로워 목록</div>}
        loadMore={<Button style={{ width: "100%" }}></Button>}
        bordered // 테두리 줄지안줄지 옵션
        dataSource={["임우찬", "가나다", "아야어여오요우유으이오피셜"]}
        renderItem={(
          item // 배열 안에 jsx썼을때는 무조건 key 다 넣어주자.(배열은 반복문 의미, 넣어주어야 인식됨.)
        ) => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card actions={[<StopOutlined key="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Profile;
