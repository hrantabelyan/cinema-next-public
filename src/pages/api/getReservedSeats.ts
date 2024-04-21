import axios from 'axios';

export const getReservedSeats = async (screeningId: string) => {
    try {
        const backEndUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const response = await axios.get(`${backEndUrl}/screenings/${screeningId}/reservations`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = response.data;

        const roomInfo = {
            roomRows: data.cinema_hall.number_of_rows,
            roomColumns: data.cinema_hall.number_of_columns,
            reservedSeats: data.data.map((item: any) => {
                return {
                    row: String(item.row_number),
                    column: String(item.column_number)
                }; 
            })
        };

        return roomInfo;
    } catch (error) {

    }
};
