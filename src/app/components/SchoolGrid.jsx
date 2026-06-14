import { schools } from "../data/schools";
import SchoolCard from "./SchoolCard";

export default function SchoolGrid({ searchTerm, city,rating, fees,board }) {

  const filteredSchools = schools.filter((school) => {
 
    const matchesSearch =
      school.name.toLowerCase().includes(
        searchTerm.toLowerCase()
      );

    const matchesCity =
      city === "" || school.location === city;
    const matchesRating=
    rating===""||
    school.rating>=Number(rating);
    const matchesBoard =
   board === "" ||
  school.board === board;
    const feeAmount = Number(
  school.fees.replace(/[₹,]/g, "")
);
const matchesFees =
  fees === "" ||
  (fees === "low" && feeAmount < 200000) ||
  (fees === "medium" &&
    feeAmount >= 200000 &&
    feeAmount <= 500000);
    return (matchesSearch && matchesCity && matchesRating && matchesFees && matchesBoard);
  }
  
);
if (filteredSchools.length === 0) {
  return (
    <div id="schools" className="text-center py-20">
      <h2 className="text-2xl font-bold">
        No Schools Found
      </h2>

      <p className="text-gray-500 mt-2">
        Try changing your filters.
      </p>
    </div>
  );
}
  return (
    <div id="schools" className="max-w-7xl mx-auto px-4 py-12 pt-24">
     <div className="text-center mb-10">
  <h2 className="text-4xl font-bold">
    Featured Schools
  </h2>

  <p className="text-gray-600 mt-3">
    Discover top-rated schools based on
    location, fees and academic excellence.
  </p>
   </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredSchools.map((school) => (
          <SchoolCard
            key={school.id}
            school={school}
          />
        ))}

      </div>

    </div>
  );
}