import React from 'react';
import logoIcon from '../../assets/images/logo.svg';
import logoText from '../../assets/images/logoText.svg';
import { Logo, LogoContainer } from './SidebarLogo.styles';

type SidebarLogoProps = {
  isExpanded?: boolean;
};

export function SidebarLogo({ isExpanded = false }: SidebarLogoProps) {
  return (
    <LogoContainer>
      <Logo src={logoIcon} alt="Logo CRM" />
      {isExpanded && <Logo src={logoText} />}
    </LogoContainer>
  );
}

export default SidebarLogo;
