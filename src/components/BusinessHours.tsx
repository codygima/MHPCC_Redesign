export default function Business() {
  const holidays = [
    { name: "New Year's Day", date: "January 1" },
    { name: "Dr. M. L. King Day", date: "January 15" },
    { name: "Presidents' Day", date: "February 19" },
    { name: " Prince Kuhio Day", date: "March 26" },
    { name: "Good Friday", date: "March 29" },
    { name: "Presidents' Day", date: "February 19" },
    { name: "Memorial Day", date: "May 27" },
    { name: "King Kamehameha Day", date: "July 4" },
    { name: "Statehood Day", date: "August 16" },
    { name: "Labor Day", date: "September 2" },
    { name: "Election Day", date: "November 5" },
    { name: "Veterans Day", date: "November 11" },
    { name: "Thanksgiving", date: "November 28" },
    { name: " Christmas", date: "December 25" },
  ];

  const divClass = "bg-base-100 rounded-box p-4 tablet:p-8 m-4 w-full";
  const headerClass = "font-bold text-xl text-primary-dark";
  const paraClass = "text-secondary";

  return (
    <>
      <section
        id="screen-section"
        className="flex flex-col p-4 tablet:flex-row"
      >
        <section
          id="info-section"
          className="flex flex-col items-center tablet:flex tablet:justify-center mx-4 tablet:w-1/2 tablet:mx-8"
        >
          <div className={divClass}>
            <h2 className={headerClass}>Normal Business Hours</h2>
            <p className={paraClass}>
              08:00 - 17:00 HST (GMT -10 hours), Monday - Friday, excluding
              holidays.
            </p>
          </div>
          <div className={divClass}>
            <h2 className={headerClass}>Weekends</h2>
            <p className={paraClass}>
              During weekends MHPCC will operate at a reduced staffing level.
              Staff may be reached by phone at 808-879-5077, or you may submit a
              MHPCC Help Desk Ticket. If for some reason the call is not
              received, leave a message including the following information:
            </p>
            <li className={paraClass}>User id</li>
            <li className={paraClass}>
              Telephone number (including area code) for call back
            </li>
            <li className={paraClass}>
              System and/or node experiencing problem
            </li>
            <li className={paraClass}>
              Error Message or description of problem
            </li>
            <p className={paraClass}>
              MHPCC Operations Staff will return your call as soon as possible.
            </p>
          </div>
          <div className={divClass}>
            <h2 className={headerClass}>Holidays Observed Throughout 2024</h2>
            <p className={paraClass}>
              During holidays MHPCC staff will not be available. Messages may be
              left at 808-879-5077, or you may submit a MHPCC Help Desk Ticket,
              and MHPCC staff will review the next business day. Users are
              advised to check What's New on a regular basis for notices
              pertaining to holidays and changes to MHPCC's normal business
              hours.
            </p>
          </div>
        </section>
        <div
          id="divider-section"
          className="divider tablet:divider-horizontal"
        ></div>
        <section
          id="table-section"
          className="mx-0 flex items-center justify-center tablet:flex tablet:mx-4 tablet:items-center w-full tablet:w-1/2"
        >
          <div className="overflow-x-auto flex bg-base-100 rounded-box justify-center">
            <table className="table table-zebra">
              <thead>
                <tr className="text-primary-dark text-xl font-bold">
                  <th>Holiday</th>
                  <th>Date Observed</th>
                </tr>
              </thead>
              <tbody>
                {holidays.map((holiday, index) => (
                  <tr key={index} className="text-secondary">
                    <td>{holiday.name}</td>
                    <td>{holiday.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </>
  );
}
