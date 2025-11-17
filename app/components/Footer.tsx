export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="text-sm text-gray-400 text-center">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>&copy; 2025 Katie Kelly</span>
            <span className="hidden sm:inline">|</span>
            <span>SVP Operations</span>
            <span className="hidden sm:inline">|</span>
            <a
              href="mailto:katiemkelly6@gmail.com"
              className="hover:text-lime transition-colors"
            >
              katiemkelly6@gmail.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="https://www.linkedin.com/in/katherinemkelly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
