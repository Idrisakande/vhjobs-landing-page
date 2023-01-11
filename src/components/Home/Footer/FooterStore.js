import React from "react";
import styled from "styled-components";

export const FooterStore = ({ children, download, name }) => {
  return (
    <Container>
      {children}
      <StoreText>
        <DownLoad>{download}</DownLoad>
        <StoreName>{name}</StoreName>
      </StoreText>
    </Container>
  );
};

const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.35rem;
  border: 1px solid #ffffff;
  padding: 0.3rem 0;
  width: 9rem;
  transition: 0.4s;
  cursor: pointer;
  :hover {
    border-color: #1c71b7;
    color: #1c71b7;
  }
`;
const StoreText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  font-size: 0.7rem;
  margin-left: 0.45rem;
`;
const DownLoad = styled.div``;
const StoreName = styled.div`
  font-size: 0.8rem;
`;
