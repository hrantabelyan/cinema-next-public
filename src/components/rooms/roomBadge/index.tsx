import React from 'react';
import styles from '@/styles/rooms.module.scss';
import {useRouter} from 'next/router';

interface IRoomBadge {
    id: string,
    name: string,
    color: string,
    rows?: string,
    seatsPerRow?: string,
    numberOfSeats: string
}

const RoomBadge = ({id, color, name, numberOfSeats}: IRoomBadge) => {
    const router = useRouter();

    const handleRedirectToRoom = () => {
        router.push(`/rooms/${id}`)
    }
    
    return (
        <div 
            className={styles.roomBadgeContainer}
            onClick={handleRedirectToRoom}
        >
            <div
                className={styles.color}
                style={{background: color}}
            >
            </div>
            <div className={styles.nameAndSeats}>
                <span>{name}</span>
                <span>{numberOfSeats}</span>
            </div>
        </div>
    );
};

export default RoomBadge;
