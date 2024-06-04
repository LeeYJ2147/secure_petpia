import React from "react";
import "./Main.scss";
import Grid from "../components/common/Grid";
import Column from "../components/common/Column";

function Main() {
  return (
    <Grid as="main" className="main">
      <Column span={3} className="product-item">
        Product 1
      </Column>
      <Column span={3} className="product-item">
        Product 2
      </Column>
      <Column span={3} className="product-item">
        Product 3
      </Column>
      <Column span={3} className="product-item">
        Product 4
      </Column>
      <Column span={6} className="product-item">
        Large Banner
      </Column>
      <Column span={6} className="product-item">
        Large Banner
      </Column>
      <Column span={3} className="product-item">
        Product 1
      </Column>
      <Column span={3} className="product-item">
        Product 2
      </Column>
      <Column span={3} className="product-item">
        Product 3
      </Column>
      <Column span={3} className="product-item">
        Product 4
      </Column>
      <Column span={3} className="product-item">
        Product 1
      </Column>
      <Column span={3} className="product-item">
        Product 2
      </Column>
      <Column span={3} className="product-item">
        Product 3
      </Column>
      <Column span={3} className="product-item">
        Product 4
      </Column>
      <Column span={12} className="product-item">
        Large Banner
      </Column>
      <Column span={3} className="product-item">
        Product 1
      </Column>
      <Column span={3} className="product-item">
        Product 2
      </Column>
      <Column span={3} className="product-item">
        Product 3
      </Column>
      <Column span={3} className="product-item">
        Product 4
      </Column>
    </Grid>
  );
}

export default Main;
