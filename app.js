const key = 'AIzaSyC98MUXVJiCbha1WndzXM2NAOxUTAOmGV8';

const fetchVideos = async () => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key,
      part: 'snippet',
      q: 'javascript',
      type: 'video',
      maxResults: '25',
      order: 'date'
    }
  });

  return response.data.items;

};

fetchVideos();