# 🔍 폼 자동 입력 기능 문제 해결 가이드

## 문제: 채팅창 입력이 폼에 적용되지 않음

### ✅ 체크리스트

#### 1. 브라우저 개발자 콘솔 확인
```
F12 또는 우클릭 > 검사 > Console 탭
```

**확인 사항:**
- [ ] `전화번호 추출:` 로그가 출력되는가?
- [ ] `이름 추출:` 로그가 출력되는가?
- [ ] `폼 데이터 전송:` 로그가 출력되는가?
- [ ] 에러 메시지가 있는가?

#### 2. 입력 형식 확인

**올바른 형식:**
```
✅ 이름: 홍길동, 김철수 (한글 2-4자)
✅ 전화번호: 010-1234-5678, 010 1234 5678, 01012345678
✅ 이메일: example@domain.com
✅ 주소: 서울특별시 영등포구 국제금융로 79
```

**잘못된 형식:**
```
❌ 이름: Hong (영문), 홍 (1자)
❌ 전화번호: 010-12-345 (자릿수 오류)
❌ 이메일: example (@ 없음)
❌ 주소: 123번지 (시/도 정보 없음)
```

#### 3. HTML 요소 ID 확인

폼 input 요소의 ID가 정확한지 확인:

```html
<!-- 이름 -->
<input type="text" id="name">

<!-- 전화번호 (3칸) -->
<input type="text" id="phone1">
<input type="text" id="phone2">
<input type="text" id="phone3">

<!-- 이메일 (2칸) -->
<input type="text" id="email_local">
<input type="text" id="email_domain">

<!-- 주소 -->
<input type="text" id="address">
```

#### 4. iframe 환경 확인

**iframe 사용 시:**
```html
<!-- 부모 페이지에 postMessage 리스너 추가 -->
<script>
window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'chatbotFormData') {
        var data = event.data.data;
        
        // 폼에 데이터 입력
        if (data.type === 'phone') {
            document.getElementById('phone1').value = data.parts[0];
            document.getElementById('phone2').value = data.parts[1];
            document.getElementById('phone3').value = data.parts[2];
        }
    }
});
</script>
```

**같은 페이지에서 사용 시:**
```javascript
// CustomEvent 리스너 추가
document.addEventListener('chatbotFormData', function(e) {
    var data = e.detail;
    
    if (data.type === 'name') {
        document.getElementById('name').value = data.value;
    }
});
```

## 🧪 테스트 방법

### 1. 직접 테스트 (브라우저 콘솔)

```javascript
// 콘솔에서 직접 실행
ChatbotCore.init();

// 입력 필드에 값 설정
document.getElementById('chatbot_input').value = '홍길동 010-1234-5678';

// 메시지 전송
ChatbotCore.handleSendMessage();

// 콘솔에서 로그 확인
// "전화번호 추출: 010 1234 5678"
// "이름 추출: 홍길동"
// "폼 데이터 전송: {type: 'phone', ...}"
```

### 2. 단계별 디버깅

**Step 1: 정규식 테스트**
```javascript
var text = '010-1234-5678';
var pattern = /(\d{3})[-\s]?(\d{4})[-\s]?(\d{4})/;
var match = text.match(pattern);
console.log(match); // ["010-1234-5678", "010", "1234", "5678"]
```

**Step 2: 요소 존재 확인**
```javascript
console.log(document.getElementById('phone1')); // input 요소가 출력되어야 함
console.log(document.getElementById('phone2')); // null이면 ID 오류
```

**Step 3: 수동 입력 테스트**
```javascript
document.getElementById('phone1').value = '010';
document.getElementById('phone2').value = '1234';
document.getElementById('phone3').value = '5678';
// 폼에 값이 입력되는지 확인
```

## 🐛 일반적인 문제와 해결책

### 문제 1: 콘솔에 로그가 전혀 없음
**원인**: chatbot-core.js 로드 실패  
**해결**:
```html
<!-- chatbot.xml 또는 HTML head에 추가 -->
<script src="/websquare/js/chatbot-core.js"></script>
<script src="/websquare/js/chatbot-svg.js"></script>
```

### 문제 2: "전화번호 추출" 로그는 있지만 폼에 입력 안됨
**원인**: input 요소 ID 불일치 또는 존재하지 않음  
**해결**:
```javascript
// 콘솔에서 확인
console.log(document.getElementById('phone1')); // null이면 ID 수정 필요
```

