import React from "react";
import Grid from "../components/common/Grid";
import Column from "../components/common/Column";
import "./Notice.scss";

function Notice() {
  return (
    <Grid>
      <Column span={2}></Column>
      <Column span={9} offset={2} className="test">
        <table className="table">
          <thead>
            <tr>
              <th>제목</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>리퍼 특가 상품 안내사항</td>
              <td>2024.04.30</td>
              <td>150</td>
            </tr>
            <tr>
              <td>PETPIA에 오신걸 환영합니다.</td>
              <td>2024.04.24</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>
      </Column>
    </Grid>
  );
}

export default Notice;
