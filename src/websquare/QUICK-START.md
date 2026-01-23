# ⚡ 빠른 시작 가이드 (1분 안에!)

## 🎯 목표
WebSquare 폐쇄망 환경에서 3개 버튼의 AI 챗봇을 즉시 실행

---

## 🚀 Step 1: 데모 파일 실행 (10초)

```
1. 파일 탐색기 열기
2. websquare/chatbot-complete.html 찾기
3. 더블클릭으로 브라우저에서 열기
```

✅ **완료!** 이제 우측 하단에 3개의 보라색/분홍색/파란색 버튼이 보입니다.

---

## 🎮 Step 2: 버튼 테스트 (30초)

### 버튼 1 (보라색) - 플로팅 창
- 클릭하면 작은 채팅창 열림
- 마우스로 드래그하여 위치 이동 가능

### 버튼 2 (분홍색) - 폼+챗봇
- 클릭하면 왼쪽에 개인정보 입력폼, 오른쪽에 챗봇
- 채팅창에 정보 입력하면 폼에 자동 입력됨

### 버튼 3 (파란색) - 전체화면
- 클릭하면 전체화면으로 확장
- 오른쪽 375px 고정 채팅창

---

## 💬 Step 3: 자동 입력 테스트 (20초)

버튼 2 또는 3을 클릭한 후, 채팅창에 입력:

```
이름: 홍길동
010-1234-5678
hong@naver.com
주소: 서울시 강남구 테헤란로 123
```

➡️ 왼쪽 폼에 자동으로 입력됩니다!

---

## 📦 WebSquare에 통합하기

### 가장 간단한 방법 (한 줄 추가)

```html
<!-- WebSquare 페이지에 이것만 추가 -->
<link rel="stylesheet" href="/websquare/css/chatbot-core.css" />
<script src="/websquare/js/chatbot-widget.js"></script>
```

끝! 자동으로 챗봇 버튼이 생성됩니다.

---

## 📁 필요한 파일 목록

폐쇄망 환경에서는 이 파일들만 있으면 됩니다:

```
✅ websquare/css/chatbot-core.css
✅ websquare/css/modal2-styles.css  
✅ websquare/css/modal3-styles.css
✅ websquare/js/chatbot-svg.js
✅ websquare/js/chatbot-core.js
✅ websquare/js/chatbot-widget.js
✅ websquare/chatbot-complete.html (데모)
```

**인터넷 연결 불필요!**

---

## 🎨 테마 변경

3가지 테마 중 선택:

```javascript
// 블루퍼플 (기본)
theme: 'blue-purple'

// 미래에셋 AI
theme: 'mirae-ai'

// 밤우주
theme: 'night-space'
```

---

## ❓ 안 될 때

1. **챗봇이 안 보여요**
   → F12 눌러서 콘솔 에러 확인
   → 파일 경로가 맞는지 확인

2. **자동 입력이 안 돼요**
   → 정확한 형식으로 입력했는지 확인
   → "이름: 홍길동" (콜론 필수)
   → "010-1234-5678" (하이픈 있어도 되고 없어도 됨)

3. **버튼이 안 보여요**
   → CSS 파일이 제대로 로드됐는지 확인
   → 개발자 도구(F12) > Network 탭 확인

---

## 🎯 다음 단계

더 자세한 정보는:
- `OFFLINE-COMPLETE-GUIDE.md` - 완전한 가이드
- `TROUBLESHOOTING.md` - 문제 해결
- `UNIVERSAL-GUIDE.md` - 범용 위젯 사용법

**지금 바로 시작하세요!** 🚀
