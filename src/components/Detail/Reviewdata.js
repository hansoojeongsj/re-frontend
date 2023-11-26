export const ReviewData = [
    {
        id: 1,
        username: 'User1',
        rating: 2,
        date: '2023-01-01',
        content: '오늘은 오늘의 메뉴 A에 닭다리가 나왔는데 너무 짜요 최악이네요 다신 먹지 않겠어요.',
        image: '/bamsik-image.jpg',
    },
    {
        id: 2,
        username: 'User2',
        rating: 5,
        date: '2023-01-02',
        content: '굳. 든든해요',
        image: '/bamsik-image.jpg',
    },
];

// ReviewData를 기반으로 ratings의 초기값 설정
export const initialRatings = Array.from({ length: 5 }, (_, index) => ({
    rating: index + 1,
    count: ReviewData.filter(review => review.rating === index + 1).length,
}));
