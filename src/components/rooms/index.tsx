import styles from '@/styles/rooms.module.scss';
import RoomBadge from '@/components/rooms/roomBadge';
import { useEffect, useState } from 'react';
import { getRooms } from '@/pages/api/getRooms';

interface IRoom {
    id: string,
    name: string,
    color: string,
    rows: string,
    seatsPerRow: string,
}

const Rooms = () => {
    const [rooms, setRooms] = useState<IRoom[]>([]);

    useEffect(() => {
        getRooms()
        .then(res => {
            setRooms([...res]);
        });
    }, []);

    return (
        <div className={styles.roomsWrapper}>
            <div className={styles.roomsContainer}>
                {
                    rooms.map((room, index) =>
                        <RoomBadge
                            key={index}
                            id={room.id}
                            name={room.name}
                            color={room.color}
                            numberOfSeats={String(Number(room.rows) * Number(room.seatsPerRow))}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Rooms;
