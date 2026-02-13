export default {
  async fetch(request) {
    const universeId = "9357409466";

    const response = await fetch(
      `https://games.roblox.com/v1/games/votes?universeIds=${universeId}`
    );

    const data = await response.json();

    return new Response(
      JSON.stringify({
        likes: data.data[0].upVotes,
        dislikes: data.data[0].downVotes
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
