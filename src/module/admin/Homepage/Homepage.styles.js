import theme from "../../../theme/Theme";
import styled from "styled-components";

export const ContainerWrapper = styled.div`

position: fixed;
top:100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // height: 100vh;
    background-color: ${theme.colors.backgrounGrey};
    color: ${theme.colors.primary};
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-left: 60px;
  `;