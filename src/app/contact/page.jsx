"use client"

import Header from '../_Components/Header';
import Footer from '../_Components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Header />
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-yellow-800">تواصل معنا</h1>
        
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
          <div className="md:flex-shrink-0 bg-yellow-400 md:w-2/5 p-8">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-900">معلومات التواصل</h2>
            <div className="space-y-3 text-yellow-800">
              <p>مبارك الكبير، صباح السالم قطعة 9</p>
              <p>شارع محمد طاحوس بن ناصر طاحوس</p>
              <p>الكويت</p>
              <p className="font-bold">الهاتف: 99974240</p>
            </div>
          </div>

          <div className="p-8 md:w-3/5">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-800">أرسل لنا رسالة</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-yellow-700">الاسم</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-yellow-700">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-yellow-700">الرسالة</label>
                <textarea id="message" name="message" rows="4" className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" required></textarea>
              </div>
              <button type="submit" className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out">إرسال</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}