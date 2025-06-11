// export default async function handler(req, res) {
//   const { id, groupId = null } = req.query;

//   const query = `

//     query SELECT_PROJECT($id: ID! $groupId: ID) {
//         project(id: $id, groupId: $groupId) {
            
    
//     id
//     name
//     user {
        
//     id
//     nickname
//     profileImage {
        
//     id
//     name
//     label {
        
//     ko
//     en
//     ja
//     vn

//     }
//     filename
//     imageType
//     dimension {
        
//     width
//     height

//     }
//     trimmed {
//         filename
//         width
//         height
//     }

//     }
//     status {
//         following
//         follower
//     }
//     description
//     role
//     mark {
        
//     id
//     name
//     label {
        
//     ko
//     en
//     ja
//     vn

//     }
//     filename
//     imageType
//     dimension {
        
//     width
//     height

//     }
//     trimmed {
//         filename
//         width
//         height
//     }
 
//     }

//     }
//     thumb
//     isopen
//     showComment
//     blamed
//     isPracticalCourse
//     category
//     categoryCode
//     created
//     updated
//     special
//     isForLecture
//     isForStudy
//     isForSubmit
//     hashId
//     complexity
//     staffPicked
//     ranked
//     visit
//     likeCnt
//     comment
//     favorite
//     shortenUrl
//     parent {
//         id
//         name
//         user {
//             id
//             nickname
//         }
//     }
//     description
//     description2
//     description3
//     hasRealTimeVariable
//     blockCategoryUsage
//     childCnt
//     commentGroup {
//         group
//         count
//     }
//     likeCntGroup {
//         group
//         count
//     }
//     visitGroup {
//         group
//         count
//     }
//     recentGroup {
//         group
//         count
//     }
//     published
//     isFirstPublish
//     tags

//     speed
//     objects
//     variables
//     submitId {
//         id
//     }
//     cloudVariable
//     messages
//     functions
//     tables
//     scenes
//     realTimeVariable {
        
//     variableType
//     key
//     value
//     array {
//         key
//         data
//     }
//     minValue
//     maxValue
//     visible
//     x
//     y
//     width
//     height
//     object

//     }
//     learning
//     expansionBlocks
//     aiUtilizeBlocks
//     hardwareLiteBlocks
//     blockCategoryUsage

//         }
//      }
//   `;

//   try {
//     const response = await fetch("https://playentry.org/graphql/SELECT_PROJECT", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
//         "Referer": "https://playentry.org/",
//         "referer": "strict-origin-when-cross-origin",
//         "Origin": "https://playentry.org",
//         "sec-fetch-mode": "cors",
//         "x-client-type": "Client",
//         "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTgzZDE5ODRhNjAwZDAwMjU1ZTc4YmMiLCJwcm9qZWN0SWQiOiI2ODQxMzhkOTYyYzM5NjgyODYyZDA0NWQiLCJwcm9qZWN0VXNlcklkIjoiNjU4M2QxOTg0YTYwMGQwMDI1NWU3OGJjIiwiaXNPd25lciI6dHJ1ZSwiaWF0IjoxNzQ5MTA1MDA0fQ.zDdtB44MBrKMoN8LPPYKpz6OkQuqMheGwyd2qhHfYNU",
//         "csrf-token": "uvYDjrMW-csP1Y0Qh7cDdGzhVUMyqUBTStHo",
//         "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
//       },
//       body: JSON.stringify({
//         query,
//         variables: {
//           id,
//         },
//       }),
//     });
//     console.log(response)
//     const data = await response.json();
//     if (data.errors) {
//       console.log(data.errors)
//       res.status(400).json({ error: data.errors });
//     } else {
//       res.status(200).json(data);
//     }
//   } catch (err) {
//     console.log(err.message)
//     res.status(500).json({ error: "서버 요청 실패", detail: err.message });
//   }
// }
////////////////////////////////
// const express = require('express');
// const fetch = require('node-fetch');
// const app = express();

// app.use(express.json());

// // ✅ 보안 정책 완전 해제 미들웨어
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Content-Security-Policy", "");
//   res.setHeader("X-Content-Security-Policy", "");
//   res.setHeader("X-WebKit-CSP", "");
//   res.setHeader("X-XSS-Protection", "0");
//   res.setHeader("X-Content-Type-Options", "nosniff");
//   res.setHeader("X-Frame-Options", "ALLOWALL");
//   res.setHeader("Referrer-Policy", "no-referrer-when-downgrade");
//   res.setHeader("Permissions-Policy", "geolocation=*; microphone=*; camera=*; fullscreen=*; payment=*; usb=*");
//   res.setHeader("Strict-Transport-Security", "max-age=0");
//   res.setHeader("Expect-CT", "max-age=0");
//   res.setHeader("Cache-Control", "no-store");
//   res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
//   res.setHeader("Cross-Origin-Opener-Policy", "unsafe-none");
//   res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
//   res.setHeader("Access-Control-Expose-Headers", "*");
//   res.removeHeader("Server");
//   next();
// });

// // ✅ 프로젝트 정보 요청 API
// app.get('/api/project', async (req, res) => {
//   const { id, groupId = null } = req.query;

