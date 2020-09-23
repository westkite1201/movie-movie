# 영화검색 웹 
# Front 구현
## create-react-app 설치
create - react - app 을 통해
리엑트를 세팅해봅시다


> window + r

cmd를 켜주세요 

> cd c://

c 드라이브로 이동합니다.

> mkdir react

디렉토리 생성

> cd react 

디렉토리 이동

> npx create-react-app movie-movie

npx는 npm 패키지를 로컬에 글로벌로 설치하지 않고 바로 일회성으로 실행할 수 있게 해주는 도구입니다.

만약 npx가 실행이 안되는 구버전이라면

> npm install -g create-react-app
create-react-app movie-movie


이렇게 입력해주세요

![](https://images.velog.io/images/westkite/post/f76c29b8-5745-446e-9d73-3a5045a4d87c/cra%20%EC%84%A4%EC%B9%98.PNG)

성공하면 이런식으로 화면이 보이게 됩니다.

movie-movie 로 이동하겠습니다.

> cd movie-movie

## 실행

이제 한번 실행시켜보겠습니다.
> yarn start

실행하면 브라우저가 실행하면서
기본 3000포트에 웹서버가 동작하는 걸 볼 수 있습니다.

![](https://images.velog.io/images/westkite/post/3ba425cd-877d-4a9d-a9f3-a4d56888b029/cra%20%EC%84%A4%EC%B9%981.PNG)

**Hello world!**

 
![](https://images.velog.io/images/westkite/post/b09e6aca-e7a4-4b93-91e5-e7bae3abd4c0/image.png)

자 우리는 이런 생김새를 가진 영화 검색 웹을 만들어볼거에요

naver api를 통해서요 
## antd 

저 어플리케이션은 

한개의 input과 여러개의 카드로 구성이 되어있습니다.

한번 구현해보도록할까요?

일단 input부터 만들어 보도록할게요!

우리가 일반적으로 알고있는 input은 사실 그런데 디자인이 너무 좋지않습니다

그리고 가뜩이나..개발자들은 디자인에 좀 ...많이 약한 경향이 많죠

그래서 ui 프레임워크들을 사용하는 경우가 없잖아 있어요

ui프레임워크는 개발자들이 디자인에 

조금 더 공수를 들이지 않게 하는 좋은 도구입니다

제가 오늘 소개 해드릴 ui프레임워크는 antd 입니다.

https://ant.design/

![](https://images.velog.io/images/westkite/post/b2ed58ef-8c48-45fe-93ae-4293b67f9036/image.png)

터미널에 

> yarn add antd

해주시면 antd가 설치됩니다.

그리고 app.js로 가서 불필요한 tag를 제거하고

```
import 'antd/dist/antd.css'
```
해주세요 .antd css를 import 하는 과정입니다. 

![](https://images.velog.io/images/westkite/post/f73ff5e9-96ea-4eb2-b855-0674cd385c09/image.png)

자 이제 본 페이지를 만들어볼까요?
## movieContainer

> 1.	src 밑에 Container 폴더를 만들어주세요  
2.	Container폴더 아래에 MovieSearchContainer.js 를 만들어주세요!


![](https://images.velog.io/images/westkite/post/d17d1ecd-4a3d-4066-8513-22b55e6a0766/image.png)

콘테이너에  내용을 채워주세요

![](https://images.velog.io/images/westkite/post/9eb06e65-7544-4b8c-b7b1-fe80ef289221/image.png)

자 이제 
app.js에서 작성한 컨테이너를 import 해보겠습니다. 


![](https://images.velog.io/images/westkite/post/3fbedf4c-ab83-4b65-9282-584f54248876/image.png)

이렇게 임포트 후에 url로 접속해보겠습니다.
cra는 간편하게 저장하면 다시 웹서버가 리로딩 되게됩니다. 


![](https://images.velog.io/images/westkite/post/2843070e-8791-4fac-bf7a-6968c97964fc/image.png)

짜잔 Hello Movie가 보이시나요?

이런식으로 컴포넌트를 불러서 사용할수 있습니다

그러면 이제 인풋 박스를 임포트 해볼게요

![](https://images.velog.io/images/westkite/post/965d1b69-9766-4ca0-8ad5-6243ec4e29a7/image.png)


antd로 이동해서 component 탭에서 input이라고 쳐보겠습니다. 

그러면 여러가지 example과 사용법이 나오게 되는데 

우리는 

![](https://images.velog.io/images/westkite/post/8cb12c89-0426-4e97-9a74-9f5dfb91d3dd/image.png)

이 인풋을 사용할거에요 

해당 예제를 보고 복사해서 넣어줍시다.

![](https://images.velog.io/images/westkite/post/0c6e443f-44ce-49d1-a795-caa882d7d1bd/image.png)


그리고 저장하면

![](https://images.velog.io/images/westkite/post/00ceefb1-96df-41ac-a28d-efb89e3ae26e/image.png)

어때요 보이시나요? 일반 인풋보다 더 이쁜 인풋이 생겼습니다!

그런데 위치가 맘에 들지 않네요 

css를 어떻게 수정해야할까요?

다들 아시겠지만 css는 inline css도 있고 파일형도있고 다양한데

한번 이 input div는 inline css를 먹여보도록 할게요 

그리고 placeholder도 수정하겠습니다. 

![](https://images.velog.io/images/westkite/post/be1f88d2-e46c-4bdf-bc15-ce7d3ccfb427/image.png)

![](https://images.velog.io/images/westkite/post/1e8443e0-5b65-4b6f-a54b-efd172bb238a/image.png)

정중앙으로 이동했습니다~!. react 에서 inline 스타일은 이런식으로 적용해주면 됩니다.


## movieCard 
자 이제 밑에 카드부분을 다뤄볼게요

> 1.	src 밑에 Component폴더를 만들어주세요 
2.	Component 폴더 아래에 MovieCard.js 파일을 만들어주세요
3. Component 폴더 아래에 MovieCard.scss 파일을 만들어주세요




> movieCard.js입니다.
아래 내용을 movieCard.js에 넣어주세요 !

```
import React from 'react';
import './Movie.scss';
const MovieCard = () => {
  return (
    <div className="movie-card-container">
      <div className="movie-image"></div>
      <div className="movie-text">
        <h2>제목</h2>
        <div>년도</div>
        <div className="movie-summary-row">
          <h5>평점</h5>
        </div>
        <div className="movie-likes">/ 10</div>
      </div>
    </div>
  );
};
export default MovieCard;


```


> movie.scss 입니다. 
아래 내용을 movie.scss에 넣어주세요 !

```

body {
  background: linear-gradient(rgba(30, 27, 38, 0.95), rgba(30, 27, 38, 0.95)),
    url('https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
}
.movie-card-container {
  cursor: pointer;
  width: 160px;
  height: 400px;
  background-color: #1e1b26;
  margin: 60px auto 0 auto;
  box-shadow: 5px 5px 115px -14px black;
  border-radius: 4px;
  color: white;
  .movie-image {
    width: 100%;
    height: 200px;
    background-image: url('https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 111 !important;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0, rgba(0, 0, 0, 1)),
      color-stop(0.35, rgba(0, 0, 0, 1)),
      color-stop(0.5, rgba(0, 0, 0, 1)),
      color-stop(0.65, rgba(0, 0, 0, 1)),
      color-stop(0.85, rgba(0, 0, 0, 0.6)),
      color-stop(1, rgba(0, 0, 0, 0))
    );
    position: relative;
  }

  .movie-text {
    padding: 0px 12px;
    text-align: justify;
    overflow: hidden;
    h2 {
      color: white;
    }
  }
  .movie-summary-row {
    h5 {
      color: white;
    }
    width: 98%;
  }
  .movie-likes {
    color: #fe4141;
    font-size: 14px;
    margin-right: 4px;
    position: relative;
    float: left;
    line-height: 1;
  }
}


```
scss를 사용하기위해 모듈을 import 해주세요
> yarn add node-sass



자 이제 카드가 준비되었습니다.

이 컴포넌트를 MovieContainer에서 임포트 해보겠습니다.

```
import React, { Fragment } from 'react';
import { Input } from 'antd';
import MovieCard from '../Component/MovieCard';
const { Search } = Input;
const MovieSearchContainer = () => {
  return (
    <Fragment>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}
      >
        <Search
          placeholder="영화를 검색해 보세요!"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
      <div>
        <MovieCard />
      </div>
    </Fragment>
  );
};
export default MovieSearchContainer;

```

![](https://images.velog.io/images/westkite/post/45857946-2af0-4b9c-b104-3b74bc862c7d/image.png)

어때요 ? 잘보이시나요?



이제 우리의 데이터가 들어갈 시간입니다.
 

![](https://images.velog.io/images/westkite/post/e8d69fce-e213-43de-84cf-1789e4ca7efc/image.png)

이런식으로 postman으로 네이버 api를 호출해보면 이런 데이터 값이

내려오는걸 확인 할 수 있습니다. 

```
       {
            "title": "<b>어벤져스</b>: 엔드게임",
            "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=136900",
            "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1369/136900_P57_104126.jpg",
            "subtitle": "Avengers: Endgame",
            "pubDate": "2019",
            "director": "안소니 루소|조 루소|",
            "actor": "로버트 다우니 주니어|크리스 에반스|크리스 헴스워스|마크 러팔로|스칼렛 요한슨|제레미 레너|돈 치들|폴 러드|브리 라슨|카렌 길런|브래들리 쿠퍼|조슈 브롤린|",
            "userRating": "9.38"
        },
```
json데이터는 이런 포맷으로 내려오고 있습니다.

우리는 이 데이터를 사용해서

카드를 그려볼게요 

일단 item.json을 만들어서 서버에서 가상으로 데이터가 내려왔다고 가정하겠습니다.

item.json은 워낙길어서 조금 줄였습니다

> Container 안에 item.json 을 만들어주세요. 
아래 데이터를 복사 붙혀넣기 해주세요.


```
{
  "lastBuildDate": "Tue, 15 Sep 2020 18:05:33 +0900",
  "total": 24,
  "start": 1,
  "display": 10,
  "items": [
    {
      "title": "어벤져스: 엔드게임",
      "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=136900",
      "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1369/136900_P57_104126.jpg",
      "subtitle": "<b>Avengers</b>: Endgame",
      "pubDate": "2019",
      "director": "안소니 루소|조 루소|",
      "actor": "로버트 다우니 주니어|크리스 에반스|크리스 헴스워스|마크 러팔로|스칼렛 요한슨|제레미 레너|돈 치들|폴 러드|브리 라슨|카렌 길런|브래들리 쿠퍼|조슈 브롤린|",
      "userRating": "9.38"
    },
    {
      "title": "어벤져스: 인피니티 워",
      "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=136315",
      "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1363/136315_P16_142450.jpg",
      "subtitle": "<b>Avengers</b>: Infinity War",
      "pubDate": "2018",
      "director": "안소니 루소|조 루소|",
      "actor": "크리스 프랫|조 샐다나|브래들리 쿠퍼|빈 디젤|조슈 브롤린|엘리자베스 올슨|베네딕트 컴버배치|스칼렛 요한슨|톰 홀랜드|로버트 다우니 주니어|크리스 헴스워스|크리스 에반스|마크 러팔로|톰 히들스턴|폴 베타니|돈 치들|채드윅 보스만|데이브 바티스타|안소니 마키|",
      "userRating": "8.96"
    },
    {
      "title": "어벤져스 오브 저스티스",
      "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=169207",
      "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1692/169207_P01_102131.jpg",
      "subtitle": "<b>Avengers</b> of Justice: Farce Wars",
      "pubDate": "2018",
      "director": "",
      "actor": "에이미 스마트|토니 차발레로|사이먼 렉스|스티븐 랜나지시|제프 체이스|제이슨 앨런 스미스|",
      "userRating": "4.15"
    }
  ]
}

```




이제 item.json 을 import 하고 
해당 데이터를 MovieCard에 props로 내려보겠습니다.

```
import React, { Fragment } from 'react';
import { Input } from 'antd';
import MovieCard from '../Component/MovieCard';
import jsonData from './item.json';
const { Search } = Input;
const MovieSearchContainer = () => {
  return (
    <Fragment>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}
      >
        <Search
          placeholder="영화를 검색해 보세요!"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
      <div>
        <MovieCard item={jsonData.items[0]} />
      </div>
    </Fragment>
  );
};
export default MovieSearchContainer;

```

jsondata.itmes의 첫번째 값을 내려준것을 확인할수 있죠

해당 값은 아래와 같은 데이터겠죠?
```
    {
      "title": "어벤져스: 엔드게임",
      "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=136900",
      "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1369/136900_P57_104126.jpg",
      "subtitle": "<b>Avengers</b>: Endgame",
      "pubDate": "2019",
      "director": "안소니 루소|조 루소|",
      "actor": "로버트 다우니 주니어|크리스 에반스|크리스 헴스워스|마크 러팔로|스칼렛 요한슨|제레미 레너|돈 치들|폴 러드|브리 라슨|카렌 길런|브래들리 쿠퍼|조슈 브롤린|",
      "userRating": "9.38"
    },
```

우리가 카드에 사용할 값은 
**titie, link, image, pubdate, userRating **
이 5가지를 사용하겠습니다



MovieCard로 이동해서 내려준 props를 사용해봅시다!


```
import React from 'react';
import './Movie.scss';
const MovieCard = ({ item }) => {
  const { title, link, image, pubDate, userRating } = item;
  return (
    <div className="movie-card-container">
      <div className="movie-image"></div>
      <div className="movie-text">
        <h2>{title}</h2>
        <div>{`${pubDate}년도`}</div>
        <div className="movie-summary-row">
          <h5>평점</h5>
        </div>
        <div className="movie-likes">{`${userRating}/ 10`}</div>
      </div>
    </div>
  );
};
export default MovieCard;

```

이런식으로 props를 내려받고 사용합니다.
const { title, link, image, pubDate, userRating } = item;

이구문은 비구조화 할당이라는 방식입니다.
객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하게 하는 방식이고.

<div>{`${pubDate}년도`}</div>
이 방식은 템플릿 리터럴이라는 방식입니다.

조금 더 깔끔하고 js스럽게 사용할 수 있죠. !

한번 봐볼게요 

![](https://images.velog.io/images/westkite/post/5326430c-dee2-4777-b69e-9443c162d660/image.png)

짠 변경된 데이터가 보이시나요?

그런데 여기서 질문, 

아니 image 는 어따 써먹죠?

현재 scss에 박혀있는데요?

다른 방법도 많겠지만, 한번 styled-component 방식도 사용해보겠습니다


> yarn add styled-components

설치해주시고 MovieCard에서 import 하겠습니다

```
import React from 'react';
import './Movie.scss';
import styled from 'styled-components';
const MovieCard = ({ item }) => {
  const { title, link, image, pubDate, userRating } = item;
  return (
    <div className="movie-card-container">
      <div className="movie-image"></div>
      <div className="movie-text">
        <h2>{title}</h2>
        <div>{`${pubDate}년도`}</div>
        <div className="movie-summary-row">
          <h5>평점</h5>
        </div>
        <div className="movie-likes">{`${userRating}/ 10`}</div>
      </div>
    </div>
  );
};

const CardImg = styled.div``;

export default MovieCard;

```

> const CardImg = styled.div``;

이런식으로 사용하면 div태그의 styled 컴포넌트를 만들었다는 의미입니다.
여기에 MovieCard.scss, movie-image 내용을 옮겨볼게요

```
const CardImg = styled.div`
  width: 100%;
  height: 200px;
  background-image: url('https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 111 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.35, rgba(0, 0, 0, 1)),
    color-stop(0.5, rgba(0, 0, 0, 1)),
    color-stop(0.65, rgba(0, 0, 0, 1)),
    color-stop(0.85, rgba(0, 0, 0, 0.6)),
    color-stop(1, rgba(0, 0, 0, 0))
  );
  position: relative;
`;
```

이런식으로 적용이 됩니다.
이제 background-url에 우리가 props로 내려받은 image 값으로 교체할 겁니다.


```
const CardImg = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 111 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.35, rgba(0, 0, 0, 1)),
    color-stop(0.5, rgba(0, 0, 0, 1)),
    color-stop(0.65, rgba(0, 0, 0, 1)),
    color-stop(0.85, rgba(0, 0, 0, 0.6)),
    color-stop(1, rgba(0, 0, 0, 0))
  );
  position: relative;
`;
```
이런식으로 사용하면 styled-components에서 내려준 props로 
css를 변경할수있습니다. 한번 적용해볼까요?


```
import React from 'react';
import './Movie.scss';
import styled from 'styled-components';
const MovieCard = ({ item }) => {
  const { title, link, image, pubDate, userRating } = item;
  return (
    <div className="movie-card-container">
      <CardImg image={image} />
      <div className="movie-text">
        <h2>{title}</h2>
        <div>{`${pubDate}년도`}</div>
        <div className="movie-summary-row">
          <h5>평점</h5>
        </div>
        <div className="movie-likes">{`${userRating}/ 10`}</div>
      </div>
    </div>
  );
};

const CardImg = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 111 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.35, rgba(0, 0, 0, 1)),
    color-stop(0.5, rgba(0, 0, 0, 1)),
    color-stop(0.65, rgba(0, 0, 0, 1)),
    color-stop(0.85, rgba(0, 0, 0, 0.6)),
    color-stop(1, rgba(0, 0, 0, 0))
  );
  position: relative;
`;

export default MovieCard;

```
최종 MovieCard는 이런 모양을 가지게 됩니다.

한번 봐볼까요?

![](https://images.velog.io/images/westkite/post/fe8b2847-5c73-4c25-b82a-0eb6c81174fa/image.png)
이런식으로 카드가 보이게 됩니다.!


그럼 JSON에 있는 데이터 전부를 뿌려볼게요 

여기서는 주로 map 함수를 사용하게 되는데요 

map함수는 callbackFunction을 실행한 결과를 가지고 새로운 배열을 만들 때 사용합니다.

map 함수를 통해서 json.items의 값들을 가지고 
MovieCard를 렌더링 해보도록 하겠습니다.


```
import React, { Fragment } from 'react';
import { Input } from 'antd';
import MovieCard from '../Component/MovieCard';
import jsonData from './item.json';
const { Search } = Input;
const MovieSearchContainer = () => {
  return (
    <Fragment>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}
      >
        <Search
          placeholder="영화를 검색해 보세요!"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
      <div>
        {jsonData.items.map((item) => {
          return <MovieCard item={item}></MovieCard>;
        })}
      </div>
    </Fragment>
  );
};
export default MovieSearchContainer;

```


![](https://images.velog.io/images/westkite/post/36c40792-9a23-416d-a652-e836356f0ad7/image.png)

이런식으로 하면 여러개의 카드를 렌더링 할수 있습니다.

근데 현재 세로로 밖에 보이지 않네요

이거를 그리드형태로, 그리고 사이즈에 따라서 몇개가 나오게를 변경할수 있을까요?


## 그리드 


이런곳에 적격인 Grid 컴포넌트를 사용하면 될 것 같습니다. 

![](https://images.velog.io/images/westkite/post/ca58a252-7b6b-4a28-8694-6b72c3f1a6b8/image.png)

grid는 반응형으로 ui를 짜는것에도 굉장히 편리한데

만약에 화면크기에 따라서 보여주고 싶은 크기를 정할수 있습니다. 

velog만 같더라도 화면크기에 따라서 보여주는 카드 개수가 다릅니다.

이처럼 우리 movie-movie 도 그렇게 만들어보도록 할게요 

저희는 responsive example을 긁어서 사용하겠습니다. 

![](https://images.velog.io/images/westkite/post/953b2e5e-49c9-4b2a-91af-4635b6d9e07a/image.png)

xs, sm ,md ,lg , xl은 화면 사이즈를 5개로 나뉜거에요
제일 작은 순부터 => 큰순서대로 사이즈가 나눠져요

위의 예제를 보면 
xs 제일작은사이즈일때
제일왼쪽은 2만큼 중간은 20만큼 오른쪽은 2만큼 사이즈를 가져가게 됩니다.

이걸 이용해서 우리의 MovieSearchContainer에서 적용해보도록 하겠습니다.


```
import React, { Fragment } from 'react';
import MovieCard from '../Component/MovieCard';
import jsonData from './item.json';
import { Input, Row, Col } from 'antd';
const { Search } = Input;
const MovieSearchContainer = () => {
  return (
    <Fragment>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}
      >
        <Search
          placeholder="영화를 검색해 보세요!"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
      <div>
        <Row>
          {jsonData.items.map((item) => {
            return (
              <Col xs={24} sm={12} md={6} lg={4} xl={4}>
                <MovieCard item={item}></MovieCard>;
              </Col>
            );
          })}
        </Row>
      </div>
    </Fragment>
  );
};
export default MovieSearchContainer;


```
![](https://images.velog.io/images/westkite/post/5a69e05c-d199-4b58-b1b8-52736039c643/image.png)

적용하면 이런식으로 나오게 됩니다.

## 서버연동
자 이제... 서버와 연동 해볼 시간입니다. 

우리가 서버에 데이터를 보낼때 어떤 검색어로 검색할지가 필요합니다.

한번 react에서 state 값을 다뤄볼까요?!


hooks를 사용해봅시다!

useState 훅은 state값을 변경할때 사용합니다
리액트는 클래스형, 함수형 컴포넌트로 구분할수있는데
예전에는 클래스형 컴포넌트는 비지니스로직을,
함수형 컴포넌트는 view를 담당하게하는게 일반적이였죠
단 hooks가 도입되면서 함수형 컴포넌트도 쉽게 state 값을 변경하고 사용할 수 있게 되었어요

useState훅을 사용해서 인풋에 적혀지는값을 변경해봅시다!

```
import React, { Fragment, useState } from 'react';
import MovieCard from '../Component/MovieCard';
import jsonData from './item.json';
import { Input, Row, Col } from 'antd';
const { Search } = Input;
const MovieSearchContainer = () => {
  const [query, setQuery] = useState('');
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Fragment>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}
      >
        <Search
          placeholder="영화를 검색해 보세요!"
          onSearch={(value) => console.log(value)}
          onChange={handleQuery}
          style={{ width: 200 }}
        />
      </div>
      <div>
        <Row>
          {jsonData.items.map((item) => {
            return (
              <Col xs={24} sm={12} md={6} lg={4} xl={4}>
                <MovieCard item={item}></MovieCard>;
              </Col>
            );
          })}
        </Row>
      </div>
    </Fragment>
  );
};
export default MovieSearchContainer;

```


![](https://images.velog.io/images/westkite/post/fec74a18-eb03-42d2-aa5d-f63e47eebe65/tempsnip.png)
  
useState를 import 해주고 

const [query, setQuery] = useState('')
방식으로 적어주세요
여기서 query는 state 값이고 setQuery는 state값을 변경하는 함수입니다.

제가 밑에 handleQuery라고 함수를 하나 더 선언해서
input에 값을 입력해 이벤트가 발생해 , 이벤트 객체로 넘어오는 값을
setQuery로 state값을 변경시켰습니다. 

참고, hooks 
https://velog.io/@velopert/react-hooks


자 이제 이 값을 서버에 던져야겠죠??

어떻게 서버와 통신할까요??

또 모듈을 설치해봅시다

> yarn add axios 

axios 모듈은 node.js와 클라이언트 단에서 
가장 많이 사용하는 http 클라이언트 모듈입니다. 

이걸 통해서 서버와 통신할거에요 

우리는 일단 2가지가 필요하겠네요 

1. 서버와 통신할 함수
2. 데이터를 담을 변수 

>   const [items, setItems] = useState();



```
  const handleButton = async () => {
    try {
      const res = await axios.get('http://localhost:3031/naver/getNaverMovie', {
        params: {
          query: query
        }
      });
      if (res && res.status === 200) {
        const { data } = res;
        console.log(data);
        setItems(data.items);
      }
    } catch (e) {
      console.log('error ', e);
    }
  };
```

위에 코드에서 async
async와 await는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법입니다. 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자(사람이 읽기 좋은코드를 ) 보여줍니다

response 데이터가 오면 setItems로 state값을 저장해서 뿌려줍니다.

jsonData.items를
items로 변경해주세요 

```
import React, { Fragment, useState } from "react";
import MovieCard from "../Component/MovieCard";
import jsonData from "./item.json";
import { Input, Row, Col } from "antd";
import axios from "axios";
const { Search } = Input;
const MovieSearchContainer = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const [items, setItems] = useState();

  const handleButton = async () => {
    try {
      const res = await axios.get("http://localhost:3031/naver/getNaverMovie", {
        params: {
          query: query,
        },
      });
      if (res && res.status === 200) {
        const { data } = res;
        console.log(data);
        setItems(data.items);
      }
    } catch (e) {
      console.log("error ", e);
    }
  };

  return (
    <Fragment>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <Search
          placeholder="영화를 검색해 보세요!"
          onSearch={(value) => console.log(value)}
          onChange={handleQuery}
          onClick={handleButton}
          style={{ width: 200 }}
        />
      </div>

      <div>
        <Row>
          {items && items.map((item) => {
            return (
              <Col xs={24} sm={12} md={6} lg={4} xl={4}>
                <MovieCard item={item}></MovieCard>;
              </Col>
            );
          })}
        </Row>
      </div>
    </Fragment>
  );
};
export default MovieSearchContainer;



```
  
  
 네 끝났습니다.


# Back 구현 
## express 설치
express 는 node.js에서 가장 안정적이고, 개발이 되어있는 
프레임 워크에요 

> window + r 

>  npm install express-generator -g 

> cd c://

> cd react

> express back

back이라는 express 폴더가 만들어졌습니다.

> cd back

다음 명령어를 쳐서 package 들을 설치해봅시다

> yarn


### 유용한 package 

> npm install -g nodemon

![](https://images.velog.io/images/westkite/post/60f5fec4-7857-4b14-8795-77fd8621abb0/nodemon%20%EB%B3%80%EA%B2%BD.PNG)

package.json 변경

![](https://images.velog.io/images/westkite/post/81444c80-879f-4008-b3f1-189a76fb3775/port%20%EB%B3%80%EA%B2%BD.PNG)

react server와 포트가 겹치니 변경해줍시다

> yarn start

서버실행후에 만약 내용이 수정, 변경되면
바로바로 바뀌는걸 보실 수 있습니다. 




## cors 추가

1. CORS
 
  CORS는 Cross Origin Resource Sharing의 약자로 도메인 및 포트가 다른 서버로 클라이언트가 요청했을 때 브라우저가 보안상의 이유로 API를 차단하는 문제입니다.  예로 들면 로컬에서 클라이언트는 3000 포트로 서버는 10000 포트로 서버를 띄웠을때 또는 로컬 서버에서 다른 서버로 호출할 때 발생하게 됩니다.
  
 
이런 cors오류를 웹개발하다보면 분명히 마두칠수 있을거에요
오류를 안나게 하려면 header에 추가해주어야하는데
모든 요청마다 이런 요청을 같이 보내기가 까다로워 node에서 간편하게 제공해주고 있는 미들웨어가 있는데요 

바로 cors입니다 .

 NODE 폴더로 이동해주세요 

그리고 
>  yarn add cors
 
 ![](https://images.velog.io/images/westkite/post/fc280893-010a-4f82-8879-adecbfd49713/cors%201.PNG)
 
 위에 이미지 파일처럼 cors모듈을 import 해주고
 미들웨어로 등록해주시면 됩니다. 
 
##  NAVER API 등록

![](https://images.velog.io/images/westkite/post/c4b77ce0-4d1a-4288-96a0-831cb0ce9bb5/%EB%84%A4%EC%9D%B4%EB%B2%84%20%EB%93%B1%EB%A1%9D.PNG)

이런식으로  등록해주세요 

![](https://images.velog.io/images/westkite/post/ff8a8448-17ef-4934-841d-a57cea0fd770/image.png)

자 그러면 
클라이언트 id, secret을 받을 수 있습니다.
이걸 이용해서 api 호출을 할겁니다.



![](https://images.velog.io/images/westkite/post/1e103bd5-0fc4-4b94-bd80-3b29bee2fb90/%EB%84%A4%EC%9D%B4%EB%B2%84%20%EB%93%B1%EB%A1%9D2.png)

우리는 JSON 포맷이 필요하므로 
2번째 URL값으로 전송할거에요 

query값이 필수 여부로 확인됩니다
이값을 전송시킬

![](https://images.velog.io/images/westkite/post/544cf52f-90a8-449b-a023-f532cd9af9c7/%EB%84%A4%EC%9D%B4%EB%B2%84%20%EB%93%B1%EB%A1%9D4.PNG)
 
 header값에 값을 넣어주는 것으로 확인됩니다
 이값도 후에 호출할 api에 넣어 호출하겠습니다.

##  NAVER API 호출
 자
 우리가 NAVER API를 NAVER 서버에서 받고
 그 데이터를 FRONT 쪽에 전달해서 줄거에요
 
 
 ![](https://images.velog.io/images/westkite/post/f58e7336-3c13-4a00-a2ac-8ea6fbd9e554/CORS%202.PNG)
 
 1. 프론트 측에서 express로 정보를 요청하고~
 2. express에서 NAVER API 서버에 데이터를 요청하고
 3. 받은 데이터를 FRONT로 보내주는 과정을 할거에요
 
 그런데.
 express 에선 어떤방식으로 요청을 받는걸까요?
 그답은 바로 router에 있습니다.
 
 한번 express가 동작하고 있는 port로 가볼께요 
 
 브라우저 url 창에 localhost:port번호 를 입력해보세요 
 
 ![](https://images.velog.io/images/westkite/post/5758e975-a20b-4791-a403-b4d69fcf700a/cors%20%203.PNG)
 
그럼 위 사진과 같은 창이 뜰거에요 
 
저 페이지는 도대체 어떻게 나오는걸까요? 
 
 router => index.js로 가볼까요 
 
 여기에 우리

![](https://images.velog.io/images/westkite/post/99ed8f4f-6bde-41d0-b7f4-5d6d32a5d2ad/index.PNG)

router.get 이 보이시나요?

router.get(url, callback)으로 구성되어있는데
url에 매핑되어있는 값으로 

res.render는 템플릿을 렌더링 해줄때 사용합니다.
현재 express가 jade 템플릿을 기본적으로 사용하고 있어서
views 파일의 index.jade를 렌더링 해주고있는데요

저희는 react를 프론트로 사용하고있기 때문에 신경쓰지 않으셔도 무방합니다. 

(참조 express) 
https://expressjs.com/ko/guide/routing.html

자 그렇다면

front에서 요청받을 수 있는 router를 우리가 직접 만들어 보도록 합시다.

routes에 naver.js를 만들어주세요.

그리고 index.js 를 그대로 복사해서 붙혀넣어주세요 .

![](https://images.velog.io/images/westkite/post/e4cc7221-d3f4-4a83-a419-ae90fc9a3322/cors%204.PNG)

그리고 url을 getNaverMovie라고 변경 해볼까요?

자 만든후에 이제 이 라우터를 미들웨어에 등록해야합니다

app.js로 가서 
naverRouter를 import 하고 
미들웨어에 등록해봅시다.

기존에 있는것과 동일하게 하면 됩니다.


이렇게요 

![](https://images.velog.io/images/westkite/post/698c6fb8-8dd4-49f8-872a-e996ba9474b1/cors%206.png)

참고로 
```
app.use('/naver', naverRouter);
```

요부분은 /naver 라는 경로를 앞에 추가한거에요
아까 우리가 만들 api 라우팅 경로는 이제
 
> http://localhost:port/naver/getNaverMovie 

보시면 됩니다.

확인해볼까요?

![](https://images.velog.io/images/westkite/post/0bdf670f-63f1-4858-83e0-eae4d8477713/cors%207.PNG)

짠 이제 우리가 등록한 라우터가 정상적으로 작동하는걸 확인할수있어요

이제 저 라우팅 경로에 요청이 들어오면 naver api 데이터를

return 해주면 됩니다. 

우리가 요청을 할때 네이버 api 호출 규격에 맞춰서 요청을 해줘야하는데

여기서 또 궁금증이 생기죠

아니. front에서는 axios를 통해서 요청하면 됬는데

서버단에서는 

결론적으론 axios써도 됩니다 !

> yarn add axios

axios를 import  합니다 .


```
router.get('/getNaverMovie', async function (req, res) {
  let query = req.query.query;
  let reqOptions = {
    headers: {
      'X-Naver-Client-Id': 'mg6ly6rkZfg9ZZUMFKcn',
      'X-Naver-Client-Secret': ''
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
```
해당 내용 처럼 입력해주세요 

```
  let query = req.query.query;
```
**req.query** 를 하면 프론트에서 param에 보냈던 쿼리값을 확인할수 있어요
아까 프론트에서 param에 query를 보냇으니 
req.query.query를 하면 값을 변수에 담을수 있겟죠?



```
  let reqOptions = {
    headers: {
      'X-Naver-Client-Id': 'mg6ly6rkZfg9ZZUMFKcn',
      'X-Naver-Client-Secret': ''
    },
    params: {
      query: query
    }
  };
```
option에 header값에   'X-Naver-Client-Id', 'X-Naver-Client-Secret'
에 발급받은 값을 넣어주도록 합시다. 
api 조건  query를 넣어주세요

이제 호출해보도록 하겠습니다.! 

get방식으로 들어왔을때 
axios.get(url , option) 이에요

```
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
```
movieRes.data에 우리가 원하는 정보가 담겨있습니다.
json 방식으로 return 해주면 

### POST MAN 활용
한번 postman에서 확인해볼까요?

https://www.postman.com/downloads/

![](https://images.velog.io/images/westkite/post/132b12ee-19d8-48fd-a2d4-7c66dde702f5/postman.PNG)

다운 받고 설치만 해주시면 됩니다.


![](https://images.velog.io/images/westkite/post/ea64079f-e980-4629-bbfb-c2d49c6eaf2e/image.png)

> http://localhost:3031/naver/getNaverMovie?query=어벤져스

를 포스트맨에 입력해주세요 

데이터가 잘오는걸 확인할수 있습니다. 

자 이제 서버단은 끝났습니다.

## 연동확인
이제 연동을 확인해볼게요 !
![](https://images.velog.io/images/westkite/post/c07e21a7-24c6-4ab3-9aa3-80e788dc1021/image.png)

잘 나오네요 !

그런데 한가지 안타까운점이 있습니다.
b 태그가 제목이랑 같이 보여요
없애는 방법이 없을까요?
  
  
 ```
import React from "react";
import "./Movie.scss";
import styled from "styled-components";
const MovieCard = ({ item }) => {
  const { title, link, image, pubDate, userRating } = item;
  let replaceTitle = title.replace(/(<([^>]+)>)/gi, "");

  return (
    <div className="movie-card-container">
      <CardImg image={image} />
      <div className="movie-text">
        <h2>{replaceTitle}</h2>
        <div>{`${pubDate}년도`}</div>
        <div className="movie-summary-row">
          <h5>평점</h5>
        </div>
        <div className="movie-likes">{`${userRating}/ 10`}</div>
      </div>
    </div>
  );
};

const CardImg = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 111 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.35, rgba(0, 0, 0, 1)),
    color-stop(0.5, rgba(0, 0, 0, 1)),
    color-stop(0.65, rgba(0, 0, 0, 1)),
    color-stop(0.85, rgba(0, 0, 0, 0.6)),
    color-stop(1, rgba(0, 0, 0, 0))
  );
  position: relative;
`;

export default MovieCard;

```

정규식을 활용해서 제거해보았습니다.

다시 확인해볼까요??

![](https://images.velog.io/images/westkite/post/cd80fa3b-8532-4002-afd7-3dce32ff9077/image.png)

깔끔히 제거된 것을 확인할수 있습니다.!
  
