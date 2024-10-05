
export default function Home() {
  return (
    <main className="w-full">
      <div className="slider relative flex-basis-0  ">
        <img 
          src="https://mypsychiatrist.com/wp-content/uploads/2023/10/Psychologist-vs-Psychiatrist-pic-1.jpg" 
          className="w-full h-auto saturate-200 opacity-80 object-cover"
          alt="Mental health care image"
        />
        <div className="absolute top-10 inset-y-90 flex-col flex items-center justify-center pt-9 mt-9 inset-x-10 text-center">
          <h1 className="text-sky-700 font-bold text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">
            Expert Care for Your Mental Health Journey!
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl drop-shadow-md pt-2">
            Expert psychiatric care combining medication and therapy for comprehensive mental health.
          </p>
          <a href="/" className="bg-sky-700 hover:bg-white hover:text-black text-white py-2 px-6 rounded mt-4">
            Book Appointment
          </a>
        </div>

        <div className="mt-12 px-4">
          <h1 className="text-sky-700 font-bold text-2xl sm:text-3xl md:text-4xl text-center mt-9 pt-4">
            Helping You Navigate Life's Ups and Downs!
          </h1>
          <p className="text-gray-800 font-thin text-justify text-center mt-4 mb-9 mx-auto max-w-4xl text-base sm:text-lg md:text-xl">
            At Radiant Mind, our team of highly trained mental health psychiatrists is committed to providing compassionate, evidence-based psychiatric care tailored to your individual needs.
          </p>

          <div className="flex flex-col md:flex-row gap-4 p-6 justify-center">
            <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321053/doctor-and-depressed-teen.jpg" 
                 className="w-full md:w-1/3 h-64 border-sky-400 rounded-2xl border-4 object-cover" alt="Image 1"/>
            <img src="https://wnj.org/wp-content/uploads/2023/05/wilson-n-jones-3-Warning-Signs-That-May-Indicate-Mental-Illness-How-Inpatient-Treatment-Can-Help.jpg" 
                 className="w-full md:w-1/3 h-64 border-sky-400 rounded-2xl border-4 object-cover" alt="Image 2"/>
            <img src="https://www.mcleanhospital.org/sites/default/files/styles/image_component/public/shared/M1019522-News.jpg?itok=fdYBd_WS" 
                 className="w-full md:w-1/3 h-64 border-sky-400 rounded-2xl border-4 object-cover" alt="Image 3"/>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-sky-700">
            <div className="w-full md:w-1/2 p-8">
              <h1 className="text-2xl font-bold text-white">Conditions We Treat...</h1>
              <ul className="text-white list-disc list-inside mt-4 space-y-2">
                <li><b>Mood Disorders:</b> Depression, bipolar disorder, dysthymia, and seasonal affective disorder.</li>
                <li><b>Anxiety Disorders:</b> Generalized anxiety disorder (GAD), panic disorder, social anxiety, and OCD.</li>
                <li><b>Trauma and Stress-Related Disorders:</b> PTSD and acute stress reactions.</li>
                <li><b>Psychotic Disorders:</b> Schizophrenia, schizoaffective disorder, and delusional disorders.</li>
                <li><b>Substance Use Disorders:</b> Addressing co-occurring mental health and substance abuse issues.</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-5">
              <img 
                src="https://manyheadedmonster.com/wp-content/uploads/2020/05/https3a2f2fblogs-images.forbes.com2fbernardmarr2ffiles2f20192f052fthe-incredible-ways-artificial-intelligence-is-now-used-in-mental-health-1200x720-1.jpg?w=640" 
                className="w-full border-sky-400 rounded-2xl border-4 object-cover" alt="AI in Mental Health"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <h1 className="text-sky-700 font-bold text-3xl sm:text-4xl md:text-5xl">Why Choose Us?</h1>
            <p className="text-gray-800 font-thin mt-4 text-lg sm:text-xl md:text-2xl">Compassionate Care, Expert Solutions, Lasting Wellness.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 text-center justify-center">
            <div className="p-6">
              <img src="https://static.thenounproject.com/png/41328-200.png" className="w-12 h-12 mx-auto" alt="Icon 1"/>
              <b>Comprehensive Services</b>
            </div>
            <div className="p-6">
              <img src="https://static.thenounproject.com/png/1030139-200.png" className="w-12 h-12 mx-auto" alt="Icon 2"/>
              <b>Skilled and Collaborative Specialists</b>
            </div>
            <div className="p-6">
              <img src="https://www.svgrepo.com/show/447467/privacy.svg" className="w-12 h-12 mx-auto" alt="Icon 3"/>
              <b>Confidential and Private Care</b>
            </div>
            <div className="p-6">
              <img src="https://cdn-icons-png.flaticon.com/512/2913/2913000.png" className="w-12 h-12 mx-auto" alt="Icon 4"/>
              <b>Ongoing Support</b>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
