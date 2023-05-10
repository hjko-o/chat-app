import styled from "styled-components";
import {COLOR, FONT} from "../../../util/variables";

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 4.4rem;
  padding: .8rem 1.2rem;
background: ${COLOR.PURPLE};
  ${FONT.TEXT_3};
  justify-content: center;
  
  div {
    position: absolute;
    top: 0;
    display: flex;
    height: 100%;
    align-items: center;
    
    span {
      cursor: pointer;
    }
    
    &:first-of-type {
      left: 1.2rem;
    }
    &:last-of-type {
      right: 1.2rem;

      span:first-of-type {
        margin-right: 1.7rem;
      }
    }
  }
`;
