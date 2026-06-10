const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-accent font-medium">Lost</p>
        <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold text-primary">404</h1>
        <p className="text-lg text-muted-foreground">Oops! This page could not be found.</p>
        <a href="/" className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-accent-foreground font-medium transition-colors hover:bg-accent/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
