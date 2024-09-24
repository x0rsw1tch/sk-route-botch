export const prerender = true;


export const GET = async (event) => {

  const options = {
    status: 200
  };

  return new Response(JSON.stringify({
    somethingElse: true
  }), options);
};