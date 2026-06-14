"use client";

import { useState } from "react";

import Hero from "./components/Hero";
import Filters from "./components/Filters";
import SchoolGrid from "./components/SchoolGrid";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("");
  const [rating, setRating] = useState("");
  const [fees, setFees] = useState("");
  const [board, setBoard] = useState("");
  const [appliedBoard, setAppliedBoard] = useState("");
  const [appliedRating, setAppliedRating] = useState("");
  const [appliedFees, setAppliedFees] = useState("");
  const handleApplyFilters = () => {
  setAppliedBoard(board);
  setAppliedRating(rating);
  setAppliedFees(fees);
};
  return (
    <main className="min-h-screen bg-gray-50">
<Navbar/>
      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        city={city}
        setCity={setCity}
      />
      <Filters
  board={board}
  setBoard={setBoard}
  rating={rating}
  setRating={setRating}
  fees={fees}
  setFees={setFees}
   handleApplyFilters={handleApplyFilters}
/>

      <SchoolGrid
        searchTerm={searchTerm}
        city={city}
        board={appliedBoard}
        rating={appliedRating}
        fees={appliedFees}
      />
<FAQ/>
<Footer/>
    </main>
  );
}