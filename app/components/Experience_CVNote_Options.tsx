// OPTION 1: Simple Centered Text
export function CVNoteOption1() {
  return (
    <div className="text-center mt-12 pt-8 border-t border-medium-gray/20">
      <p className="text-medium-gray text-sm">
        For complete experience details, {' '}
        <a
          href="/KatieKelly_CV_2025.pdf"
          className="text-orange font-medium hover:underline"
          download
        >
          download my CV
        </a>
      </p>
    </div>
  );
}

// OPTION 2: Subtle Card Style
export function CVNoteOption2() {
  return (
    <div className="mt-12">
      <div className="bg-white/50 border border-medium-gray/20 rounded-lg p-6 text-center">
        <p className="text-medium-gray">
          Want the full picture? {' '}
          <a
            href="/KatieKelly_CV_2025.pdf"
            className="text-orange font-semibold hover:text-charcoal transition-colors"
            download
          >
            Download my complete CV
          </a>
        </p>
      </div>
    </div>
  );
}

// OPTION 3: Icon with Text (Compact)
export function CVNoteOption3() {
  return (
    <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-medium-gray/20">
      <svg className="w-4 h-4 text-medium-gray" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
      <p className="text-medium-gray text-sm">
        <a
          href="/KatieKelly_CV_2025.pdf"
          className="text-orange font-medium hover:underline"
          download
        >
          Download complete CV
        </a>
        {' '}for full experience details
      </p>
    </div>
  );
}

// OPTION 4: Prominent Call-to-Action Box
export function CVNoteOption4() {
  return (
    <div className="mt-16">
      <div className="bg-gradient-to-r from-light-gray to-white rounded-lg p-8 text-center shadow-sm">
        <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
          Want More Details?
        </h3>
        <p className="text-medium-gray mb-4">
          Download my complete CV for full experience details and additional accomplishments
        </p>
        <a
          href="/KatieKelly_CV_2025.pdf"
          download
          className="inline-flex items-center gap-2 bg-orange text-white font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download Complete CV
        </a>
      </div>
    </div>
  );
}

// OPTION 5: Minimal Inline (Handwritten Font)
export function CVNoteOption5() {
  return (
    <div className="text-center mt-12">
      <p className="font-handwritten text-2xl text-charcoal">
        For the full story,{' '}
        <a
          href="/KatieKelly_CV_2025.pdf"
          className="text-orange hover:underline"
          download
        >
          grab my CV
        </a>
      </p>
    </div>
  );
}
