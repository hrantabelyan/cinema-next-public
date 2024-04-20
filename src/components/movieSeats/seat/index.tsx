// components/Seat.tsx
import React from 'react';
import styles from '@/styles/rooms.module.scss';

interface SeatProps {
    id: number;
    selected: boolean;
    onSelect: (id: number) => void;
}

const Seat: React.FC<SeatProps> = ({ id, selected, onSelect }) => {
    const handleClick = () => {
        onSelect(id);
    };

    return (
        <div
            className={`${styles.seat} ${selected ? styles.selected : ''}`}
            onClick={handleClick}
        >
            {id}
        </div>
    );
};

export default Seat;
