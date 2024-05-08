// Import React and any other dependencies you might need
import { rubikFont } from '@/styles/fonts';
import React from 'react';
import { Separator } from '../ui/separator';

/**
 * How It Works section for the Home page.
 * @returns The How It Works section as a React element.
 */
const HowItWorksSection: React.FC = () => {
  // Example steps data
  const steps = [
    {
      title: 'Choose Your Coffee Preferences',
      description:
        'Select your preferred coffee types, roasts, and brewing methods to tailor your coffee journey.',
    },
    {
      title: 'Explore & Enjoy',
      description:
        'Discover new coffee spots, learn brewing tips, and enjoy curated selections based on your tastes.',
    },
    {
      title: 'Share Your Coffee Experience',
      description:
        'Login with Google and share your thoughts by rating and reviewing your favorite coffee shops and drinks. Your reviews help others discover the best coffee spots.',
    },
  ];

  return (
    <section className="px-4 rounded-lg py-12 justify-center">
      <h2
        className={`py-2 text-5xl font-bold mb-4 text-center ${rubikFont.className}`}
      >
        How It Works
      </h2>
      <div className="flex justify-center">
        <div className="w-full sm:w-4/5 md:w-3/4	lg:w-1/2 p-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center mb-4 rounded-lg p-4 border-2"
            >
              <div className="flex-none font-bold rounded-full bg-secondary text-foreground flex items-center justify-center h-12 w-12 mr-3">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-primary-light">
                  {step.title}
                </p>
                <Separator />

                <p className="text-secondary-foreground text-sm pt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
