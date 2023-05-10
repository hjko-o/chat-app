import React, {useEffect, useState} from 'react';
import * as $ from './style';
import dayjs from "dayjs";
import SendIcon from "../../Icon/Send";
import Layout from "../../Common/Layout";
import Header from "../../Common/Header";
import Image from 'next/image';
import {Mock} from './mock';
import {useRef} from "react";
import {ChatRoomData, MessageItem} from "./type";
import {types} from "sass";
import Message from "./Message";

const images = [
    '/images/sample1.jpg',
    '/images/sample2.jpg',
    '/images/sample3.jpg',
    '/images/sample4.jpg',
    '/images/sample5.jpg',
    '/images/sample6.jpg',
    '/images/sample7.jpg',
];

const Room = () => {
    const messageRef = useRef<HTMLDivElement | null>(null);
    const [openGallery, setOpenGallery] = useState(false);
    const [data, setData] = useState<ChatRoomData | undefined>();
    const [recent, setRecent] = useState<MessageItem[]>();

    useEffect(() => {
        const {id, name, messages} = Mock;
        const mock = JSON.stringify({
            id,
            name,
            messages: messages.reverse()
        });
        setData(JSON.parse(mock));
    }, []);

    useEffect(() => {
        if (!data && !recent) {
            return;
        }

        const scrollHeight = messageRef.current?.scrollHeight || 0;
        messageRef.current?.scrollTo(0, scrollHeight);
    }, [data, recent]);

    const handleHeaderAction = (action: string) => {
        setOpenGallery(!openGallery);
    };

    const handleClickImage = (src: string) => {
        // 이미지를 서버에 올려서 url을 받아오고, 그 url을 메세지로 전달
        const url = `${src}`;
        const message = [...(recent || [])];
        message.push({
            content: url,
            type: 'outgoing',
            contentType: 'image',
            createdAt: new Date()
        });
        setRecent(message);
    };

    const removeSameCreatedTime = (list: MessageItem[]) => {
        const objByTime: {[key: string]: {content: string, type: string, contentType: string, createdAt: Date | string}[]} = {};
        list.forEach(({createdAt, content, type, contentType}) => {
            const minute = dayjs(createdAt).format('HHmm');
            const value = {
                content,
                type,
                createdAt,
                contentType
            };
            objByTime[minute] = objByTime[minute] ? [...objByTime[minute], value] : [value];
        });

        Object.keys(objByTime).forEach((key) => {
            objByTime[key] = objByTime[key].map((message, index) => ({...message, createdAt: index === 0 ? message.createdAt : ''}));
        });

        const array: {content: string, type: string, contentType :string, createdAt: Date | string}[] = [];

        const sortedKeyByTime = Object.keys(objByTime).sort((key1, key2) => {
            const time1 = parseInt(key1);
            const time2 = parseInt(key2);
            if (time1 > time2) {
                return -1;
            } else if (time1 === time2) {
                return 0;
            } else {
                return 1;
            }
        });

        sortedKeyByTime.forEach((key) => {
            array.push(...objByTime[key]);
        })

        return array.reverse();
    };

    return <Layout>
        <Header title={data?.name || ''} onClick={handleHeaderAction}>
            {
                openGallery ?
                    <$.Gallery>
                        {
                            images.map((src) => (
                                <p onClick={() => handleClickImage(src)}>
                                    <Image src={src} width="46" height="46" alt="갤러리 사진"/>
                                </p>
                            ))
                        }
                    </$.Gallery>
                    :
                    ''
            }
        </Header>
        <$.Wrapper>
            <$.MessageList ref={messageRef} isGalleryShow={openGallery}>
                {
                    data?.messages.map((message) => (
                        <>
                            <$.Line key={message.date + ''}>
                                <p/>
                                <p>
                                    <span>{dayjs(message.date).format('YYYY년 M월 D일')}</span>
                                </p>
                            </$.Line>
                            {
                                removeSameCreatedTime(message.list).map(({createdAt, type, content, contentType}, index) => (
                                    <$.Message type={type} key={`${createdAt}-${index}`}>
                                        <Message {...{content, contentType, createdAt, type}}/>
                                        {/*{*/}
                                        {/*    type === 'incoming' ?*/}
                                        {/*        <>*/}
                                        {/*            <$.Text contentType={contentType}>{content}</$.Text>*/}
                                        {/*            <$.Time>{createdAt ? dayjs(createdAt).format('HH:mm') : ''}</$.Time>*/}
                                        {/*        </>*/}
                                        {/*        :*/}
                                        {/*        <>*/}
                                        {/*            <$.Time>{createdAt ? dayjs(createdAt).format('HH:mm') : ''}</$.Time>*/}
                                        {/*            <$.Text contentType={contentType}>{content}</$.Text>*/}
                                        {/*        </>*/}
                                        {/*}*/}
                                    </$.Message>
                                ))
                            }
                        </>
                    ))
                }
                {
                    recent?.map(({createdAt, content, contentType, type}, index) => (
                        <$.Message type={type} key={`${createdAt}-${index}`}>
                            <Message {...{content, contentType, createdAt, type}}/>
                            {/*{*/}
                            {/*    type === 'incoming' ?*/}
                            {/*        <>*/}
                            {/*            <$.Text contentType={contentType}>{content}</$.Text>*/}
                            {/*            <$.Time>{createdAt ? dayjs(createdAt).format('HH:mm') : ''}</$.Time>*/}
                            {/*        </>*/}
                            {/*        :*/}
                            {/*        <>*/}
                            {/*            <$.Time>{createdAt ? dayjs(createdAt).format('HH:mm') : ''}</$.Time>*/}
                            {/*            <$.Text contentType={contentType}>{content}</$.Text>*/}
                            {/*        </>*/}
                            {/*}*/}
                        </$.Message>
                    ))
                }
            </$.MessageList>
            <$.Bottom>
                <div>
                    <input placeholder="메시지를 입력하세요."/>
                </div>
                <p>
                    <SendIcon/>
                </p>
            </$.Bottom>
        </$.Wrapper>
    </Layout>;
};

export default Room;