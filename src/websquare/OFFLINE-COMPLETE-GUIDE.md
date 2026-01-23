# 🚀 WebSquare 폐쇄망 환경 완전 가이드

## 📦 폴더 구조

```
websquare/
├── css/
│   ├── chatbot-core.css          # 챗봇 코어 스타일
│   ├── modal2-styles.css         # 모달2 (폼+챗봇) 스타일
│   └── modal3-styles.css         # 모달3 (전체화면) 스타일
│
├── js/
│   ├── chatbot-svg.js            # SVG 아이콘 라이브러리
│   ├── chatbot-core.js           # 챗봇 핵심 기능
│   └── chatbot-widget.js         # 범용 위젯 (한 줄 추가)
│
├── images/
│   └── chatbot-icon.svg          # 챗봇 아이콘
│
├── chatbot-complete.html         # ⭐ 완전한 데모 (3개 버튼 포함)
├── chatbot.xml                   # WebSquare XML 기본
├── chatbot-with-form.xml         # WebSquare XML 폼 포함
├── form-example.html             # HTML 폼 예제
└── universal-example.html        # 범용 위젯 예제
```

---

## ⚡ 빠른 시작 (폐쇄망 환경)

### 방법 1: 완전한 데모 페이지 열기

```
파일 탐색기에서 직접 열기:
websquare/chatbot-complete.html
```

이 파일을 더블클릭하면 브라우저에서 바로 실행됩니다.
**인터넷 연결 필요 없음!**

### 방법 2: WebSquare XML에 통합

#### WebSquare 페이지에 추가하기

```xml
<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <!-- CSS 로드 -->
    <link rel="stylesheet" href="/websquare/css/chatbot-core.css" />
    <link rel="stylesheet" href="/websquare/css/modal2-styles.css" />
    <link rel="stylesheet" href="/websquare/css/modal3-styles.css" />
    
    <!-- JS 로드 -->
    <script src="/websquare/js/chatbot-svg.js"></script>
    <script src="/websquare/js/chatbot-core.js"></script>
</head>
<body>
    <!-- 기존 WebSquare 컨텐츠 -->
    
    <!-- 챗봇 버튼 추가 -->
    <button id="chatbot-btn" class="chatbot-trigger-btn" style="position:fixed;bottom:30px;right:30px;">
        💬 AI 상담
    </button>
    
    <!-- 챗봇 컨테이너 -->
    <div id="chatbot-container"></div>
    
    <script>
        // 버튼 클릭 시 챗봇 열기
        document.getElementById('chatbot-btn').addEventListener('click', function() {
            if (window.ChatbotCore) {
                window.ChatbotCore.init('chatbot-container', {
                    theme: 'blue-purple',
                    onSendMessage: function(message) {
                        console.log('메시지:', message);
                    }
                });
            }
        });
    </script>
</body>
</html>
```

---

## 🎨 3가지 모달 모드

### 1️⃣ 플로팅 드래그 가능한 창 (Modal 1)
- 드래그로 위치 이동 가능
- 작은 창 형태
- 최소화/최대화 기능

### 2️⃣ 개인정보 입력폼과 함께 (Modal 2)
- 왼쪽: 개인정보 입력 폼
- 오른쪽: 챗봇
- 챗봇에서 입력한 정보가 자동으로 폼에 입력됨

### 3️⃣ 전체화면 모드 (Modal 3)
- 오른쪽: 챗봇 (375px 고정)
- 왼쪽: 개인정보 폼 (팝업)
- 전체 화면 활용

---

## 🎯 자동 폼 입력 기능

채팅창에 다음과 같이 입력하면 자동으로 폼에 입력됩니다:

### 전화번호
```
010-1234-5678
또는
01012345678
```

### 이메일
```
hong@example.com
```

### 이름
```
이름: 홍길동
또는
이름은 홍길동
```

### 주소
```
주소: 서울시 강남구 테헤란로 123
```

---

## 🎨 테마 변경

3가지 테마를 제공합니다:

### 1. 블루퍼플 (기본)
```javascript
ChatbotCore.init('container-id', {
    theme: 'blue-purple'
});
```

