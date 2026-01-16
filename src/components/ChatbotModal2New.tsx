import { useState } from 'react';
import { ChatbotCore } from './ChatbotCore';
import svgPaths from "../imports/svg-73x6v6goja";

interface FormData {
  name: string;
  job: string;
  idNumber: string;
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

export function ChatbotModal2({ onClose, onMaximize }: { onClose: () => void; onMaximize: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: '홍길동',
    job: '선택',
    idNumber: '870211',
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

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveForm = () => {
    alert('고객 정보가 저장되었습니다.');
  };

  return (
    <>
      {/* Dim Overlay - Click to close */}
      <div className="modal2-dim-overlay" onClick={onClose}></div>
      
      {/* Modal Container */}
      <div className="modal2-main-container">
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

            {/* ID Number */}
            <div className="modal2-form-field">
              <label className="modal2-form-label">주민등록번호/외국인등록번호</label>
              <div className="modal2-input-with-icon">
                <input 
                  type={showIdNumber ? "text" : "password"} 
                  className="modal2-form-input"
                  value={formData.idNumber} 
                  onChange={(e) => handleFormChange('idNumber', e.target.value)}
                />
                <button className="modal2-eye-btn" onClick={() => setShowIdNumber(!showIdNumber)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d={svgPaths.p1fe8ea00} opacity="0.5" stroke="black" strokeWidth="1.5" />
                    <path d={svgPaths.pcf44f00} stroke="black" strokeWidth="1.5" />
                  </svg>
                </button>
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
    </>
  );
}
