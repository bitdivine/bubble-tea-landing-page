export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5">
      <main className="text-center px-4">
        <h1 className="text-8xl md:text-9xl font-light tracking-tight text-foreground">
          Bubble Tea
        </h1>
      </main>
      <footer className="fixed bottom-8 left-0 right-0 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025. Built with love using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
