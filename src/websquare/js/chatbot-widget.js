/**
 * WebSquare Universal Chatbot Widget
 * 어느 페이지에서든 한 줄로 챗봇을 불러올 수 있습니다.
 * 
 * 사용법:
 * <script src="/websquare/js/chatbot-widget.js"></script>
 * 
 * 또는:
 * <script src="/websquare/js/chatbot-widget.js" data-theme="blue-purple" data-auto-init="true"></script>
 */

(function() {
    'use strict';
    
    var ChatbotWidget = {
        config: {
            basePath: '/websquare',
            theme: 'blue-purple',
            autoInit: true,
            position: 'bottom-right', // bottom-right, bottom-left, top-right, top-left
            offsetX: 20,
            offsetY: 20,
            showButton: true,
            buttonIcon: '💬'
        },
        
        isLoaded: false,
        isInitialized: false,
        
        /**
         * 초기화
         */
        init: function(options) {
            if (this.isInitialized) {
                console.warn('Chatbot already initialized');
                return;
            }
            
            // 설정 병합
            if (options) {
                for (var key in options) {
                    if (options.hasOwnProperty(key)) {
                        this.config[key] = options[key];
                    }
                }
            }
            
            // 스크립트 태그에서 설정 읽기
            this.readScriptConfig();
            
            // CSS 로드
            this.loadCSS();
            
            // JS 의존성 로드
            this.loadDependencies(function() {
                // 챗봇 HTML 삽입
                ChatbotWidget.injectChatbot();
                
                // 챗봇 초기화
                if (typeof ChatbotCore !== 'undefined') {
                    ChatbotCore.init();
                }
                
                // 버튼 추가 (옵션)
                if (ChatbotWidget.config.showButton) {
                    ChatbotWidget.injectFloatingButton();
                }
                
                ChatbotWidget.isInitialized = true;
                
                // 초기화 완료 이벤트
                var event = new CustomEvent('chatbotReady', {
                    detail: { widget: ChatbotWidget }
                });
                document.dispatchEvent(event);
            });
        },
        
        /**
         * 스크립트 태그에서 설정 읽기
         */
        readScriptConfig: function() {
            var scripts = document.getElementsByTagName('script');
            for (var i = 0; i < scripts.length; i++) {
                var script = scripts[i];
                if (script.src && script.src.indexOf('chatbot-widget.js') !== -1) {
                    if (script.getAttribute('data-theme')) {
                        this.config.theme = script.getAttribute('data-theme');
                    }
                    if (script.getAttribute('data-base-path')) {
                        this.config.basePath = script.getAttribute('data-base-path');
                    }
                    if (script.getAttribute('data-auto-init') === 'false') {
                        this.config.autoInit = false;
                    }
                    if (script.getAttribute('data-position')) {
                        this.config.position = script.getAttribute('data-position');
                    }
                    if (script.getAttribute('data-show-button') === 'false') {
                        this.config.showButton = false;
                    }
                    break;
                }
            }
        },
        
        /**
         * CSS 로드
         */
        loadCSS: function() {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = this.config.basePath + '/css/chatbot-core.css';
            document.head.appendChild(link);
        },
        
        /**
         * JS 의존성 로드
         */
        loadDependencies: function(callback) {
            var scripts = [
                this.config.basePath + '/js/chatbot-svg.js',
                this.config.basePath + '/js/chatbot-core.js'
            ];
            
            var loaded = 0;
            
            for (var i = 0; i < scripts.length; i++) {
                var script = document.createElement('script');
                script.src = scripts[i];
                script.onload = function() {
                    loaded++;
                    if (loaded === scripts.length && callback) {
                        callback();
                    }
                };
                document.head.appendChild(script);
            }
        },
        
        /**
         * 챗봇 HTML 삽입
         */
        injectChatbot: function() {
            // 이미 존재하면 리턴
            if (document.getElementById('chatbot_container')) {
                return;
            }
            
            var position = this.getPosition();
            
            var html = '<div id="chatbot_container" class="chatbot-core chatbot-layout-floating chatbot-theme-' + this.config.theme + '" style="position:fixed;' + position + 'z-index:10000;display:none;">';
            html += this.getChatbotHTML();
            html += '</div>';
            
            var div = document.createElement('div');
            div.innerHTML = html;
            document.body.appendChild(div.firstChild);
        },
        
        /**
         * 위치 계산
         */
        getPosition: function() {
            var pos = this.config.position;
            var x = this.config.offsetX;
            var y = this.config.offsetY;
            
            switch(pos) {
                case 'bottom-right':
                    return 'bottom:' + y + 'px;right:' + x + 'px;';
                case 'bottom-left':
                    return 'bottom:' + y + 'px;left:' + x + 'px;';
                case 'top-right':
                    return 'top:' + y + 'px;right:' + x + 'px;';
                case 'top-left':
                    return 'top:' + y + 'px;left:' + x + 'px;';
                default:
                    return 'bottom:' + y + 'px;right:' + x + 'px;';
            }
        },
        
        /**
         * 챗봇 HTML
         */
        getChatbotHTML: function() {
            return '<div class="chatbot-core-header">' +
                '<div class="chatbot-core-header-bg-overlay" id="chatbot_header_bg"></div>' +
                '<div class="chatbot-core-header-content">' +
                '<div class="chatbot-core-header-left">' +
                '<div class="chatbot-core-logo" id="chatbot_logo"></div>' +
                '<div class="chatbot-core-title">MiraeChatbot</div>' +
                '</div>' +
                '<div class="chatbot-core-header-buttons">' +
                '<div class="chatbot-settings-wrapper">' +
                '<button class="chatbot-core-header-btn" onclick="ChatbotCore.toggleThemeMenu()" title="설정">' +
                '<svg width="20" height="20" viewBox="0 0 14.1246 15.5" fill="none">' +
                '<path d="M5.81229 1.75L6.31229 0.75H7.81229L8.31229 1.75C8.54229 2.2 8.93229 2.55 9.41229 2.7L10.4623 3.05L11.4123 2.6L12.6623 3.85L12.2123 4.8L12.5623 5.85C12.7123 6.33 13.0623 6.72 13.5123 6.95L14.5123 7.45V8.95L13.5123 9.45C13.0623 9.68 12.7123 10.07 12.5623 10.55L12.2123 11.6L12.6623 12.55L11.4123 13.8L10.4623 13.35L9.41229 13.7C8.93229 13.85 8.54229 14.2 8.31229 14.65L7.81229 15.65H6.31229L5.81229 14.65C5.58229 14.2 5.19229 13.85 4.71229 13.7L3.66229 13.35L2.71229 13.8L1.46229 12.55L1.91229 11.6L1.56229 10.55C1.41229 10.07 1.06229 9.68 0.612293 9.45L-0.387707 8.95V7.45L0.612293 6.95C1.06229 6.72 1.41229 6.33 1.56229 5.85L1.91229 4.8L1.46229 3.85L2.71229 2.6L3.66229 3.05L4.71229 2.7C5.19229 2.55 5.58229 2.2 5.81229 1.75Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />' +
                '<path d="M7.06229 10.2C8.28889 10.2 9.28229 9.2066 9.28229 7.98C9.28229 6.7534 8.28889 5.76 7.06229 5.76C5.83569 5.76 4.84229 6.7534 4.84229 7.98C4.84229 9.2066 5.83569 10.2 7.06229 10.2Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />' +
                '</svg></button>' +
                '<div id="chatbot_theme_menu" class="chatbot-theme-menu" style="display:none;">' +
                '<div class="chatbot-theme-menu-header"><span>배경 선택</span></div>' +
                '<div class="chatbot-theme-menu-items">' +
                '<button id="chatbot_theme_blue_purple" class="chatbot-theme-item active" onclick="ChatbotCore.handleThemeChange(\'blue-purple\')">' +
                '<span>블루퍼플</span>' +
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="display:inline;">' +
                '<path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#5B5FC7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg></button>' +
                '<button id="chatbot_theme_mirae_ai" class="chatbot-theme-item" onclick="ChatbotCore.handleThemeChange(\'mirae-ai\')">' +
                '<span>미래에셋 AI</span>' +
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="display:none;">' +
                '<path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#5B5FC7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg></button>' +
                '<button id="chatbot_theme_night_universe" class="chatbot-theme-item" onclick="ChatbotCore.handleThemeChange(\'night-universe\')">' +
                '<span>밤우주</span>' +
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="display:none;">' +
                '<path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#5B5FC7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg></button>' +
                '</div></div></div>' +
                '<button class="chatbot-core-header-btn" onclick="ChatbotCore.onMaximize()" title="최대화">' +
                '<svg width="20" height="20" viewBox="0 0 20 20" fill="none">' +
                '<path d="M2.5 7.5V2.5H7.5M17.5 7.5V2.5H12.5M2.5 12.5V17.5H7.5M17.5 12.5V17.5H12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />' +
                '</svg></button>' +
                '<button class="chatbot-core-header-btn" onclick="ChatbotCore.onMinimize()" title="최소화">' +
                '<svg width="20" height="20" viewBox="0 0 20 20" fill="none">' +
                '<path d="M2.5 7.5V2.5H7.5M17.5 7.5V2.5H12.5M2.5 12.5V17.5H7.5M17.5 12.5V17.5H12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />' +
                '</svg></button>' +
                '<button class="chatbot-core-header-btn" onclick="ChatbotCore.onClose()" title="닫기">' +
                '<svg width="20" height="20" viewBox="0 0 20 20" fill="none">' +
                '<path d="M15 5L5 15" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />' +
                '<path d="M5 5L15 15" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />' +
                '</svg></button>' +
                '</div></div></div>' +
                '<div class="chatbot-core-tabs">' +
                '<div id="chatbot_tab_helper" class="chatbot-core-tab active" onclick="ChatbotCore.setActiveTab(\'helper\')">' +
                '<span>화면도우미</span>' +
                '<div class="chatbot-core-tab-indicator"></div>' +
                '</div>' +
                '<div id="chatbot_tab_todo" class="chatbot-core-tab" onclick="ChatbotCore.setActiveTab(\'todo\')">' +
                '<span>설계사 할일</span>' +
                '<div class="chatbot-core-tab-indicator"></div>' +
                '</div></div>' +
                '<div id="chatbot_alerts_area"></div>' +
                '<div id="chatbot_messages" class="chatbot-core-messages"></div>' +
                '<div class="chatbot-core-input" id="chatbot_input_section">' +
                '<input id="chatbot_file_input" type="file" accept="image/*,.pdf,.doc,.docx" class="chatbot-core-file-input-hidden" onchange="ChatbotCore.handleFileUpload()" />' +
                '<button class="chatbot-core-attach-btn" id="chatbot_attach_btn" onclick="ChatbotCore.openFileDialog()"></button>' +
                '<div class="chatbot-core-input-wrapper">' +
                '<input id="chatbot_input" type="text" placeholder="메시지를 입력하세요..." onkeydown="ChatbotCore.handleKeyPress(event)" onkeyup="ChatbotCore.updateInputValue()" />' +
                '<button class="chatbot-core-send-btn" id="chatbot_send_btn" onclick="ChatbotCore.handleSendMessage()"></button>' +
                '</div>' +
                '<button class="chatbot-core-send-btn-night" id="chatbot_send_btn_night" onclick="ChatbotCore.handleSendMessage()" style="display:none;"></button>' +
                '</div>';
        },
        
        /**
         * 플로팅 버튼 삽입
         */
        injectFloatingButton: function() {
            if (document.getElementById('chatbot_floating_button')) {
                return;
            }
            
            var position = this.getPosition();
            
            var button = document.createElement('button');
            button.id = 'chatbot_floating_button';
            button.innerHTML = this.config.buttonIcon;
            button.style.cssText = 'position:fixed;' + position + 
                'width:60px;height:60px;border-radius:50%;' +
                'background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);' +
                'border:none;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.25);' +
                'z-index:9999;font-size:24px;color:white;transition:all 0.3s;';
            
            button.onmouseover = function() {
                this.style.transform = 'scale(1.1)';
            };
            
            button.onmouseout = function() {
                this.style.transform = 'scale(1)';
            };
            
            button.onclick = function() {
                ChatbotWidget.toggle();
            };
            
            document.body.appendChild(button);
        },
        
        /**
         * 챗봇 열기
         */
        show: function() {
            var container = document.getElementById('chatbot_container');
            if (container) {
                container.style.display = 'block';
            }
        },
        
        /**
         * 챗봇 닫기
         */
        hide: function() {
            var container = document.getElementById('chatbot_container');
            if (container) {
                container.style.display = 'none';
            }
        },
        
        /**
         * 챗봇 토글
         */
        toggle: function() {
            var container = document.getElementById('chatbot_container');
            if (container) {
                if (container.style.display === 'none') {
                    this.show();
                } else {
                    this.hide();
                }
            }
        },
        
        /**
         * 테마 변경
         */
        setTheme: function(theme) {
            this.config.theme = theme;
            if (typeof ChatbotCore !== 'undefined') {
                ChatbotCore.handleThemeChange(theme);
            }
        }
    };
    
    // 전역 객체로 노출
    window.ChatbotWidget = ChatbotWidget;
    
    // 자동 초기화
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (ChatbotWidget.config.autoInit) {
                ChatbotWidget.init();
            }
        });
    } else {
        // 이미 로드된 경우
        if (ChatbotWidget.config.autoInit) {
            ChatbotWidget.init();
        }
    }
})();
