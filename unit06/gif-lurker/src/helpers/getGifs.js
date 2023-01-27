export const getGifs = async (searchTerm) => {
  const apikey = "";
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${searchTerm}&limit=5`;

  const resp = await fetch(apiUrl);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height.url,
  }));
  return gifs;
};
