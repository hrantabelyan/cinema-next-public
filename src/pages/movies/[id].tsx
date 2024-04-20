import React from 'react';
import MovieSeats from "@/components/movieSeats";

const Seats = () => {
    return (
        <div>
            <MovieSeats totalRows={10} totalColumns={8}/>
        </div>
    );
};

export default Seats;
