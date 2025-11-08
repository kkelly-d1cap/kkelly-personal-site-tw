export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <p className="text-sm text-gray-400 text-center">
          &copy; {currentYear} Katie Kelly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
