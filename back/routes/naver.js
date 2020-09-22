const express = require('express');
const router = express.Router();
const Axios = require('axios');
router.get('/getNaverMovie', async function (req, res) {
  let query = req.query.query;
  let reqOptions = {
    headers: {
      'X-Naver-Client-Id': 'mg6ly6rkZfg9ZZUMFKcn',
      'X-Naver-Client-Secret': 'q2CAm1qvUL'
    },
    params: {
      query: query
    }
  };
  try {
    //카카오톡 서버로 요청
    let movieRes = await Axios.get(
      'https://openapi.naver.com/v1/search/movie.json',
      reqOptions
    );
    return res.json(movieRes.data);
  } catch (e) {
    return res.json({
      status: 400,
      message: e
    });
  }
});

//module.exports = router;

// const request = require('request-promise-native');
// router.get('/getAPI', async (req, res, next) => {
//   let query = req.query.query;
//   console.log('query ', query);

//   let reqOptions = {
//     method: 'GET',
//     headers: {
//       'X-Naver-Client-Id': 'mg6ly6rkZfg9ZZUMFKcn',
//       'X-Naver-Client-Secret': 'q2CAm1qvUL'
//     },
//     qs: { query: query }
//   };
//   let url = 'https://openapi.naver.com/v1/search/movie.json';

//   try {
//     //카카오톡 서버로 전송
//     let data = await request(url, reqOptions); //return data 는 string
//     return res.json(JSON.parse(data));
//   } catch (e) {
//     return res.json({
//       status: 400,
//       message: 'error'
//     });
//   }
// });

module.exports = router;
