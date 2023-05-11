import { ChatRoomData } from './type';

export const Mock: ChatRoomData = {
  id: 0,
  name: '장만월 사장님',
  messages: [
    {
      date: new Date('2023-05-07'),
      list: [
        {
          content: '출근했냐구?301235',
          type: 'incoming',
          contentType: 'text',
          createdAt: new Date('2023-05-07 02:35:10')
        },
        {
          content: '출근했냐구?2',
          type: 'incoming',
          contentType: 'text',
          createdAt: new Date('2023-05-07 02:35:09')
        },
        {
          content: '출근했냐구?1',
          type: 'incoming',
          contentType: 'text',
          createdAt: new Date('2023-05-07 02:35:01')
        },
        {
          content: '출근했니?',
          type: 'incoming',
          contentType: 'text',
          createdAt: new Date('2023-05-07 02:34')
        }
      ]
    },
    {
      date: new Date('2023-05-01'),
      list: [
        {
          content: '해외 출장중입니다.',
          type: 'outgoing',
          contentType: 'text',
          createdAt: new Date('2023-05-01 06:45')
        },
        {
          content: '어딘데 출근 안하니?',
          type: 'incoming',
          contentType: 'text',
          createdAt: new Date('2023-05-01 06:41')
        }
      ]
    }
  ]
};
