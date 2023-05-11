import React from 'react';
import Layout from '../../Common/Layout';
import Header from '../../Common/Header';
import * as $ from './style';
import Item from './Item';
import { ChatList } from './type';

const data: ChatList = {
  list: [
    {
      id: 6,
      src: '/images/img-profile-1@2x.jpg',
      name: '장만월 사장님',
      date: new Date('2023-05-11 09:32'),
      message: '어딘데 출근 안하니, 죽고싶니?어딘데 출근 안하니, 죽고싶니?',
      badge: 2
    },
    {
      id: 5,
      src: '/images/img-profile-3@2x.jpg',
      name: '신정근 바텐더',
      date: new Date('2023-05-07 02:32'),
      message: '오시는 길에 와인 몇병만 사다주세요.',
      badge: null
    },
    {
      id: 4,
      src: '/images/img-profile-4@2x.jpg',
      name: '이미라 의사',
      date: new Date('2023-05-05 09:32'),
      message: '휴가 잘 보내고 계신가요? 다름이 아니라 지금 어쩌고저쩌고 블라블라',
      badge: null
    },
    {
      id: 3,
      src: '/images/img-profile-5@2x.jpg',
      name: '구찬성 지배인',
      date: new Date('2023-05-04 09:32'),
      message: '아 휴가셨군요. 약속은 다음으로 미루시죠!',
      badge: null
    },
    {
      id: 2,
      src: '/images/img-shot-6@2x.jpg',
      name: '노준석 총지배인',
      date: new Date('2023-04-28 09:32'),
      message: '휴가에서 언제 돌아오시는지요. 돌아오시면 어쩌고저쩌고 블라블라',
      badge: null
    },
    {
      id: 1,
      src: '/images/img-shot-7@2x.jpg',
      name: '김유나 인턴',
      date: new Date('2023-04-27 09:32'),
      message: '304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ',
      badge: null
    },
    {
      id: 0,
      src: '/images/img-profile-2@2x.jpg',
      name: '구현모',
      date: new Date('2023-04-26 09:32'),
      message: '술먹자',
      badge: null
    }
  ]
};

const List = () => {
  const handleHeaderAction = (action: string) => {};

  return (
    <Layout>
      <Header title="채팅" onClick={handleHeaderAction} />
      <$.Wrapper>
        {data.list.map((item) => (
          <Item {...item} />
        ))}
      </$.Wrapper>
    </Layout>
  );
};

export default List;
