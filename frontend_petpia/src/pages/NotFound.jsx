import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "../components/common/Grid";
import Column from "../components/common/Column";
import "./NotFound.scss";

function NotFound() {
  const [emoji, setEmoji] = useState("0");

  const emojis = ["🐱", "🐶", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮"];

  const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };

  useEffect(() => {
    setEmoji(getRandomEmoji());
  }, []);

  return (
    <Grid>
      <Column span={12}>
        <div className="not-found">
          <span className="display1">4{emoji}4</span>
          <span className="display2">NOT FOUND</span>
          <span className="display1">4{emoji}4</span>
          <span className="display2">NOT FOUND</span>
          <span className="display1">4{emoji}4</span>
        </div>
      </Column>
      <Column span={12}>
        <div className="not-found">
          <span className="display2">NOT FOUND</span>
          <span className="display1">4{emoji}4</span>
          <span className="display2">NOT FOUND</span>
          <span className="display1">4{emoji}4</span>
          <span className="display2">NOT FOUND</span>
        </div>
      </Column>
      <Column span={12}>
        <div className="not-found">
          <span className="display1">4{emoji}4</span>
          <span className="display2">NOT FOUND</span>
          <span className="display1">4{emoji}4</span>
          <span className="display2">NOT FOUND</span>
          <span className="display1">4{emoji}4</span>
        </div>
      </Column>
      <Column span={12}>
        <div className="not-found">
          <span className="display2">NOT FOUND</span>
          <span className="display1">4{emoji}4</span>
          <span className="display2">NOT FOUND</span>
          <span className="display1">4{emoji}4</span>
          <span className="display2">NOT FOUND</span>
        </div>
      </Column>
      <Column span={4}></Column>
      <Column span={4}>
        <Link to="/" className="button button-tertiary">
          홈페이지로 돌아가기
        </Link>
      </Column>
    </Grid>
  );
}

export default NotFound;
