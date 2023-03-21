import React from "react";
import { Container, ContainerNoPadding } from "../../styles/shared";
import {
  FooterWrapper,
  Icons,
  Logo,
  Text,
  TextContainer,
} from "./Footer.styles";

import LogoImage from "../../assets/images/logo.png";
import Link from "next/link";
import { FaDiscord, FaGithub, FaGlobe, FaSitemap, FaTelegram, FaTwitter } from "react-icons/fa";

const FooterContainer = () => {
  return (
    <FooterWrapper>
      <ContainerNoPadding>
        <TextContainer>
          <Text>Copyright © MangAI. All Rights Reserved</Text>
          <Text>
            Official platform of the $MNGAI token.
          </Text>
          <Icons>
            <Link
              href={"https://mangai.io"}
              target="_blank"
            >
              <FaGlobe />
            </Link>
            <Link
              href={"https://mangai.io"}
              target="_blank"
            >
              <FaTwitter />
            </Link>
            <Link href={"https://t.me/mangaierc"} target="_blank">
              <FaTelegram />
            </Link>
          </Icons>
        </TextContainer>
      </ContainerNoPadding>
    </FooterWrapper>
  );
};

export default FooterContainer;
