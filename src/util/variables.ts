import {css} from "styled-components";

const PURPLE = '#5b36ac';
const CHARCOAL_GREY = '#464052';
const CHARCOAL_GREY_2 = '#363a42';
const BATTLESHIP_GREY = '#74747e';
const PALE_GREY = '#f9f9fb';
const PALE_LILAC = '#e6e6eb';
const COOL_GREY = '#a4a6b0';
const WHITE = '#ffffff';
const BLACK = '#000000';

export const COLOR = {
    PURPLE,
    CHARCOAL_GREY,
    CHARCOAL_GREY_2,
    BATTLESHIP_GREY,
    PALE_GREY,
    PALE_LILAC,
    COOL_GREY,
    WHITE,
    BLACK
};

const TEXT_4 = css`
  font-size: 1.6rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.02rem;
  color: ${CHARCOAL_GREY};
`;

const TEXT_3 = css`
  font-size: 1.69rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.012rem;
  color: ${WHITE};
`;

const TEXT_2 = css`
  font-size: 1.4rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.01rem;
  color: ${CHARCOAL_GREY_2};
`;

const TEXT = css`
  font-size: 1.4rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.01rem;
  color: ${WHITE};
`;

export const FONT = {
    TEXT_4,
    TEXT_3,
    TEXT_2,
    TEXT
};
