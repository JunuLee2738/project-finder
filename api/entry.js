export default async function handler(req, res) {
  const { id, groupId = null } = req.query;

  const query = `

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
     }
  `;

  try {
    const response = await fetch("https://playentry.org/graphql/SELECT_PROJECT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://playentry.org/",
        "Origin": "https://playentry.org",
        "x-client-type": "Client",
        "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZG5vIjoiODRiODIwZDAtOWZjNC0xMWVlLTg5MjktMjQ2ZTk2NGNmMDRjIiwiZXhwIjoxNzQ3OTk4OTQ1LCJpYXQiOjE3NDY3ODkzNDV9.LaRogyIot3TXCgzkLb14ecqK3vZE_wH_wZbGrbIv4Ow",
        "csrf-token": "uvYDjrMW-csP1Y0Qh7cDdGzhVUMyqUBTStHo"
      },
      body: JSON.stringify({
        query,
        variables: {
          id,
        },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      res.status(400).json({ error: data.errors });
    } else {
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(500).json({ error: "서버 요청 실패", detail: err.message });
  }
}
