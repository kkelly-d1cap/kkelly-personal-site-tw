import {
  MinimalEducationOption1,
  MinimalEducationOption2,
  MinimalEducationOption3,
  MinimalEducationOption4,
  MinimalEducationOption5,
} from '@/app/components/EducationHighlights_Minimal_Options';

export default function EducationMinimalPreview() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-12 text-center bg-charcoal text-white">
        <h1 className="text-3xl font-bold">Minimal Education Banner Options</h1>
        <p className="mt-2 text-gray-300">Client-banner style, grayscale, understated</p>
      </div>

      {/* Simulated page context */}
      <div className="bg-light-gray py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">Experience Section Ends Here</h2>
          <p className="text-medium-gray">↓ Education Banner ↓</p>
        </div>
      </div>

      {/* Option 1 */}
      <div>
        <MinimalEducationOption1 />
        <div className="py-6 text-center bg-gray-50 border-b-2 border-orange">
          <h3 className="text-lg font-bold text-charcoal">Option 1: Logo-Only Grayscale</h3>
          <p className="text-sm text-medium-gray mt-1">Most minimal - just logos, grayscale, hover reveals color</p>
        </div>
      </div>

      {/* Option 2 */}
      <div className="mt-12">
        <div className="py-20 bg-light-gray text-center">
          <p className="text-medium-gray">↓ Experience ends ↓</p>
        </div>
        <MinimalEducationOption2 />
        <div className="py-6 text-center bg-gray-50 border-b-2 border-orange">
          <h3 className="text-lg font-bold text-charcoal">Option 2: Ultra Minimal with Dividers</h3>
          <p className="text-sm text-medium-gray mt-1">Vertical dividers, low opacity, very subtle</p>
        </div>
      </div>

      {/* Option 3 */}
      <div className="mt-12">
        <div className="py-20 bg-white text-center">
          <p className="text-medium-gray">↓ Experience ends ↓</p>
        </div>
        <MinimalEducationOption3 />
        <div className="py-6 text-center bg-gray-50 border-b-2 border-orange">
          <h3 className="text-lg font-bold text-charcoal">Option 3: Compact with Tiny Labels</h3>
          <p className="text-sm text-medium-gray mt-1">Small logos with minimal text labels</p>
        </div>
      </div>

      {/* Option 4 */}
      <div className="mt-12">
        <div className="py-20 bg-light-gray text-center">
          <p className="text-medium-gray">↓ Experience ends ↓</p>
        </div>
        <MinimalEducationOption4 />
        <div className="py-6 text-center bg-gray-50 border-b-2 border-orange">
          <h3 className="text-lg font-bold text-charcoal">Option 4: Subtle Grey Bar (Most Client-Like)</h3>
          <p className="text-sm text-medium-gray mt-1">Very low opacity, professional client banner style</p>
          <p className="text-xs text-lime mt-2">★ Recommended for minimalist aesthetic</p>
        </div>
      </div>

      {/* Option 5 */}
      <div className="mt-12">
        <div className="py-20 bg-white text-center">
          <p className="text-medium-gray">↓ Experience ends ↓</p>
        </div>
        <MinimalEducationOption5 />
        <div className="py-6 text-center bg-gray-50 border-b-2 border-orange">
          <h3 className="text-lg font-bold text-charcoal">Option 5: Desktop Only (Most Minimal)</h3>
          <p className="text-sm text-medium-gray mt-1">Hidden on mobile, only shows on desktop - ultimate minimalism</p>
        </div>
      </div>

      {/* Simulated Find Me */}
      <div className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-charcoal">Find Me Section Starts Here</h2>
      </div>

      <div className="py-12 text-center bg-charcoal text-white">
        <p className="text-lime font-bold mb-2">My Recommendation: Option 4</p>
        <p className="text-gray-300 text-sm">Most client-banner like, ultra subtle, professional</p>
      </div>
    </div>
  );
}
