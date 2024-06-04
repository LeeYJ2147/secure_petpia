import React from "react";
import Grid from "../components/common/Grid";
import Column from "../components/common/Column";
import "./Login.scss";

function Login() {
  return (
    <Grid>
      <Column span={2}></Column>
      <Column span={4}>
        <h5 className="body-bold">로그인</h5>
        <form>
          <div className="form-inputs">
            <input type="text" name="username" placeholder="아이디" required />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              required
            />
          </div>
          <button type="submit" className="button">
            로그인
          </button>
        </form>
      </Column>
      <Column span={1}></Column>
      <Column span={4}>
        <h5 className="body-bold">계정이 필요하세요?</h5>
        <button className="button button-tertiary">회원가입</button>
      </Column>
    </Grid>
  );
}

export default Login;
