import {generateUUID} from '@/hooks/generateUUID';

export const movies = [
    {
        id: generateUUID(),
        name: 'Movie1',
        image: '/images/movie1.jpeg',
        time: '19:30',
    },
    {
        id: generateUUID(),
        name: 'Movie1',
        image: '/images/movie2.jpeg',
        time: '19:30',
    },
];
