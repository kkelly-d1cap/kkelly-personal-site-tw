import Option1 from '@/app/components/EducationHighlights_Option1';
import Option2 from '@/app/components/EducationHighlights_Option2';
import Option3 from '@/app/components/EducationHighlights_Option3';
import Option4 from '@/app/components/EducationHighlights_Option4';

export default function EducationPreview() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-12 text-center bg-charcoal text-white">
        <h1 className="text-3xl font-bold">Education & Highlights - Design Options</h1>
        <p className="mt-2 text-gray-300">Scroll to see 4 different layout options</p>
      </div>

      {/* Option 1 */}
      <div className="py-8 border-b-4 border-orange">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-charcoal">Option 1: Horizontal with Text</h2>
          <p className="text-medium-gray">Thin bar, logo + text side-by-side, dark background</p>
        </div>
        <Option1 />
      </div>

      {/* Option 2 */}
      <div className="py-8 border-b-4 border-orange">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-charcoal">Option 2: Icon Grid</h2>
          <p className="text-medium-gray">Logo-focused with text below, light background</p>
        </div>
        <Option2 />
      </div>

      {/* Option 3 */}
      <div className="py-8 border-b-4 border-orange">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-charcoal">Option 3: Ultra Compact</h2>
          <p className="text-medium-gray">Logo-only with dividers, hover for details</p>
        </div>
        <Option3 />
      </div>

      {/* Option 4 */}
      <div className="py-8">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-charcoal">Option 4: Card Style</h2>
          <p className="text-medium-gray">Small cards with shadows, premium look</p>
        </div>
        <Option4 />
      </div>

      <div className="py-12 text-center bg-charcoal text-white">
        <p className="text-lime font-bold">Note: Logos couldn't be downloaded from the URLs provided</p>
        <p className="text-gray-300 mt-2">You'll need to upload them manually to the public/ folder</p>
      </div>
    </div>
  );
}
