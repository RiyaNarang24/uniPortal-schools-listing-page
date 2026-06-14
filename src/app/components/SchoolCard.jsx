import Image from "next/image";
export default function SchoolCard({school}){
    
    return(
        <div className="relative group bg-white rounded-xl shadow-md p-4 transition duration-300 hover:shadow-xl hover:-translate-y-2">
             <Image
        src={school.image}
        alt={school.name}
        width={400}
        height={250}
        className="w-full h-48 object-cover rounded-lg"
        />
        <span  className={`absolute top-3 left-3 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition
    ${
      school.status === "open"
        ? "bg-green-600"
        : "bg-red-600"
    }`}>
          {school.status==="open"?"Admission Open": "Admission Closed"}
         </span>
            <h2 className="text-xl font-bold group-hover:text-blue-600">
                {school.name}
            </h2>
           <p className="text-gray-600 mt-2">
             📍 {school.location}
           </p>
           <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-lg mt-2">
                {school.board}
            </span>
           <div className="inline-flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg mt-2">
           ⭐ {school.rating}
           </div>
           <p className="mt-3 text-lg font-bold text-green-600">
               {school.fees}/year
           </p>
           <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
         </button>
        </div>

  );
}