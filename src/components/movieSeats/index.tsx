import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from '@/styles/rooms.module.scss';
import Seat from '@/components/movieSeats/seat';
import { getReservedSeats } from '@/pages/api/getReservedSeats';
import { useRouter } from 'next/router';
import {reserveSeat} from '@/pages/api/reserveSeat';

interface IReservedSeats {
    column: string,
    row: string
}

interface ISelectedSeat {
    rowIndex: number,
    colIndex: number,
    seatNumber: number
}

const MovieSeats = () => {
    const [selectedSeat, setSelectedSeat] = useState<ISelectedSeat>({
        rowIndex: 0,
        colIndex: 0,
        seatNumber: 0
    });
    const [reservedSeats, setReservedSeats] = useState<string[]>([]);
    const [roomRows, setRoomRows] = useState<number>(0);
    const [roomColumns, setRoomColumns] = useState<number>(0);
    const [email, setEmail] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        if (typeof id === 'string') {
            getReservedSeats(id)
            .then((res: any) => {
                if(res) {
                    const currentReserves = res.reservedSeats.map((i: IReservedSeats) => {
                       const currentSeat = String((Number(i.row) - 1) * res.roomColumns + Number(i.column));
                       return currentSeat;
                    });
                    setReservedSeats(currentReserves);
                    setRoomRows(res?.roomRows);
                    setRoomColumns(res?.roomColumns);
                }
            });
        }
    },[id]);

    const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
    };

    const handleSeatSelect = ( rowIndex: number, colIndex: number, seatNumber: number) => {
        setSelectedSeat({
            rowIndex,
            colIndex,
            seatNumber
        });
    };

    const handleReserveSeats = () => {
        setIsProcessing(true);
        reserveSeat({
            email,
            row: selectedSeat.rowIndex,
            column: selectedSeat.colIndex,
            screeningId: id
        })
        .then(() => window.location.reload());
    };

    return (
        <div className={styles.roomsWrapper}>
            <div className={styles.roomsContainer}>
                <h2>Select Your Seats</h2>
                <div className={styles.seatsGrid}>
                    {[...Array(roomRows)].map((_, rowIndex) => 
                        <div key={rowIndex} className={styles.seatColumns}>
                            {[...Array(roomColumns)].map((item, colIndex) => {
                                const seatNumber = rowIndex * roomColumns + colIndex + 1;
                                const currentColumn = seatNumber % roomColumns;
                                const currentRow = Math.ceil(seatNumber / roomColumns);
                                return (
                                    <Seat
                                        key={seatNumber}
                                        id={seatNumber}
                                        selected={seatNumber === selectedSeat.seatNumber}
                                        onSelect={() => handleSeatSelect(currentRow, currentColumn, seatNumber)}
                                        reserved={reservedSeats.includes(String(seatNumber))}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
                <p>Selected Seat: {selectedSeat.seatNumber}</p>
                <div className={styles.reserveContainer}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email</label>
                        <input 
                            className={styles.textInput} 
                            id={'email'}
                            type="text"
                            value={email}
                            onChange={handleEmailInput}
                         />
                    </div>
                    <button
                        type="button"
                        className={'btn'}
                        onClick={handleReserveSeats}
                        disabled={isProcessing}
                    >
                        Reserve seat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieSeats;
