import React from "react";
import { Wrapper, Content } from "./Contact.styles";
import LinkedinLogo from "../../images/linkedin.png";

export const Contact = () => (
  <Wrapper>
    <Content>
      <p>Shoot me an email or visit my linkedin profile.</p>
      <a href="mailto:kalle.lampinen@cmeducations.se">
        Kalle.lampinen@cmeducations.se
      </a>
      <a
        class="paragraf-font"
        href="https://www.linkedin.com/in/kalle-lampinen-597a651ba/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img className="linkedin-logo" src={LinkedinLogo} />
      </a>
    </Content>
  </Wrapper>
);
