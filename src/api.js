import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 5oEym0krMnPK6hyXwSZISNVmp4owRZ4W3Q-4_DXMzqg',
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;