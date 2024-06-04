import React from "react";
import Grid from "../components/common/Grid";
import Column from "../components/common/Column";
import "./QnA.scss";

function QnA() {
  return (
    <Grid>
      <Column span={2}></Column>
      <Column span={2}>
        <button className="button">QnA 작성하기</button>
      </Column>
      <Column span={8}></Column>
      <Column span={2}></Column>
      <Column span={9} offset={2} className="test">
        <table className="table">
          <thead>
            <tr>
              <th>답변상태</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>답변완료</td>
              <td>불마운트 볼 사이즈가 어떻게 될까요?</td>
              <td>mugu****</td>
              <td>2024.04.30</td>
            </tr>
            <tr>
              <td>답변완료</td>
              <td>비밀글입니다.</td>
              <td>cy****</td>
              <td>2024.04.24</td>
            </tr>
          </tbody>
        </table>
      </Column>
    </Grid>
  );
}

export default QnA;
