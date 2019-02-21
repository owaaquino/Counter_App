import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  text-align: center;
  margin-top: 50px;
  & > p > span {
    color: pink;
  }

  & > p > a {
    text-decoration: none;
    color: #262626;
  }

  & > p > a:hover {
    color: pink;
  }
`;

const Footer = props => {
  return (
    <FooterStyle>
      <p>
        Made with <span>❤</span> by{" "}
        <a href="http://owaaquino.com/" target="_blank">
          Owa Aquino
        </a>
      </p>
    </FooterStyle>
  );
};

export default Footer;
