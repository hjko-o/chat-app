import * as $ from './style';
import Image from 'next/image';
import {ChatItem} from "../type";
import dayjs from "dayjs";
import 'dayjs/locale/ko'
import {useRouter} from "next/router";
dayjs.locale('ko')

const Item = ({name, src, date, message, badge, id}: ChatItem) => {
    const router = useRouter();
  return (
      <$.Wrapper onClick={() => router.push(`/room/${id}`)}>
          <$.Content>
              <Image src={src} width="56" height="56" alt="프로필 이미지"/>
                  <$.Text>
                      <div>
                          <p>{name}</p>
                          <$.Preview>{message}</$.Preview>
                      </div>
                      <span>{dayjs(date).format(dayjs(date).isSame(new Date(), 'day') ? 'HH:mm' : 'ddd요일')}</span>
                  </$.Text>
          </$.Content>
          {badge && <$.Badge>{badge}</$.Badge>}
      </$.Wrapper>
  );
};

export default Item;