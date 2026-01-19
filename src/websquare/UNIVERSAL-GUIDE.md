# 🌍 어느 페이지에서든 챗봇 불러오기

## ⚡ 한 줄로 끝내기 (가장 간단)

```html
<!-- 어떤 HTML/WebSquare 페이지든 이 한 줄만 추가 -->
<script src="/websquare/js/chatbot-widget.js"></script>
```

**그게 전부입니다!** 🎉
- ✅ 자동으로 챗봇 로드
- ✅ 우측 하단에 플로팅 버튼(💬) 표시
- ✅ 클릭하면 챗봇 열림
- ✅ 폼 자동 입력 기능 활성화

---

## 📋 사용 방법

### 1️⃣ HTML 페이지에서

```html
<!DOCTYPE html>
<html>
<head>
    <title>내 페이지</title>
</head>
<body>
    <h1>고객 정보 입력</h1>
    
    <input type="text" id="name" placeholder="이름">
    <input type="text" id="phone1" maxlength="3">
    <input type="text" id="phone2" maxlength="4">
    <input type="text" id="phone3" maxlength="4">
    
    <!-- ✨ 챗봇 위젯 로드 (한 줄) -->
    <script src="/websquare/js/chatbot-widget.js"></script>
</body>
</html>
```

### 2️⃣ WebSquare XML에서

```xml
<?xml version="1.0" encoding="UTF-8"?>
<html xmlns:w2="http://www.inswave.com/websquare">
<head>
    <w2:type>COMPONENT</w2:type>
    
    <!-- ✨ 챗봇 위젯 로드 (한 줄) -->
    <script src="/websquare/js/chatbot-widget.js"></script>
    
    <script><![CDATA[
        scwin.onpageload = function() {
            // 폼 데이터 자동 수신
            document.addEventListener('chatbotFormData', function(e) {
                var data = e.detail;
                
                if (data.type === 'phone') {
                    $p.getComponentById('phone1').setValue(data.parts[0]);
                    $p.getComponentById('phone2').setValue(data.parts[1]);
                    $p.getComponentById('phone3').setValue(data.parts[2]);
                }
            });
        };
    ]]></script>
</head>
<body>
    <w2:textbox id="phone1"></w2:textbox>
    <w2:textbox id="phone2"></w2:textbox>
    <w2:textbox id="phone3"></w2:textbox>
</body>
</html>
```

---

## ⚙️ 옵션 설정

### 스크립트 태그로 설정

```html
<script 
    src="/websquare/js/chatbot-widget.js"
    data-theme="night-universe"
    data-position="bottom-left"
    data-show-button="true"
></script>
```

**사용 가능한 옵션:**

| 속성 | 값 | 기본값 | 설명 |
|------|-------|--------|------|
| `data-theme` | `blue-purple`, `mirae-ai`, `night-universe` | `blue-purple` | 테마 선택 |
| `data-position` | `bottom-right`, `bottom-left`, `top-right`, `top-left` | `bottom-right` | 위치 |
| `data-show-button` | `true`, `false` | `true` | 플로팅 버튼 표시 여부 |
| `data-auto-init` | `true`, `false` | `true` | 자동 초기화 여부 |
| `data-base-path` | `/custom/path` | `/websquare` | 파일 기본 경로 |

### JavaScript로 설정

```html
<script src="/websquare/js/chatbot-widget.js" data-auto-init="false"></script>

<script>
// 수동 초기화
ChatbotWidget.init({
    theme: 'blue-purple',
    position: 'bottom-right',
    showButton: true,
    offsetX: 20,
    offsetY: 20
});
</script>
```

---

## 🎮 JavaScript API

### 기본 제어

```javascript
// 챗봇 열기
ChatbotWidget.show();

// 챗봇 닫기
ChatbotWidget.hide();

// 챗봇 토글 (열림/닫힘 전환)
ChatbotWidget.toggle();

// 테마 변경
ChatbotWidget.setTheme('night-universe');
```

### 버튼에 연결

```html
<button onclick="ChatbotWidget.show()">고객센터 문의</button>
<button onclick="ChatbotWidget.toggle()">챗봇 열기/닫기</button>
```

### WebSquare 버튼

