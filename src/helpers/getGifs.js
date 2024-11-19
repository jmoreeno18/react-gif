export const getGifs = async (category) => {
  // Accede a las variables de entorno de Vite
  const url = `${import.meta.env.VITE_GIPHY_API_URL}${category}&limit=${import.meta.env.VITE_GIPHY_API_LIMIT}`;

  const resp = await fetch(url);
  const { data } = await resp.json();


  // Mapeamos los datos y extraemos los gifs
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

