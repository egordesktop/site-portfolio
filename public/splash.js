(function () {
  'use strict';
  
  // Проверка, не был ли уже показан сплэш
  if (window.__splashShown) {
    return;
  }
  window.__splashShown = true; // Глобальный флаг

  // Configuration
  const SPLASH_CONFIG = {
    title: 'Добро пожаловать',
    subtitle: 'Loading…',
    logoEmoji: '✨',
    classPrefix: 'splash-io-'
  };

  // CSS styles with prefixed classes
  const SPLASH_STYLES = `
    .splash-io-root {
      position: fixed;
      inset: 0;
      display: grid;
      place-items: center;
      background: radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,.8), rgba(240,240,245,.9));
      backdrop-filter: saturate(1.1) blur(18px);
      -webkit-backdrop-filter: saturate(1.1) blur(18px);
      z-index: 2147483647;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif;
      opacity: 0;
      transition: opacity 1.5s ease;
      will-change: opacity;
    }
    
    .splash-io-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      text-align: center;
    }
    
    .splash-io-title {
      font-size: clamp(32px, 6vw, 64px);
      font-weight: 600;
      letter-spacing: .2px;
      margin: 0;
      color: #222;
    }
    
    .splash-io-sub {
      font-size: 16px;
      opacity: 0.6;
      margin: 0;
      color: #222;
    }
    
    @media (prefers-reduced-motion: reduce) {
      .splash-io-root {
        transition: none !important;
      }
    }
  `;

  document.addEventListener("DOMContentLoaded", () => {
    // Создаем сплэш-экран
    const splash = document.createElement('div');
    splash.className = 'splash-io-root';
    
    const content = document.createElement('div');
    content.className = 'splash-io-content';
    
    const title = document.createElement('div');
    title.className = 'splash-io-title';
    title.textContent = SPLASH_CONFIG.title;
    
    const subtitle = document.createElement('div');
    subtitle.className = 'splash-io-sub';
    subtitle.textContent = SPLASH_CONFIG.subtitle;
    
    content.appendChild(title);
    content.appendChild(subtitle);
    splash.appendChild(content);
    
    // Добавляем стили
    const style = document.createElement('style');
    style.textContent = SPLASH_STYLES;
    document.head.appendChild(style);
    
    // Добавляем сплэш в DOM
    document.body.appendChild(splash);
    
    // Плавное появление
    requestAnimationFrame(() => {
      splash.style.opacity = "1";
    });

    // Убираем сплэш через 3 секунды
    setTimeout(() => {
      splash.style.opacity = "0";

      // После завершения анимации удаляем сплэш из DOM
      splash.addEventListener(
        "transitionend",
        () => {
          if (splash.parentNode) {
            splash.parentNode.removeChild(splash);
          }
          // Удаляем стили
          if (style.parentNode) {
            style.parentNode.removeChild(style);
          }
        },
        { once: true }
      );
    }, 3000);
  });
})();
