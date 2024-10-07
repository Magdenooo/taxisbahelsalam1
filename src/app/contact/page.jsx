import Head from 'next/head';
import Footer from '../_Components/Footer';
import Header from '../_Components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen bg-yellow-50">
        <Header/>
      <Head>
        <title>تواصل معنا</title>
        <meta name="description" content="صفحة التواصل معنا" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-yellow-800">تواصل معنا</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-yellow-400 md:w-1/3 p-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-900">معلومات التواصل</h2>
                <div className="space-y-2 text-yellow-800">
                  <p>مبارك الكبير، صباح السالم قطعة 9</p>
                  <p>شارع محمد طاحوس بن ناصر طاحوس</p>
                  <p>الكويت</p>
                  <p className="font-bold">الهاتف: 99974240</p>
                  <p className="mt-4 font-bold">الإحداثيات:</p>
                  <p>29°15'26.6"N 48°04'35.5"E</p>
                </div>
              </div>

              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-semibold mb-6 text-yellow-800">أرسل لنا رسالة</h2>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-yellow-700">الاسم</label>
                    <input type="text" id="name" name="name" className="w-full p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-yellow-700">البريد الإلكتروني</label>
                    <input type="email" id="email" name="email" className="w-full p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-yellow-700">الرسالة</label>
                    <textarea id="message" name="message" rows="4" className="w-full p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" required></textarea>
                  </div>
                  <button type="submit" className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">إرسال</button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <h2 className="text-2xl font-semibold p-6 bg-yellow-400 text-yellow-900">موقعنا</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.5636338376745!2d48.07430871507567!3d29.257388282150305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDE1JzI2LjYiTiA0OMKwMDQnMzUuNSJF!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}