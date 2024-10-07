"use client"
import React from 'react';
import { Phone } from 'lucide-react';

export default function HeroSection() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/96599974240', '_blank');
  };
  
  return (
    <div className="h-[calc(100vh-64px)] bg-yellow-400 relative">
      {/* طبقة التعتيم */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* المحتوى الرئيسي */}
      <div className="relative container mx-auto px-4 h-full">
        <div className="flex flex-col items-center justify-center h-full text-center">
          {/* العنوان الرئيسي */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            تاكسي صباح السالم
          </h1>
          
          {/* النص الترحيبي */}
          <div className="max-w-2xl mx-auto text-lg md:text-xl text-white space-y-4 mb-8">
            <p>
              مرحبًا بكم في مدونة تاكسي صباح السالم! نحن فخورون بتقديم أحدث السيارات وأمهر السائقين لراحتكم
            </p>
            <p>
              إننا نتفهم أهمية الوصول إلى وجهتكم بأمان وفي الوقت المحدد
            </p>
          </div>

          {/* رقم الهاتف */}
          <div className="text-3xl font-bold text-white mb-8">
            99974240
          </div>
          
          {/* أزرار التواصل */}
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <span>واتساب</span>
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>اتصل بنا</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}