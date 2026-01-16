# WebSquare 챗봇 통합 가이드

## 📁 폴더 구조

```
/websquare/
  ├── chatbot.xml                # WebSquare UI 정의 파일
  ├── css/
  │   └── chatbot-core.css       # 챗봇 스타일시트
  ├── js/
  │   ├── chatbot-core.js        # 챗봇 핵심 로직
  │   └── chatbot-svg.js         # SVG 아이콘 모듈
  └── README.md                  # 이 파일
```

## 🚀 빠른 시작

### 1. 파일 배포

WebSquare 프로젝트에 다음 파일들을 복사합니다:

```
/websquare/chatbot.xml       → /ui/chatbot/chatbot.xml
/websquare/css/chatbot-core.css → /ui/chatbot/css/chatbot-core.css
/websquare/js/chatbot-core.js   → /ui/chatbot/js/chatbot-core.js
/websquare/js/chatbot-svg.js    → /ui/chatbot/js/chatbot-svg.js
```

### 2. 메인 페이지에 챗봇 포함

#### 방법 A: iframe 방식 (권장)
```xml
<!-- 메인 페이지 하단에 추가 -->
<w2:group id="grp_chatbot_wrapper" style="position:fixed;bottom:20px;right:20px;z-index:9999;width:375px;height:600px;">
    <iframe id="iframe_chatbot" src="/ui/chatbot/chatbot.xml" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
</w2:group>
```

#### 방법 B: include 방식
```xml
<!-- 메인 페이지에 추가 -->
<w2:include id="include_chatbot" src="/ui/chatbot/chatbot.xml"></w2:include>
```

### 3. 챗봇 버튼 추가 (선택사항)

드래그 가능한 플로팅 버튼:

```xml
<w2:group id="grp_chatbot_button" style="position:fixed;bottom:20px;right:20px;z-index:10000;">
    <xf:trigger id="btn_chatbot" style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border:none;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.15);">
        <xf:label><![CDATA[💬]]></xf:label>
    </xf:trigger>
</w2:group>

<script type="text/javascript"><![CDATA[
scwin.btn_chatbot_onclick = function() {
    // iframe 방식
    $p.getComponentById('grp_chatbot_wrapper').show();
    
    // include 방식
    // $p.getComponentById('include_chatbot').show();
};
]]></script>
```

## 🎨 3가지 테마

### 1. 블루퍼플 (기본)
- **특징**: 밝고 친근한 그라데이션
- **컬러**: 블루 → 퍼플 그라데이션
- **용도**: 일반적인 비즈니스 환경

### 2. 미래에셋 AI
- **특징**: 기업 브랜드 컬러
- **컬러**: 오렌지 → 블루 그라데이션
- **용도**: 미래에셋 전용 브랜딩

### 3. 밤우주
- **특징**: 다크 모드, 우주 테마
- **컬러**: 딥 블루 그라데이션
- **용도**: 야간 모드, 프리미엄 느낌
- **입력창**: Figma 디자인 적용 (Send 버튼 외부 배치)

## 🔧 3가지 레이아웃 모드

### 1. 플로팅 (Floating)
```javascript
ChatbotCore.layout = 'floating';
ChatbotCore.updateLayoutClass();
```
- 크기: 375px × 가변 높이
- 위치: 화면 우측 하단 고정
- 용도: 일반적인 사용

### 2. 모달 (Modal)
```javascript
ChatbotCore.layout = 'modal';
ChatbotCore.updateLayoutClass();
```
- 크기: 375px × 85vh
- 위치: 화면 중앙 (dim 처리)
- 용도: 집중 필요한 작업

### 3. 전체화면 (Fullscreen)
```javascript
ChatbotCore.layout = 'fullscreen';
ChatbotCore.updateLayoutClass();
```
- 크기: 100% × 100%
- 위치: 전체 화면
- 용도: 모바일 또는 전용 작업

## 💻 부모 페이지와 통신

### 1. 챗봇 메시지 수신

부모 페이지에서 챗봇 메시지를 받아 처리:

```javascript
// 부모 페이지 (메인 XML의 script 섹션)
scwin.onChatbotMessage = function(message) {
    console.log('챗봇 메시지:', message);
    
    // 예: 고객명 입력 감지
    if (message.includes('홍길동')) {
        $p.getComponentById('input_customer_name').setValue('홍길동');
    }
};
```

### 2. 파일 업로드 수신

