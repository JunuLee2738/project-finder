const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing project ID" });
  }

  const body = {
    query: `
      query SELECT_PROJECT($id: ID! $groupId: ID) {
        project(id: $id, groupId: $groupId) {
          id name user { id nickname profileImage {
            id name label { ko en ja vn } filename imageType dimension { width height } trimmed { filename width height }
          } status { following follower } description role mark {
            id name label { ko en ja vn } filename imageType dimension { width height } trimmed { filename width height }
          }}
          thumb isopen showComment blamed isPracticalCourse category categoryCode created updated special
          isForLecture isForStudy isForSubmit hashId complexity staffPicked ranked visit likeCnt comment favorite
          shortenUrl parent { id name user { id nickname } }
          description description2 description3 hasRealTimeVariable blockCategoryUsage childCnt
          commentGroup { group count } likeCntGroup { group count } visitGroup { group count } recentGroup { group count }
          published isFirstPublish tags
          speed objects variables submitId { id } cloudVariable messages functions tables scenes
          realTimeVariable {
            variableType key value array { key data } minValue maxValue visible x y width height object
          }
          learning expansionBlocks aiUtilizeBlocks hardwareLiteBlocks blockCategoryUsage
        }
      }
    `,
    variables: { id }
  };

  try {
    const response = await fetch("https://playentry.org/graphql/SELECT_PROJECT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": "https://playentry.org"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Entry server error", status: response.status });
    }

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Internal error", detail: err.message });
  }
};
