import { useState, useRef, useEffect, forwardRef } from 'react';
import svgPaths from "../imports/svg-v9l6pnwa4n";
import svgPaths2 from "../imports/svg-fv43mlj4l6";
import svgPathsAttach from "../imports/svg-hbl9rx2zvb";
import headerBgImage from "figma:asset/3ca7ebe3e780a5ce7090ac35f36777c8cfc282fb.png";

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  isFile?: boolean;
  timestamp: Date;
  tab: 'helper' | 'todo';
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
    
    setInputValue('');

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
        tab: activeTab,
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('안녕') || input.includes('hello')) {
      return '안녕하세요! 무엇을 도와드릴까요?';
    } else if (input.includes('수정') || input.includes('변경')) {
      return '좌측 폼에서 수정하실 항목을 직접 변경해주세요.';
    } else if (input.includes('저장') || input.includes('완료')) {
      return '저장 버튼을 눌러 고객 정보를 등록해주세요.';
    } else {
      return '네, 알겠습니다. 추가로 필요하신 사항이 있으시면 말씀해주세요.';
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

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: `아래 정보가 추출되어 자동입력 되었습니다.\n\n이름: 홍길동\n주민등록번호: 870211-1******\n주소: 서울특별시 영등포구 국제금융로 79\n\n추가로 입력하거나 수정할 내용이 있으면 작성해주세요.`,
        timestamp: new Date(),
        tab: activeTab,
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
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

      {/* Toggle Alerts - Only show when file uploaded */}
      {showAlert && (
        <>
          {alertsExpanded ? (
            <div className="chatbot-core-alerts">
              <div className="chatbot-core-alerts-content">
                <div className="chatbot-core-alert-item chatbot-core-alert-gradient">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="url(#gradient_chatbot)" strokeWidth="4"/>
                    <defs>
                      <linearGradient id="gradient_chatbot" x1="3.5" y1="2.5" x2="14" y2="14.5">
                        <stop stopColor="#835EF9"/>
                        <stop offset="0.956653" stopColor="#30BFE2"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>'{uploadedFileName || '카카오톡이미지.jpg'}'파일이 첨부되었습다.</p>
                </div>
              </div>
              <button className="chatbot-core-toggle-btn" onClick={toggleAlerts}>
                <svg width="10" height="6" viewBox="0 0 11.5 6.5" fill="none">
                  <path d={svgPaths.p2be18f20} stroke="#397EEE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="chatbot-core-alerts-collapsed">
              <button className="chatbot-core-toggle-btn-collapsed" onClick={toggleAlerts}>
                <svg width="10" height="6" viewBox="0 0 11.5 6.5" fill="none" className="chatbot-core-svg-rotated">
                  <path d={svgPaths.p2be18f20} stroke="#397EEE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="#df6728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
          <button className="chatbot-core-send-btn" onClick={handleSendMessage}>
            {currentTheme === 'mirae-ai' ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 10L17.5 2.5L10 17.5L8.125 11.875L2.5 10Z" fill="#df6728" stroke="#df6728" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : currentTheme === 'night-universe' ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 10L17.5 2.5L10 17.5L8.125 11.875L2.5 10Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
                <path d={svgPaths.pb08c800} fill="#5B5FC7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
});