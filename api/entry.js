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
        "referer": "strict-origin-when-cross-origin",
        "Origin": "https://playentry.org",
        "sec-fetch-mode": "cors",
        "x-client-type": "Client",
        "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTgzZDE5ODRhNjAwZDAwMjU1ZTc4YmMiLCJwcm9qZWN0SWQiOiI2ODQxMzhkOTYyYzM5NjgyODYyZDA0NWQiLCJwcm9qZWN0VXNlcklkIjoiNjU4M2QxOTg0YTYwMGQwMDI1NWU3OGJjIiwiaXNPd25lciI6dHJ1ZSwiaWF0IjoxNzQ5MTA1MDA0fQ.zDdtB44MBrKMoN8LPPYKpz6OkQuqMheGwyd2qhHfYNU",
        "csrf-token": "uvYDjrMW-csP1Y0Qh7cDdGzhVUMyqUBTStHo",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
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
      console.log(data.errors)
      res.status(400).json({ error: data.errors });
    } else {
      res.status(200).json(data);
    }
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ error: "서버 요청 실패", detail: err.message });
  }
}
