/**
 * WebSquare Chatbot Core Module
 * 챗봇 핵심 기능 모듈
 */

var ChatbotCore = (function() {
    'use strict';
    
    // Private variables
    var _messages = [];
    var _currentTheme = 'blue-purple';
    var _activeTab = 'helper';
    var _layout = 'floating';
    var _alertsExpanded = true;
    var _showAlert = false;
    var _showThemeMenu = false;
    var _uploadedFileName = '';
    var _inputValue = '';
    
    /**
     * 초기화 함수
     */
    function init() {
        // 초기 메시지 설정
        _messages = [{
            id: '1',
            type: 'bot',
            content: '안녕하세요. 고객등록을 위해 관련 서류를 첨부하거나 고객정보를 입력해주세요.',
            timestamp: new Date(),
            tab: 'helper'
        }];
        
        // UI 렌더링
        renderMessages();
        renderTheme();
        updateThemeClass();
        
        // 외부 클릭 감지 (테마 메뉴 닫기)
        document.addEventListener('click', handleOutsideClick);
    }
    
    /**
     * 메시지 전송
     */
    function handleSendMessage() {
        var input = document.getElementById('chatbot_input');
        if (!input || !input.value || input.value.trim() === '') {
            return;
        }
        
        _inputValue = input.value;
        
        // 사용자 메시지 추가
        var userMessage = {
            id: Date.now().toString(),
            type: 'user',
            content: _inputValue,
            timestamp: new Date(),
            tab: _activeTab
        };
        
        _messages.push(userMessage);
        
        // 입력값에서 정보 추출 및 폼에 자동 입력
        extractAndFillForm(_inputValue);
        
        // 입력창 초기화
        input.value = '';
        _inputValue = '';
        
        // UI 업데이트
        renderMessages();
        
        // 부모 페이지로 이벤트 전달
        if (window.parent && window.parent.scwin && window.parent.scwin.onChatbotMessage) {
            window.parent.scwin.onChatbotMessage(userMessage.content);
        }
        
        // 봇 응답 생성 (1초 후)
        setTimeout(function() {
            var botResponse = getBotResponse(userMessage.content);
            var botMessage = {
                id: (Date.now() + 1).toString(),
                type: 'bot',
                content: botResponse,
                timestamp: new Date(),
                tab: _activeTab
            };
            _messages.push(botMessage);
            renderMessages();
        }, 1000);
    }
    
    /**
     * 정보 추출 및 폼 자동 입력
     */
    function extractAndFillForm(text) {
        // 전화번호 추출 (010-1234-5678, 010 1234 5678, 01012345678)
        var phonePattern = /(\d{3})[-\s]?(\d{4})[-\s]?(\d{4})/;
        var phoneMatch = text.match(phonePattern);
        if (phoneMatch) {
            fillPhoneInputs(phoneMatch[1], phoneMatch[2], phoneMatch[3]);
        }
        
        // 이메일 추출
        var emailPattern = /([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
        var emailMatch = text.match(emailPattern);
        if (emailMatch) {
            fillEmailInputs(emailMatch[1], emailMatch[2]);
        }
        
        // 이름 추출 (한글 2-4자)
        var namePattern = /[가-힣]{2,4}/;
        var words = text.trim().split(/\s+/);
        for (var i = 0; i < words.length; i++) {
            if (namePattern.test(words[i])) {
                fillNameInput(words[i]);
                break;
            }
        }
        
        // 주소 추출 (시/도로 시작하는 주소)
        var addressPattern = /(서울|부산|대구|인천|광주|대전|울산|세종|경기|강원|충북|충남|전북|전남|경북|경남|제주)[^\n]+/;
        var addressMatch = text.match(addressPattern);
        if (addressMatch) {
            fillAddressInput(addressMatch[0]);
        }
    }
    
    /**
     * 전화번호 입력 (3칸)
     */
    function fillPhoneInputs(part1, part2, part3) {
        console.log('전화번호 추출:', part1, part2, part3);
        
        // 같은 페이지에서 시도
        var phone1 = document.getElementById('phone1');
        var phone2 = document.getElementById('phone2');
        var phone3 = document.getElementById('phone3');
        
        if (phone1) phone1.value = part1;
        if (phone2) phone2.value = part2;
        if (phone3) phone3.value = part3;
        
        // 데이터 전송
        dispatchFormData({type: 'phone', value: part1 + '-' + part2 + '-' + part3, parts: [part1, part2, part3]});
    }
    
    /**
     * 이메일 입력
     */
    function fillEmailInputs(localPart, domain) {
        console.log('이메일 추출:', localPart, domain);
        
        var emailLocal = document.getElementById('email_local');
        var emailDomain = document.getElementById('email_domain');
        
        if (emailLocal) emailLocal.value = localPart;
        if (emailDomain) emailDomain.value = domain;
        
        // 데이터 전송
        dispatchFormData({type: 'email', value: localPart + '@' + domain, localPart: localPart, domain: domain});
    }
    
    /**
     * 이름 입력
     */
    function fillNameInput(name) {
        console.log('이름 추출:', name);
        
        var nameInput = document.getElementById('name');
        
        if (nameInput) nameInput.value = name;
        
        // 데이터 전송
        dispatchFormData({type: 'name', value: name});
    }
    
    /**
     * 주소 입력
     */
    function fillAddressInput(address) {
        console.log('주소 추출:', address);
        
        var addressInput = document.getElementById('address');
        
        if (addressInput) addressInput.value = address;
        
        // 데이터 전송
        dispatchFormData({type: 'address', value: address});
    }
    
    /**
     * 폼 데이터 전달 (postMessage + CustomEvent)
     */
    function dispatchFormData(data) {
        console.log('폼 데이터 전송:', data);
        
        // 1. postMessage로 부모 창에 전달 (iframe 환경)
        if (window.parent && window.parent !== window) {
            try {
                window.parent.postMessage({
                    type: 'chatbotFormData',
                    data: data
                }, '*');
            } catch (e) {
                console.error('postMessage 전송 실패:', e);
            }
        }
        
        // 2. CustomEvent 전달 (같은 페이지)
        try {
            var event = new CustomEvent('chatbotFormData', {
                detail: data,
                bubbles: true,
                cancelable: true
            });
            document.dispatchEvent(event);
        } catch (e) {
            console.error('CustomEvent 전송 실패:', e);
        }
        
        // 3. WebSquare 콜백
        if (window.parent && window.parent.scwin && window.parent.scwin.onChatbotFormData) {
            try {
                window.parent.scwin.onChatbotFormData(data);
            } catch (e) {
                console.error('WebSquare 콜백 실패:', e);
            }
        }
    }
    
    /**
     * 봇 응답 생성
     */
    function getBotResponse(userInput) {
        var input = userInput.toLowerCase();
        
        if (input.indexOf('안녕') !== -1 || input.indexOf('hello') !== -1) {
            return '안녕하세요! 무엇을 도와드릴까요?';
        } else if (input.indexOf('수정') !== -1 || input.indexOf('변경') !== -1) {
            return '좌측 폼에서 수정하실 항목을 직접 변경해주세요.';
        } else if (input.indexOf('저장') !== -1 || input.indexOf('완료') !== -1) {
            return '저장 버튼을 눌러 고객 정보를 등록해주세요.';
        } else if (input.indexOf('도움') !== -1 || input.indexOf('help') !== -1) {
            return '파일을 첨부하시면 자동으로 정보를 추출하여 입력폼에 채워드립니다. 추가로 궁금하신 사항이 있으시면 말씀해주세요.';
        } else {
            return '네, 알겠습니다. 추가로 필요하신 사항이 있으시면 말씀해주세요.';
        }
    }
    
    /**
     * 파일 업로드 처리
     */
    function handleFileUpload() {
        var fileInput = document.getElementById('chatbot_file_input');
        if (!fileInput || !fileInput.files || !fileInput.files[0]) {
            return;
        }
        
        var file = fileInput.files[0];
        
        // 파일 메시지 추가
        var fileMessage = {
            id: Date.now().toString(),
            type: 'user',
            content: file.name,
            isFile: true,
            timestamp: new Date(),
            tab: _activeTab
        };
        
        _messages.push(fileMessage);
        _uploadedFileName = file.name;
        _showAlert = true;
        _alertsExpanded = true;
        
        // UI 업데이트
        renderMessages();
        renderAlerts();
        
        // 부모 페이지로 이벤트 전달
        if (window.parent && window.parent.scwin && window.parent.scwin.onChatbotFileUpload) {
            window.parent.scwin.onChatbotFileUpload(file);
        }
        
        // 봇 응답 생성 (1.5초 후)
        setTimeout(function() {
            var botMessage = {
                id: (Date.now() + 1).toString(),
                type: 'bot',
                content: '아래 정보가 추출되어 자동입력 되었습니다.\n\n이름: 홍길동\n주민등록번호: 870211-1******\n주소: 서울특별시 영등포구 국제금융로 79\n\n추가로 입력하거나 수정할 내용이 있으면 작성해주세요.',
                timestamp: new Date(),
                tab: _activeTab
            };
            _messages.push(botMessage);
            renderMessages();
        }, 1500);
        
        // 파일 입력 초기화
        fileInput.value = '';
    }
    
    /**
     * 키 입력 처리
     */
    function handleKeyPress(e) {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    }
    
    /**
     * 파일 선택 다이얼로그 열기
     */
    function openFileDialog() {
        var fileInput = document.getElementById('chatbot_file_input');
        if (fileInput) {
            fileInput.click();
        }
    }
    
    /**
     * 알림 토글
     */
    function toggleAlerts() {
        _alertsExpanded = !_alertsExpanded;
        renderAlerts();
    }
    
    /**
     * 테마 메뉴 토글
     */
    function toggleThemeMenu() {
        _showThemeMenu = !_showThemeMenu;
        var menu = document.getElementById('chatbot_theme_menu');
        if (menu) {
            menu.style.display = _showThemeMenu ? 'block' : 'none';
        }
    }
    
    /**
     * 테마 변경
     */
    function handleThemeChange(theme) {
        _currentTheme = theme;
        _showThemeMenu = false;
        updateThemeClass();
        
        // 부모 페이지로 이벤트 전달
        if (window.parent && window.parent.scwin && window.parent.scwin.onChatbotThemeChange) {
            window.parent.scwin.onChatbotThemeChange(theme);
        }
    }
    
    /**
     * 탭 전환
     */
    function setActiveTab(tab) {
        _activeTab = tab;
        renderTabs();
        renderMessages();
    }
    
    /**
     * 입력값 업데이트
     */
    function updateInputValue() {
        var input = document.getElementById('chatbot_input');
        if (input) {
            _inputValue = input.value;
        }
    }
    
    /**
     * 닫기
     */
    function onClose() {
        var container = document.getElementById('chatbot_container');
        if (container) {
            container.style.display = 'none';
        }
        
        // 부모 페이지로 이벤트 전달
        if (window.parent && window.parent.scwin && window.parent.scwin.onChatbotClose) {
            window.parent.scwin.onChatbotClose();
        }
    }
    
    /**
     * 최소화
     */
    function onMinimize() {
        var container = document.getElementById('chatbot_container');
        if (container) {
            container.style.height = '60px';
            container.style.overflow = 'hidden';
        }
        
        // 부모 페이지로 이벤트 전달
        if (window.parent && window.parent.scwin && window.parent.scwin.onChatbotMinimize) {
            window.parent.scwin.onChatbotMinimize();
        }
    }
    
    /**
     * 최대화
     */
    function onMaximize() {
        _layout = 'fullscreen';
        updateLayoutClass();
        
        // 부모 페이지로 이벤트 전달
        if (window.parent && window.parent.scwin && window.parent.scwin.onChatbotMaximize) {
            window.parent.scwin.onChatbotMaximize();
        }
    }
    
    /**
     * 테마 클래스 업데이트
     */
    function updateThemeClass() {
        var container = document.getElementById('chatbot_container');
        if (container) {
            container.className = 'chatbot-core chatbot-layout-' + _layout + ' chatbot-theme-' + _currentTheme;
        }
        
        // 테마별 UI 렌더링
        renderTheme();
        renderThemeMenu();
    }
    
    /**
     * 레이아웃 클래스 업데이트
     */
    function updateLayoutClass() {
        var container = document.getElementById('chatbot_container');
        if (container) {
            container.className = 'chatbot-core chatbot-layout-' + _layout + ' chatbot-theme-' + _currentTheme;
        }
    }
    
    /**
     * 메시지 렌더링
     */
    function renderMessages() {
        var messagesContainer = document.getElementById('chatbot_messages');
        if (!messagesContainer) return;
        
        // 현재 탭의 메시지만 필터링
        var currentTabMessages = _messages.filter(function(msg) {
            return msg.tab === _activeTab;
        });
        
        var html = '';
        for (var i = 0; i < currentTabMessages.length; i++) {
            var message = currentTabMessages[i];
            
            if (message.type === 'bot') {
                var lines = message.content.split('\n');
                var contentHtml = '';
                for (var j = 0; j < lines.length; j++) {
                    contentHtml += '<p>' + escapeHtml(lines[j]) + '</p>';
                }
                html += '<div class="chatbot-core-bot-message"><div class="chatbot-core-bot-bubble">' + contentHtml + '</div></div>';
            } else {
                if (message.isFile) {
                    html += '<div class="chatbot-core-user-message"><div class="chatbot-core-user-bubble">';
                    html += '<svg width="16" height="16" viewBox="0 0 16 16" fill="none">';
                    html += '<path clip-rule="evenodd" d="M2.66667 4C2.66667 3.26362 3.26362 2.66667 4 2.66667H7.72386C8.05441 2.66667 8.37145 2.79881 8.60649 3.03385L12.9664 7.39383C13.4736 7.90107 13.4736 8.71893 12.9664 9.22617L9.22617 12.9664C8.71893 13.4736 7.90107 13.4736 7.39383 12.9664L3.03385 8.60649C2.79881 8.37145 2.66667 8.05441 2.66667 7.72386V4Z" fill="white" fill-rule="evenodd" />';
                    html += '<path clip-rule="evenodd" d="M5.33333 5.33333C5.33333 5.70152 5.63181 6 6 6C6.36819 6 6.66667 5.70152 6.66667 5.33333C6.66667 4.96514 6.36819 4.66667 6 4.66667C5.63181 4.66667 5.33333 4.96514 5.33333 5.33333Z" fill="white" fill-rule="evenodd" />';
                    html += '</svg>';
                    html += '<span>' + escapeHtml(message.content) + '</span>';
                    html += '</div></div>';
                } else {
                    html += '<div class="chatbot-core-user-message"><div class="chatbot-core-user-bubble"><span>' + escapeHtml(message.content) + '</span></div></div>';
                }
            }
        }
        
        messagesContainer.innerHTML = html;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    /**
     * 알림 렌더링
     */
    function renderAlerts() {
        var alertsContainer = document.getElementById('chatbot_alerts_area');
        if (!alertsContainer) return;
        
        if (!_showAlert) {
            alertsContainer.innerHTML = '';
            return;
        }
        
        var html = '';
        if (_alertsExpanded) {
            html += '<div class="chatbot-core-alerts">';
            html += '<div class="chatbot-core-alerts-content">';
            html += '<div class="chatbot-core-alert-item chatbot-core-alert-gradient">';
            html += '<svg width="16" height="16" viewBox="0 0 16 16" fill="none">';
            html += '<circle cx="8" cy="8" r="6" stroke="url(#gradient_chatbot)" stroke-width="4"/>';
            html += '<defs><linearGradient id="gradient_chatbot" x1="3.5" y1="2.5" x2="14" y2="14.5">';
            html += '<stop stop-color="#835EF9"/><stop offset="0.956653" stop-color="#30BFE2"/>';
            html += '</linearGradient></defs>';
            html += '</svg>';
            html += '<p>\'' + escapeHtml(_uploadedFileName || '카카오톡이미지.jpg') + '\'파일이 첨부되었습니다.</p>';
            html += '</div></div>';
            html += '<button class="chatbot-core-toggle-btn" onclick="ChatbotCore.toggleAlerts()">';
            html += '<svg width="10" height="6" viewBox="0 0 11.5 6.5" fill="none">';
            html += '<path d="M10.75 5.75L5.75 0.75L0.75 5.75" stroke="#397EEE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />';
            html += '</svg></button></div>';
        } else {
            html += '<div class="chatbot-core-alerts-collapsed">';
            html += '<button class="chatbot-core-toggle-btn-collapsed" onclick="ChatbotCore.toggleAlerts()">';
            html += '<svg width="10" height="6" viewBox="0 0 11.5 6.5" fill="none" class="chatbot-core-svg-rotated">';
            html += '<path d="M10.75 5.75L5.75 0.75L0.75 5.75" stroke="#397EEE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />';
            html += '</svg></button></div>';
        }
        
        alertsContainer.innerHTML = html;
    }
    
    /**
     * 탭 렌더링
     */
    function renderTabs() {
        var tab1 = document.getElementById('chatbot_tab_helper');
        var tab2 = document.getElementById('chatbot_tab_todo');
        
        if (tab1) {
            tab1.className = 'chatbot-core-tab' + (_activeTab === 'helper' ? ' active' : '');
        }
        if (tab2) {
            tab2.className = 'chatbot-core-tab' + (_activeTab === 'todo' ? ' active' : '');
        }
    }
    
    /**
     * 테마 메뉴 렌더링
     */
    function renderThemeMenu() {
        var items = ['blue-purple', 'mirae-ai', 'night-universe'];
        
        for (var i = 0; i < items.length; i++) {
            var theme = items[i];
            var itemId = 'chatbot_theme_' + theme.replace('-', '_');
            var item = document.getElementById(itemId);
            
            if (item) {
                if (_currentTheme === theme) {
                    item.className = 'chatbot-theme-item active';
                    var svg = item.querySelector('svg');
                    if (svg) svg.style.display = 'inline';
                } else {
                    item.className = 'chatbot-theme-item';
                    var svg = item.querySelector('svg');
                    if (svg) svg.style.display = 'none';
                }
            }
        }
        
        var menu = document.getElementById('chatbot_theme_menu');
        if (menu) {
            menu.style.display = _showThemeMenu ? 'block' : 'none';
        }
    }
    
    /**
     * 테마별 UI 렌더링
     */
    function renderTheme() {
        renderLogo();
        renderAttachButton();
        renderSendButton();
    }
    
    /**
     * 로고 렌더링
     */
    function renderLogo() {
        var logo = document.getElementById('chatbot_logo');
        if (!logo) return;
        
        logo.innerHTML = ChatbotSVG.getLogo(_currentTheme);
    }
    
    /**
     * 첨부 버튼 렌더링
     */
    function renderAttachButton() {
        var btn = document.getElementById('chatbot_attach_btn');
        if (!btn) return;
        
        btn.innerHTML = ChatbotSVG.getAttachIcon(_currentTheme);
    }
    
    /**
     * 전송 버튼 렌더링
     */
    function renderSendButton() {
        var btnNormal = document.getElementById('chatbot_send_btn');
        var btnNight = document.getElementById('chatbot_send_btn_night');
        
        if (_currentTheme === 'night-universe') {
            if (btnNormal) btnNormal.style.display = 'none';
            if (btnNight) {
                btnNight.style.display = 'flex';
                btnNight.innerHTML = ChatbotSVG.getSendIconNight();
            }
        } else {
            if (btnNormal) {
                btnNormal.style.display = 'flex';
                btnNormal.innerHTML = ChatbotSVG.getSendIcon(_currentTheme);
            }
            if (btnNight) btnNight.style.display = 'none';
        }
    }
    
    /**
     * 외부 클릭 감지
     */
    function handleOutsideClick(e) {
        var menu = document.getElementById('chatbot_theme_menu');
        var settingsBtn = e.target.closest('.chatbot-settings-wrapper');
        
        if (_showThemeMenu && !settingsBtn && menu) {
            _showThemeMenu = false;
            menu.style.display = 'none';
        }
    }
    
    /**
     * HTML 이스케이프
     */
    function escapeHtml(text) {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
    
    // Public API
    return {
        init: init,
        handleSendMessage: handleSendMessage,
        handleFileUpload: handleFileUpload,
        handleKeyPress: handleKeyPress,
        openFileDialog: openFileDialog,
        toggleAlerts: toggleAlerts,
        toggleThemeMenu: toggleThemeMenu,
        handleThemeChange: handleThemeChange,
        setActiveTab: setActiveTab,
        updateInputValue: updateInputValue,
        onClose: onClose,
        onMinimize: onMinimize,
        onMaximize: onMaximize
    };
})();