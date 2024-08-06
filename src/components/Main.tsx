import React from "react";
import VCHPC from "./sub_components/VCHPC";
import Mission from "./sub_components/Mission";
import Vision from "./sub_components/Vision";
import Focus from "./sub_components/Focus";

export default function Main() {
  return (
    <>
      <div className="flex flex-col rounded-btn m-4">
        <p className="rounded-box bg-base-100 font-black text-center text-secondary text-2xl p-24">
          The MHPCC DSRC, established in 1993, is an Air Force research
          Laboratory (AFRL) Center managed by the University of Hawaii under
          contract to the Air Force Research Laboratory's Directed Energy
          Directorate at Kirtland Air Force Base, New Mexico. The MHPCC DSRC
          operates as one of the five DoD Supercomputing Resource Centers in the
          DoD's High Performance Computing Modernization Program (HPCMP).
        </p>
      </div>
      <div className="flex flex-col lg:rounded-btn lg:px-5 lg:py-10">
        <div className="flex justify-end">
          <div className="flex items-center justify-evenly m-4 h-96 rounded-box lg:w-1/2 lg:bg-prllx3 lg:bg-cover"></div>
          <VCHPC />
        </div>
        <div className="flex justify-start">
          <Mission />
          <div className="flex items-center justify-evenly m-4 h-96  rounded-box lg:w-1/2 lg:bg-prllx5 lg:bg-cover"></div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center justify-evenly m-4 h-96 rounded-box lg:w-1/2 lg:bg-prllx4 lg:bg-cover"></div>
          <Vision />
        </div>
        <Focus />
      </div>
    </>
  );
}
