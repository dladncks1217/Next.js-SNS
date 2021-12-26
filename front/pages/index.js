import React, { useEffect } from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { useDispatch, useSelector } from "react-redux";
import user, {
  loginAction,
  logoutAction,
  LOG_IN,
  LOG_OUT,
} from "../reducers/user";

const Home = () => {
  const dispatch = useDispatch(); // useSelector를 자주 쓰며 최대한 redux state를 잘게 써는게 좋다.
  const { isLoggedIn, me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  console.log(isLoggedIn);

  return (
    <div>
      {me ? (
        <div>로그인되었습니다.{user.me}</div>
      ) : (
        <div>로그아웃되었습니다.</div>
      )}
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
