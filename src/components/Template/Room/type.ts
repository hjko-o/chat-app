export interface ChatRoomData {
    id: number;
    name: string;
    messages: Message[];
};

export interface Message {
    date: Date;
    list: MessageItem[];
};

export interface MessageItem {
    content: string;
    type: string;
    contentType: string;
    createdAt: Date | string;
}
