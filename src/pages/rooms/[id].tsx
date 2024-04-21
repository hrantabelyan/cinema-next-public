import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/rooms.module.scss';
import MovieBadge from '@/components/movies/movieBadge';
import { getMovies } from '@/pages/api/getMovies';

export interface IMovie {
    id: string,
    name: string,
    image: string,
    time: string
}

const Room = () => {
    const router = useRouter();
    const {id} = router.query;
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        if (typeof id === 'string') {
            getMovies(id)
            .then(res => {
                setMovies([...res]);
            });
        }
    }, [id]);

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
