export default function Software() {
  const software = [
    { name: "anaconda2", version: "4.4.0" },
    { name: "", version: "5.0.1" },
    { name: "anaconda3", version: "5.0.1" },
    { name: "", version: "5.2.0" },
    { name: "at", version: "11.0" },
    { name: "atlas", version: "10.3" },
    { name: "bazel", version: "0.13.0 (default)" },
    { name: "", version: "0.15.2" },
    { name: "", version: "0.9.0" },
    { name: "boost", version: "1.63.0" },
    { name: "caffe", version: "5.0" },
    {
      name: "There is way more Software.",
      version: "Way too many to write out",
    },
  ];

  return (
    <>
      <div className="mt-4">
        <ul className="timeline timeline-vertical">
          {software.map((item, index) => (
            <li key={index}>
              {index !== 0 && <hr />}
              <div
                className={`timeline-box text-secondary text-lg font-bold ${
                  index % 2 === 0 ? "timeline-start" : "timeline-end"
                }`}
              >
                {item.name} {item.version}
              </div>
              {index !== software.length - 1 && <hr />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
