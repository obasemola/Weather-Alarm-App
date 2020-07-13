const reveal = document.querySelector('.reveal');
const displayVideos = document.querySelector('.display')


const revealVideos = async () => {
  const videos = await fetchVideos();

  videos.forEach((video) => {
    const thumbnail = video.snippet.thumbnails.high.url;
    const tag = document.createElement('img');
    tag.src = thumbnail
    tag.height = '200';
    tag.width = '200';

    displayVideos.appendChild(tag)

  });


}


reveal.addEventListener('click', () => {
  revealVideos();


});