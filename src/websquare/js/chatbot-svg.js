/**
 * WebSquare Chatbot SVG Icons Module
 * 챗봇 SVG 아이콘 모듈
 */

var ChatbotSVG = (function() {
    'use strict';
    
    /**
     * 로고 SVG 가져오기
     */
    function getLogo(theme) {
        if (theme === 'blue-purple') {
            return '<svg width="22" height="16" viewBox="0 0 22 16" fill="none">' +
                   '<g clip-path="url(#clip0_chatbot_blue)">' +
                   '<path d="M11 0C5.95739 0 1.86962 3.58182 1.86962 8.00006C1.86962 10.2766 2.9548 12.3309 4.69673 13.7877C4.67447 14.4823 4.43642 15.1698 4.02013 15.7212C4.82719 15.6885 5.61776 15.3609 6.22564 14.8204C7.61483 15.5686 9.25001 16.0001 11.0001 16.0001C16.0427 16.0001 20.1306 12.4183 20.1306 8.00006C20.1306 3.58182 16.0426 0 11 0Z" fill="#753DFE" />' +
                   '</g><defs><clipPath id="clip0_chatbot_blue"><rect fill="white" height="16" width="22" /></clipPath></defs>' +
                   '</svg>';
        } else if (theme === 'mirae-ai') {
            return '<svg width="22" height="16" viewBox="0 0 22 16" fill="none">' +
                   '<g clip-path="url(#clip0_mirae)">' +
                   '<path d="M11 0C5.95739 0 1.86962 3.58182 1.86962 8.00006C1.86962 10.2766 2.9548 12.3309 4.69673 13.7877C4.67447 14.4823 4.43642 15.1698 4.02013 15.7212C4.82719 15.6885 5.61776 15.3609 6.22564 14.8204C7.61483 15.5686 9.25001 16.0001 11.0001 16.0001C16.0427 16.0001 20.1306 12.4183 20.1306 8.00006C20.1306 3.58182 16.0426 0 11 0Z" fill="url(#paint0_linear_mirae)" />' +
                   '<defs><linearGradient id="paint0_linear_mirae" x1="8.07817" y1="4.25003" x2="16.1481" y2="17.8119" gradientUnits="userSpaceOnUse">' +
                   '<stop offset="0.225946" stop-color="#F08200" /><stop offset="1" stop-color="#0055A9" />' +
                   '</linearGradient><clipPath id="clip0_mirae"><rect fill="white" height="16" width="22" /></clipPath></defs>' +
                   '</svg>';
        } else if (theme === 'night-universe') {
            return '<svg width="22" height="16" viewBox="0 0 22 16" fill="none">' +
                   '<g clip-path="url(#clip0_night)">' +
                   '<path d="M11 0C5.95739 0 1.86962 3.58182 1.86962 8.00006C1.86962 10.2766 2.9548 12.3309 4.69673 13.7877C4.67447 14.4823 4.43642 15.1698 4.02013 15.7212C4.82719 15.6885 5.61776 15.3609 6.22564 14.8204C7.61483 15.5686 9.25001 16.0001 11.0001 16.0001C16.0427 16.0001 20.1306 12.4183 20.1306 8.00006C20.1306 3.58182 16.0426 0 11 0Z" fill="white" />' +
                   '</g><defs><clipPath id="clip0_night"><rect fill="white" height="16" width="22" /></clipPath></defs>' +
                   '</svg>';
        }
        return '';
    }
    
    /**
     * 첨부 아이콘 가져오기
     */
    function getAttachIcon(theme) {
        if (theme === 'blue-purple') {
            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none">' +
                   '<path d="M12 5V19M5 12H19" stroke="#5B5FC7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                   '</svg>';
        } else if (theme === 'mirae-ai') {
            return '<svg width="20" height="20" viewBox="0 0 20 20" fill="none">' +
                   '<path d="M10 4V16M4 10H16" stroke="#df6728" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                   '</svg>';
        } else if (theme === 'night-universe') {
            return '<svg width="20" height="20" viewBox="0 0 20 20" fill="none">' +
                   '<path d="M3.33301 9.99996L10.833 5.83329L9.99967 13.3333L6.66634 12.5L3.33301 9.99996Z" stroke="white" stroke-linecap="round" stroke-width="2"/>' +
                   '</svg>';
        }
        return '';
    }
    
    /**
     * 전송 아이콘 가져오기 (일반)
     */
    function getSendIcon(theme) {
        if (theme === 'blue-purple') {
            return '<svg width="20" height="20" viewBox="0 0 30 30" fill="none">' +
                   '<path d="M4.94287 13.0286L19.4429 5.27861C19.7525 5.12434 20.0973 5.05348 20.4412 5.07361C20.7851 5.09374 21.1177 5.20415 21.4072 5.39361C21.6967 5.58307 21.9336 5.84517 22.0965 6.15361C22.2594 6.46205 22.3428 6.80658 22.3386 7.15575L22.0572 22.3543C22.0528 22.7198 21.9569 23.0779 21.778 23.3949C21.5992 23.7119 21.3433 23.9777 21.0341 24.1672C20.7249 24.3567 20.3724 24.4637 20.0086 24.4777C19.6448 24.4918 19.2842 24.4123 18.9601 24.2472L13.7143 21.6115L9.92001 27.0029C9.73861 27.2614 9.49396 27.4696 9.20895 27.6081C8.92394 27.7465 8.60766 27.8107 8.29001 27.7943C7.97237 27.778 7.66473 27.6816 7.39532 27.5138C7.1259 27.346 6.90346 27.1125 6.74859 26.8343L4.05001 22.0886C3.87825 21.7814 3.78581 21.4358 3.78134 21.0835C3.77686 20.7311 3.86048 20.3834 4.02432 20.0722C4.18816 19.761 4.42688 19.4959 4.71904 19.3005C5.0112 19.1051 5.34797 19.0856 5.65145 19.1443L10.0643 20.1143L4.94287 13.0286Z" fill="#5B5FC7" />' +
                   '</svg>';
        } else if (theme === 'mirae-ai') {
            return '<svg width="20" height="20" viewBox="0 0 20 20" fill="none">' +
                   '<path d="M2.5 10L17.5 2.5L10 17.5L8.125 11.875L2.5 10Z" fill="#df6728" stroke="#df6728" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
                   '</svg>';
        }
        return '';
    }
    
    /**
     * 전송 아이콘 가져오기 (밤우주 테마)
     */
    function getSendIconNight() {
        return '<svg width="18" height="18" viewBox="0 0 18 18" fill="none">' +
               '<g clip-path="url(#clip0_send_night)">' +
               '<path d="M16.5 1.5L7.5 10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.66667" />' +
               '<path d="M16.5 1.5L11.25 16.5L7.5 10.5L1.5 6.75L16.5 1.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.66667" />' +
               '</g>' +
               '<defs>' +
               '<clipPath id="clip0_send_night">' +
               '<rect fill="white" height="18" width="18" />' +
               '</clipPath>' +
               '</defs>' +
               '</svg>';
    }
    
    // Public API
    return {
        getLogo: getLogo,
        getAttachIcon: getAttachIcon,
        getSendIcon: getSendIcon,
        getSendIconNight: getSendIconNight
    };
})();