```javascript
// 부모 페이지
scwin.onChatbotFileUpload = function(file) {
    console.log('파일 업로드:', file);
    
    // OCR 또는 파일 분석 후 자동 입력
    $p.getComponentById('input_name').setValue('홍길동');
    $p.getComponentById('input_ssn').setValue('870211-1******');
    $p.getComponentById('input_address').setValue('서울특별시 영등포구 국제금융로 79');
    
    // 서버로 파일 전송
    // var formData = new FormData();
    // formData.append('file', file);
    // submission으로 전송...
};
```

### 3. 테마 변경 감지

```javascript
// 부모 페이지
scwin.onChatbotThemeChange = function(theme) {
    console.log('테마 변경:', theme);
    
    // 부모 페이지도 같은 테마 적용
    if (theme === 'night-universe') {
        document.body.style.backgroundColor = '#1a1a2e';
    } else {
        document.body.style.backgroundColor = '#ffffff';
    }
};
```

### 4. 챗봇 상태 변경 감지

```javascript
// 부모 페이지
scwin.onChatbotClose = function() {
    console.log('챗봇 닫힘');
    $p.getComponentById('grp_chatbot_wrapper').hide();
};

scwin.onChatbotMinimize = function() {
    console.log('챗봇 최소화');
};

scwin.onChatbotMaximize = function() {
    console.log('챗봇 최대화');
};
```

## 🎯 AI Modal-2 레이아웃

좌측 입력폼 + 우측 챗봇 (375px 고정)

### HTML 구조

```xml
<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:w2="http://www.inswave.com/websquare" xmlns:xf="http://www.w3.org/2002/xforms">
<head>
    <w2:type>COMPONENT</w2:type>
    <style><![CDATA[
        .modal-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9998;
            display: none;
        }
        .modal-dim {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }
        .modal-content {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
        }
        .modal-form {
            flex: 1;
            background: white;
            margin: 40px;
            margin-right: 0;
            border-radius: 8px;
            padding: 24px;
            overflow-y: auto;
        }
        .modal-chatbot {
            width: 375px;
            height: 100%;
            padding: 20px;
            padding-left: 0;
        }
    ]]></style>
</head>
<body>
    <w2:group id="grp_modal_container" class="modal-container">
        <!-- Dim 배경 -->
        <div class="modal-dim" onclick="scwin.closeModal()"></div>
        
        <!-- 컨텐츠 -->
        <div class="modal-content">
            <!-- 좌측: 입력 폼 -->
            <div class="modal-form">
                <h2>고객 정보 입력</h2>
                
                <xf:group id="grp_form" style="display:flex;flex-direction:column;gap:16px;">
                    <xf:group>
                        <w2:textbox id="input_name" label="이름" style="width:100%;"></w2:textbox>
                    </xf:group>
                    <xf:group>
                        <w2:textbox id="input_ssn" label="주민등록번호" style="width:100%;"></w2:textbox>
                    </xf:group>
                    <xf:group>
                        <w2:textbox id="input_address" label="주소" style="width:100%;"></w2:textbox>
                    </xf:group>
                    <xf:group>
                        <w2:textbox id="input_phone" label="연락처" style="width:100%;"></w2:textbox>
                    </xf:group>
                    <xf:group style="margin-top:24px;">
                        <xf:trigger id="btn_save" style="width:100px;">
                            <xf:label>저장</xf:label>
                        </xf:trigger>
                        <xf:trigger id="btn_cancel" style="width:100px;margin-left:8px;">
                            <xf:label>취소</xf:label>
                        </xf:trigger>
                    </xf:group>
                </xf:group>
            </div>
            
            <!-- 우측: 챗봇 (375px 고정) -->
            <div class="modal-chatbot">
                <iframe src="/ui/chatbot/chatbot.xml" width="375" height="100%" frameborder="0" scrolling="no"></iframe>
            </div>
        </div>
    </w2:group>
    
    <script type="text/javascript"><![CDATA[
        scwin.openModal = function() {
            $p.getComponentById('grp_modal_container').show();
        };
        
        scwin.closeModal = function() {
            $p.getComponentById('grp_modal_container').hide();
        };
        
        scwin.btn_save_onclick = function() {
            // 저장 로직
            alert('저장되었습니다.');
            scwin.closeModal();
        };
        
        scwin.btn_cancel_onclick = function() {
            scwin.closeModal();
        };
        
        // 챗봇 파일 업로드 이벤트 처리
        scwin.onChatbotFileUpload = function(file) {
            // 자동 입력
            $p.getComponentById('input_name').setValue('홍길동');
            $p.getComponentById('input_ssn').setValue('870211-1******');
            $p.getComponentById('input_address').setValue('서울특별시 영등포구 국제금융로 79');
        };
    ]]></script>
</body>
</html>
```

