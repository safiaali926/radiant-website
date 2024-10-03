import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<main>
    <div className="slider">
      <img src="https://mypsychiatrist.com/wp-content/uploads/2023/10/Psychologist-vs-Psychiatrist-pic-1.jpg" className="saturate-200	size-full opacity-80"></img>
      <div className="absolute top-40 inset-0 inset-y-40 flex-col flex items-center justify-center ">
        <h1 className="text-sky-700 font-bold text-5xl drop-shadow-lg mt-9 pt-9">Expert Care for Your Mental Health Journey!</h1>
        <p className="text-white text-2xl drop-shadow-md pt-2">Expert psychiatric care combining medication and therapy for comprehensive mental health.</p>
        <a href="/" className="bg-sky-700 hover:bg-white hover:text-black text-white py-2 px-6 rounded mt-4">Book Appointment</a>
      </div>

      <div>
        <h1 className="text-sky-700 font-bold text-4xl text-center mt-9 pt-4">Helping You Navigate Life's Ups and Downs!</h1>
        <p className="text-gray-800 font-thin text-justify text-center mt-4  mb-9 mx-auto pb-4 text-pretty	max-w-4xl	">At Radiant Mind, our team of highly trained mental health psychiatrists is committed to providing compassionate, evidence-based psychiatric care tailored to your individual needs. We specialize in diagnosing, treating, and managing a wide range of mental health conditions, from anxiety and depression to more complex disorders like bipolar disorder, schizophrenia, and PTSD.</p>
        <div className=" flex gap-x-4 p-6">
          <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321053/doctor-and-depressed-teen.jpg" className="w-96 h-64 border-sky-400 rounded-2xl border-4"></img>
          <img src="https://wnj.org/wp-content/uploads/2023/05/wilson-n-jones-3-Warning-Signs-That-May-Indicate-Mental-Illness-How-Inpatient-Treatment-Can-Help.jpg" className="w-96 h-64 border-sky-400 rounded-2xl border-4"></img>
          <img src="https://www.mcleanhospital.org/sites/default/files/styles/image_component/public/shared/M1019522-News.jpg?itok=fdYBd_WS" className="w-96 h-64 border-sky-400 rounded-2xl border-4"></img>

        </div>
        <div className="flex items-center bg-sky-700">
          <div className="w-1/2 bg-sky-700 mt-4 ">
            <h1 className=" text-2xl pt-8 pr-8 pl-8 font-bold text-white">Conditions We Treat...</h1>
            <ul className="text-justify p-8 text-white">
              <li className="before:content-['•'] before:mr-2 pr-4"><b>Mood Disorders:</b> Depression, bipolar disorder, dysthymia, and seasonal affective disorder.</li>
              <li className="before:content-['•'] before:mr-2 pr-4"><b>Anxiety Disorders:</b> Generalized anxiety disorder (GAD), panic disorder, social anxiety, and obsessive-compulsive disorder (OCD).</li>
              <li className="before:content-['•'] before:mr-2 pr-4"><b>Trauma and Stress-Related Disorders:</b> Post-traumatic stress disorder (PTSD) and acute stress reactions.</li>
              <li className="before:content-['•'] before:mr-2 pr-4"><b>Psychotic Disorders:</b> Schizophrenia, schizoaffective disorder, and delusional disorders.</li>
              <li className="before:content-['•'] before:mr-2 pr-4"><b>Substance Use Disorders:</b> Addressing co-occurring mental health and substance abuse issues.
              </li>
            </ul>

          </div>
          <div className=" w-1/2 mt-4 rounded-lg p-5">
            <img src="https://manyheadedmonster.com/wp-content/uploads/2020/05/https3a2f2fblogs-images.forbes.com2fbernardmarr2ffiles2f20192f052fthe-incredible-ways-artificial-intelligence-is-now-used-in-mental-health-1200x720-1.jpg?w=640" className="border-sky-400 rounded-2xl border-4"></img>
          </div>
        </div>
        <div>
          <h1 className="text-sky-700 font-bold text-5xl text-center mt-9 pt-4">Why Choose Us?</h1>
          <p className="text-gray-800 font-thin text-center mt-4  mb-1 pb-1">Compassionate Care, Expert Solutions, Lasting Wellness.</p>
        </div>
      </div>
      <div className="flex items-stretch grid-cols-4 gap-x-9 text-center justify-center  ">
        <div className="p-6 "><img src="https://static.thenounproject.com/png/41328-200.png" className="size-40 p-2 m-3"></img><b>Comprehensive Services</b></div>
        <div className="p-6 "><img src="https://static.thenounproject.com/png/1030139-200.png" className="size-40 p-2 m-3"></img><b>Skilled and Collaborative <br></br>Specialists</b></div>
        <div className="p-6"><img src="https://www.svgrepo.com/show/447467/privacy.svg" className="size-40 p-2 m-3"></img><b>Confidential and Private <br></br> Care</b></div>
        <div className="p-6"><img src="https://cdn-icons-png.flaticon.com/512/2913/2913000.png" className="size-40 p-2 m-3"></img><b>Ongoing Support</b></div>

      </div>

      

  


</div>
    



  </main>

  );
}
