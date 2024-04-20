import React from 'react';
import {movies} from "@/data/movies";
import styles from '@/styles/rooms.module.scss';
import MovieBadge from "@/components/movies/movieBadge";

const Room = () => {
    return (
        <div className={styles.roomsWrapper}>
            <div className={styles.roomsContainer}>
                {
                    movies.map((movie, index) =>
                        <MovieBadge
                            key={index}
                            id={movie.id}
                            name={movie.name}
                            time={movie.time}
                            image={movie.image}
                        />
                    )
                }

            </div>
        </div>
    );
};

export default Room;