## 📱 드래그 가능한 플로팅 버튼

```xml
<w2:group id="grp_floating_btn" style="position:fixed;bottom:20px;right:20px;z-index:10000;">
    <xf:trigger id="btn_floating_chatbot" style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border:none;cursor:move;box-shadow:0 4px 12px rgba(0,0,0,0.15);">
        <xf:label>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" style="margin-top:5px;">
                <path d="M15 5C9.47715 5 5 8.91015 5 13.75C5 16.0663 6.0156 18.1443 7.64509 19.6096C7.62671 20.1527 7.43965 20.6898 7.10019 21.1335C7.7908 21.1077 8.46664 20.8507 9.00846 20.4255C10.2222 21.0291 11.5875 21.375 15 21.375C20.5228 21.375 25 17.4648 25 13.75C25 8.91015 20.5228 5 15 5Z" fill="white"/>
            </svg>
        </xf:label>
    </xf:trigger>
</w2:group>

<script type="text/javascript"><![CDATA[
scwin.onpageload = function() {
    scwin.initDraggableButton();
};

scwin.initDraggableButton = function() {
    var btn = document.getElementById('btn_floating_chatbot');
    var parent = document.getElementById('grp_floating_btn');
    var isDragging = false;
    var startX, startY, initialX, initialY;
    
    btn.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        var rect = parent.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        var dx = e.clientX - startX;
        var dy = e.clientY - startY;
        
        parent.style.left = (initialX + dx) + 'px';
        parent.style.top = (initialY + dy) + 'px';
        parent.style.right = 'auto';
        parent.style.bottom = 'auto';
    });
    
    document.addEventListener('mouseup', function(e) {
        if (isDragging) {
            isDragging = false;
            
            // 짧은 클릭인 경우 챗봇 열기
            var dx = e.clientX - startX;
            var dy = e.clientY - startY;
            if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
                scwin.openChatbot();
            }
        }
    });
};

scwin.openChatbot = function() {
    $p.getComponentById('grp_chatbot_wrapper').show();
};
]]></script>
```

## 🔌 JavaScript API

### ChatbotCore 모듈 (chatbot-core.js)

| 함수 | 설명 | 사용 예시 |
|------|------|----------|
| `init()` | 챗봇 초기화 | `ChatbotCore.init();` |
| `handleSendMessage()` | 메시지 전송 | `ChatbotCore.handleSendMessage();` |
| `handleFileUpload()` | 파일 업로드 처리 | 자동 호출 |
| `toggleAlerts()` | 알림 영역 토글 | `ChatbotCore.toggleAlerts();` |
| `toggleThemeMenu()` | 테마 메뉴 토글 | `ChatbotCore.toggleThemeMenu();` |
| `handleThemeChange(theme)` | 테마 변경 | `ChatbotCore.handleThemeChange('night-universe');` |
| `setActiveTab(tab)` | 탭 전환 | `ChatbotCore.setActiveTab('todo');` |
| `onClose()` | 챗봇 닫기 | `ChatbotCore.onClose();` |
| `onMinimize()` | 챗봇 최소화 | `ChatbotCore.onMinimize();` |
| `onMaximize()` | 챗봇 최대화 | `ChatbotCore.onMaximize();` |

### ChatbotSVG 모듈 (chatbot-svg.js)

| 함수 | 설명 | 반환값 |
|------|------|--------|
| `getLogo(theme)` | 로고 SVG | HTML String |
| `getAttachIcon(theme)` | 첨부 아이콘 SVG | HTML String |
| `getSendIcon(theme)` | 전송 아이콘 SVG | HTML String |
| `getSendIconNight()` | 밤우주 전송 아이콘 | HTML String |

## 🎨 커스터마이징

### 1. 초기 메시지 변경

`chatbot-core.js` 파일의 `init()` 함수 수정:

```javascript
function init() {
    _messages = [{
        id: '1',
        type: 'bot',
        content: '사용자 정의 초기 메시지를 입력하세요.',
        timestamp: new Date(),
        tab: 'helper'
    }];
    // ...
}
```

### 2. 봇 응답 로직 변경

