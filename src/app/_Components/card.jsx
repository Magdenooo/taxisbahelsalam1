"use client"
import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function ContentSections() {
  const aboutCards = [
    {
      id: 1,
      title: "تاكسي صباح السالم",
      description: "نحن فخورون بتقديم أحدث السيارات وأمهر السائقين لراحتكم إننا نتفهم أهمية الوصول إلى وجهتكم بأمان وفي الوقت المحدد",
      imageUrl: "/42.jpg"
    },
    {
      id: 2,
      title: "تاكسي صباح السالم",
      description: "تجربة فريدة من نوعها للتنقل في الكويت إذا كنت تبحث عن سبيل موثوق ومريح للتنقل في الكويت، فلا تبحث بعيدًا، تاكسي صباح السالم هو الخيار L B C الأمثل لك. يعتبر تاكسي صباح السالم اجرة L B C واحدًا من أحدث خدمات التاكسي في صباح السالم، حيث يقدم تجربة رائعة للعملاء في جميع أنحاء البلاد.",
      imageUrl: "/43.jpg"
    }
  ];

  const serviceCards = [
    {
      id: 1,
      title: "تاكسي صباح السالم",
      description: "نحن هنا لنوفر لكم أحدث السيارات وأمهر السائقين لتجربة سفر مميزة في جميع مناطق الكويت.",
      imageUrl: "/40.jpg"
    },
    {
      id: 2,
      title: "تاكسي صباح السالم",
      description: "سوف تجد الراحه و الامن التي تبحث عنها و سوف تجد سيارات من افضل السيارات التي تتمناه LBC في",
      imageUrl: "/41.jpg"
    }
  ];

  const Card = ({ data, hasCallButton }) => (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={data.imageUrl}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative p-8">
        <div className="absolute top-0 right-8 w-20 h-1 bg-yellow-400 transform -translate-y-1/2" />
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {data.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-justify mb-6">
          {data.description}
        </p>

        {hasCallButton && (
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            اتصل بنا
          </button>
        )}
      </div>
    </div>
  );

  const SectionTitle = ({ title, description }) => (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
      )}
    </div>
  );

  return (
    <>
      {/* قسم من نحن */}
      <section className="py-16 bg-gradient-to-b from-yellow-400/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutCards.map((card) => (
              <Card key={card.id} data={card} />
            ))}
          </div>
        </div>
      </section>

      {/* قسم خدماتنا */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="خدماتنا"
            description="نوفر لك أفضل سيارات التاكسي المجهزة بأحدث التقنيات لضمان راحتك وسلامتك."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCards.map((card) => (
              <Card key={card.id} data={card} hasCallButton />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}