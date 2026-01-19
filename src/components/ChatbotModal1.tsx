import { useState, useRef, useEffect } from 'react';
import { ChatbotCore } from './ChatbotCore';

export function ChatbotModal1({ onClose, onMaximize }: { onClose: () => void; onMaximize: () => void }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const header = headerRef.current;
    if (!modal || !header) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialX = 0;
    let initialY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      // Don't drag if clicking on buttons, input, or input wrapper
      if ((e.target as HTMLElement).tagName === 'BUTTON') return;
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      if ((e.target as HTMLElement).tagName === 'TEXTAREA') return;
      if ((e.target as HTMLElement).closest('button')) return;
      if ((e.target as HTMLElement).closest('input')) return;
      if ((e.target as HTMLElement).closest('.chatbot-core-input-wrapper')) return;
      if ((e.target as HTMLElement).closest('.chatbot-core-input')) return;

      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;

      const rect = modal.getBoundingClientRect();
      initialX = rect.left;
      initialY = rect.top;

      header.style.cursor = 'grabbing';
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      setPosition({ x: initialX + deltaX, y: initialY + deltaY });
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      header.style.cursor = 'grab';
    };

    header.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Set initial cursor
    header.style.cursor = 'grab';

    return () => {
      header.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={modalRef}
      className="chatbot-modal-1"
      style={position.x !== 0 || position.y !== 0 ? {
        left: `${position.x}px`,
        top: `${position.y}px`,
        right: 'auto',
        bottom: 'auto'
      } : {}}
    >
      <div ref={headerRef}>
        <ChatbotCore 
          onClose={onClose}
          onMaximize={onMaximize}
          layout="floating"
        />
      </div>
    </div>
  );
}