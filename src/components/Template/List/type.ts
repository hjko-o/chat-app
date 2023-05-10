export interface ChatList {
    list: ChatItem[];
}

export interface ChatItem {
    id: number;
    src: string;
    name: string;
    message: string;
    date: Date;
    badge: number | null;
}