import styled from "styled-components";
import {COLOR, FONT} from "../../../../util/variables";

export const Wrapper = styled.div`
    position: relative;
      cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  padding: .9rem 1.6rem;
  box-sizing: border-box;
`;

export const Profile = styled.p`
width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const ChatMessage = styled.div`
  display: flex;
  width: calc(100% - 5.6rem);
  margin: .9rem 0 .9rem 1.5rem;
  box-sizing: border-box;
`;

export const Preview = styled.div`
  width: 82%;
  max-width: 23rem;

  p {
    &:first-of-type {
      ${FONT.TEXT_4};
    }
    &:last-of-type {
      margin-top: .3rem;
      font-size: 1.2992rem;
      letter-spacing: 0.01rem;
      color: ${COLOR.COOL_GREY};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
`;

export const Sub = styled.div`
      margin: .3rem 0 .6rem auto;
      ${FONT.TEXT_5};
`;

export const Badge = styled.div`
      display: flex;
      width: 1.8rem;
      height: 1.8rem;
      margin: .6rem 0 0 auto;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: ${COLOR.PURPLE};
      font-size: 1rem;
      letter-spacing: 0.008rem;
      color: ${COLOR.WHITE};
`;