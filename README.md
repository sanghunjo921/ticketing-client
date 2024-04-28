## 프로젝트 개요
이 프로젝트는 티켓팅 서비스의 간단한 클라이언트 구현을 목표로 합니다
- Next.js
- Tailwindcss


## 주요 기능 및 구현 내용

### 티켓 조회 페이지
- Cursor 기반의 pagination을 적용하여 스크롤 다운하면 다음 티켓이 렌더링 되도록 구현하여 끊기지 않는 사용자 경험 제공
- Card UI로 각 티켓의 이미지 등의 정보를 하나의 카드에 담아 시각적으로 분리
- 검생창을 구현하여 원하는 티켓의 정보를 입력하여 쉽게 찾을 수 있는 UX
- 미디어 쿼리를 활용한 Responsive design으로 다양한 디바이스에서 일관되고 최적화된 뷰 제공
- 초기 로딩 화면은 SSR를 통해 속도 개선 및 버튼과 같은 동작에 필요한 요소들은 CSR 적용 

### 티켓 디테일 페이지 
- leftrail과 rightrail을 분리하여 티켓의 주요 정보들과 예매를 위한 정보 분리

## 사용 기술 스택
- 프레임워크: Next.js
- CSS: tailwindcss
- 언어: Typescript, Javascript 

## QuickStart
### 개발 환경 설정
1. 소스코드 클론
2. yarn으로 종속성 설치
3. yarn dev로 dev 환경으로 실행 








