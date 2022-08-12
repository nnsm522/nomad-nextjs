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
