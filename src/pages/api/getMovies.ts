import axios from 'axios';

export const getMovies = async (id: string) => {
    try {
        const backEndUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const response = await axios.get(`${backEndUrl}/cinema_halls/${id}/screenings`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = response.data;
        
        return data.data.map((item: any) => {
                return {
                    id: item.movie.id,
                    name: item.movie.name,
                    image: item.movie.image_path,
                    time: item.start_at
                };
        });
    } catch (error) {

    }
};
