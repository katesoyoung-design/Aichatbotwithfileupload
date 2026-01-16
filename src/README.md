# AI Chatbot - 3 Modal Layouts

AI 챗봇 애플리케이션으로 이미지 파일이나 서류 문서를 업로드하면 내용을 분석하여 좌측 입력 폼에 자동으로 입력해주는 기능을 제공합니다. Figma 디자인을 정확하게 구현했습니다.

## 주요 기능

### 3가지 모달 레이아웃

#### 1. AI Modal 1 - Floating Chat (플로팅 채팅)
- **실행**: chatbot_button-1 클릭
- 드래그 가능한 플로팅 채팅 창
- 화면 우하단에 위치
- 최소화/최대화 기능

#### 2. AI Modal 2 - Chat with Form (폼과 채팅)
- **실행**: chatbot_button-2 클릭
- 왼쪽: 고객 정보 입력 폼
- 오른쪽: 채팅 인터페이스
- 모달 형태로 표시
- 양쪽 독립적으로 스크롤 가능

#### 3. AI Modal 3 - Fullscreen (전체화면)
- **실행**: chatbot_button-3 클릭
- 전체 화면으로 확장
- 왼쪽 50%: 고객 정보 입력 폼
- 오른쪽 50%: 채팅 인터페이스
- 최대 화면 활용

## 디자인 특징

### 정확한 Figma 구현
- ✅ 모든 그라디언트 정확히 적용
- ✅ Drop Shadow 및 Box Shadow 구현
- ✅ 정확한 색상 값 사용
- ✅ Noto Sans 폰트 적용
- ✅ SVG 아이콘 직접 임베드

### UI/UX 요소
- **Header Gradient**: `linear-gradient(90.7991deg, rgb(116, 158, 253) 4.3084%, rgb(97, 108, 250) 46.66%, rgb(209, 107, 255) 90.269%)`
- **Chat Background**: 다층 그라디언트 배경
- **Alert Gradients**: 
  - Alert 1: `linear-gradient(to right, #e6ebff, #e1f8fe)`
  - Alert 2: `#f0e3fe`
- **Button Gradient**: `linear-gradient(137.4deg, #155DFC 5.24%, #A033FF 89.37%)`

## 기능 설명

### 채팅 기능
- 메시지 전송 및 수신
- 파일 첨부 (이미지, 문서)
- 자동 알림 시스템
- 토글 가능한 알림 영역
- 실시간 메시지 표시

### 폼 기능
- 고객 정보 입력
- 주민등록번호 마스킹
- 전화번호 분리 입력
- 이메일 도메인 분리
- 주소 검색 (우편번호)
- 저장 버튼

### 인터랙션
- 드래그 가능한 챗봇 버튼
- 모달 간 전환 (최대화 버튼)
- 닫기 버튼으로 모달 종료
- 반응형 레이아웃
- 부드러운 애니메이션

## 버튼 설명

### 챗봇 트리거 버튼
화면 우하단에 3개의 버튼이 배치:
1. **Button 1**: AI Modal 1 (플로팅 채팅) 열기
2. **Button 2**: AI Modal 2 (폼 + 채팅) 열기
3. **Button 3**: AI Modal 3 (전체화면) 열기

### 헤더 컨트롤 버튼
각 챗봇 창 우상단:
- **설정 버튼** (톱니바퀴): 설정 옵션
- **최대화 버튼**: 모달 3 (전체화면)으로 전환
- **닫기 버튼**: 모달 종료

## 기술 스택

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: SVG (Figma에서 직접 추출)
- **Fonts**: Noto Sans, Noto Sans KR
- **Animations**: CSS Transitions & Keyframes

## 파일 구조

```
/
├── App.tsx                      # 메인 애플리케이션
├── components/
│   ├── ChatbotModal1.tsx       # AI Modal 1 컴포넌트
│   ├── ChatbotModal2.tsx       # AI Modal 2 컴포넌트
│   └── ChatbotModal3.tsx       # AI Modal 3 컴포넌트
├── imports/
│   ├── svg-fv43mlj4l6.ts       # SVG 경로 (Modal 1)
│   ├── svg-40hyeeclta.ts       # SVG 경로 (Modal 2)
│   └── svg-zczxd5kvhn.ts       # SVG 경로 (Modal 3)
├── styles/
│   └── globals.css             # 전역 스타일
└── layout.tsx                  # HTML 레이아웃
```

## 사용 방법

### 1. 플로팅 채팅 열기
```typescript
// chatbot_button-1 클릭
// → AI Modal 1 표시
// → 드래그 가능한 채팅 창
```

### 2. 폼과 함께 열기
```typescript
// chatbot_button-2 클릭
// → AI Modal 2 표시
// → 왼쪽: 폼, 오른쪽: 채팅
```

### 3. 전체화면으로 열기
```typescript
// chatbot_button-3 클릭
// → AI Modal 3 표시
// → 전체 화면 레이아웃
```

## 반응형 디자인

### 데스크톱 (1024px 이상)
- 모든 모달이 지정된 크기로 표시
- Modal 2: 폼(440px) + 채팅(375px) 가로 배치
- Modal 3: 폼(50%) + 채팅(50%) 분할

### 태블릿 (768px - 1024px)
- Modal 2: 세로 배치로 전환
- Modal 3: 세로 배치로 전환
- 폼과 채팅 각각 전체 너비 사용

### 모바일 (768px 이하)
- 챗봇 버튼 크기 축소 (56px)
- 모든 모달 전체 너비 사용
- 터치 최적화

## 브라우저 지원

- ✅ Chrome/Edge (최신)
- ✅ Firefox (최신)
- ✅ Safari (최신)
- ✅ 모바일 브라우저

## 애니메이션

- **Fade In**: 모달 오버레이
- **Slide Up**: 플로팅 채팅 등장
- **Scale In**: 폼 모달 등장
- **Hover Effects**: 버튼 및 인터랙티브 요소

## 접근성

- ARIA 라벨 적용
- 키보드 네비게이션 지원
- 적절한 콘트라스트 비율
- 시맨틱 HTML 사용