```xml
<xf:trigger id="btn_openchat">
    <xf:label>챗봇 열기</xf:label>
</xf:trigger>

<script><![CDATA[
scwin.btn_openchat_onclick = function() {
    ChatbotWidget.show();
};
]]></script>
```

---

## 📡 이벤트 리스너

### 1. 챗봇 준비 완료

```javascript
document.addEventListener('chatbotReady', function(event) {
    console.log('챗봇 준비 완료!');
    console.log(event.detail.widget); // ChatbotWidget 객체
});
```

### 2. 폼 데이터 자동 입력

```javascript
document.addEventListener('chatbotFormData', function(event) {
    var data = event.detail;
    
    switch(data.type) {
        case 'name':
            document.getElementById('name').value = data.value;
            break;
            
        case 'phone':
            document.getElementById('phone1').value = data.parts[0];
            document.getElementById('phone2').value = data.parts[1];
            document.getElementById('phone3').value = data.parts[2];
            break;
            
        case 'email':
            document.getElementById('email_local').value = data.localPart;
            document.getElementById('email_domain').value = data.domain;
            break;
            
        case 'address':
            document.getElementById('address').value = data.value;
            break;
    }
});
```

---

## 🎯 실전 예제

### 예제 1: 고객 등록 페이지

```html
<!DOCTYPE html>
<html>
<head>
    <title>고객 등록</title>
</head>
<body>
    <form id="customerForm">
        <input type="text" id="name" placeholder="이름">
        <input type="text" id="phone1" maxlength="3">
        <input type="text" id="phone2" maxlength="4">
        <input type="text" id="phone3" maxlength="4">
        <input type="text" id="address" placeholder="주소">
        <button type="submit">등록</button>
    </form>
    
    <!-- 챗봇 로드 -->
    <script src="/websquare/js/chatbot-widget.js"></script>
    
    <!-- 자동 입력 이벤트 -->
    <script>
    document.addEventListener('chatbotFormData', function(e) {
        var data = e.detail;
        
        if (data.type === 'phone') {
            document.getElementById('phone1').value = data.parts[0];
            document.getElementById('phone2').value = data.parts[1];
            document.getElementById('phone3').value = data.parts[2];
            alert('전화번호가 자동 입력되었습니다!');
        }
    });
    </script>
</body>
</html>
```

### 예제 2: WebSquare 메인 페이지

```xml
<?xml version="1.0" encoding="UTF-8"?>
<html xmlns:w2="http://www.inswave.com/websquare">
<head>
    <w2:type>COMPONENT</w2:type>
    
    <!-- 챗봇 위젯 -->
    <script src="/websquare/js/chatbot-widget.js" data-theme="mirae-ai"></script>
    
    <script><![CDATA[
        scwin.onpageload = function() {
            // 자동 폼 입력
            document.addEventListener('chatbotFormData', scwin.handleChatbotData);
            
            // 챗봇 준비 완료
            document.addEventListener('chatbotReady', function() {
                console.log('챗봇 로드 완료');
            });
        };
        
        scwin.handleChatbotData = function(e) {
            var data = e.detail;
            
            switch(data.type) {
                case 'name':
                    $p.getComponentById('input_name').setValue(data.value);
                    break;
                case 'phone':
                    $p.getComponentById('phone1').setValue(data.parts[0]);
                    $p.getComponentById('phone2').setValue(data.parts[1]);
                    $p.getComponentById('phone3').setValue(data.parts[2]);
                    break;
            }
        };
        
        // 버튼으로 챗봇 열기
        scwin.btn_help_onclick = function() {
            ChatbotWidget.show();
        };
    ]]></script>
</head>
<body>
    <w2:textbox id="input_name" label="이름"></w2:textbox>
    <w2:textbox id="phone1"></w2:textbox>
    <w2:textbox id="phone2"></w2:textbox>
    <w2:textbox id="phone3"></w2:textbox>
    
    <xf:trigger id="btn_help">
        <xf:label>도움말</xf:label>
    </xf:trigger>
</body>
</html>
```

### 예제 3: 여러 페이지에서 공통 사용

