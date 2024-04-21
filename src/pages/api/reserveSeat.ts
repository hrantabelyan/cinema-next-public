import axios from 'axios';

export const reserveSeat = async (reservedSeat: any) => {
    try {
        const backEndUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const formData = new FormData();

        formData.append('user_email', reservedSeat.email);
        formData.append('screening_id', reservedSeat.screeningId);
        formData.append('row_number', reservedSeat.row);
        formData.append('column_number', reservedSeat.column);
        
        const response = await axios.post(`${backEndUrl}/reservations`, formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = response.data;

        return data;
    } catch (error) {

    }
};
