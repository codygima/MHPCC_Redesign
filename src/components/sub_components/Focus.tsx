import React from "react";

export default function Focus() {
  return (
    <>
      <div className="rounded-box h-auto w-1/2 p-4 m-4 bg-[#eeeeef]">
        <h2 className="text-2xl text-primary mt-2">Areas of Focus</h2>
        <li className="text-black text-xl m-1">
          Emerging Technology - Reduce risk and improve performance by
          transitioning HPC research and benchmarking of hardware, application
          software, and refactoring approaches into HPCMP acquisition and
          operations{" "}
        </li>
        <li className="text-black text-xl m-1">
          HPC-backed Solutions - Develop breakthrough, HPC-backed solutions for
          high priority DoD use cases through focused application development
          and technical assistance by Vanguard Center Tiger Teams
        </li>
        <li className="text-black text-xl m-1">
          Lowering Barriers (High Productivity Computing) - Advance DoD
          productivity through a modern HPC ecosystem that integrates HW and SW
          to create dynamic workflows, increase accessibility, and enhance
          collaboration
        </li>
      </div>
    </>
  );
}
