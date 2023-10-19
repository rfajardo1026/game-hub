import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//// Make it dynamic and call the api everytime it reloads
// const useGenre = () => useData<Genre>("/genres");

//// Make it static and available to the site rightaway
const useGenre = () => ({ data: genres, isLoading: false, error: null });

export default useGenre;
