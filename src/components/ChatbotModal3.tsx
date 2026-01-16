import { useState } from 'react';
import { ChatbotCore } from './ChatbotCore';
import svgPaths3 from "../imports/svg-czsr9e4xtf";
import imgBackground from "figma:asset/dce6366e28340005db8df9f4715f6f2d10678262.png";

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

export function ChatbotModal3({ onClose, onMinimize }: { onClose: () => void; onMinimize: () => void }) {
  const [showFormPopup, setShowFormPopup] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: '홍길동',
    job: '',
    idNumber: '870211',
    phone1: '010',
    phone2: '1234',
    phone3: '5678',
    phoneType: '',
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

  const handleCloseFormPopup = () => {
    setShowFormPopup(false);
  };

  return (
    <div className="modal3-container">
      {/* Background Content with fullscreen class */}
      <div className={`modal3-background ${showFormPopup ? '' : 'fullscreen'}`}>
        <div className="modal3-background-image">
          <img src={imgBackground} alt="background" />
        </div>
      </div>

      {/* Form Popup with Dim - Only covers left side */}
      {showFormPopup && (
        <>
          <div className="modal3-dim-overlay"></div>
          <div className="modal3-form-popup">
            <div className="modal3-form-header">
              <div className="modal3-form-title">
                <h2>AI 고객 등록</h2>
              </div>
              <button className="modal3-form-close" onClick={handleCloseFormPopup}>
                <svg width="20" height="20" viewBox="0 0 11.6667 11.6667" fill="none">
                  <path d={svgPaths3.p354ab980} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths3.p2a4db200} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </button>
            </div>

            <div className="modal3-form-body">
              <div className="modal3-form-row-2">
                <div className="modal3-form-field">
                  <label>이름</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => handleFormChange('name', e.target.value)}
                  />
                </div>
                <div className="modal3-form-field">
                  <label>직업</label>
                  <div className="modal3-select-wrapper">
                    <select value={formData.job} onChange={(e) => handleFormChange('job', e.target.value)}>
                      <option value="">선택</option>
                      <option value="회사원">회사원</option>
                      <option value="자영업">자영업</option>
                      <option value="공무원">공무원</option>
                      <option value="전문직">전문직</option>
                    </select>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="modal3-form-field modal3-form-full">
                <label>주민등록번호/외국인등록번호</label>
                <div className="modal3-input-icon">
                  <input 
                    type={showIdNumber ? "text" : "password"} 
                    value={formData.idNumber} 
                    onChange={(e) => handleFormChange('idNumber', e.target.value)}
                  />
                  <button className="modal3-eye-btn" onClick={() => setShowIdNumber(!showIdNumber)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" opacity="0.5" stroke="black" strokeWidth="1.5" />
                      <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="black" strokeWidth="1.5" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="modal3-form-field modal3-form-full">
                <label>전화번호</label>
                <div className="modal3-phone-inputs">
                  <input 
                    type="text" 
                    value={formData.phone1} 
                    onChange={(e) => handleFormChange('phone1', e.target.value)}
                    maxLength={3}
                  />
                  <input 
                    type="text" 
                    value={formData.phone2} 
                    onChange={(e) => handleFormChange('phone2', e.target.value)}
                    maxLength={4}
                  />
                  <input 
                    type="text" 
                    value={formData.phone3} 
                    onChange={(e) => handleFormChange('phone3', e.target.value)}
                    maxLength={4}
                  />
                  <div className="modal3-select-wrapper">
                    <select value={formData.phoneType} onChange={(e) => handleFormChange('phoneType', e.target.value)}>
                      <option value="">선택</option>
                      <option value="mobile">휴대폰</option>
                      <option value="home">집</option>
                      <option value="work">직장</option>
                    </select>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="modal3-form-field modal3-form-full">
                <label>거주지주소</label>
                <input 
                  type="text" 
                  value={formData.zipCode} 
                  onChange={(e) => handleFormChange('zipCode', e.target.value)}
                  placeholder="우편번호"
                />
              </div>

              <div className="modal3-form-field modal3-form-full">
                <input 
                  type="text" 
                  value={formData.address} 
                  onChange={(e) => handleFormChange('address', e.target.value)}
                  placeholder="주소"
                />
              </div>

              <div className="modal3-form-field modal3-form-full">
                <input 
                  type="text" 
                  value={formData.addressDetail} 
                  onChange={(e) => handleFormChange('addressDetail', e.target.value)}
                  placeholder="상세주소"
                />
              </div>

              <div className="modal3-form-field modal3-form-full">
                <label>이메일</label>
                <div className="modal3-email-inputs">
                  <input 
                    type="text" 
                    value={formData.emailId} 
                    onChange={(e) => handleFormChange('emailId', e.target.value)}
                  />
                  <span>@</span>
                  <input 
                    type="text" 
                    value={formData.emailDomain} 
                    onChange={(e) => handleFormChange('emailDomain', e.target.value)}
                  />
                </div>
              </div>

              <div className="modal3-form-actions">
                <button className="modal3-submit-btn" onClick={handleSaveForm}>저장</button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Chatbot Widget - Fixed right */}
      <div className="modal3-chatbot-widget">
        <ChatbotCore 
          onClose={onClose}
          onMinimize={onMinimize}
          layout="fullscreen"
        />
      </div>
    </div>
  );
}