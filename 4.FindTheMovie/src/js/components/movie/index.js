import config from '../../config';

export default function movie(data) {
  const mappingData = mapData(data);
  const html = `
    <h2 class="movie-title">${mappingData.title}</h2>
    <date class="date">${mappingData.date}</date>
    <div class="picture"><img src="${mappingData.img}"></div>
    <div class="language">${mappingData.language}</div>
    <div class="overview">${mappingData.overview}</div>
    <div class="popularity">${mappingData.popularity}</div>
  `;

  return html;
}

function mapData(data) {
  return {
    title: data.title || data.name || "Unknown",
    date: data.release_date,
    img: getPictureUrl(),
    language: data.original_language,
    overview: data.overview,
    popularity: data.popularity,
    id: data.id,
  };

  function getPictureUrl() {
    const url = data.backdrop_path || data.poster_path;

    if (url) {
      return config.imageSrc + url;
    } else {
      return config.noImageSrc;
    }
  }
}
