import { useState, useRef, useEffect } from 'react';
import imgImage30 from "figma:asset/2b7fe70884609b099a98b62b4dc12ebcc11d7b7c.png";
import imgBackground from "figma:asset/dce6366e28340005db8df9f4715f6f2d10678262.png";
import { ChatbotModal1 } from './components/ChatbotModal1';
import { ChatbotModal2 } from './components/ChatbotModal2';
import { ChatbotModal3 } from './components/ChatbotModal3';
import './styles/chatbot-core.css';
import './styles/modal2-styles.css';
import './styles/modal3-styles.css';

export default function App() {
  const [activeModal, setActiveModal] = useState<null | 1 | 2 | 3>(null);
  
  // Draggable state for buttons
  const [btn1Position, setBtn1Position] = useState<{ x: number; y: number } | null>(null);
  const [btn2Position, setBtn2Position] = useState<{ x: number; y: number } | null>(null);
  const [btn3Position, setBtn3Position] = useState<{ x: number; y: number } | null>(null);
  
  const btn1Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLButtonElement>(null);
  const btn3Ref = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    // Initialize draggable buttons
    const buttons = [
      { ref: btn1Ref, setPosition: setBtn1Position },
      { ref: btn2Ref, setPosition: setBtn2Position },
      { ref: btn3Ref, setPosition: setBtn3Position },
    ];
    
    const cleanupFunctions: (() => void)[] = [];
    
    buttons.forEach(({ ref, setPosition }) => {
      const button = ref.current;
      if (!button) return;
      
      let isDragging = false;
      let hasMoved = false;
      let startX = 0;
      let startY = 0;
      let initialX = 0;
      let initialY = 0;
      
      const handleMouseDown = (e: MouseEvent) => {
        if (e.button !== 0) return; // Only left click
        
        isDragging = true;
        hasMoved = false;
        startX = e.clientX;
        startY = e.clientY;
        
        const rect = button.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;
        
        button.style.cursor = 'grabbing';
        e.preventDefault();
      };
      
      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        // Check if actually moved
        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
          hasMoved = true;
          setPosition({ x: initialX + deltaX, y: initialY + deltaY });
        }
      };
      
      const handleMouseUp = (e: MouseEvent) => {
        if (!isDragging) return;
        
        isDragging = false;
        button.style.cursor = 'grab';
        
        // If moved, prevent click event
        if (hasMoved) {
          e.stopPropagation();
          e.preventDefault();
        }
      };
      
      button.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      cleanupFunctions.push(() => {
        button.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      });
    });
    
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  const handleButtonClick = (modal: 1 | 2 | 3) => {
    setActiveModal(modal);
  };

  return (
    <div className="app-container">
      {/* Admin Background Content */}
      <div className="admin-background-content">
        <div className="admin-background-image">
          <img src={imgBackground} alt="admin background" />
        </div>
      </div>

      {/* Chatbot Trigger Buttons - Now Draggable */}
      <button 
        ref={btn1Ref}
        className="chatbot-trigger-btn chatbot-btn-1" 
        onClick={() => handleButtonClick(1)}
        style={btn1Position ? {
          left: `${btn1Position.x}px`,
          top: `${btn1Position.y}px`,
          right: 'auto',
          bottom: 'auto'
        } : {}}
        title="AI Modal 1 - Floating Chat"
      >
        <div className="trigger-gradient">
          <img src={imgImage30} alt="chatbot" className="trigger-icon" />
          <div className="trigger-glow"></div>
        </div>
      </button>

      <button 
        ref={btn2Ref}
        className="chatbot-trigger-btn chatbot-btn-2" 
        onClick={() => handleButtonClick(2)}
        style={btn2Position ? {
          left: `${btn2Position.x}px`,
          top: `${btn2Position.y}px`,
          right: 'auto',
          bottom: 'auto'
        } : {}}
        title="AI Modal 2 - Chat with Form"
      >
        <div className="trigger-gradient">
          <img src={imgImage30} alt="chatbot" className="trigger-icon" />
          <div className="trigger-glow"></div>
        </div>
      </button>

      <button 
        ref={btn3Ref}
        className="chatbot-trigger-btn chatbot-btn-3" 
        onClick={() => handleButtonClick(3)}
        style={btn3Position ? {
          left: `${btn3Position.x}px`,
          top: `${btn3Position.y}px`,
          right: 'auto',
          bottom: 'auto'
        } : {}}
        title="AI Modal 3 - Fullscreen"
      >
        <div className="trigger-gradient">
          <img src={imgImage30} alt="chatbot" className="trigger-icon" />
          <div className="trigger-glow"></div>
        </div>
      </button>

      {/* Modal 1 - Floating Chat (Draggable) */}
      {activeModal === 1 && (
        <ChatbotModal1 
          onClose={() => setActiveModal(null)}
          onMaximize={() => setActiveModal(3)}
        />
      )}

      {/* Modal 2 - Chat with Form */}
      {activeModal === 2 && (
        <ChatbotModal2 
          onClose={() => setActiveModal(null)}
          onMaximize={() => setActiveModal(3)}
        />
      )}

      {/* Modal 3 - Fullscreen */}
      {activeModal === 3 && (
        <ChatbotModal3 
          onClose={() => setActiveModal(null)}
          onMinimize={() => setActiveModal(2)}
        />
      )}
    </div>
  );
}