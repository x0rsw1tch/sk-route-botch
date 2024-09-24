export const GET = async (event) => {

  let outData = {
    something: true
  };

  const options = {
    status: 200
  };

  await event.fetch('/api/route2.json')
    .then(response => {
      if (response.ok && response.status === 200) {
        return response.json();
      } else {
        throw new Error('[/api/route2.json] fetch error!')
      }
    })
    .then(data => outData = { ...outData, ...data })
    .catch(error => {
      console.error(error);
    })

  return new Response(JSON.stringify(outData), options);
};