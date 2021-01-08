const getResource = async (url) => {
  const result = await fetch(url);
  const body = await result.json();
  return body;
};

getResource('https://swapi.dev/api/people/1/')
  .then((body) => {
    console.log(body);
  });