// components/Seat.tsx
import React from 'react';
import styles from '@/styles/rooms.module.scss';

interface SeatProps {
    id: number;
    selected: boolean;
    onSelect: (id: number) => void;
    reserved: boolean
}

const Seat: React.FC<SeatProps> = ({ id, selected, onSelect, reserved }) => {
    const handleClick = () => {
        onSelect(id);
    };

    return (
        <div
            className={`
            ${styles.seat}
            ${selected ? styles.selected : ''}
            ${reserved ? styles.reserved : ''}
            `}
            onClick={handleClick}
        >
            {id}
        </div>
    );
};

export default Seat;
