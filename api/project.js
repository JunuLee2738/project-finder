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
  // res.setHeader("Access-Control-Allow-Origin", "*");//https://entry-project-finder.vercel.app/
  // res.setHeader("Access-Control-Allow-Methods", "*");
  // res.setHeader("Access-Control-Allow-Headers", "*");
  // res.setHeader("Access-Control-Allow-Credentials", "true");

  // res.setHeader("Content-Security-Policy", "");
  // res.setHeader("X-Content-Security-Policy", "");
  // res.setHeader("X-WebKit-CSP", "");
  // res.setHeader("X-XSS-Protection", "0");
  // res.setHeader("X-Content-Type-Options", "nosniff");
  // res.setHeader("X-Frame-Options", "ALLOWALL");
  // res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");//no-referrer-when-downgrade이었는데 엔트리 자체가 strict-origin-when-cross-origin로 사용하고 있어서 바꿈
  // res.setHeader("Permissions-Policy", "geolocation=*; microphone=*; camera=*; fullscreen=*; payment=*; usb=*");
  // res.setHeader("Strict-Transport-Security", "max-age=0");
  // res.setHeader("Expect-CT", "max-age=0");
  // res.setHeader("Cache-Control", "no-store");
  // res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
  // res.setHeader("Cross-Origin-Opener-Policy", "unsafe-none");
  // res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  // res.setHeader("Access-Control-Expose-Headers", "*");
  // res.removeHeader('X-Powered-By');
  const { id, csrfToken } = req.query;

    const graphQLQuery = `
      query FIND_USERSTATUS_BY_USERNAME($id: String) {
          userstatus(id: $id) {
              id
              nickname
              username
              description
              shortUrl
              created
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
              coverImage {
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
              studentTerm
              status {
                  project
                  projectAll
                  study
                  studyAll
                  community {
                      qna
                      tips
                      free
                  }
                  following
                  follower
                  bookmark {
                      project
                      study
                      discuss
                  }
                  userStatus
              }
              representativeContestPrizes {
                  id
                  contest {
                      name
                      url
                      enddate
                  }
                  badgeText
                  prizeName
                  prizeImageData {
                      path
                  }
                  target
                  targetSubject
                  targetType
                  created
                  category
              }
          }
      }
    `;

  try {
    let csrf = ""
    let tokenResponse
    let x = ""
    // let isCsrfInQuery = false
    if (!csrfToken) {
      const csrf_response = await fetch("https://csrf-token-api.onrender.com/get-csrf-token")
      tokenResponse = await csrf_response.json()
      csrf = tokenResponse.csrf_token
      x = tokenResponse.x_token
    } else {
      // isCsrfInQuery = true
      csrf = csrfToken
    }
    // const response = await fetch("https://playentry.org/graphql/SELECT_PROJECT", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "User-Agent": "Mozilla/5.0",
    //     "x-client-type": "Client",
    //     "Referer": `https://playentry.org/iframe/${id}`,
    //     "Origin": `https://playentry.org/`,
    //     "x-token": x,//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZG5vIjoiODRiODIwZDAtOWZjNC0xMWVlLTg5MjktMjQ2ZTk2NGNmMDRjIiwiZXhwIjoxNzUxMDgyOTc1LCJpYXQiOjE3NDk4NzMzNzV9.Mz4b7UKEGTQuwaZSSQdjMDEriZP506MDp5cajW9MdrE",
    //     "remote-address": "110.93.151.161:443",
    //     "csrf-token": csrf,
    //     // "mode": "cors",
    //     "sec-fetch-mode": "cors",
    //     "sec-ch-ua-platform": "Windows",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-site": "same-origin",
    //     "sec-ch-ua-mobile": "?0",
    //     "sec-ch-ua": '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
    //     "cookie": "NNB=94dvn2o8mbc5w1io008n963235282d6x; _gid=GA1.2.1211159167.1749619419; _ga_X0Y1WY0S4D=GS2.2.s1749713017$o2$g1$t1749713268$j60$l0$h0; etss=Fe26.2*1*d05f3f1f6e7f4fc4e934b98998e33bee1c41cc0d812dd0c19e88fcead783847d*yPq2Kn8pK-T9Ms8mmc9JFw*X-F2IWiuGCoAlV05WaVXYYJF8ViJp2LYvj9bVVwtvkXR_lImB1HBmr2XTc-LmimjQy01I0VodA995KXGG7Qe-_-ftsVvxQ-aL_HH1o4Viit_m3xCZVzzK7HM4DTaLRcd39UQ8PZQwg7d60jf28VpvZok4viDs4yyTBADZDmTtUZ1dH5-cZaZC5LGasAzgQOJb-O-3NGdpqBOJp0Bv-8MqbzfAPaRcNLuTQ0IP30QmjpajulMtmYAXp3pqvlJFBKJD9BI9Nq-kjdfxq12cPn1UfbOBlJpYxfnsZBuxQUNUBsE3utAjbKXKq4TgcsxqkcpatkmFzVhAqFRtiZKcQS67be_ZBg9Nlp6pkgYQ-xhWmp4GNeAnoO8-oMEWKRFJz9P9fGTGsexAB2NeosxxJ77w4NZ2Sq6Ptg6753L7M-WPZoJcWmJTkpX5hq4OyRQ14dV6gNdqDvz_Gtf-jDH4W-pJALBsfzhDP8JGZ9GBQAyD7i_ErnbqbqbA4Dfl_QcLZn1tjnWYlHBuqIe9UcH957GPz7DOmfmUdS_QQk7V5wF3Ji_Pgi0RDdsDPXjEbwkzbQKgq4Qr0C_b-vIfNxeuUTByTC96eJnFE17V9PbZcAYqBEREgNAy4RPDVQFWp_7mG0MnwuxFk3NWvDtR-bqXO8J7BcNWtPQ2LcuAZS-S7YDsempKLMxFP021d3X4xxEUJ8qSKxw6-UhELcEpkERBTQM7CFFPVMTNF80cecTigRdmS0srfF_XjW3Rd-qPvM8_1cQclpm39Y0fd40ssHnlgEWUsN-U6G2omeY4HhlnxrgV1EQG60AwOTclzT5gyrOuOyaLYa8p4iKlyqLTbI6SqT_u6tkUlib8tl-GBcjJfTul-AhGoFX-oTqzEb_VKmBec7p1IMtd8--GnFFSVx9YTTgTT17_bwKT8pNHbLMy7PCGBmotXv0WtlX3MauNMVYFrMxK6bdOk9ZM_LhGRDAFS8FaL87TCnMKD1LNlW_ZPWEadaSpracXlDbvW_5nLeNYY2kiIZGMdN-DBLQN150gzjqGwUKaIuf_s-HtzWn5obS2M2MG7dn-iSGnYsg8Y0CA8iUTFI3gFsbN0jHv9U5qaY0qoVKwApP5BxO52UfE9htII8efGCVs777kNazUpntbdDY0SLkhRd2ZSFGbXsuHHZA_pHKwUpGfES0SbFp4qJbIa0aG_aWCKITrmx7UK-cQz4wjy_n-IWpZAqqWJ_f0Qcqergw6B8glpZ0Lsh3Svp8V4FV4dQjY-_G9Od70v_Tv5le5lZ1VYA4-cWr7sONj9jqJKakijsRYxPWwfTku5MWhJSseJdBEBR74tI2-gNwzuIpwsk5nhFJAi_G3NJAGCFCTRV7zRQ7FXq3rIPJb2Q3m7HG-oB1APPzOnhKAIh86ZT-wc4fURFL_MywlDrlllmLBBFwJcxs2MYIa2iJUW1ItP8VAt7BKz2hwzrD0myw00wNXYOof8zVxzqNKZNKGzMai95LLWuY6ohENkme2zNeMiSqyLkxj0bvLVaZt7WDmOmFj3mkKcG9rOmu3p4EZPVsUBPS5cH7JVLOuWbeZO_kpyp4RwkiCwTokHbloe9OTG1APsUAHnyvZvZYLt7NxCZP7TBlu_x6DwOGf-GyQ-BDpYqJNqcuVCky3jz_Rgm_-wVjqP7IzvFqe4afRJ9CNQ2Usesm_DukDExAsdL1aNVjNcWGDsGnlRLVBOw4YO3PYU_bdGIfXq0TdNFcq4XubTGgWfLFEXm3pdyAyzVeqWY3N9q62TERmy2YCxDZJqklS-RoTyENmPRuIRZNNlWCZB9vZQ*1751010004717*6eed8175dc3b03ea2b51afa98f24bf3ab749aff078f1a636b7869d96539ff8f1*R0GjTvz8xAV-jchlwWldHqk9S-ezXY4Q7-lOYNfLV70~2; _csrf=TL_BvCYIDEP_z5qOXgIi0vzH; _ecui=limjgau3mbt36qs800jh9632357iqvvo; _ga_FYXF6Q6KH5=GS2.1.s1749712822$o14$g1$t1749716465$j60$l0$h0; _ga=GA1.2.322016788.1748691704; _gat_UA-48464763-1=1; _ga_9RMHYJYX04=GS2.2.s1749712822$o14$g1$t1749716466$j60$l0$h0; _ga_R0KQBLBZN8=GS2.2.s1749712822$o14$g1$t1749716466$j60$l0$h0; _ga_457XQH7Y8S=GS2.1.s1749712822$o14$g1$t1749716466$j59$l0$h0",
    //   },
    //   body: JSON.stringify({
    //     query,
    //     variables: { id }
    //   })
    // });
    const requestBody = {
      query: graphQLQuery,
      variables: { id: id }
    };
    fetch("https://playentry.org/graphql/FIND_USERSTATUS_BY_USERNAME", {
      headers: {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,ko;q=0.8",
        "content-type": "application/json",
        "csrf-token": csrf,
        "priority": "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Linux\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-client-type": "Client",
        "x-token": x,
      },
      referrer: `https://playentry.org/profile/${id}/project?sort=created&term=all&isOpen=all`,
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify(requestBody),
      method: "POST",
      mode: "cors",
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          console.log(data.errors)
          res.status(400).json({ error: data.errors });
        } else {
          res.status(200).json(data);
        }
      })

    // const data = await response.json();
    // console.log(data)
    // if (data.errors) {
    //   console.log(data.errors)
    //   res.status(400).json({ error: data.errors });
    // } else {
    //   res.status(200).json(data);
    // }
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ error: "서버 요청 실패", detail: err.message });
  }
}
