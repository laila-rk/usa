import React from "react";

const Resources = () => {
  return (
    /* Added pt-24 (mobile) and lg:pt-32 (desktop) to ensure 
       the title starts below your fixed header with elegant breathing room.
    */
    <div className="min-h-screen bg-[#050a12] text-white pt-24 lg:pt-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Sub-header accent line for premium feel */}
        <div className="w-12 h-[1px] bg-[#c5a059] mb-6" />
        
        <h1 
          className="text-4xl lg:text-6xl font-serif text-[#c5a059] mb-6 tracking-tight"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Resources
        </h1>
        
        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed font-light tracking-wide">
          An curated collection of essential documents, breeder information, 
          and helpful links for the Northern Virginia Brittany Club community.
        </p>

        {/* Placeholder for future Grid */}
        <div className="mt-16 border-t border-white/5 pt-10">
           {/* Your resource cards will go here */}
        </div>
      </div>
    </div>
  );
};

export default Resources;
