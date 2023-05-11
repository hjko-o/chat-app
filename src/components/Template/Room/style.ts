import styled, { css } from 'styled-components';
import { COLOR, FONT } from '../../../util/variables';

export const Wrapper = styled.div`
  padding: 2rem 1.6rem;
  box-sizing: border-box;
  background: ${COLOR.PALE_GREY};
`;

export const Gallery = styled.div`
  display: flex;
  padding: 1.1rem 0 1.1rem 1.6rem;
  background: ${COLOR.PURPLE};
  overflow-x: auto;

  p {
    width: 4.6rem;
    height: 4.6rem;
    margin-right: 1rem;
    cursor: pointer;

    img {
      border-radius: 0.5rem;
    }
  }
`;

export const MessageList = styled.div<{ isGalleryShow: boolean }>`
  height: ${(props) =>
    props.isGalleryShow ? 'calc(100vh - 20.4rem)' : 'calc(100vh - 13.6rem)'};
  flex-direction: column-reverse;
  overflow-y: auto;
`;

export const Message = styled.div<{ type: string }>`
  display: flex;
  max-width: 70%;
  margin-bottom: 1rem;

  p {
    &:last-of-type {
      margin-left: 0.4rem;
    }
  }

  ${(props) =>
    props.type === 'outgoing'
      ? css`
          justify-content: right;
          margin-left: auto;

          p:last-of-type {
            color: ${COLOR.WHITE};
          }
        `
      : css``}
`;

export const Text = styled.p<{ type: string }>`
  padding: 1.2rem;
  border-radius: 1.2rem;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1);
  background: ${(props) => (props.type === 'incoming' ? COLOR.WHITE : COLOR.PURPLE)};
  ${FONT.TEXT_2};
`;
export const Image = styled.p`
  border-radius: 1.2rem;
  background: none;
  border-radius: 1.2rem;

  img {
    width: 20rem;
    height: 20rem;
    border-radius: 1.2rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Time = styled.p`
  align-self: end;
  font-size: 1.2rem;
  color: ${COLOR.CHARCOAL_GREY_2};
`;

export const Line = styled.div`
  position: relative;
  height: 2.5rem;
  p {
    &:first-of-type {
      position: absolute;
      z-index: 1;
      top: 0.5rem;
      left: 0;
      width: 100%;
      height: 0.1rem;
      background: ${COLOR.PALE_LILAC};
    }
    &:last-of-type {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        padding: 0 1.5rem;
        font-size: 1.2rem;
        color: ${COLOR.CHARCOAL_GREY_2};
        background: ${COLOR.PALE_GREY};
      }
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  div {
    width: calc(100% - 5rem);
    padding-right: 1.2rem;
    box-sizing: border-box;

    input {
      width: 100%;
      height: 5rem;
      box-sizing: border-box;
      padding: 1.6rem;
      border-radius: 2.5rem;
      box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1);
      background-color: ${COLOR.WHITE};
    }
  }
  p {
    display: flex;
    width: 5rem;
    height: 5rem;
    background: ${COLOR.PURPLE};
    border-radius: 50%;
    justify-content: center;

    svg {
      width: 2.6rem;
      height: auto;
    }
  }
`;
