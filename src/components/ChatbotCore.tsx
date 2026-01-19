import { useState, useRef, useEffect, forwardRef } from 'react';
import Tesseract from 'tesseract.js';
import svgPaths from "../imports/svg-v9l6pnwa4n";
import svgPaths2 from "../imports/svg-fv43mlj4l6";
import svgPathsAttach from "../imports/svg-hbl9rx2zvb";
import svgPathsNight from "../imports/svg-9sety0i3zq";
import svgPathsMiraeAlert from "../imports/svg-0kaph5y4uv";
import svgPathsMiraeBottom from "../imports/svg-wrqeomc2uq";
import svgPathsSendBlue from "../imports/svg-7pt210oxb1";
import svgPathsNightAlert from "../imports/svg-9hpw0zgkt6";
import svgPathsMiraeToggle from "../imports/svg-3thnm4rbqi";
import svgPathsMiraeAttach from "../imports/svg-te0d3ld3ot";
import svgPathsNightAttach from "../imports/svg-zma8btynsh";
import sendBtnNightImage from "figma:asset/e8fde1002f760e5ce76639d1eaca56c93124c8ab.png";
import headerBgImage from "figma:asset/3ca7ebe3e780a5ce7090ac35f36777c8cfc282fb.png";

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  isFile?: boolean;
  timestamp: Date;
  tab: 'helper' | 'todo';
  hasButtons?: boolean;
  extractedData?: {
    name?: string;
    idNumber?: string;
    address?: string;
    company?: string;
    position?: string;
    phone?: string;
    patient?: string;
    diagnosis?: string;
    date?: string;
    diseases?: string[];
  };
}

interface Alert {
  id: string;
  message: string;
  timestamp: Date;
}

interface ChatbotCoreProps {
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  layout: 'floating' | 'modal' | 'fullscreen';
}

