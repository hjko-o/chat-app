import { MessageItem } from '../type';
import dayjs from 'dayjs';
import React from 'react';
import * as $ from '../style';
import Image from 'next/image';

const Text = ({
  type,
  contentType,
  content
}: {
  type: string;
  contentType: string;
  content: string;
}) => {
  return contentType === 'text' ? (
    <$.Text type={type}>{content}</$.Text>
  ) : (
    <$.Image>
      <Image src={content} width="100" height="100" alt="채팅 이미지" />
    </$.Image>
  );
};

const Message = ({ type, contentType, content, createdAt }: MessageItem) => {
  return (
    <>
      {type === 'incoming' && (
        <Text type={type} content={content} contentType={contentType} />
      )}
      <$.Time>{createdAt ? dayjs(createdAt).format('HH:mm') : ''}</$.Time>
      {type === 'outgoing' && (
        <Text type={type} content={content} contentType={contentType} />
      )}
    </>
  );
};

export default Message;
