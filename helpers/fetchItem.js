const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/items/${item}`;
  try {
  const captura = await fetch(url);
  const dados = await captura.json();
  return dados;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
