import React from "react";

export default function Vision() {
  return (
    <>
      <div className="rounded-box w-auto h-auto py-8 px-12 m-8 overflow-scroll bg-base-100 flex justify-center items-center lg:h-96 lg:w-1/2 lg:m-4">
        <div className="flex flex-col">
          <h2 className="text-2xl text-primary m-2 font-medium">Our Vision</h2>
          <p className="text-secondary text-xl font-light">
            A cadre of experts immersed in a culture of innovation and
            collaboration, working together as HPCMP pathfinders to explore,
            evaluate, and apply emerging HPC technology, develop HPC-backed
            solutions for non-traditional users, and enhance user productivity
            through a modern HPC ecosystem.
          </p>
        </div>
      </div>
    </>
  );
}
