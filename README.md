# NextJs Introduction

# 1 FRAMEWORK OVERVIEW

### 1.0 Library vs Framework

1. Library는 내가 코드를 가져다 쓰는 것이기 때문에 자유도가 높음
2. Framework는 내 코드를 Framework 규칙에 맞게 작성해야 함

### 1.1 Pages

1. next js 에서는 pages 폴더의 js 파일명을 url로 가져다 씀

- create-react-app 에서는 React router DOM을 가져다 쓰고, router를 만들고 routes를 설계하고 component를 import하고 router를 render하는 등 시간이 많이 소요됨

2. 파일 안의 Component 명은 파일 명과 동일할 필요 없음
3. Component는 export default로 작성해야 함
4. next js는 404 not fount 페이지가 만들어져 있음
5. index.js만 예외적으로 기본 url을 나타냄

### 1.2 Static Pre Rendering

1. react js 는 Client Side Rendering으로 빈 화면에 js코드로 화면을 그리는 것임.
2. 때문에 인터넷이 느리거나 js 비활성화 된 경우 빈 화면을 보게 됨
3. next js는 Server Side Rendering으로 Pre Rendering 되어 최소한 어떤 화면인지 볼 수 있음

### 1.3 Routing

1. pages 폴더 안에 index와 about을 만들고 NavBar를 components 폴더에 만들어줌
2. NavBar에서 a 태그로 routing 설정하면 페이지가 항상 새로고침 됨
3. next js 에서는 Link 태그로 a 태그를 감싸는 형태로 routing 설정을 하고, 이러면 새로고침 되지 않음.
4. Link 태그에 href를 써 주고, a 태그에 style 등을 주는 방식으로 커스터마이징 가능

### 1.4 CSS Modules

1. \*\*\*.module.css 패턴으로 파일 생성 후 css 작성
2. module을 사용할 파일에서 import

- import styles from "./NavBar.module.css" 형태

3. styles.className 형태로 style 사용 가능
4. rendering 될 때 next js에서 자동으로 className을 랜덤으로 바꿔줌
5. 여러 style을 적용하고 싶을 땐 2가지 방법 사용

- className={`${styles.***} ${styles.###}`}
- [styles.***, styles.###].join(" ")

### 1.5 Styles JSX

1. style을 사용하고자 하는 component 안에 style 태그 만들고 내부에 {``} 백틱 안에 css 생성

- <style jsx>{` a {color: blue;} `}</style>

2. 부모 component와 태그명, className 등이 겹쳐도 영향 없음
3. {``} 내부에는 변수 삽입 가능

### 1.6 Custom App

1. pages/\_app.js는 다른 js 파일을 렌더링하기 전에 렌더링하는 파일임
2. \_app.js를 통해 모든 페이지에 공통으로 적용될 style, component 등을 생성할 수 있음
3. style 태그에 global을 넣으면 \_app.js에서 모든 페이지에 공통으로 적용될 style 생성 가능
   \_app.js 기본 형태
   export default function App({ Component, pageProps }) {
   return (
   <div>
   <Component {...pageProps} />
   </div>
   );
   }
4. \_app.js에서는 styles/global.css를 import할 수 있음 (다른 파일에서는 불가)
