import React from 'react';
import styles from '@/styles/rooms.module.scss';
import {useRouter} from 'next/router';

interface IMovieBadge {
    id: string,
    name: string,
    time: string,
    image: string
}

const MovieBadge = ({id, name, image, time}: IMovieBadge) => {
    const router = useRouter();

    const handleRedirectToRoom = () => {
        router.push(`/screenings/${id}`);
    };

    return (
        <div
            className={styles.roomBadgeContainer}
            onClick={handleRedirectToRoom}
        >
            <div
                className={styles.movie}
                style={{backgroundImage: `url(${image})`}}
            >
            </div>
            <div className={styles.nameAndSeats}>
                <span>{name}</span>
                <span>{time}</span>
            </div>
        </div>
    );
};

export default MovieBadge;
