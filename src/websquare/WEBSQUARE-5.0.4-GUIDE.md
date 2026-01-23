# WebSquare 5.0.4 통합 가이드

## 📌 버전 정보
- **WebSquare 버전**: 5.0.4
- **챗봇 시스템 버전**: 1.0.0
- **호환성**: 완전 호환

---

## ✅ WebSquare 5.0.4에 최적화된 기능

### 1. 자동 폼 입력 (다중 ID 패턴 지원)
챗봇이 자동으로 여러 가지 ID 패턴을 시도하여 입력 필드를 찾습니다.

#### 전화번호 입력
```javascript
// 지원하는 ID 패턴:
// 1. form-phone1, form-phone2, form-phone3
// 2. form3-phone1, form3-phone2, form3-phone3
// 3. phone1, phone2, phone3
// 4. input_phone1, input_phone2, input_phone3

// 사용 예시 (채팅창에 입력):
010-1234-5678
또는
010 1234 5678
또는
01012345678
```

#### 이메일 입력
```javascript
// 지원하는 ID 패턴:
// 1. form-email1, form-email2
// 2. form3-email1, form3-email2
// 3. email_local, email_domain
// 4. email1, email2
// 5. input_email1, input_email2

// 사용 예시:
hong@naver.com
```

#### 이름 입력
```javascript
// 지원하는 ID 패턴:
// 1. form-name
// 2. form3-name
// 3. name
// 4. input_name
// 5. customer_name
// 6. userName

// 사용 예시:
홍길동
```

#### 주소 입력
```javascript
// 지원하는 ID 패턴:
// 1. form-address
// 2. form3-address
// 3. address
// 4. input_address
// 5. customer_address
// 6. userAddress

// 사용 예시:
서울시 강남구 테헤란로 123
```

---

## 🔧 WebSquare 5.0.4 페이지에 통합하기

### 방법 1: 기본 통합 (가장 간단)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" 
      xmlns:w2="http://www.inswave.com/websquare" 
      xmlns:xf="http://www.w3.org/2002/xforms">
<head>
    <w2:type>COMPONENT</w2:type>
    <w2:buildDate />
    
    <!-- 챗봇 CSS -->
    <link rel="stylesheet" type="text/css" href="/websquare/css/chatbot-core.css" />
    <link rel="stylesheet" type="text/css" href="/websquare/css/modal2-styles.css" />
    <link rel="stylesheet" type="text/css" href="/websquare/css/modal3-styles.css" />
    
    <style type="text/css">
        /* 페이지 스타일 */
    </style>
</head>

<body>
    <!-- WebSquare 컴포넌트들 -->
    <w2:textbox id="input_name" label="이름" style="width:200px;"></w2:textbox>
    
    <!-- 전화번호 (3칸) -->
    <w2:textbox id="phone1" style="width:60px;"></w2:textbox>
    <w2:textbox id="phone2" style="width:70px;"></w2:textbox>
    <w2:textbox id="phone3" style="width:70px;"></w2:textbox>
    
    <!-- 이메일 -->
    <w2:textbox id="email_local" style="width:100px;"></w2:textbox>
    <span>@</span>
    <w2:textbox id="email_domain" style="width:120px;"></w2:textbox>
    
    <!-- 주소 -->
    <w2:textbox id="address" label="주소" style="width:300px;"></w2:textbox>
    
    <!-- 챗봇 컨테이너 -->
    <div id="chatbot-container" style="position:fixed;bottom:20px;right:20px;z-index:9999;"></div>
    
    <!-- 챗봇 JS -->
    <script type="text/javascript" src="/websquare/js/chatbot-svg.js"></script>
    <script type="text/javascript" src="/websquare/js/chatbot-core.js"></script>
    
    <script type="text/javascript">
    <![CDATA[
        // 페이지 로드 시
        scwin.onpageload = function() {
            // 챗봇 초기화는 필요할 때 수동으로
        };
        
        // 챗봇 열기 버튼
        scwin.openChatbot = function() {
            if (window.ChatbotCore) {
                ChatbotCore.init('chatbot-container', {
                    theme: 'blue-purple'
                });
            }
        };
        
        // 챗봇에서 폼 데이터 수신 (WebSquare 5.0.4 방식)
        scwin.onChatbotFormData = function(data) {
            console.log('폼 데이터 수신:', data);
            
            // 전화번호
            if (data.type === 'phone') {
                $p.getComponentById('phone1').setValue(data.parts[0]);
                $p.getComponentById('phone2').setValue(data.parts[1]);
                $p.getComponentById('phone3').setValue(data.parts[2]);
            }
            
            // 이메일
            else if (data.type === 'email') {
                $p.getComponentById('email_local').setValue(data.localPart);
                $p.getComponentById('email_domain').setValue(data.domain);
            }
            
            // 이름
            else if (data.type === 'name') {
                $p.getComponentById('input_name').setValue(data.value);
            }
            
            // 주소
            else if (data.type === 'address') {
                $p.getComponentById('address').setValue(data.value);
            }
        };
    ]]>
    </script>
