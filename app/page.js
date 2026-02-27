'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [step, setStep] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [noButtonSize, setNoButtonSize] = useState(1);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHearts(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const messages = [
    {
      title: "Hai Sayang... 💕",
      text: "Aku tahu kita sudah tidak bersama lagi...",
      emoji: "🥺"
    },
    {
      title: "Tapi...",
      text: "Setiap hari tanpamu terasa hampa. Aku merindukan tawa kita, cerita kita, dan semua momen indah bersama.",
      emoji: "💭"
    },
    {
      title: "Aku Menyesal 😢",
      text: "Aku sadar ada kesalahan yang kubuat. Aku ingin memperbaiki semuanya dan menjadi lebih baik untukmu.",
      emoji: "🙏"
    },
    {
      title: "Karena Itu...",
      text: "Selamat Hari Valentine, meskipun telat mengucapkannya. aku ingin bertanya dengan tulus dari hatiku yang paling dalam..,",
      emoji: "💝"
    }
  ];

  const handleNo = () => {
    // Move button to random position and shrink it
    const newTop = Math.random() * 70;
    const newLeft = Math.random() * 70;
    setNoButtonPosition({ top: newTop, left: newLeft });
    setNoButtonSize((prev) => Math.max(prev - 0.1, 0.3));
    setYesButtonSize((prev) => prev + 0.3);
  };

  const handleYes = () => {
    setStep(messages.length + 1);
  };

  if (step < messages.length) {
    return (
      <div className="container">
        {showHearts && (
          <>
            <div className="heart heart-1">❤️</div>
            <div className="heart heart-2">💕</div>
            <div className="heart heart-3">💖</div>
            <div className="heart heart-4">💗</div>
            <div className="heart heart-5">💝</div>
            <div className="heart heart-6">❤️</div>
          </>
        )}
        
        <div className="card fade-in">
          <div className="emoji-big">{messages[step].emoji}</div>
          <h1 className="title">{messages[step].title}</h1>
          <p className="message">{messages[step].text}</p>
          <button className="next-button" onClick={() => setStep(step + 1)}>
            {step < messages.length - 1 ? 'Lanjut 💌' : 'Tanyakan Aku! 💕'}
          </button>
        </div>
      </div>
    );
  }

  if (step === messages.length) {
    return (
      <div className="container">
        <div className="heart heart-1">❤️</div>
        <div className="heart heart-2">💕</div>
        <div className="heart heart-3">💖</div>
        <div className="heart heart-4">💗</div>
        <div className="heart heart-5">💝</div>
        <div className="heart heart-6">❤️</div>
        
        <div className="card question-card fade-in">
          <div className="emoji-big">💑</div>
          <h1 className="title question-title">Mau Balikan Sama Aku? 🥺</h1>
          <p className="message">
            Aku janji akan lebih baik, lebih perhatian, dan lebih menghargaimu. 
            Bisakah kita mulai dari awal lagi? 💕
          </p>
          
          <div className="buttons-container">
            <button 
              className="yes-button"
              onClick={handleYes}
              style={{ transform: `scale(${yesButtonSize})` }}
            >
              YA! IYA! TENTU SAJA! 💕
            </button>
            <button 
              className="no-button"
              onClick={handleNo}
              style={{ 
                position: noButtonPosition.top ? 'absolute' : 'relative',
                top: `${noButtonPosition.top}%`,
                left: `${noButtonPosition.left}%`,
                transform: `scale(${noButtonSize})`,
                transition: 'all 0.3s ease'
              }}
            >
              Tidak
            </button>
          </div>
          
          <p className="hint">*Psst... tombol YA nya lebih gede lho! 😉</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container celebration">
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      
      <div className="card celebration-card fade-in">
        <div className="emoji-big">🎉💕✨</div>
        <h1 className="title celebration-title">YEAAAY! 🎊❤️</h1>
        <p className="message celebration-message">
          Terima kasih sudah memberi aku kesempatan kedua! 
          Aku janji akan membuat kamu bahagia dan tidak akan mengulangi kesalahan yang sama.
        </p>
        <p className="message">
          I Love You So Much! ❤️💕💖💗💝💘
        </p>
        <div className="final-hearts">
          💕 💖 💗 💝 💘 ❤️ 💕 💖 💗 💝
        </div>
        <p className="message small-text">
          Happy Valentine's Day, Sayang! 🌹
        </p>
      </div>
    </div>
  );
}
