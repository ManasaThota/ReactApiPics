import axios from "axios";

const searchImages = async(term) => {
   const response =  await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID dbFl2rrRKsW0wPlFvXwQh_tadL82k_YZyxdyb4e5Na8',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;

}

export default searchImages;