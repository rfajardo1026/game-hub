import platforms from "../data/platforms";

// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

//// Make it dynamic and call the api everytime it reloads
//const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

//// Make it static and available to the site rightaway
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
