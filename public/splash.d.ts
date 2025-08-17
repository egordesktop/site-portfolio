interface SplashOptions {
  minDurationMs?: number; // минимум показа, по умолчанию 400
  maxDurationMs?: number; // фьюз, по умолчанию 1500
  title?: string;         // "Welcome"
  subtitle?: string;      // "Loading…"
  logoEmoji?: string;     // "✨" если нет логотипа
}

interface SplashScreen {
  constructor(options?: SplashOptions);
  show(): void;
  hide(): void;
}

declare global {
  interface Window {
    SplashScreen: typeof SplashScreen;
    splashInstance: SplashScreen;
  }
}

export { SplashOptions, SplashScreen };
