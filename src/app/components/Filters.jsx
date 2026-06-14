export default function Filters({rating,setRating,fees,setFees,board,setBoard,handleApplyFilters}) {
  return (
    <section className="relative -mt-4 max-w-6xl mx-auto px-4">

      <div className="bg-white rounded-2xl shadow-lg p-5">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <select className="bg-gray-50 border border-gray-200 rounded-xl p-3"
          value={board}
          onChange={(e)=>setBoard(e.target.value)}>
             <option value="">📚 Board</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="IB">IB</option>
          </select>

          <select className="bg-gray-50 border border-gray-200 rounded-xl p-3"
          value={rating}
          onChange={(e)=>setRating(e.target.value)}>
            <option value="">⭐ Rating</option>
            <option value="4">4+ Stars</option>
            <option value="4.5">4.5+ Stars</option>
          </select>

          <select className="bg-gray-50 border border-gray-200 rounded-xl p-3"
          value={fees}
          onChange={(e)=>setFees(e.target.value)}>
            <option value="">💰 Fees</option>
            <option value="low">Below ₹2 Lakh</option>
            <option value="medium">₹2–5 Lakh</option>
          </select>

          <button className="bg-blue-600 text-white rounded-xl p-3 font-semibold hover:bg-blue-700 transition"
          onClick={handleApplyFilters}>
            Apply Filters
          </button>

        </div>

      </div>

    </section>
  );
}