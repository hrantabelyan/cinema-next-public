import React, {useState} from 'react';
import styles from '@/styles/rooms.module.scss';
import Seat from "@/components/movieSeats/seat";

interface MovieSeatSelectionProps {
    totalRows: number;
    totalColumns: number;
}

const MovieSeats: React.FC<MovieSeatSelectionProps> = ({totalRows, totalColumns}) => {
    const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
    const totalSeats = totalRows * totalColumns;
    const handleSeatSelect = (seatId: number) => {
        setSelectedSeat(seatId === selectedSeat ? null : seatId);
    };

    const handleReserveSeats = () => {

    };

    return (
        <div className={styles.roomsWrapper}>
            <div className={styles.roomsContainer}>
                <h2>Select Your Seats</h2>
                <div className={styles.seatsGrid}>
                    {[...Array(totalColumns)].map((_, colIndex) => (
                        <div key={colIndex} className={styles.seatColumns}>
                            {[...Array(totalRows)].map((_, rowIndex) => {
                                const seatNumber = colIndex * totalRows + rowIndex + 1;
                                return (
                                    <Seat
                                        key={seatNumber}
                                        id={seatNumber}
                                        selected={seatNumber === selectedSeat}
                                        onSelect={handleSeatSelect}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
                <p>Selected Seats: {selectedSeat}</p>
                <div className={styles.reserveContainer}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email</label>
                        <input className={styles.textInput} id={'email'} type="text"/>
                    </div>
                    <button
                        className={'btn'}
                        onClick={handleReserveSeats}
                    >Reserve seats</button>
                </div>
            </div>
        </div>
    );
};

export default MovieSeats;
