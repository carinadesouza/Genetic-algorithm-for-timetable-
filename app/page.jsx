// pages/index.js
"use client";
import React, { useState } from "react";

import Timetable from "./Timetable";

const Home = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-6 text-gray-400 font-serif ">Timetable generator</h1>
      <Timetable/>
      
    </div>
  );
};

export default Home;
