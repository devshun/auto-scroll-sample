export const messagesData = Array(30)
    .fill({})
    .map((_, index) => ({
        id: index,
        content: `ダミーメッセージ #${index + 1}`,
    }));
