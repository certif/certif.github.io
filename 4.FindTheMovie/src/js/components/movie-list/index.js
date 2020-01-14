import movie from '../movie';

export default class MovieList {
  constructor(data) {
    this.data = data;
  }

  drawToDom(selector) {
    selector.innerHTML = this.movieList;
  }

  renderMovie() {
    this.fragment = document.createDocumentFragment();

    data.forEach(data => {
      this.fragment.appendChild(movie(data));
    });
  }
}
