// api/entry.js
export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing project ID" });
  }

  const body = {
    query: `
      query SELECT_PROJECT($id: ID! $groupId: ID) {
        project(id: $id, groupId: $groupId) {
          id name user { id nickname } thumb description created updated
          speed objects variables messages functions tables scenes
          realTimeVariable { variableType key value visible x y width height object }
          category categoryCode cloudVariable expansionBlocks aiUtilizeBlocks
          hardwareLiteBlocks blockCategoryUsage
        }
      }
    `,
    variables: { id }
  };

  try {
    const response = await fetch("https://playentry.org/graphql/SELECT_PROJECT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch project" });
  }
}
