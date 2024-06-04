import React from "react";
import "./Store.scss";
import Grid from "../components/common/Grid";
import Column from "../components/common/Column";

function Store() {
  return (
    <Grid as="main" className="main">
      <Column span={12}>7 items</Column>
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
        Product 5
      </Column>
      <Column span={3} className="product-item">
        Product 6
      </Column>
      <Column span={3} className="product-item">
        Product 7
      </Column>
    </Grid>
  );
}

export default Store;
