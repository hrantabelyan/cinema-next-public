import {generateUUID} from '@/hooks/generateUUID';

export const rooms = [
    {
        id: generateUUID(),
        name: 'Room1',
        color: 'red',
        rows: '5',
        seatsPerRow: '8',
        numberOfSeats: '40'
    },
    {
        id: generateUUID(),
        name: 'Room2',
        color: 'blue',
        rows: '8',
        seatsPerRow: '10',
        numberOfSeats: '80'
    }
];