export const ChatbotCore = forwardRef<HTMLDivElement, ChatbotCoreProps>(
  ({ onClose, onMinimize, onMaximize, layout }, ref) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: '안녕하세요. 고객등록을 위해 관련 서류를 첨부하거나 고객정보를 입력해주세요.',
      timestamp: new Date(),
      tab: 'helper',
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [alertsExpanded, setAlertsExpanded] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [activeTab, setActiveTab] = useState<'helper' | 'todo'>('helper');
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'blue-purple' | 'mirae-ai' | 'night-universe'>('blue-purple');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeTab]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
      tab: activeTab,
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Dispatch custom event for form update
    const event = new CustomEvent('chatbot-message', { detail: inputValue });
    window.dispatchEvent(event);
    
    const currentInput = inputValue;
    setInputValue('');

    setTimeout(() => {
      const botResponse = getBotResponse(currentInput);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse.message,
        timestamp: new Date(),
        tab: activeTab,
      };
      setMessages(prev => [...prev, botMessage]);
      
      // 정보 입력 감지 시 알림 추가
      if (botResponse.addAlert) {
        const newAlert: Alert = {
          id: Date.now().toString(),
          message: botResponse.alertMessage || '정보가 입력되었습니다.',
          timestamp: new Date(),
        };
        setAlerts(prev => [...prev, newAlert]);
        setShowAlert(true);
        setAlertsExpanded(true);
      }
    }, 1000);
  };

  const getBotResponse = (userInput: string): { message: string; addAlert: boolean; alertMessage?: string } => {
    const input = userInput.toLowerCase();
    
    // "네", "아니요" 등의 응답 감지
    if (input === '네' || input === '네!' || input === 'yes' || input === '예' || input === '예!' ||
        input === '아니요' || input === '아니오' || input === 'no' || input === '아뇨' || input === '아니') {
      return { message: '네, 알겠습니다. 추가로 필요하신 사항이 있으면 말씀해주세요.', addAlert: false };
    }
    
    // 직업 입력 감지
    if (input.includes('직업') || input.includes('회사원') || input.includes('공무원') || 
        input.includes('자영업') || input.includes('프리랜서') || input.includes('학생') ||
        input.includes('의사') || input.includes('간호사') || input.includes('교사') || input.includes('엔지니어')) {
      return {
        message: '직업 정보가 좌측 입력폼에 반영되었습니다. 추가로 입력하실 정보가 있으신가요?',
        addAlert: true,
        alertMessage: `'직업 정보'가 입력되었습니다.`
      };
    }
    
    // 병력 입력 감지
    if (input.includes('병력') || input.includes('질병') || input.includes('수술') || 
        input.includes('고혈압') || input.includes('당뇨') || input.includes('암') ||
        input.includes('알레르기') || input.includes('지병') || input.includes('건강')) {
      return {
        message: '병력 정보가 좌측 입력폼에 반영되었습니다. 추가로 입력하실 정보가 있으신가요?',
        addAlert: true,
        alertMessage: `'병력 정보'가 입력되었습니다.`
      };
    }
    
    // 주소 입력 감지
    if (input.includes('주소') || input.includes('서울') || input.includes('부산') || 
        input.includes('대구') || input.includes('인천') || input.includes('광주') ||
        input.includes('대전') || input.includes('울산') || input.includes('세종') ||
        input.includes('경기') || input.includes('강원') || input.includes('충청') ||
        input.includes('전라') || input.includes('경상') || input.includes('제주') ||
        input.includes('구') || input.includes('동') || input.includes('로') || 
        (input.includes('번지') || input.includes('아파트') || input.includes('빌딩'))) {
      return {
        message: '주소 정보가 좌측 입력폼에 반영되었습니다. 추가로 입력하실 정보가 있으신가요?',
        addAlert: true,
        alertMessage: `'주소 정보'가 입력되었습니다.`
      };
    }
    
    // 전화번호 입력 감지
    if (input.match(/\d{2,4}[-\s]?\d{3,4}[-\s]?\d{4}/) || 
        input.includes('전화') || input.includes('연락처') || input.includes('핸드폰') ||
        input.includes('휴대폰') || input.includes('010') || input.includes('011')) {
      return {
        message: '전화번호 정보가 좌측 입력폼에 반영되었습니다. 추가로 입력하실 정보가 있으신가요?',
        addAlert: true,
        alertMessage: `'전화번호'가 입력되었습니다.`
      };
    }
    
    // 기본 응답
    if (input.includes('안녕') || input.includes('hello')) {
      return { message: '안녕하세요! 무엇을 도와드릴까요?', addAlert: false };
    } else if (input.includes('수정') || input.includes('변경')) {
      return { message: '좌측 폼에서 수정하실 항목을 직접 변경해주세요.', addAlert: false };
    } else if (input.includes('저장') || input.includes('완료')) {
      return { message: '저장 버튼을 눌러 고객 정보를 등록해주세요.', addAlert: false };
    } else {
      return { message: '네, 알겠습니다. 추가로 필요하신 사항이 있으시면 말씀해주세요.', addAlert: false };
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: file.name,
      isFile: true,
      timestamp: new Date(),
      tab: activeTab,
    };

    setMessages(prev => [...prev, fileMessage]);
    setUploadedFileName(file.name);
    setShowAlert(true);
    setAlertsExpanded(true);

    // 첫 번째 메시지: 이미지가 첨부되었습니다
    setTimeout(() => {
      const uploadConfirmMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: '이미지가 첨부되었습니다.',
        timestamp: new Date(),
        tab: activeTab,
      };
      setMessages(prev => [...prev, uploadConfirmMessage]);
    }, 500);

    // 두 번째 메시지: 내용을 분석하고 있습니다
    setTimeout(() => {
      const analyzingMessage: Message = {
        id: (Date.now() + 2).toString(),
        type: 'bot',
        content: '내용을 분석하고 있습니다...',
        timestamp: new Date(),
        tab: activeTab,
      };
      setMessages(prev => [...prev, analyzingMessage]);
    }, 1500);

    // 이미지 파일인 경우 실제 OCR 수행
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target?.result;
        if (!imageData) {
          setTimeout(() => {
            const extractedInfo = extractTextFromImage(file.name);
            displayOCRResults(extractedInfo);
          }, 3000);
          return;
        }

        Tesseract.recognize(
          imageData as string,
          'kor+eng',
          {
            logger: (m) => {
              if (m.status === 'recognizing text') {
                console.log(`OCR: ${Math.round(m.progress * 100)}%`);
              }
            }
          }
        ).then(({ data: { text } }) => {
          console.log('OCR Text:', text);
          processOCRText(text, file.name);
        }).catch((error) => {
          console.error('OCR Error:', error);
          setTimeout(() => {
            const extractedInfo = extractTextFromImage(file.name);
            displayOCRResults(extractedInfo);
          }, 3000);
        });
      };
      reader.readAsDataURL(file);
    } else {
      setTimeout(() => {
        const extractedInfo = extractTextFromImage(file.name);
        displayOCRResults(extractedInfo);
      }, 3000);
    }
  };

  const processOCRText = (text: string, fileName: string) => {
    if (!text || text.trim().length === 0) {
      setTimeout(() => {
        const noTextMessage: Message = {
          id: (Date.now() + 3).toString(),
          type: 'bot',
          content: '이미지에서 텍스트를 찾을 수 없습니다. 직접 정보를 입력해주세요.',
          timestamp: new Date(),
          tab: activeTab,
        };
        setMessages(prev => [...prev, noTextMessage]);
      }, 3000);
      return;
    }

    const extractedData: any = {};
    const fields: string[] = [];
    let message = '첨부된 파일을 분석한 결과 다음 정보가 감지되었습니다.';
    let diseaseMessage = '';

    const nameMatch = text.match(/[가-힣]{2,4}/);
    if (nameMatch) {
      extractedData.name = nameMatch[0];
      fields.push('이름');
    }

    const phoneMatch = text.match(/0\d{1,2}[-\s]?\d{3,4}[-\s]?\d{4}/);
    if (phoneMatch) {
      extractedData.phone = phoneMatch[0];
      fields.push('전화번호');
    }

    const addressMatch = text.match(/(서울|부산|대구|인천|광주|대전|울산|세종|경기|강원|충청|전라|경상|제주)[^\n]{10,50}/);
    if (addressMatch) {
      extractedData.address = addressMatch[0];
      fields.push('주소');
    }

    const idNumberMatch = text.match(/\d{6}[-\s]?\d{7}/);
    if (idNumberMatch) {
      const idNum = idNumberMatch[0].replace(/[-\s]/g, '');
      extractedData.idNumber = idNum.slice(0, 6) + '-' + idNum[6] + '******';
      fields.push('주민등록번호');
    }

    const diseases: string[] = [];
    if (text.includes('고혈압') || text.includes('I10')) {
      diseases.push('I10 고혈압');
    }
    if (text.includes('당뇨') || text.includes('E11')) {
      diseases.push('E11 제2형 당뇨병');
    }
    if (diseases.length > 0) {
      extractedData.diseases = diseases;
      fields.push('병력 정보');
      diseaseMessage = diseases.map(d => '-' + d).join('\n');
      message = `첨부된 파일을 분석한 결과 고지대상 질병 ${diseases.length}건이 감지되었습니다.`;
    }

    if (fields.length === 0) {
      const extractedInfo = extractTextFromImage(fileName);
      displayOCRResults(extractedInfo);
      return;
    }

    const extractedInfo = {
      hasText: true,
      message,
      diseaseMessage,
      fields,
      data: extractedData
    };

    displayOCRResults(extractedInfo);
  };

  const displayOCRResults = (extractedInfo: any) => {
    setTimeout(() => {
      if (extractedInfo.hasText) {
        const extractionMessage: Message = {
          id: (Date.now() + 3).toString(),
          type: 'bot',
          content: extractedInfo.message,
          timestamp: new Date(),
          tab: activeTab,
        };
        setMessages(prev => [...prev, extractionMessage]);
        
        if (extractedInfo.diseaseMessage) {
          setTimeout(() => {
            const diseaseListMessage: Message = {
              id: (Date.now() + 4).toString(),
              type: 'bot',
              content: extractedInfo.diseaseMessage || '',
              timestamp: new Date(),
              tab: activeTab,
            };
            setMessages(prev => [...prev, diseaseListMessage]);
          }, 800);
        }
        
        setTimeout(() => {
          const confirmMessage: Message = {
            id: (Date.now() + 5).toString(),
            type: 'bot',
            content: '병력고지에 반영하시겠습니까?',
            timestamp: new Date(),
            tab: activeTab,
            hasButtons: true,
            extractedData: extractedInfo.data,
          };
          setMessages(prev => [...prev, confirmMessage]);
        }, extractedInfo.diseaseMessage ? 1600 : 800);
      } else {
        const noTextMessage: Message = {
          id: (Date.now() + 3).toString(),
          type: 'bot',
          content: '이미지에서 텍스트를 찾을 수 없습니다. 직접 정보를 입력해주세요.',
          timestamp: new Date(),
          tab: activeTab,
        };
        setMessages(prev => [...prev, noTextMessage]);
      }
    }, 3000);
  };

  // OCR 시뮬레이션 함수 (실제로는 OCR API 사용)
  const extractTextFromImage = (fileName: string): { 
    hasText: boolean; 
    message: string; 
    diseaseMessage?: string;
    fields: string[];
    data?: any;
  } => {
    // 파일명이나 실제 OCR 결과에 따라 다른 결과 반환
    // 실제 구현에서는 Tesseract.js 또는 서버 OCR API 사용
    
    // 샘플: 진단서/병원 문서
    if (fileName.includes('진단서') || fileName.includes('의료') || fileName.includes('병원')) {
      return {
        hasText: true,
        message: '첨부된 파일을 분석한 결과 고지대상 질병 2건이 감지되었습니다.',
        diseaseMessage: '-E11 제2형 당뇨병\n-I10 고혈압',
        fields: ['환자명', '진단명', '진료일자'],
        data: {
          diseases: ['E11 제2형 당뇨병', 'I10 고혈압'],
          patient: '이영희',
          date: '2024-01-15'
        }
      };
    }
    // 샘플: 신분증 이미지로 가정
    else if (fileName.includes('신분증') || fileName.includes('증명') || fileName.includes('ID')) {
      return {
        hasText: true,
        message: '첨부된 파일을 분석한 결과 개인정보가 감지되었습니다.',
        fields: ['이름', '주민등록번호', '주소'],
        data: {
          name: '홍길동',
          idNumber: '870211-1******',
          address: '서울특별시 영등포구 국제금융로 79'
        }
      };
    } else if (fileName.includes('명함') || fileName.includes('card')) {
      return {
        hasText: true,
        message: '첨부된 파일을 분석한 결과 연락처 정보가 감지되었습니다.',
        fields: ['이름', '회사명', '직책', '전화번호'],
        data: {
          name: '김철수',
          company: '(주)미래에셋생명',
          position: '부장',
          phone: '02-1234-5678'
        }
      };
    } else {
      // 일반 이미지 - 텍스트가 없을 수 있음
      return {
        hasText: false,
        message: '',
        fields: []
      };
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 예/아니오 버튼 클릭 핸들러
  const handleConfirmExtraction = (messageId: string, extractedData: any, confirmed: boolean) => {
    if (confirmed) {
      // "예" 버튼 - 좌측 폼에 데이터 전송
      const event = new CustomEvent('chatbot-form-update', {
        detail: extractedData
      });
      window.dispatchEvent(event);
      
      // 확인 메시지 추가
      const confirmMsg: Message = {
        id: (Date.now() + 100).toString(),
        type: 'bot',
        content: '정보가 좌측 입력폼에 반영되었습니다.',
        timestamp: new Date(),
        tab: activeTab,
      };
      setMessages(prev => [...prev, confirmMsg]);
      
      // 알림 추가
      const fieldNames = Object.keys(extractedData).map(key => {
        if (key === 'diseases') return '병력 정보';
        if (key === 'name') return '이름';
        if (key === 'idNumber') return '주민등록번호';
        if (key === 'address') return '주소';
        if (key === 'phone') return '전화번호';
        return key;
      });
      
      fieldNames.forEach((fieldName, index) => {
        setTimeout(() => {
          const fieldAlert: Alert = {
            id: (Date.now() + 200 + index).toString(),
            message: `'${fieldName}'가 입력되었습니다.`,
            timestamp: new Date(),
          };
          setAlerts(prev => [...prev, fieldAlert]);
        }, index * 200);
      });
      
      setShowAlert(true);
      setAlertsExpanded(true);
    } else {
      // "아니오" 버튼 - 취소 메시지
      const cancelMsg: Message = {
        id: (Date.now() + 100).toString(),
        type: 'bot',
        content: '취소되었습니다. 수동으로 정보를 입력해주세요.',
        timestamp: new Date(),
        tab: activeTab,
      };
      setMessages(prev => [...prev, cancelMsg]);
    }
  };

  const toggleAlerts = () => {
    setAlertsExpanded(!alertsExpanded);
  };

  const toggleThemeMenu = () => {
    setShowThemeMenu(!showThemeMenu);
  };

  const handleThemeChange = (theme: 'blue-purple' | 'mirae-ai' | 'night-universe') => {
    setCurrentTheme(theme);
    setShowThemeMenu(false);
    
    // Dispatch theme change event
    const event = new CustomEvent('chatbot-theme-change', { detail: theme });
    window.dispatchEvent(event);
  };

  // Close theme menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setShowThemeMenu(false);
      }
    };

    if (showThemeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showThemeMenu]);

  const currentTabMessages = messages.filter(msg => msg.tab === activeTab);

  return (
    <div className={`chatbot-core chatbot-layout-${layout} chatbot-theme-${currentTheme}`}>
      {/* Header */}
      <div className="chatbot-core-header" ref={ref}>
        {/* Background image overlay for mirae-ai theme */}
        {currentTheme === 'mirae-ai' && (
          <div 
            className="chatbot-core-header-bg-overlay"
            style={{
              backgroundImage: `url(${headerBgImage})`,
            }}
          />
        )}
        <div className="chatbot-core-header-content">
          <div className="chatbot-core-header-left">
            <div className="chatbot-core-logo">
              {currentTheme === 'blue-purple' && (
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <g clipPath="url(#clip0_chatbot_blue)">
                    <path d={svgPaths.p3a719f00} fill="#753DFE" />
                    <path d={svgPaths.p3eaf4300} fill="#753DFE" />
                    <path d={svgPaths.pb0b7480} fill="#753DFE" />
                    <path d={svgPaths.pf29e000} fill="#753DFE" />
                    <path d={svgPaths.p3a20d000} fill="#753DFE" />
                    <path d={svgPaths.p10588900} fill="#753DFE" />
                    <path d={svgPaths.p302ce980} fill="#753DFE" />
                    <path d={svgPaths.p4f3c780} fill="#753DFE" />
                  </g>
                  <defs>
                    <clipPath id="clip0_chatbot_blue">
                      <rect fill="white" height="16" width="22" />
                    </clipPath>
                  </defs>
                </svg>
              )}
              {currentTheme === 'mirae-ai' && (
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <g clipPath="url(#clip0_9_6860)">
                    <g>
                      <path d="M11 0C5.95739 0 1.86962 3.58182 1.86962 8.00006C1.86962 10.2766 2.9548 12.3309 4.69673 13.7877C4.67447 14.4823 4.43642 15.1698 4.02013 15.7212C4.82719 15.6885 5.61776 15.3609 6.22564 14.8204C7.61483 15.5686 9.25001 16.0001 11.0001 16.0001C16.0427 16.0001 20.1306 12.4183 20.1306 8.00006C20.1306 3.58182 16.0426 0 11 0ZM16.6748 11.8766C16.3383 12.2542 15.8588 12.4665 15.3582 12.4665H6.64181C6.14116 12.4665 5.66169 12.2542 5.32519 11.8766C4.37239 10.8074 3.80459 9.46174 3.80459 7.99994C3.80459 6.53814 4.37227 5.19264 5.32507 4.12338C5.66157 3.74567 6.14104 3.53341 6.64181 3.53341H15.3581C15.865 3.53341 16.3471 3.7534 16.6866 4.13649C17.6324 5.20355 18.1954 6.54415 18.1954 7.99982C18.1954 9.45549 17.6276 10.8074 16.6748 11.8766Z" fill="url(#paint0_linear_mirae)" />
                      <path d="M1.4348 8.00006C1.4348 9.09739 1.6684 10.1615 2.12981 11.1669C0.89708 10.754 0 9.93699 0 8.00006C0 6.16264 0.89708 5.24595 2.12993 4.8332C1.66864 5.83911 1.4348 6.90371 1.4348 8.00006Z" fill="url(#paint1_linear_mirae)" />
                      <path d="M1.06497 2.45827V4.85661C0.745079 5.06691 0.474415 5.32047 0.255621 5.61569C0.253695 5.61839 0.251649 5.62084 0.249844 5.62354V2.45827C0.249844 2.2291 0.432293 2.04331 0.657345 2.04331C0.882397 2.04331 1.06497 2.2291 1.06497 2.45827Z" fill="url(#paint2_linear_mirae)" />
                      <path d="M20.5653 8.00006C20.5653 9.09739 20.3317 10.1615 19.8703 11.1669C21.103 10.7542 22.0001 9.93712 22.0001 8.00006C22.0001 6.16264 21.103 5.24595 19.8702 4.8332C20.3315 5.83911 20.5653 6.90371 20.5653 8.00006Z" fill="url(#paint3_linear_mirae)" />
                      <path d="M20.935 2.45827V4.85661C21.2549 5.06691 21.5256 5.32047 21.7444 5.61569C21.7463 5.61839 21.7483 5.62084 21.7502 5.62354V2.45827C21.7502 2.2291 21.5677 2.04331 21.3427 2.04331C21.1176 2.04331 20.935 2.2291 20.935 2.45827Z" fill="url(#paint4_linear_mirae)" />
                      <path d="M9.05974 7.75189C8.79449 8.16771 8.41178 7.75189 7.61218 7.75189C6.81258 7.75189 6.43 8.16771 6.16475 7.75189C5.90804 7.34931 6.6163 6.35627 7.61218 6.35627C8.60807 6.35627 9.31632 7.34943 9.05974 7.75189Z" fill="url(#paint5_linear_mirae)" />
                      <path d="M15.8353 7.75189C15.57 8.16771 15.1873 7.75189 14.3877 7.75189C13.5881 7.75189 13.2055 8.16771 12.9403 7.75189C12.6836 7.34931 13.3918 6.35627 14.3877 6.35627C15.3836 6.35627 16.0918 7.34943 15.8353 7.75189Z" fill="url(#paint6_linear_mirae)" />
                      <path d="M11 9.64373C10.4419 9.64373 10.0738 9.1931 10.0584 9.17399C9.97499 9.07006 9.99003 8.91687 10.0921 8.83194C10.1941 8.74702 10.3446 8.76233 10.428 8.86626C10.4295 8.8681 10.6714 9.15756 11 9.15756C11.3286 9.15756 11.5705 8.8681 11.5729 8.86516C11.6563 8.76123 11.8062 8.7464 11.9083 8.83133C12.0103 8.91626 12.025 9.06994 11.9415 9.17386C11.9261 9.1931 11.5581 9.64373 11 9.64373Z" fill="url(#paint7_linear_mirae)" />
                    </g>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_mirae" x1="8.07817" y1="4.25003" x2="16.1481" y2="17.8119" gradientUnits="userSpaceOnUse">
                      <stop offset="0.225946" stopColor="#F08200" />
                      <stop offset="1" stopColor="#0055A9" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_mirae" x1="8.07817" y1="4.25003" x2="16.1481" y2="17.8119" gradientUnits="userSpaceOnUse">
                      <stop offset="0.225946" stopColor="#F08200" />
                      <stop offset="1" stopColor="#0055A9" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_mirae" x1="8.07817" y1="4.25003" x2="16.1481" y2="17.8119" gradientUnits="userSpaceOnUse">
                      <stop offset="0.225946" stopColor="#F08200" />
                      <stop offset="1" stopColor="#0055A9" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_mirae" x1="8.07817" y1="4.25003" x2="16.1481" y2="17.8119" gradientUnits="userSpaceOnUse">
                      <stop offset="0.225946" stopColor="#F08200" />
                      <stop offset="1" stopColor="#0055A9" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_mirae" x1="8.07817" y1="4.25003" x2="16.1481" y2="17.8119" gradientUnits="userSpaceOnUse">
                      <stop offset="0.225946" stopColor="#F08200" />
                      <stop offset="1" stopColor="#0055A9" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_mirae" x1="8.07817" y1="4.25003" x2="16.1481" y2="17.8119" gradientUnits="userSpaceOnUse">
                      <stop offset="0.225946" stopColor="#F08200" />
                      <stop offset="1" stopColor="#0055A9" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_mirae" x1="8.07817" y1="4.25003" x2="16.1481" y2="17.8119" gradientUnits="userSpaceOnUse">
                      <stop offset="0.225946" stopColor="#F08200" />
                      <stop offset="1" stopColor="#0055A9" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_mirae" x1="8.07817" y1="4.25003" x2="16.1481" y2="17.8119" gradientUnits="userSpaceOnUse">
                      <stop offset="0.225946" stopColor="#F08200" />
                      <stop offset="1" stopColor="#0055A9" />
                    </linearGradient>
                    <clipPath id="clip0_9_6860">
                      <rect fill="white" height="16" width="22" />
                    </clipPath>
                  </defs>
                </svg>
              )}
              {currentTheme === 'night-universe' && (
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <g clipPath="url(#clip0_night)">
                    <path d="M11 0C5.95739 0 1.86962 3.58182 1.86962 8.00006C1.86962 10.2766 2.9548 12.3309 4.69673 13.7877C4.67447 14.4823 4.43642 15.1698 4.02013 15.7212C4.82719 15.6885 5.61776 15.3609 6.22564 14.8204C7.61483 15.5686 9.25001 16.0001 11.0001 16.0001C16.0427 16.0001 20.1306 12.4183 20.1306 8.00006C20.1306 3.58182 16.0426 0 11 0ZM16.6748 11.8766C16.3383 12.2542 15.8588 12.4665 15.3582 12.4665H6.64181C6.14116 12.4665 5.66169 12.2542 5.32519 11.8766C4.37239 10.8074 3.80459 9.46174 3.80459 7.99994C3.80459 6.53814 4.37227 5.19264 5.32507 4.12338C5.66157 3.74567 6.14104 3.53341 6.64181 3.53341H15.3581C15.865 3.53341 16.3471 3.7534 16.6866 4.13649C17.6324 5.20355 18.1954 6.54415 18.1954 7.99982C18.1954 9.45549 17.6276 10.8074 16.6748 11.8766Z" fill="white" />
                    <path d="M1.4348 8.00006C1.4348 9.09739 1.6684 10.1615 2.12981 11.1669C0.89708 10.754 0 9.93699 0 8.00006C0 6.16264 0.89708 5.24595 2.12993 4.8332C1.66864 5.83911 1.4348 6.90371 1.4348 8.00006Z" fill="white" />
                    <path d="M1.06497 2.45827V4.85661C0.745079 5.06691 0.474415 5.32047 0.255621 5.61569C0.253695 5.61839 0.251649 5.62084 0.249844 5.62354V2.45827C0.249844 2.2291 0.432293 2.04331 0.657345 2.04331C0.882397 2.04331 1.06497 2.2291 1.06497 2.45827Z" fill="white" />
                    <path d="M20.5653 8.00006C20.5653 9.09739 20.3317 10.1615 19.8703 11.1669C21.103 10.7542 22.0001 9.93712 22.0001 8.00006C22.0001 6.16264 21.103 5.24595 19.8702 4.8332C20.3315 5.83911 20.5653 6.90371 20.5653 8.00006Z" fill="white" />
                    <path d="M20.935 2.45827V4.85661C21.2549 5.06691 21.5256 5.32047 21.7444 5.61569C21.7463 5.61839 21.7483 5.62084 21.7502 5.62354V2.45827C21.7502 2.2291 21.5677 2.04331 21.3427 2.04331C21.1176 2.04331 20.935 2.2291 20.935 2.45827Z" fill="white" />
                    <path d="M9.05974 7.75189C8.79449 8.16771 8.41178 7.75189 7.61218 7.75189C6.81258 7.75189 6.43 8.16771 6.16475 7.75189C5.90804 7.34931 6.6163 6.35627 7.61218 6.35627C8.60807 6.35627 9.31632 7.34943 9.05974 7.75189Z" fill="white" />
                    <path d="M15.8353 7.75189C15.57 8.16771 15.1873 7.75189 14.3877 7.75189C13.5881 7.75189 13.2055 8.16771 12.9403 7.75189C12.6836 7.34931 13.3918 6.35627 14.3877 6.35627C15.3836 6.35627 16.0918 7.34943 15.8353 7.75189Z" fill="white" />
                    <path d="M11 9.64373C10.4419 9.64373 10.0738 9.1931 10.0584 9.17399C9.97499 9.07006 9.99003 8.91687 10.0921 8.83194C10.1941 8.74702 10.3446 8.76233 10.428 8.86626C10.4295 8.8681 10.6714 9.15756 11 9.15756C11.3286 9.15756 11.5705 8.8681 11.5729 8.86516C11.6563 8.76123 11.8062 8.7464 11.9083 8.83133C12.0103 8.91626 12.025 9.06994 11.9415 9.17386C11.9261 9.1931 11.5581 9.64373 11 9.64373Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_night">
                      <rect fill="white" height="16" width="22" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
            <div className="chatbot-core-title">MiraeChatbot</div>
          </div>
          <div className="chatbot-core-header-buttons">
            <div className="chatbot-settings-wrapper" ref={themeMenuRef}>
              <button className="chatbot-core-header-btn" onClick={toggleThemeMenu} title="설정">
                <svg width="20" height="20" viewBox="0 0 14.1246 15.5" fill="none">
                  <path d={svgPaths.p1f8ed730} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p27d8c900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
              
              {/* Theme Menu */}
              {showThemeMenu && (
                <div className="chatbot-theme-menu">
                  <div className="chatbot-theme-menu-header">
                    <span>배경 선택</span>
                  </div>
                  <div className="chatbot-theme-menu-items">
                    <button 
                      className={`chatbot-theme-item ${currentTheme === 'blue-purple' ? 'active' : ''}`}
                      onClick={() => handleThemeChange('blue-purple')}
                    >
                      <span>블루퍼플</span>
                      {currentTheme === 'blue-purple' && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#5B5FC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                    <button 
                      className={`chatbot-theme-item ${currentTheme === 'mirae-ai' ? 'active' : ''}`}
                      onClick={() => handleThemeChange('mirae-ai')}
                    >
                      <span>미래에셋 AI</span>
                      {currentTheme === 'mirae-ai' && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#5B5FC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                    <button 
                      className={`chatbot-theme-item ${currentTheme === 'night-universe' ? 'active' : ''}`}
                      onClick={() => handleThemeChange('night-universe')}
                    >
                      <span>밤우주</span>
                      {currentTheme === 'night-universe' && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#5B5FC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
            {onMaximize && (
              <button className="chatbot-core-header-btn" onClick={onMaximize} title="최대화">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p2909ee00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
            )}
            {onMinimize && (
              <button className="chatbot-core-header-btn" onClick={onMinimize} title="최소화">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p2909ee00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
            )}
            <button className="chatbot-core-header-btn" onClick={onClose} title="닫기">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M5 5L15 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="chatbot-core-tabs">
        <div 
          className={`chatbot-core-tab ${activeTab === 'helper' ? 'active' : ''}`}
          onClick={() => setActiveTab('helper')}
        >
          <span>화면도우미</span>
          <div className="chatbot-core-tab-indicator"></div>
        </div>
        <div 
          className={`chatbot-core-tab ${activeTab === 'todo' ? 'active' : ''}`}
          onClick={() => setActiveTab('todo')}
        >
          <span>설계사 할일</span>
          <div className="chatbot-core-tab-indicator"></div>
        </div>
      </div>

      {/* Toggle Alerts - Show when file uploaded or info entered */}
      {showAlert && (
        <>
          {alertsExpanded ? (
            <div className="chatbot-core-alerts">
              <div className="chatbot-core-alerts-content">
                {uploadedFileName && (
                  <div className="chatbot-core-alert-item chatbot-core-alert-gradient">
                    {currentTheme === 'night-universe' ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_night_alert)">
                          <path d={svgPathsNightAlert.pd80c480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
                          <path d={svgPathsNightAlert.p1f2c5400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
                        </g>
                        <defs>
                          <clipPath id="clip0_night_alert">
                            <rect fill="white" height="16" width="16" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : currentTheme === 'mirae-ai' ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_mirae_alert)">
                          <path d={svgPathsMiraeAlert.pd80c480} stroke="#FFAB0F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
                          <path d={svgPathsMiraeAlert.p1f2c5400} stroke="#FFAB0F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
                        </g>
                        <defs>
                          <clipPath id="clip0_mirae_alert">
                            <rect fill="white" height="16" width="16" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="url(#gradient_chatbot)" strokeWidth="4"/>
                        <defs>
                          <linearGradient id="gradient_chatbot" x1="3.5" y1="2.5" x2="14" y2="14.5">
                            <stop stopColor="#835EF9"/>
                            <stop offset="0.956653" stopColor="#30BFE2"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                    <p>'{uploadedFileName}'파일이 첨부되었습니다.</p>
                  </div>
                )}
                {alerts.map((alert) => (
                  <div key={alert.id} className="chatbot-core-alert-item chatbot-core-alert-gradient">
                    {currentTheme === 'night-universe' ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_night_alert_info)">
                          <path d={svgPathsNightAlert.pd80c480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
                          <path d={svgPathsNightAlert.p1f2c5400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
                        </g>
                        <defs>
                          <clipPath id="clip0_night_alert_info">
                            <rect fill="white" height="16" width="16" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : currentTheme === 'mirae-ai' ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_mirae_alert_info)">
                          <path d={svgPathsMiraeAlert.pd80c480} stroke="#FFAB0F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
                          <path d={svgPathsMiraeAlert.p1f2c5400} stroke="#FFAB0F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14062" />
                        </g>
                        <defs>
                          <clipPath id="clip0_mirae_alert_info">
                            <rect fill="white" height="16" width="16" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="url(#gradient_chatbot_alert)" strokeWidth="4"/>
                        <defs>
                          <linearGradient id="gradient_chatbot_alert" x1="3.5" y1="2.5" x2="14" y2="14.5">
                            <stop stopColor="#835EF9"/>
                            <stop offset="0.956653" stopColor="#30BFE2"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                    <p>{alert.message}</p>
                  </div>
                ))}
              </div>
              <button className="chatbot-core-toggle-btn" onClick={toggleAlerts}>
                {currentTheme === 'mirae-ai' ? (
                  <svg width="10" height="6" viewBox="0 0 11.5 6.5" fill="none">
                    <path d={svgPathsMiraeToggle.p2be18f20} stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                ) : (
                  <svg width="10" height="6" viewBox="0 0 11.5 6.5" fill="none">
                    <path d={svgPaths.p2be18f20} stroke="#397EEE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                )}
              </button>
            </div>
          ) : (
            <div className="chatbot-core-alerts-collapsed">
              <button className="chatbot-core-toggle-btn-collapsed" onClick={toggleAlerts}>
                {currentTheme === 'mirae-ai' ? (
                  <svg width="10" height="6" viewBox="0 0 11.5 6.5" fill="none" className="chatbot-core-svg-rotated">
                    <path d={svgPathsMiraeToggle.p2be18f20} stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                ) : (
                  <svg width="10" height="6" viewBox="0 0 11.5 6.5" fill="none" className="chatbot-core-svg-rotated">
                    <path d={svgPaths.p2be18f20} stroke="#397EEE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </>
      )}

      {/* Messages Area */}
      <div className="chatbot-core-messages">
        {currentTabMessages.map((message) => (
          <div key={message.id}>
            {message.type === 'bot' ? (
              <div className="chatbot-core-bot-message">
                <div className="chatbot-core-bot-bubble">
                  {message.content.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  {message.hasButtons && message.extractedData && (
                    <div className="chatbot-core-button-group">
                      <button 
                        className="chatbot-core-confirm-btn"
                        onClick={() => handleConfirmExtraction(message.id, message.extractedData, true)}
                      >
                        예
                      </button>
                      <button 
                        className="chatbot-core-confirm-btn"
                        onClick={() => handleConfirmExtraction(message.id, message.extractedData, false)}
                      >
                        아니요
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="chatbot-core-user-message">
                <div className="chatbot-core-user-bubble">
                  {message.isFile ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path clipRule="evenodd" d={svgPaths.pca51600} fill="white" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p14fbd580} fill="white" fillRule="evenodd" />
                      </svg>
                      <span>{message.content}</span>
                    </>
                  ) : (
                    <span>{message.content}</span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="chatbot-core-input">
        <input 
          ref={fileInputRef}
          type="file" 
          accept="image/*,.pdf,.doc,.docx" 
          className="chatbot-core-file-input-hidden"
          onChange={handleFileUpload}
        />
        <button className="chatbot-core-attach-btn" onClick={() => fileInputRef.current?.click()}>
          {currentTheme === 'blue-purple' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d={svgPathsAttach.p1c423f00} fill="#5B5FC7" />
            </svg>
          ) : currentTheme === 'mirae-ai' ? (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d={svgPathsMiraeAttach.p1fa6e700} stroke="#1A309C" strokeLinecap="round" strokeWidth="2" />
            </svg>
          ) : currentTheme === 'night-universe' ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d={svgPaths2.p7e86b00} fill="#5B5FC7" />
            </svg>
          )}
        </button>
        <div className="chatbot-core-input-wrapper">
          <input 
            type="text" 
            placeholder="메시지를 입력하세요..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          {currentTheme !== 'night-universe' && currentTheme !== 'mirae-ai' && (
            <button className="chatbot-core-send-btn" onClick={handleSendMessage}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d={svgPathsSendBlue.pb08c800} fill="#5B5FC7" />
              </svg>
            </button>
          )}
        </div>
        {currentTheme === 'mirae-ai' && (
          <button className="chatbot-core-send-btn-mirae" onClick={handleSendMessage}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d={svgPathsMiraeBottom.p15a46a00} stroke="#1A309C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPathsMiraeBottom.p136f3380} stroke="#1A309C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </button>
        )}
        {currentTheme === 'night-universe' && (
          <button className="chatbot-core-send-btn-night" onClick={handleSendMessage}>
            <img src={sendBtnNightImage} alt="Send" style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
          </button>
        )}
      </div>
    </div>
  );
});