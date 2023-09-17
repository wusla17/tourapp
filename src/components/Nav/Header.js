import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <LeftBox>
        <LogoImage src={require("../../assets/images/logo.svg")} />
      </LeftBox>
      <RightBox>
        <Button></Button>
      </RightBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div``;
const LeftBox = styled.div``;
const RightBox = styled.div``;
const Button = styled.button``;
const LogoImage = styled.img``;

export default Header;
