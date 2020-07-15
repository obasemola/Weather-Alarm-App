const reveal = document.querySelector('.reveal');
const displayVideos = document.querySelector('.display');


const revealVideoThumbnails = async () => {
  const videos = await fetchVideos();

  videos.forEach((video) => {
    const thumbnail = video.snippet.thumbnails.high.url;
    const tag = document.createElement('img');
    const id = video.id.videoId;
    tag.id = id;
    tag.src = thumbnail;
    tag.height = '200';
    tag.width = '200';
    tag.addEventListener('click', playEachVideo);

    displayVideos.appendChild(tag);

  });

}


reveal.addEventListener('click', () => {
  revealVideoThumbnails();

});


const playEachVideo = async (e) => {
  videoId = e.target.id;
  player.loadVideoById(videoId);
}