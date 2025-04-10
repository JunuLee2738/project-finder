const https = require("https");

module.exports = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing project ID" });
  }

  const body = {
    query: `

    query SELECT_PROJECT($id: ID! $groupId: ID) {
        project(id: $id, groupId: $groupId) {     
    
    id
    name
    user {
        
    id
    nickname
    profileImage {
        
    id
    name
    label {
        
    ko
    en
    ja
    vn

    }
    filename
    imageType
    dimension {
        
    width
    height

    }
    trimmed {
        filename
        width
        height
    }

    }
    status {
        following
        follower
    }
    description
    role
    mark {
        
    id
    name
    label {
        
    ko
    en
    ja
    vn

    }
    filename
    imageType
    dimension {
        
    width
    height

    }
    trimmed {
        filename
        width
        height
    }
 
    }

    }
    thumb
    isopen
    showComment
    blamed
    isPracticalCourse
    category
    categoryCode
    created
    updated
    special
    isForLecture
    isForStudy
    isForSubmit
    hashId
    complexity
    staffPicked
    ranked
    visit
    likeCnt
    comment
    favorite
    shortenUrl
    parent {
        id
        name
        user {
            id
            nickname
        }
    }
    description
    description2
    description3
    hasRealTimeVariable
    blockCategoryUsage
    childCnt
    commentGroup {
        group
        count
    }
    likeCntGroup {
        group
        count
    }
    visitGroup {
        group
        count
    }
    recentGroup {
        group
        count
    }
    published
    isFirstPublish
    tags

    speed
    objects
    variables
    submitId {
        id
    }
    cloudVariable
    messages
    functions
    tables
    scenes
    realTimeVariable {
        
    variableType
    key
    value
    array {
        key
        data
    }
    minValue
    maxValue
    visible
    x
    y
    width
    height
    object

    }
    learning
    expansionBlocks
    aiUtilizeBlocks
    hardwareLiteBlocks
    blockCategoryUsage

        }
     }`,
    variables: { id }
  };

  const requestBody = JSON.stringify(body);
//      "Content-Length": Buffer.byteLength(requestBody),
  const options = {
    hostname: "playentry.org",
    path: "/graphql/SELECT_PROJECT",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(requestBody),
      "Origin": "https://playentry.org"
    }
  };

  const request = https.request(options, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      try {
        const parsed = JSON.parse(requestBody);
        //res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(parsed);
      } catch (err) {
        res.status(500).json({ error: "JSON parse error", detail: err.message });
      }
    });
  });

  request.on("error", (err) => {
    res.status(500).json({ error: "Request error", detail: err.message });
  });

  request.write(requestBody);
  request.end();
};
