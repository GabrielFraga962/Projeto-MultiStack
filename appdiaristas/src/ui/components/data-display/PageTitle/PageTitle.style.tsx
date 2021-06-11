import { styled } from '@material-ui/core/styles';

export const PageTitleContainer = styled ('div')`
    text-align: center;
    margin: ${({theme})=> theme.spacing(5) + ' ' + 0};
`;

export const PageTitleStyled = styled('h2')`
    margin: 0;
    color: ${({theme}) => theme.palette.primary.main};
    font-size: ${({theme}) => theme.typography.h6.fontSize};
    font-style: 600;

    ${({theme}) => theme.breakpoints.down('md')} { //estilização pra o tamanho da janela
        font-size: ${({theme}) => theme.typography.body1.fontSize};
    } 
`;

export const PageSubtitleStyled = styled('h3')`
    margin: ${({theme}) => theme.spacing(1.5) + ' ' + '0'};
    color: ${({theme}) => theme.palette.text.primary};
    font-size: ${({theme}) => theme.typography.body1.fontSize};
    font-weight: normal;

    ${({theme}) => theme.breakpoints.down('md')} {
        font-size: ${({theme}) => theme.typography.body2.fontSize}
    }
`;