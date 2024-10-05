function Footer() {
  return (<>
  <footer className="flex justify-around space-x-9 p-5 bg-gray-800">
   
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ml-8 pt-5">
    <div>
    <h1 className="text-2xl font-semibold text-white">Radiant Mind</h1>
    <p className="text-gray-400 mb-4 text-justify-left pt-2">Expert psychiatric care combining medication and therapy for comprehensive mental health...</p>
    </div>

    <div className="">
    <h1 className="text-lg font-semibold text-white">Quick Links</h1>
    <ul className="text-left pb-8 text-gray-400 pt-2">
    <li><a href="/" className="hover:text-white">Home</a></li> 
    <li><a href="/" className="hover:text-white">About</a></li> 
    <li><a href="/" className="hover:text-white">Contact</a></li> 
    </ul>   
    </div>

    <div className="">
        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
        <ul className="text-left">
          <li><a href="/" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i> Facebook</a></li>
          <li><a href="/" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="/" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>

    </div>
<div className="basis-3/6">
    <div className=" mt-8 text-center text-gray-500 text-sm">
      <p>&copy; 2024 Company Name. All rights reserved.</p>
</div>
</div>
  </footer>
  
  
  
  </>
  )
}

export default Footer;