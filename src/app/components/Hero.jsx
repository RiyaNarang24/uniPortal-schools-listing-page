export default function Hero({searchTerm,setSearchTerm,city,setCity}){
    return (
        <section id="home" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 pt-24">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold">
                    Find the perfect school for your Child
                </h1>
                <p className="mt-6 text-lg text-blue-100">
                    Compare schools, fees, ratings and facilities across India in one place.
                </p>
                <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
                    <input
                    type="text"
                    placeholder="Search Schools.."
                    value={searchTerm || ""}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    className="bg-white text-black px-4 py-3 rounded-xl w-full md:w-96"/>
                    <select className="bg-white text-black px-4 py-3 rounded-xl" 
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}>
                    <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Dehradun">Dehradun</option>
          </select>

          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300"
         onClick={() =>
    document
      .getElementById("schools")
      ?.scrollIntoView({ behavior: "smooth" })
  }>
            Explore Schools
          </button>
        </div>
      </div>
    </section>
  );
}
