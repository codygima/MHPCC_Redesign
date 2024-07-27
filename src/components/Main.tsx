import React from "react";
import VCHPC from "./sub_components/VCHPC";
import Mission from "./sub_components/Mission";
import Vision from "./sub_components/Vision";
import Focus from "./sub_components/Focus";

export default function Main() {
  return (
    <>
      <div className="flex flex-col rounded-box p-4 m-4 bg-accent">
        <p className="text-center text-black text-2xl">
          The MHPCC DSRC, established in 1993, is an Air Force research
          Laboratory (AFRL) Center managed by the University of Hawaii under
          contract to the Air Force Research Laboratory's Directed Energy
          Directorate at Kirtland Air Force Base, New Mexico. The MHPCC DSRC
          operates as one of the five DoD Supercomputing Resource Centers in the
          DoD's High Performance Computing Modernization Program (HPCMP).
        </p>
      </div>
      <VCHPC />
      <Mission />
      <Vision />
      <Focus />
    </>
  );
}