### 문제 3: iframe에서 postMessage가 전달 안됨
**원인**: Same-origin policy 또는 리스너 미등록  
**해결**:
```javascript
// 부모 페이지에 리스너 추가
window.addEventListener('message', function(event) {
    console.log('postMessage 수신:', event.data);
    // 수신 확인 후 처리 로직 추가
});
```

### 문제 4: 한글 이름이 인식 안됨
**원인**: 패턴 매칭 오류  
**해결**:
```javascript
// chatbot-core.js 수정
var namePattern = /[가-힣]{2,4}/; // ^ $ 제거하여 단어 중간에서도 매칭
```

### 문제 5: WebSquare 환경에서 작동 안됨
**원인**: scwin 객체 미정의  
**해결**:
```javascript
// WebSquare 페이지에 콜백 함수 추가
scwin.onChatbotFormData = function(data) {
    console.log('WebSquare 콜백:', data);
    
    if (data.type === 'phone') {
        $p.getComponentById('phone1').setValue(data.parts[0]);
        $p.getComponentById('phone2').setValue(data.parts[1]);
        $p.getComponentById('phone3').setValue(data.parts[2]);
    }
};
```

## 📋 디버깅 체크리스트

```
✅ chatbot-core.js 파일이 로드되었는가?
✅ 브라우저 콘솔에 에러가 없는가?
✅ "전화번호 추출:" 로그가 출력되는가?
✅ "폼 데이터 전송:" 로그가 출력되는가?
✅ input 요소의 ID가 정확한가? (phone1, phone2, phone3 등)
✅ input 요소가 실제로 존재하는가? (console.log로 확인)
✅ iframe 사용 시 postMessage 리스너가 등록되었는가?
✅ 입력 형식이 올바른가? (010-1234-5678)
```

## 🔧 완전한 예제 코드

### HTML (form-example.html)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>챗봇 폼 연동 테스트</title>
</head>
<body>
    <!-- 폼 -->
    <form>
        <input type="text" id="name" placeholder="이름">
        <input type="text" id="phone1" maxlength="3">
        <input type="text" id="phone2" maxlength="4">
        <input type="text" id="phone3" maxlength="4">
        <input type="text" id="email_local">
        <input type="text" id="email_domain">
        <input type="text" id="address">
    </form>
    
    <!-- 챗봇 iframe -->
    <iframe src="chatbot.xml" width="375" height="600"></iframe>
    
    <script>
    // postMessage 수신
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'chatbotFormData') {
            var data = event.data.data;
            console.log('수신:', data);
            
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
        }
    });
    </script>
</body>
</html>
```

### WebSquare (main.xml)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<html xmlns:w2="http://www.inswave.com/websquare">
<head>
    <w2:type>COMPONENT</w2:type>
    <script><![CDATA[
        scwin.onChatbotFormData = function(data) {
            console.log('WebSquare 콜백:', data);
            
            switch(data.type) {
                case 'name':
                    $p.getComponentById('name').setValue(data.value);
                    break;
                case 'phone':
                    $p.getComponentById('phone1').setValue(data.parts[0]);
                    $p.getComponentById('phone2').setValue(data.parts[1]);
                    $p.getComponentById('phone3').setValue(data.parts[2]);
                    break;
                case 'email':
                    $p.getComponentById('email_local').setValue(data.localPart);
                    $p.getComponentById('email_domain').setValue(data.domain);
                    break;
                case 'address':
                    $p.getComponentById('address').setValue(data.value);
                    break;
            }
        };
    ]]></script>
</head>
<body>
    <w2:group>
        <w2:textbox id="name" label="이름"></w2:textbox>
        <w2:textbox id="phone1"></w2:textbox>
        <w2:textbox id="phone2"></w2:textbox>
        <w2:textbox id="phone3"></w2:textbox>
        <w2:textbox id="email_local"></w2:textbox>
        <w2:textbox id="email_domain"></w2:textbox>
        <w2:textbox id="address"></w2:textbox>
    </w2:group>
    
    <iframe src="/ui/chatbot/chatbot.xml" width="375" height="600"></iframe>
</body>
</html>
```

## 📞 추가 지원

위 방법으로 해결되지 않는 경우:
1. 브라우저 콘솔 전체 로그 캡처
2. chatbot.xml과 form HTML 코드 공유
3. 사용 중인 WebSquare 버전 확인
