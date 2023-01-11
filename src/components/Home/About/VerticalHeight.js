import React from "react";
import styled from "styled-components";

export const VerticalHeight = () => {
  return (
    <Wrap>
      <VertHeight></VertHeight>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
`;
const VertHeight = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  background: #fff;
`;
