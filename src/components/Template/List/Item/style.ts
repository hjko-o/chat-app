import styled from "styled-components";
import {COLOR, FONT} from "../../../../util/variables";

export const Wrapper = styled.div`
    position: relative;
`;

export const Content = styled.div`
  display: flex;
  padding: .9rem 1.6rem;
  box-sizing: border-box;
  
  img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }
`;

export const Text = styled.div`
  display: flex;
  width: calc(100% - 7rem);
  padding: 0 0 0 1.5rem;
  margin: 1rem 0 .3rem 0;
  ${FONT.TEXT_4};
  
  div {
    width: 85%;
    margin-right: 1.3rem;
  }

  span {
    float: right;
    font-size: 1.1008rem;
    letter-spacing: 0rem;
    color: ${COLOR.CHARCOAL_GREY_2};
  }
`;

export const Preview = styled.p`
  margin-top: .3rem;
font-size: 1.2992rem;
  letter-spacing: 0.01rem;
  color: ${COLOR.COOL_GREY};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Badge = styled.div`
position: absolute;
  bottom: 1.6rem;
  right: 1.7rem;
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${COLOR.PURPLE};
  font-size: 1rem;
  letter-spacing: 0.008rem;
  color: ${COLOR.WHITE};
`;