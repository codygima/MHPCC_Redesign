import React from "react";

export default function Focus() {
  return (
    <>
      <div className="rounded-box w-auto py-8 px-12 m-8 bg-base-100">
        <h2 className="text-2xl text-primary font-medium mt-2">
          Areas of Focus
        </h2>
        <li className="text-secondary text-xl font-light m-1">
          Emerging Technology - Reduce risk and improve performance by
          transitioning HPC research and benchmarking of hardware, application
          software, and refactoring approaches into HPCMP acquisition and
          operations{" "}
        </li>
        <li className="text-secondary text-xl font-light m-1">
          HPC-backed Solutions - Develop breakthrough, HPC-backed solutions for
          high priority DoD use cases through focused application development
          and technical assistance by Vanguard Center Tiger Teams
        </li>
        <li className="text-secondary text-xl font-light m-1">
          Lowering Barriers (High Productivity Computing) - Advance DoD
          productivity through a modern HPC ecosystem that integrates HW and SW
          to create dynamic workflows, increase accessibility, and enhance
          collaboration
        </li>
      </div>
    </>
  );
}
