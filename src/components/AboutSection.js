import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
            About
          </h2>
          <h3 className="text-lg text-gray-600 font-medium">
            Subheading for description or instructions
          </h3>
          <div className="space-y-4 text-black leading-relaxed">
            <p>
              Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
            </p>
            <p>
              Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content.
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/luzhenina-portrait-bio.jpg"
            alt="Portrait of Luzhenina"
            className="max-w-sm w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
