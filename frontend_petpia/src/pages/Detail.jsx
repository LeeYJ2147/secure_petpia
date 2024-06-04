import React from "react";

function Detail() {
  return (
    <div>
      <form>
        <label>
          아이디
          <input type="text" name="username" required />
        </label>
        <label>
          비밀번호
          <input type="password" name="password" required />
        </label>
        <button type="submit">로그인</button>
      </form>
      <button>회원가입</button>
    </div>
  );
}

export default Detail;
