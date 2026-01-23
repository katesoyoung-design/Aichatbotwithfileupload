# ✅ 폐쇄망 환경 파일 체크리스트

## 📦 배포 전 확인사항

WebSquare 폐쇄망 환경에 배포하기 전에 이 체크리스트를 확인하세요.

---

## 🗂️ 필수 파일 목록

### CSS 파일 (3개)
- [x] `/websquare/css/chatbot-core.css` - 챗봇 코어 스타일
- [x] `/websquare/css/modal2-styles.css` - 모달2 (폼+챗봇) 스타일  
- [x] `/websquare/css/modal3-styles.css` - 모달3 (전체화면) 스타일

### JavaScript 파일 (3개)
- [x] `/websquare/js/chatbot-svg.js` - SVG 아이콘 모듈
- [x] `/websquare/js/chatbot-core.js` - 챗봇 핵심 로직
- [x] `/websquare/js/chatbot-widget.js` - 범용 위젯

### 이미지 파일 (1개)
- [x] `/websquare/images/chatbot-icon.svg` - 챗봇 아이콘 (SVG)

### HTML/XML 예제 파일 (5개)
- [x] `/websquare/chatbot-complete.html` - 완전한 데모 (3개 버튼)
- [x] `/websquare/chatbot.xml` - WebSquare 기본
- [x] `/websquare/chatbot-with-form.xml` - WebSquare 폼 포함
- [x] `/websquare/form-example.html` - HTML 폼 예제
- [x] `/websquare/universal-example.html` - 범용 위젯 예제

### 문서 파일 (5개)
- [x] `/websquare/README.md` - 메인 가이드
- [x] `/websquare/QUICK-START.md` - 빠른 시작 가이드
- [x] `/websquare/OFFLINE-COMPLETE-GUIDE.md` - 폐쇄망 완전 가이드
- [x] `/websquare/UNIVERSAL-GUIDE.md` - 범용 위젯 가이드
- [x] `/websquare/TROUBLESHOOTING.md` - 문제 해결 가이드

---

## 🔍 외부 의존성 확인

### ❌ 외부 CDN 사용 (제거 완료)
- ❌ Google Fonts CDN
- ❌ Font Awesome CDN
- ❌ jQuery CDN
- ❌ Bootstrap CDN

### ✅ 로컬 리소스 사용
- ✅ 모든 CSS 로컬 파일
- ✅ 모든 JavaScript 로컬 파일
- ✅ 모든 이미지 로컬 파일 (SVG)
- ✅ 시스템 폰트 사용 ('Noto Sans', 'Noto Sans KR', sans-serif)

---

## 🧪 테스트 체크리스트

### 파일 접근 테스트
```bash
# 1. 파일 탐색기에서 열기
websquare/chatbot-complete.html 더블클릭

# 2. 브라우저 개발자 도구 (F12) 확인
# - Network 탭에서 모든 리소스가 200 OK인지 확인
# - Console 탭에서 에러 없는지 확인
```

### 기능 테스트
- [ ] 버튼 3개가 화면에 표시됨
- [ ] 버튼 1 클릭 → 플로팅 창 열림
- [ ] 버튼 2 클릭 → 폼+챗봇 모달 열림
- [ ] 버튼 3 클릭 → 전체화면 모드 열림
- [ ] 드래그로 버튼 위치 이동 가능
- [ ] 채팅 메시지 입력 및 전송 가능
- [ ] 파일 첨부 버튼 작동
- [ ] 테마 변경 작동
- [ ] 자동 폼 입력 작동

### 자동 입력 테스트
채팅창에 입력하여 테스트:
```
이름: 홍길동
010-1234-5678
hong@naver.com
주소: 서울시 강남구 테헤란로 123
```
- [ ] 이름이 폼에 자동 입력됨
- [ ] 전화번호가 폼에 자동 입력됨 (3칸 분리)
- [ ] 이메일이 폼에 자동 입력됨 (@ 기준 분리)
- [ ] 주소가 폼에 자동 입력됨

---

## 📋 배포 단계

### Step 1: 파일 복사
```bash
# WebSquare 서버의 적절한 위치에 websquare 폴더 전체 복사
/your-websquare-path/websquare/
```

### Step 2: 경로 확인
```javascript
// 절대 경로 예시
/websquare/css/chatbot-core.css
/websquare/js/chatbot-core.js

// 상대 경로 예시 (현재 페이지 기준)
./css/chatbot-core.css
./js/chatbot-core.js
```

### Step 3: WebSquare 페이지에 통합
```xml
<!-- 최소 통합 코드 -->
<link rel="stylesheet" href="/websquare/css/chatbot-core.css" />
<link rel="stylesheet" href="/websquare/css/modal2-styles.css" />
<link rel="stylesheet" href="/websquare/css/modal3-styles.css" />

<script src="/websquare/js/chatbot-svg.js"></script>
<script src="/websquare/js/chatbot-core.js"></script>

<!-- 챗봇 컨테이너 -->
<div id="chatbot-container"></div>
```

### Step 4: 테스트
```bash
1. WebSquare 페이지 열기
2. F12 개발자 도구 열기
3. Console에 에러 없는지 확인
4. Network 탭에서 모든 파일이 200 OK인지 확인
5. 챗봇 버튼 클릭하여 작동 확인
```

---

## 🔐 보안 체크리스트

- [ ] 파일 업로드 시 서버 검증 로직 구현
- [ ] XSS 방지 처리 확인
- [ ] 입력값 유효성 검증 확인
- [ ] 민감 정보 로깅 제거
- [ ] HTTPS 사용 (가능한 경우)

---

## 🚀 성능 최적화

- [x] CSS 파일 압축 (선택사항)
- [x] JavaScript 파일 압축 (선택사항)
- [x] 이미지 최적화 (SVG 사용으로 완료)
- [x] 캐시 헤더 설정 권장
- [x] Lazy Loading 고려 (필요 시)

---

## 📊 파일 크기

```
chatbot-core.css:       ~15 KB
modal2-styles.css:      ~6 KB
modal3-styles.css:      ~4 KB
chatbot-svg.js:         ~8 KB
chatbot-core.js:        ~20 KB
chatbot-widget.js:      ~10 KB
chatbot-icon.svg:       ~2 KB
chatbot-complete.html:  ~25 KB

총 크기:                ~90 KB
```

**결론**: 매우 가벼운 시스템으로 네트워크 부담 없음! ✨

---

## ✅ 최종 확인

배포 전 최종 확인:

1. [ ] 모든 파일이 `/websquare/` 폴더에 있음
2. [ ] CSS 파일 3개 모두 로드됨
3. [ ] JS 파일 3개 모두 로드됨
4. [ ] 이미지 파일 로드됨 (SVG)
5. [ ] 외부 CDN 의존성 없음
6. [ ] 인터넷 없이 작동 확인
7. [ ] 브라우저 콘솔에 에러 없음
8. [ ] 모든 기능 테스트 통과
9. [ ] 문서 파일 포함됨
10. [ ] 백업 완료

---

## 🎉 완료!

모든 항목을 확인했다면 WebSquare 폐쇄망 환경에 안전하게 배포할 수 있습니다!

**문제 발생 시**: `TROUBLESHOOTING.md` 참고
**빠른 시작**: `QUICK-START.md` 참고
**완전한 가이드**: `OFFLINE-COMPLETE-GUIDE.md` 참고
