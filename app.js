const key = 'AIzaSyAe7cj7Hh03u9KM9Z4f1zK4wn1TJvl_ytE';

const fetchVideos = async () => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key,
      part: 'snippet',
      q: 'javascript',
      type: 'video',
      maxResults: '25',
      order: 'date',
      relevanceLanguage: 'en'
    }
  });

return response.data.items;
// console.log(response.data.items);

};

// fetchVideos();