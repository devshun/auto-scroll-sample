export const chats = Array(30).fill({}).map((_, index) => ({
    id: index, 
    senderId: index + 1, 
    content: `ダミーメッセージ #${index + 1}`
}))