</body>
</html>
```

### 방법 2: iframe 방식 (권장하지 않음)

WebSquare 5.0.4에서는 iframe 통신에 제약이 있을 수 있으므로, 
위의 직접 통합 방식을 권장합니다.

---

## 🎯 실전 예제: 고객정보 입력 페이지

```xml
<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" 
      xmlns:w2="http://www.inswave.com/websquare" 
      xmlns:xf="http://www.w3.org/2002/xforms">
<head>
    <w2:type>COMPONENT</w2:type>
    <w2:buildDate />
    
    <link rel="stylesheet" type="text/css" href="/websquare/css/chatbot-core.css" />
    <link rel="stylesheet" type="text/css" href="/websquare/css/modal2-styles.css" />
    
    <style type="text/css">
        .form-container {
            padding: 20px;
            background: white;
            border-radius: 8px;
        }
        .form-row {
            margin-bottom: 16px;
        }
        .form-label {
            display: inline-block;
            width: 120px;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div class="form-container">
        <h2>고객 정보 입력</h2>
        
        <!-- 이름 -->
        <div class="form-row">
            <span class="form-label">이름:</span>
            <w2:textbox id="customer_name" style="width:200px;"></w2:textbox>
        </div>
        
        <!-- 전화번호 -->
        <div class="form-row">
            <span class="form-label">전화번호:</span>
            <w2:textbox id="phone1" style="width:60px;" maxlength="3"></w2:textbox>
            <span> - </span>
            <w2:textbox id="phone2" style="width:70px;" maxlength="4"></w2:textbox>
            <span> - </span>
            <w2:textbox id="phone3" style="width:70px;" maxlength="4"></w2:textbox>
        </div>
        
        <!-- 이메일 -->
        <div class="form-row">
            <span class="form-label">이메일:</span>
            <w2:textbox id="email_local" style="width:120px;"></w2:textbox>
            <span> @ </span>
            <w2:textbox id="email_domain" style="width:150px;"></w2:textbox>
        </div>
        
        <!-- 주소 -->
        <div class="form-row">
            <span class="form-label">주소:</span>
            <w2:textbox id="customer_address" style="width:400px;"></w2:textbox>
        </div>
        
        <!-- 저장 버튼 -->
        <div class="form-row">
            <xf:trigger id="btn_save" style="width:100px;margin-left:120px;">
                <xf:label>저장</xf:label>
            </xf:trigger>
        </div>
    </div>
    
    <!-- 챗봇 버튼 (플로팅) -->
    <div id="chatbot-btn" style="position:fixed;bottom:30px;right:30px;width:60px;height:60px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius:50%;box-shadow:0 4px 12px rgba(0,0,0,0.15);cursor:pointer;display:flex;align-items:center;justify-content:center;color:white;font-size:28px;z-index:999;" onclick="scwin.openChatbot()">
        💬
    </div>
    
    <!-- 챗봇 컨테이너 -->
    <div id="chatbot-container" style="display:none;"></div>
    
    <script type="text/javascript" src="/websquare/js/chatbot-svg.js"></script>
    <script type="text/javascript" src="/websquare/js/chatbot-core.js"></script>
    
    <script type="text/javascript">
    <![CDATA[
        scwin.onpageload = function() {
            // 페이지 로드 시 초기화
            console.log('고객정보 입력 페이지 로드 완료');
        };
        
        // 챗봇 열기
        scwin.openChatbot = function() {
            var container = document.getElementById('chatbot-container');
            
            if (container.style.display === 'none' || !container.innerHTML) {
                container.style.display = 'block';
                
                // 챗봇 초기화
                if (window.ChatbotCore) {
                    ChatbotCore.init('chatbot-container', {
                        theme: 'mirae-ai'
                    });
                }
            } else {
                container.style.display = 'block';
            }
        };
        
        // 챗봇 닫기
        scwin.onChatbotClose = function() {
            var container = document.getElementById('chatbot-container');
            container.style.display = 'none';
        };
        
        // 챗봇에서 폼 데이터 수신
        scwin.onChatbotFormData = function(data) {
            console.log('폼 데이터 수신:', data);
            
            switch(data.type) {
                case 'phone':
                    $p.getComponentById('phone1').setValue(data.parts[0]);
                    $p.getComponentById('phone2').setValue(data.parts[1]);
                    $p.getComponentById('phone3').setValue(data.parts[2]);
                    alert('전화번호가 입력되었습니다: ' + data.value);
                    break;
                    
                case 'email':
                    $p.getComponentById('email_local').setValue(data.localPart);
                    $p.getComponentById('email_domain').setValue(data.domain);
                    alert('이메일이 입력되었습니다: ' + data.value);
                    break;
                    
                case 'name':
                    $p.getComponentById('customer_name').setValue(data.value);
                    alert('이름이 입력되었습니다: ' + data.value);
                    break;
                    
                case 'address':
                    $p.getComponentById('customer_address').setValue(data.value);
                    alert('주소가 입력되었습니다: ' + data.value);
                    break;
            }
        };
        
        // 저장 버튼
        scwin.btn_save_onclick = function() {
            var name = $p.getComponentById('customer_name').getValue();
            var phone1 = $p.getComponentById('phone1').getValue();
            var phone2 = $p.getComponentById('phone2').getValue();
            var phone3 = $p.getComponentById('phone3').getValue();
            var emailLocal = $p.getComponentById('email_local').getValue();
            var emailDomain = $p.getComponentById('email_domain').getValue();
            var address = $p.getComponentById('customer_address').getValue();
            
            // 유효성 검사
            if (!name) {
                alert('이름을 입력해주세요.');
                return;
            }
            
            if (!phone1 || !phone2 || !phone3) {
                alert('전화번호를 입력해주세요.');
                return;
            }
            
            // 저장 로직
            var customerData = {
                name: name,
                phone: phone1 + '-' + phone2 + '-' + phone3,
                email: emailLocal + '@' + emailDomain,
                address: address
            };
            
            console.log('저장할 데이터:', customerData);
            
            // 서버 전송 (예시)
            // com.submit('savCustomer', customerData);
            
            alert('저장되었습니다.');
        };
    ]]>
    </script>
</body>
</html>
```

---

## 🐛 WebSquare 5.0.4 특정 이슈 해결

### 이슈 1: 챗봇에서 입력한 값이 폼에 안 들어감
**원인**: ID 불일치

**해결방법**:
```javascript
// chatbot-core.js가 자동으로 여러 ID 패턴을 시도합니다.
// 하지만 커스텀 ID를 사용하는 경우, 
// WebSquare 페이지에서 직접 값을 설정해야 합니다.

scwin.onChatbotFormData = function(data) {
    // 여기서 WebSquare 컴포넌트 ID에 맞게 setValue
    if (data.type === 'phone') {
        $p.getComponentById('YOUR_PHONE_ID1').setValue(data.parts[0]);
        $p.getComponentById('YOUR_PHONE_ID2').setValue(data.parts[1]);
        $p.getComponentById('YOUR_PHONE_ID3').setValue(data.parts[2]);
    }
};
```

### 이슈 2: CustomEvent가 작동하지 않음
**원인**: WebSquare 5.0.4의 이벤트 시스템

**해결방법**:
```javascript
// CustomEvent 대신 scwin 콜백 사용
scwin.onChatbotFormData = function(data) {
    // 처리 로직
};
```

### 이슈 3: CSS 스타일이 적용되지 않음
**원인**: CSS 경로 또는 우선순위 문제

**해결방법**:
```xml
<!-- 정확한 경로 확인 -->
<link rel="stylesheet" type="text/css" href="/websquare/css/chatbot-core.css" />

<!-- 또는 상대 경로 -->
<link rel="stylesheet" type="text/css" href="../../websquare/css/chatbot-core.css" />
```

---

## ✅ 테스트 체크리스트

### 기본 기능 테스트
- [ ] 챗봇 버튼 클릭 시 열림
- [ ] 메시지 입력 및 전송
- [ ] 봇 자동 응답

### 자동 입력 테스트
채팅창에 다음을 입력하여 테스트:
```
홍길동 010-1234-5678 hong@naver.com 서울시 강남구 테헤란로 123
```

- [ ] 이름이 폼에 입력됨
- [ ] 전화번호가 3칸에 분리되어 입력됨
- [ ] 이메일이 @ 기준으로 분리되어 입력됨
- [ ] 주소가 폼에 입력됨

### WebSquare 5.0.4 특정 테스트
- [ ] $p.getComponentById() 정상 작동
- [ ] scwin.onChatbotFormData 콜백 정상 작동
- [ ] WebSquare 컴포넌트에 setValue() 정상 작동
- [ ] 페이지 새로고침 후에도 챗봇 재작동

---

## 📞 지원

WebSquare 5.0.4 통합 시 문제가 발생하면:
1. 브라우저 콘솔(F12) 확인
2. ID 패턴 확인
3. scwin 콜백 확인
4. TROUBLESHOOTING.md 참고

**버전**: 1.0.0 (WebSquare 5.0.4 호환)