**공통 레이아웃 (layout.xml)**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<html xmlns:w2="http://www.inswave.com/websquare">
<head>
    <w2:type>COMPONENT</w2:type>
    
    <!-- 모든 페이지에 챗봇 자동 로드 -->
    <script src="/websquare/js/chatbot-widget.js"></script>
    
    <script><![CDATA[
        // 전역 이벤트 리스너
        document.addEventListener('chatbotFormData', function(e) {
            // 모든 하위 페이지에서 사용 가능
            if (window.parent.scwin && window.parent.scwin.onChatbotFormData) {
                window.parent.scwin.onChatbotFormData(e.detail);
            }
        });
    ]]></script>
</head>
<body>
    <w2:header>
        <button onclick="ChatbotWidget.toggle()">챗봇</button>
    </w2:header>
    
    <w2:content>
        <!-- 하위 페이지 내용 -->
    </w2:content>
</body>
</html>
```

---

## 🔧 고급 사용법

### 조건부 로드

```javascript
// 특정 페이지에서만 로드
if (window.location.pathname.includes('/customer/')) {
    var script = document.createElement('script');
    script.src = '/websquare/js/chatbot-widget.js';
    document.head.appendChild(script);
}
```

### 사용자 정의 초기화

```html
<script src="/websquare/js/chatbot-widget.js" data-auto-init="false"></script>

<script>
// 로그인 후에만 챗봇 활성화
function onUserLogin() {
    ChatbotWidget.init({
        theme: 'blue-purple',
        showButton: true
    });
    
    // 챗봇 자동 열기
    setTimeout(function() {
        ChatbotWidget.show();
    }, 1000);
}
</script>
```

### 동적 테마 변경

```javascript
// 시간대에 따라 테마 자동 변경
var hour = new Date().getHours();
var theme = (hour >= 18 || hour < 6) ? 'night-universe' : 'blue-purple';

ChatbotWidget.init({ theme: theme });
```

---

## 📂 파일 구조

```
/websquare/
  ├── js/
  │   ├── chatbot-widget.js      ⭐ 이 파일만 로드하면 됨!
  │   ├── chatbot-core.js         (자동 로드)
  │   └── chatbot-svg.js          (자동 로드)
  ├── css/
  │   └── chatbot-core.css        (자동 로드)
  └── universal-example.html      (사용 예제)
```

---

## ✅ 체크리스트

- [ ] `/websquare/js/chatbot-widget.js` 파일 존재 확인
- [ ] `/websquare/js/chatbot-core.js` 파일 존재 확인
- [ ] `/websquare/js/chatbot-svg.js` 파일 존재 확인
- [ ] `/websquare/css/chatbot-core.css` 파일 존재 확인
- [ ] HTML/XML에 `<script src="/websquare/js/chatbot-widget.js"></script>` 추가
- [ ] 브라우저 콘솔에서 에러 없는지 확인
- [ ] 우측 하단에 💬 버튼 표시되는지 확인

---

## ❓ FAQ

### Q1: 챗봇이 안 보여요
**A:** 브라우저 콘솔(F12)에서 에러 확인. 파일 경로가 올바른지 확인하세요.

### Q2: 여러 페이지에서 사용하려면?
**A:** 각 페이지에 `<script src="/websquare/js/chatbot-widget.js"></script>` 추가하거나, 공통 레이아웃에 한 번만 추가하세요.

### Q3: WebSquare 공통 컴포넌트로 등록하려면?
**A:** 마스터 레이아웃 XML의 head에 스크립트 태그를 추가하면 모든 하위 페이지에서 자동으로 사용 가능합니다.

### Q4: 플로팅 버튼 없이 챗봇만 사용하려면?
**A:** `data-show-button="false"` 추가 후 `ChatbotWidget.show()`로 수동 제어하세요.

### Q5: iframe에서도 작동하나요?
**A:** 네, Same-Origin이면 작동합니다. 단, postMessage 통신이 필요할 수 있습니다.

---

## 🎉 완료!

이제 **어느 페이지에서든 한 줄로 챗봇을 불러올 수 있습니다!**

```html
<script src="/websquare/js/chatbot-widget.js"></script>
```

더 자세한 예제는 `/websquare/universal-example.html`을 참고하세요.