//   const query = `
//     query SELECT_PROJECT($id: ID!, $groupId: ID) {
//       project(id: $id, groupId: $groupId) {
//         id
//         name
//         user {
//           id
//           nickname
//           profileImage {
//             id
//             name
//             label { ko en ja vn }
//             filename
//             imageType
//             dimension { width height }
//             trimmed { filename width height }
//           }
//           status { following follower }
//           description
//           role
//           mark {
//             id
//             name
//             label { ko en ja vn }
//             filename
//             imageType
//             dimension { width height }
//             trimmed { filename width height }
//           }
//         }
//         thumb
//         isopen
//         showComment
//         blamed
//         isPracticalCourse
//         category
//         categoryCode
//         created
//         updated
//         special
//         isForLecture
//         isForStudy
//         isForSubmit
//         hashId
//         complexity
//         staffPicked
//         ranked
//         visit
//         likeCnt
//         comment
//         favorite
//         shortenUrl
//         parent {
//           id
//           name
//           user { id nickname }
//         }
//         description
//         description2
//         description3
//         hasRealTimeVariable
//         blockCategoryUsage
//         childCnt
//         commentGroup { group count }
//         likeCntGroup { group count }
//         visitGroup { group count }
//         recentGroup { group count }
//         published
//         isFirstPublish
//         tags
//         speed
//         objects
//         variables
//         submitId { id }
//         cloudVariable
//         messages
//         functions
//         tables
//         scenes
//         realTimeVariable {
//           variableType
//           key
//           value
//           array { key data }
//           minValue
//           maxValue
//           visible
//           x
//           y
//           width
//           height
//           object
//         }
//         learning
//         expansionBlocks
//         aiUtilizeBlocks
//         hardwareLiteBlocks
//         blockCategoryUsage
//       }
//     }
//   `;

//   try {
//     const response = await fetch("https://playentry.org/graphql/SELECT_PROJECT", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
//         "Referer": "https://playentry.org/",
//         "referer": "strict-origin-when-cross-origin",
//         "Origin": "https://playentry.org",
//         "sec-fetch-mode": "cors",
//         "x-client-type": "Client",
//         "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIiLCJwcm9qZWN0SWQiOiI2N2M0Nzc5ZmUxOTk1YThkYjU4MTFmYTUiLCJwcm9qZWN0VXNlcklkIjoiNjBkOTYzYWQ3ZjgyZWEyZDI2ODM5YjkzIiwiaXNPd25lciI6ZmFsc2UsImlhdCI6MTc0OTE5NTczNH0.VizhPA2xOJYl-lmP1uzC5cx2PAeKnkYfOANWRIYLf3w",
//         // "csrf-token": "uvYDjrMW-csP1Y0Qh7cDdGzhVUMyqUBTStHo"
//       },
//       body: JSON.stringify({
//         query,
//         variables: { id }
//       })
//     });

//     const data = await response.json();
//     if (data.errors) {
//       console.log(data.errors)
//       res.status(400).json({ error: data.errors });
//     } else {
//       res.status(200).json(data);
//     }
//   } catch (err) {
//     console.log(err.message)
//     res.status(500).json({ error: "서버 요청 실패", detail: err.message });
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`서버가 포트 ${PORT}번에서 실행 중입니다.`);
// });

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  res.setHeader("Content-Security-Policy", "");
  res.setHeader("X-Content-Security-Policy", "");
  res.setHeader("X-WebKit-CSP", "");
  res.setHeader("X-XSS-Protection", "0");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "ALLOWALL");
  res.setHeader("Referrer-Policy", "no-referrer-when-downgrade");
  res.setHeader("Permissions-Policy", "geolocation=*; microphone=*; camera=*; fullscreen=*; payment=*; usb=*");
  res.setHeader("Strict-Transport-Security", "max-age=0");
  res.setHeader("Expect-CT", "max-age=0");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
  res.setHeader("Cross-Origin-Opener-Policy", "unsafe-none");
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  res.setHeader("Access-Control-Expose-Headers", "*");

  const { id } = req.query;

  const query = `
    query SELECT_PROJECT($id: ID!, $groupId: ID) {
      project(id: $id, groupId: $groupId) {
        id
        name
        user {
          id
          nickname
          profileImage {
            id
            name
            label { ko en ja vn }
            filename
            imageType
            dimension { width height }
            trimmed { filename width height }
          }
          status { following follower }
          description
          role
          mark {
            id
            name
            label { ko en ja vn }
            filename
            imageType
            dimension { width height }
            trimmed { filename width height }
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
          user { id nickname }
        }
        description
        description2
        description3
        hasRealTimeVariable
        blockCategoryUsage
        childCnt
        commentGroup { group count }
        likeCntGroup { group count }
        visitGroup { group count }
        recentGroup { group count }
        published
        isFirstPublish
        tags
        speed
        objects
        variables
        submitId { id }
        cloudVariable
        messages
        functions
        tables
        scenes
        realTimeVariable {
          variableType
          key
          value
          array { key data }
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
    const csrf_response = await fetch("https://csrf-token-api.onrender.com/get-csrf-token")
    const csrf = csrf_response.json()
    const response = await fetch("https://playentry.org/graphql/SELECT_PROJECT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "x-client-type": "Client",
        "Referer": "https://playentry.org/",
        "Origin": `https://playentry.org/iframe/${id}`,
        "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTgzZDE5ODRhNjAwZDAwMjU1ZTc4YmMiLCJwcm9qZWN0SWQiOiI2N2RlOGMwYzI0ZGM4MzliYTZlMTYzNDUiLCJwcm9qZWN0VXNlcklkIjoiNjZiZWU2YzlhZjZhYzBhYjEyZGY2OTRmIiwiaXNPd25lciI6ZmFsc2UsImlhdCI6MTc0OTY0MTI0OX0.V3LsEFETSIhLubFZPKvp4oJ-KFEhS9vLxT6hG23lsZA",
        "remote-address": "110.93.151.161:443",
        "csrf-token": csrf,
        "mode": "cors",
      },
      body: JSON.stringify({
        query,
        variables: { id }
      })
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
