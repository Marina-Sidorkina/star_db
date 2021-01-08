const getResource = async (url) => {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, received ${result.status}`);
  }

  const body = await result.json();
  return body;
};

getResource('https://swapi.dev/api/people/123123/')
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error('Could not fetch', err);
  });