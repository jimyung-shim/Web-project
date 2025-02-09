# 🌐 AI 기반 정보 검증 및 커뮤니티 플랫폼

## 📌 프로젝트 개요
**AI 기반 정보 검증 및 커뮤니티 플랫폼**은 사용자가 온라인에서 접한 정보가 **신뢰할 수 있는지 검증**할 수 있도록 도와주는 웹 애플리케이션. 
AI를 활용하여 정보를 분석하고, AI를 통해 알 수 없는 정보는 사용자 커뮤니티에서 서로 공유할 수 있도록 함.

## 🎯 주요 기능
### ✅ AI 기반 정보 검증 시스템
- 사용자가 **정보 또는 URL을 제출**하면 AI가 자료들을 제공.
- 현재 main 브랜치에 OpenAI API 서버 페이지(server.js)와 Groq API 서버 페이지(groq.js)가 있는데, OpenAI API 서버 페이지는 Chat GPT를, Groq API 페이지는 Llama를 사용할 수 있니다.
아직 OpenAI API 비용을 결재하지 않아 Chat GPT는 작동할 수 없고, 대신에 임시방편으로 Groq API키를 가져와
제한적으로나마 무료로 사용할 수 있는 Llama를 탑재한 버전 있으니 당분간은 AI기능 테스트 해볼 때 이걸로 해주세요.

### ✅ 커뮤니티 게시판
- 사용자가 직접 **게시글을 작성하고, 정보를 공유**할 수 있는 공간.
- 현재는 로컬에 게시글 데이터를 저장하도록 구현하였지만, 추후에 MongoDB 또는 Firebase를 이용하여 백엔드 구현할 예정.

### ✅ 사용자 계정 시스템 (예정)
- 현재는 로그인 화면과 회원가입 화면만 구현되어 있는 상태이고, 아직 기능은 백엔드 쪽이 구현되지 않아 미완성.

## 🛠️ 기술 스택
### **프론트엔드:**
- HTML, CSS, JavaScript
- Font Awesome (아이콘 활용)

### **백엔드:**
- Node.js (Express.js 기반 서버)
- MongoDB 또는 Firebase 사용 예정
- OpenAI API (AI 분석 기능)

## 🚀 프로젝트 실행 방법
### 1️⃣ **환경 변수 파일 (.env) 설정**
OpenAI API키
`````````````````````````````````````````````.env
OPENAI_API_KEY=your_openai_api_key
`````````````````````````````````````````````````

Groq API키
`````````````````````````````````````````````.env
GROQ_API_KEY=your_groq_api_key
`````````````````````````````````````````````````
API 키는 협업할때 드립니다.

### 2️⃣ **서버 실행**
OpenAI API 서버 실행
`````````````````````````````````````````````bash
cd 파일 경로
node Web_project/javascript/server.js
`````````````````````````````````````````````````

Groq API 서버 실행
`````````````````````````````````````````````bash
cd 파일 경로
node Web_project/javascript/groq.js
`````````````````````````````````````````````````


### 3️⃣ **웹사이트 접속**
OpenAI API 서버
`````````````````````````````````````````````bash
Loaded API Key: your_openai_api_key
Server running at http://localhost:3000
`````````````````````````````````````````````````

Groq API 서버
`````````````````````````````````````````````bash
Loaded API Key: your_groq_api_key
Server running at http://localhost:3000
`````````````````````````````````````````````````

## 📌 향후 개발 계획
- 🔹 **회원가입 및 로그인 기능 추가**
- 🔹 **게시글 좋아요 및 댓글 기능 추가**
- 🔹 **정보 신뢰도 평가 시스템 구축**
- 🔹 **UI/UX 디자인 개선**

## 📜 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.

커밋 히스토리에서 쓸데없는 커밋이 많은건 제가 깃 명령어 써보려고 연습하다보니 이렇게 됐습니다... 양해 부탁드립니다
