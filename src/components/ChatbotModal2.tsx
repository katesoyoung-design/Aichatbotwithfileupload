import { useState, useEffect } from 'react';
import { ChatbotCore } from './ChatbotCore';
import svgPaths from "../imports/svg-cx21ck1wo9";

interface FormData {
  name: string;
  job: string;
  idNumber1: string;
  idNumber2: string;
  phone1: string;
  phone2: string;
  phone3: string;
  phoneType: string;
  zipCode: string;
  address: string;
  addressDetail: string;
  emailId: string;
  emailDomain: string;
}

interface ChatbotModal2Props {
  onClose: () => void;
  onMaximize: () => void;
}

export function ChatbotModal2({ onClose, onMaximize }: ChatbotModal2Props) {
  const [formData, setFormData] = useState<FormData>({
    name: '홍길동',
    job: '선택',
    idNumber1: '870211',
    idNumber2: '',
    phone1: '010',
    phone2: '1234',
    phone3: '5678',
    phoneType: '선택',
    zipCode: '07390',
    address: '서울특별시 영등포구 국제금융로 79',
    addressDetail: '3층 302호',
    emailId: 'kate2025',
    emailDomain: 'naver.com',
  });
  const [showIdNumber, setShowIdNumber] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveForm = () => {
    alert('고객 정보가 저장되었습니다.');
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleRestore = () => {
    setIsMinimized(false);
  };

  const handleDimClick = (e: React.MouseEvent) => {
    // Prevent closing when clicking on dim
    e.stopPropagation();
  };

  // Listen for messages from ChatbotCore
  useEffect(() => {
    const handleChatMessage = (event: CustomEvent) => {
      const message = event.detail;
      
      // Check if message contains 12-digit number pattern
      const idPattern = /(\d{6})-(\d{6})/;
      const match = message.match(idPattern);
      
      if (match) {
        setFormData(prev => ({
          ...prev,
          idNumber1: match[1],
          idNumber2: match[2]
        }));
      }
    };

    window.addEventListener('chatbot-message' as any, handleChatMessage as EventListener);
    
    return () => {
      window.removeEventListener('chatbot-message' as any, handleChatMessage as EventListener);
    };
  }, []);

  return (
    <>
      {/* Dim Overlay - No close on click */}
      <div className="modal2-dim-overlay" onClick={handleDimClick}></div>
      
      {/* Modal Container */}
      <div className={`modal2-main-container ${isMinimized ? 'minimized' : ''}`}>
        {/* Control Buttons - Top Right */}
        <div className="modal2-control-buttons">
          <button className="modal2-control-btn modal2-subtract-btn" onClick={handleMinimize} title="최소화">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <button className="modal2-control-btn modal2-maximize-btn" onClick={onMaximize} title="전체화면">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d={svgPaths.p2909ee00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
          <button className="modal2-control-btn modal2-close-control" onClick={onClose} title="닫기">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M5 5L15 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        {/* Left Side - Form */}
        <div className="modal2-form-container">
          {/* Header */}
          <div className="modal2-form-header">
            <div className="modal2-form-header-content">
              <div className="modal2-form-tabs">
                <div className="modal2-form-tab active">
                  <p className="modal2-form-tab-text">AI 고객 등록</p>
                </div>
              </div>
              <button className="modal2-close-btn" onClick={onClose}>
                <svg width="20" height="20" viewBox="0 0 11.6667 11.6667" fill="none">
                  <path d={svgPaths.p354ab980} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p2a4db200} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </button>
            </div>
          </div>

          {/* Form Body */}
          <div className="modal2-form-body">
            {/* Row 1: Name + Job */}
            <div className="modal2-form-row-2cols">
              <div className="modal2-form-field">
                <label className="modal2-form-label">이름</label>
                <input 
                  type="text" 
                  className="modal2-form-input"
                  value={formData.name} 
                  onChange={(e) => handleFormChange('name', e.target.value)}
                />
              </div>
              <div className="modal2-form-field">
                <label className="modal2-form-label">직업</label>
                <div className="modal2-form-select-wrapper">
                  <select 
                    className="modal2-form-select"
                    value={formData.job} 
                    onChange={(e) => handleFormChange('job', e.target.value)}
                  >
                    <option value="선택">선택</option>
                    <option value="회사원">회사원</option>
                    <option value="자영업">자영업</option>
                    <option value="공무원">공무원</option>
                  </select>
                  <svg className="modal2-select-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ID Number - 2 Fields */}
            <div className="modal2-form-field">
              <label className="modal2-form-label">주민등록번호/외국인등록번호</label>
              <div className="modal2-id-number-grid">
                <input 
                  type={showIdNumber ? "text" : "password"} 
                  className="modal2-form-input modal2-id-input"
                  value={formData.idNumber1} 
                  onChange={(e) => handleFormChange('idNumber1', e.target.value)}
                  maxLength={6}
                />
                <span className="modal2-id-separator">-</span>
                <div className="modal2-input-with-icon">
                  <input 
                    type={showIdNumber ? "text" : "password"} 
                    className="modal2-form-input modal2-id-input"
                    value={formData.idNumber2} 
                    onChange={(e) => handleFormChange('idNumber2', e.target.value)}
                    maxLength={6}
                  />
                  <button className="modal2-eye-btn" onClick={() => setShowIdNumber(!showIdNumber)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d={svgPaths.p1fe8ea00} opacity="0.5" stroke="black" strokeWidth="1.5" />
                      <path d={svgPaths.pcf44f00} stroke="black" strokeWidth="1.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="modal2-form-field">
              <label className="modal2-form-label">전화번호</label>
              <div className="modal2-phone-grid">
                <input 
                  type="text" 
                  className="modal2-form-input modal2-phone-input"
                  value={formData.phone1} 
                  onChange={(e) => handleFormChange('phone1', e.target.value)}
                  maxLength={3}
                />
                <input 
                  type="text" 
                  className="modal2-form-input modal2-phone-input"
                  value={formData.phone2} 
                  onChange={(e) => handleFormChange('phone2', e.target.value)}
                  maxLength={4}
                />
                <input 
                  type="text" 
                  className="modal2-form-input modal2-phone-input"
                  value={formData.phone3} 
                  onChange={(e) => handleFormChange('phone3', e.target.value)}
                  maxLength={4}
                />
                <div className="modal2-form-select-wrapper">
                  <select 
                    className="modal2-form-select modal2-phone-select"
                    value={formData.phoneType} 
                    onChange={(e) => handleFormChange('phoneType', e.target.value)}
                  >
                    <option value="선택">선택</option>
                    <option value="휴대폰">휴대폰</option>
                    <option value="집">집</option>
                  </select>
                  <svg className="modal2-select-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="modal2-form-field">
              <label className="modal2-form-label">거주지주소</label>
              <input 
                type="text" 
                className="modal2-form-input modal2-address-input"
                value={formData.zipCode} 
                onChange={(e) => handleFormChange('zipCode', e.target.value)}
                placeholder="우편번호"
              />
              <input 
                type="text" 
                className="modal2-form-input modal2-address-input"
                value={formData.address} 
                onChange={(e) => handleFormChange('address', e.target.value)}
                placeholder="주소"
              />
              <input 
                type="text" 
                className="modal2-form-input modal2-address-input"
                value={formData.addressDetail} 
                onChange={(e) => handleFormChange('addressDetail', e.target.value)}
                placeholder="상세주소"
              />
            </div>

            {/* Email */}
            <div className="modal2-form-field">
              <label className="modal2-form-label">이메일</label>
              <div className="modal2-email-grid">
                <input 
                  type="text" 
                  className="modal2-form-input"
                  value={formData.emailId} 
                  onChange={(e) => handleFormChange('emailId', e.target.value)}
                />
                <span className="modal2-email-at">@</span>
                <input 
                  type="text" 
                  className="modal2-form-input"
                  value={formData.emailDomain} 
                  onChange={(e) => handleFormChange('emailDomain', e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="modal2-form-actions">
              <button className="modal2-submit-btn" onClick={handleSaveForm}>저장</button>
            </div>
          </div>
        </div>

        {/* Right Side - Chatbot */}
        <div className="modal2-chat-container">
          <ChatbotCore 
            onClose={onClose}
            onMaximize={onMaximize}
            layout="modal"
          />
        </div>
      </div>

      {/* Minimized State - Restore Button */}
      {isMinimized && (
        <div className="modal2-minimized-bar" onClick={handleRestore}>
          <span>AI 고객 등록</span>
          <button>복원</button>
        </div>
      )}
    </>
  );
}