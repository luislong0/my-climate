import { CloudSun } from "phosphor-react";
import { HeaderContainer, LogoContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <span>My Climate</span>
        <CloudSun size={50} />
      </LogoContainer>
    </HeaderContainer>
  )
}