`chatbot-core.js`의 `getBotResponse()` 함수 수정:

```javascript
function getBotResponse(userInput) {
    var input = userInput.toLowerCase();
    
    // 커스텀 응답 추가
    if (input.includes('계좌')) {
        return '계좌 개설을 원하시면 신분증을 첨부해주세요.';
    }
    
    // 기본 응답
    return '무엇을 도와드릴까요?';
}
```

### 3. 스타일 커스터마이징

`chatbot-core.css` 파일 수정:

```css
/* 챗봇 크기 변경 */
.chatbot-layout-floating {
    width: 400px;  /* 기본 375px */
    height: 700px; /* 기본 600px */
}

/* 커스텀 테마 추가 */
.chatbot-theme-custom .chatbot-core-header {
    background: linear-gradient(90deg, #your-color-1, #your-color-2);
}

.chatbot-theme-custom .chatbot-core-messages {
    background: linear-gradient(180deg, #your-bg-1, #your-bg-2);
}
```

### 4. 새로운 탭 추가

`chatbot.xml`에 탭 추가:

```xml
<div id="chatbot_tab_custom" class="chatbot-core-tab" onclick="ChatbotCore.setActiveTab('custom')">
    <span>커스텀 탭</span>
    <div class="chatbot-core-tab-indicator"></div>
</div>
```

## 🔍 트러블슈팅

### 문제 1: 챗봇이 표시되지 않음
**원인**: CSS/JS 파일 경로 오류  
**해결**: 
```xml
<!-- chatbot.xml의 경로 확인 -->
<script type="text/javascript" src="/ui/chatbot/js/chatbot-core.js"></script>
<link rel="stylesheet" type="text/css" href="/ui/chatbot/css/chatbot-core.css" />
```

### 문제 2: iframe 통신이 안됨
**원인**: Same-origin policy 위반  
**해결**: 같은 도메인에서 실행 확인 또는 postMessage 사용

### 문제 3: 테마 변경 시 아이콘이 안 보임
**원인**: SVG 모듈 미로드  
**해결**: 
```xml
<!-- chatbot-svg.js 로드 확인 -->
<script type="text/javascript" src="/ui/chatbot/js/chatbot-svg.js"></script>
```

### 문제 4: 밤우주 테마에서 Send 버튼이 안 보임
**원인**: CSS 적용 오류  
**해결**: chatbot-core.css에서 밤우주 테마 스타일 확인

```css
.chatbot-theme-night-universe .chatbot-core-send-btn-night {
    display: flex; /* 반드시 포함 */
}
```

### 문제 5: 파일 업로드가 작동하지 않음
**원인**: 파일 입력 이벤트 미연결  
**해결**:
```xml
<input 
    id="chatbot_file_input" 
    type="file" 
    accept="image/*,.pdf,.doc,.docx" 
    onchange="ChatbotCore.handleFileUpload()"
/>
```

## 📋 WebSquare 버전 호환성

| WebSquare 버전 | 호환 여부 | 비고 |
|----------------|----------|------|
| 5.0 SP5 이상 | ✅ 완벽 지원 | 권장 |
| 5.0 SP4 | ✅ 지원 | 일부 기능 제한 |
| 5.0 SP3 이하 | ⚠️ 부분 지원 | 테스트 필요 |
| 4.x | ❌ 미지원 | 업그레이드 권장 |

## 🌐 브라우저 호환성

| 브라우저 | 버전 | 지원 |
|---------|------|------|
| Chrome | 90+ | ✅ |
| Firefox | 88+ | ✅ |
| Safari | 14+ | ✅ |
| Edge | 90+ | ✅ |
| IE | 11 | ⚠️ 제한적 |

## 📝 참고사항

1. **파일 크기 제한**: 업로드 파일은 10MB 이하 권장
2. **메시지 히스토리**: 세션 종료 시 초기화됨 (영구 저장 필요 시 별도 구현)
3. **반응형**: 375px 고정 크기 (모바일 대응 필요 시 CSS 수정)
4. **접근성**: ARIA 라벨 추가 권장
5. **보안**: 파일 업로드 시 서버 검증 필수

## 🔗 추가 리소스

- React 버전: `/components/ChatbotCore.tsx`
- 원본 CSS: `/styles/chatbot-core.css`
- Figma 디자인: 별도 제공
- API 문서: 이 파일 참조

## 📞 지원

문의사항이나 버그 리포트는 개발팀에 문의하세요.
