import {
  CVNoteOption1,
  CVNoteOption2,
  CVNoteOption3,
  CVNoteOption4,
  CVNoteOption5,
} from '@/app/components/Experience_CVNote_Options';

export default function CVNotePreview() {
  return (
    <div className="min-h-screen bg-light-gray">
      <div className="py-12 text-center bg-charcoal text-white">
        <h1 className="text-3xl font-bold">CV Note Options Preview</h1>
        <p className="mt-2 text-gray-300">Choose your preferred style for the bottom of the Experience section</p>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-6 space-y-16">
        {/* Option 1 */}
        <div>
          <div className="mb-4 pb-4 border-b-2 border-orange">
            <h2 className="text-xl font-bold text-charcoal">Option 1: Simple Centered Text</h2>
            <p className="text-sm text-medium-gray mt-1">Clean, minimal, doesn't draw too much attention</p>
          </div>
          <div className="bg-light-gray p-8 rounded-lg">
            <CVNoteOption1 />
          </div>
        </div>

        {/* Option 2 */}
        <div>
          <div className="mb-4 pb-4 border-b-2 border-orange">
            <h2 className="text-xl font-bold text-charcoal">Option 2: Subtle Card Style</h2>
            <p className="text-sm text-medium-gray mt-1">Slightly more prominent with background card</p>
          </div>
          <div className="bg-light-gray p-8 rounded-lg">
            <CVNoteOption2 />
          </div>
        </div>

        {/* Option 3 */}
        <div>
          <div className="mb-4 pb-4 border-b-2 border-orange">
            <h2 className="text-xl font-bold text-charcoal">Option 3: Icon with Text (Compact)</h2>
            <p className="text-sm text-medium-gray mt-1">Compact with document icon, professional look</p>
          </div>
          <div className="bg-light-gray p-8 rounded-lg">
            <CVNoteOption3 />
          </div>
        </div>

        {/* Option 4 */}
        <div>
          <div className="mb-4 pb-4 border-b-2 border-orange">
            <h2 className="text-xl font-bold text-charcoal">Option 4: Prominent Call-to-Action</h2>
            <p className="text-sm text-medium-gray mt-1">Bold and prominent, strong CTA with button</p>
          </div>
          <div className="bg-light-gray p-8 rounded-lg">
            <CVNoteOption4 />
          </div>
        </div>

        {/* Option 5 */}
        <div>
          <div className="mb-4 pb-4 border-b-2 border-orange">
            <h2 className="text-xl font-bold text-charcoal">Option 5: Minimal Handwritten</h2>
            <p className="text-sm text-medium-gray mt-1">Casual, personal touch with handwritten font</p>
          </div>
          <div className="bg-light-gray p-8 rounded-lg">
            <CVNoteOption5 />
          </div>
        </div>
      </div>

      <div className="py-12 text-center bg-charcoal text-white">
        <p className="text-lime font-bold">Ready to choose? Let me know which option you prefer!</p>
      </div>
    </div>
  );
}
