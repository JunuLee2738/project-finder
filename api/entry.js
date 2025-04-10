const fetch = require("node-fetch");

async function getXToken(username, password) {
  const loginBody = {
    query: `
      mutation signInByUsername($username: String!, $password: String!) {
        signInByUsername(username: $username, password: $password) {
          id
          nickname
          token
        }
      }
    `,
    variables: { username, password }
  };

  const response = await fetch("https://playentry.org/graphql/SIGNIN_BY_USERNAME", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Origin": "https://playentry.org",
      "Referer": "https://playentry.org/signin"
    },
    body: JSON.stringify(loginBody)
  });

  const result = await response.json();
  return result?.data?.signInByUsername?.token || null;
}

module.exports = async (req, res) => {
  const { id, username, password } = req.query;

  if (!id || !username || !password) {
    return res.status(400).json({ error: "Missing project ID, username or password" });
  }

  const xToken = await getXToken(username, password);
  if (!xToken) {
    return res.status(401).json({ error: "Failed to retrieve x-token (invalid credentials?)" });
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
        "Origin": "https://playentry.org",
        "Referer": "https://playentry.org",
        "x-token": xToken,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0.0.0 Safari/537.36"
      },
      body: JSON.stringify(body)
    });

    const text = await response.text();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Entry server error",
        status: response.status,
        message: text
      });
    }

    const data = JSON.parse(text);
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Internal error", detail: err.message });
  }
};
