const reveal = document.querySelector('.reveal');
const displayVideos = document.querySelector('.display');
const image = document.querySelector('img');


const revealVideoThumbnails = async () => {
  const videoData = await fetchVideos();

  videoData.forEach((videoThumbnail) => {
    const thumbnail = videoThumbnail.snippet.thumbnails.high.url;
    const tag = document.createElement('img');
    tag.src = thumbnail;
    tag.height = '200';
    tag.width = '200';

    displayVideos.appendChild(tag)

  });
}


reveal.addEventListener('click', () => {
  revealVideoThumbnails();

});


const getVideoId = async () => {
  const videos = await fetchVideos();

  let eachVideoId;
  videos.forEach((video) => {
    eachVideoId = video.id.videoId;
  

    return eachVideoId;
  });

    // return eachVideoId;

}

// getVideoId();

// image.addEventListener('click', () => {

// })
