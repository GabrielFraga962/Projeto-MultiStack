import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './PageTitle.style';

interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element; // Passando desta forma o element se torna opcional
}

const PageTitle: React.FC<PageTitleProps> = (props) => {

    return ( 
    <PageTitleContainer>
        <PageTitleStyled>{props.title}</PageTitleStyled>
        <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
}

export default PageTitle;