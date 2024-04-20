import axios from 'axios';

export const getRooms = async () => {
    try {
        const backEndUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const response = await axios.get(`${backEndUrl}/cinema_halls`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = response.data;
        console.log(data);
        return data.data.map((item) => {
            return {
                id: item.id,
                name: item.name,
                color: item.color.slug,
                rows: item.number_of_rows,
                seatsPerRow: item.number_of_columns,
            }; 
        });
    } catch (error) {

    }
};