### 2. 미래에셋 AI
```javascript
ChatbotCore.init('container-id', {
    theme: 'mirae-ai'
});
```

### 3. 밤우주
```javascript
ChatbotCore.init('container-id', {
    theme: 'night-space'
});
```

---

## 📁 파일 업로드 기능

챗봇에서 파일(이미지, 문서)을 업로드하면:
1. 파일 내용을 분석 (시뮬레이션)
2. 추출된 정보를 자동으로 폼에 입력
3. 알림 토글로 업로드 상태 표시

---

## 🔧 기존 WebSquare 페이지에 통합하기

### Step 1: CSS/JS 파일 복사
```
websquare/ 폴더를 WebSquare 서버에 복사
```

### Step 2: WebSquare 페이지 수정
```xml
<w2:textbox id="customerName" style="width:200px;"></w2:textbox>
<w2:textbox id="customerPhone" style="width:200px;"></w2:textbox>
<w2:textbox id="customerEmail" style="width:200px;"></w2:textbox>

<!-- 챗봇 버튼 추가 -->
<xf:trigger id="chatbotBtn" style="position:absolute;right:20px;bottom:20px;">
    <xf:label>💬 AI 상담</xf:label>
</xf:trigger>

<script type="text/javascript">
scwin.chatbotBtn_onclick = function() {
    // 챗봇 열기
    if (window.ChatbotCore) {
        ChatbotCore.init('chatbot-wrapper', {
            theme: 'mirae-ai',
            onSendMessage: function(msg) {
                // WebSquare 컴포넌트에 자동 입력
                var phoneMatch = msg.match(/(\d{3})[- ]?(\d{3,4})[- ]?(\d{4})/);
                if (phoneMatch) {
                    $p.getComponentById('customerPhone').setValue(phoneMatch[0]);
                }
                
                var emailMatch = msg.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
                if (emailMatch) {
                    $p.getComponentById('customerEmail').setValue(emailMatch[0]);
                }
                
                var nameMatch = msg.match(/이름[은는:]\s*([가-힣]{2,4})/);
                if (nameMatch) {
                    $p.getComponentById('customerName').setValue(nameMatch[1]);
                }
            }
        });
    }
};
</script>
```

---

## ✅ 폐쇄망 체크리스트

- ✅ 모든 CSS 파일 로컬에 존재
- ✅ 모든 JS 파일 로컬에 존재
- ✅ 이미지 파일 로컬에 존재 (SVG)
- ✅ 외부 CDN 의존성 없음
- ✅ 폰트는 시스템 폰트 사용
- ✅ 인터넷 연결 불필요

---

## 🎬 데모 실행

1. `chatbot-complete.html` 파일을 브라우저에서 열기
2. 우측 하단 3개 버튼 중 하나 클릭
3. 채팅창에 정보 입력 테스트:
   - "이름: 홍길동"
   - "010-1234-5678"
   - "hong@example.com"
   - "주소: 서울시 강남구"
4. 폼에 자동으로 입력되는지 확인

---

## 🐛 문제 해결

### 챗봇이 안 열릴 때
1. 브라우저 콘솔에서 에러 확인 (F12)
2. CSS/JS 파일 경로 확인
3. `ChatbotCore`, `ChatbotSVG` 객체 존재 확인

### 파일 경로 문제
```javascript
// 상대 경로
./css/chatbot-core.css
./js/chatbot-core.js

// 절대 경로
/websquare/css/chatbot-core.css
/websquare/js/chatbot-core.js
```

### WebSquare XML에서 작동 안 할 때
1. XML 파일 인코딩 확인 (UTF-8)
2. 스크립트 실행 순서 확인
3. WebSquare 컴포넌트 ID 확인

---

## 📞 지원

이 시스템은 완전히 오프라인에서 작동합니다.
모든 리소스가 로컬에 있어 폐쇄망 환경에서도 안정적으로 사용 가능합니다.

**버전**: 1.0.0 (폐쇄망 완전판)
**날짜**: 2025-01
