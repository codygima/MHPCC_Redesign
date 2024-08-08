export default function Links() {
  const linkStyle =
    "transition duration-700 ease-in-out hover:text-[#52bdb2] hover:scale-105";
  return (
    <>
      <div className="w-1/2">
        <section className="flex flex-col rounded-box h-auto bg-base-100 m-8">
          <h1 className="flex justify-center text-[#93823B] font-bold">
            Local Resources
          </h1>
          <div className="flex justify-start p-4 text-warning font-thin">
            <ul>
              <li className={linkStyle}>
                <a href="https://www.bbc.com" target="_blank">
                  Hardware
                </a>
              </li>
              <li className={linkStyle}>
                <a href="https://www.cnn.com" target="_blank">
                  Software
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col rounded-box h-auto bg-base-100 m-8">
          <h1 className="flex justify-center text-[#93823B] font-bold">
            User Guides
          </h1>
          <div className="flex justify-start p-4 text-warning font-thin">
            <ul>
              <li className={linkStyle}>
                <a href="https://www.khanacademy.org" target="_blank">
                  Modules User Guide
                </a>
              </li>
              <li className={linkStyle}>
                <a href="https://www.coursera.org" target="_blank">
                  Archive User Guide
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col rounded-box h-auto bg-base-100 m-8">
          <h1 className="flex justify-center text-[#93823B] font-bold">
            Batch Processing
          </h1>
          <div className="flex justify-start flex-row p-4 text-warning font-thin">
            <ul>
              <li className={linkStyle}>
                <a href="https://www.netflix.com" target="_blank">
                  Vistors
                </a>{" "}
              </li>
            </ul>
            <span className="text-secondary hover:scale-10 pl-1">
              - Popular streaming service for movies and TV shows.
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
