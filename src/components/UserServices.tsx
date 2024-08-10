export default function UserServices() {
  // Help Desk information
  const helpDesk = [
    {
      what: "When to Contact the HPC Help Desk",
      info: "Users should contact the HPC Help Desk when assistance is needed for unclassified problems, issues, or questions.",
    },
    {
      what: "Hours of Operation",
      info: "8:00 a.m. - 8:00 p.m. Eastern, Monday - Friday (excluding Federal holidays).",
    },
    {
      what: "Phone Number",
      info: "1-877-222-2039 or (937) 255-0679",
    },
    {
      what: "Fax Number",
      info: "(937) 656-9538",
    },
    {
      what: "Help E-mail",
      info: "help@helpdesk.hpc.mil",
    },
    {
      what: "Accounts E-mail",
      info: "accounts@helpdesk.hpc.mil",
    },
    {
      what: "After Hours",
      info: "Calls, e-mails and tickets received after normal operating hours will be addressed the following business day.",
    },
    {
      what: "Mailing Address",
      info: `DoD HPCMP HPC Help Desk
      AFRL/RCM
      2435 Fifth Street
      Wright-Patterson Air Force Base, OH - 45433-7802`,
    },
    {
      what: "Ticket Requests",
      info: "Active users may submit tickets from the HPC Help Desk ticket system. Inactive users may submit tickets from the Inactive User Help Ticket.",
    },
  ];

  // MHPCC DSRC information
  const mhpccHelpDesk = [
    {
      what: "When to Contact MHPCC",
      info: "Users should contact MHPCC when assistance is needed for support services not provided by the HPC Help Desk.",
    },
    {
      what: "Hours of Operation",
      info: "08:00 - 17:00 HST (GMT -10 hours), Monday - Friday (excluding holidays).",
    },
    {
      what: "Phone Number",
      info: "(808) 879-5077",
    },
    {
      what: "Fax Number",
      info: "Fax: (808) 879-5018",
    },
    {
      what: "Help E-mail",
      info: "help@helpdesk.hpc.mil",
    },
    {
      what: "After Hours",
      info: "Calls, e-mails and tickets received by Customer Service after normal hours of operations will be addressed the following work day.",
    },
    {
      what: "Mailing Address",
      info: `Maui High Performance Computing Center
  550 Lipoa Parkway
  Kihei, Maui, HI 96753`,
    },
    {
      what: "Ticket Requests",
      info: "Users may submit tickets from the MHPCC Help Desk.",
    },
  ];

  // Styling classes
  const sectionClass =
    "flex items-center tablet:flex mx-4 tablet:mx-4 my-4 tablet:items-center w-auto tablet:w-1/2";

  const tHeadClass = "text-primary-dark text-xl";
  return (
    <>
      <div className="flex flex-col tablet:flex-row">
        <section id="table-section" className={sectionClass}>
          <div className="overflow-x-auto flex w-full bg-base-100 rounded-box justify-center">
            <table className="table">
              <thead>
                <tr className="text-primary-dark font-bold">
                  <th className="text-[13px] tablet:text-xl">
                    Contacting the HPC Help Desk
                  </th>
                </tr>
              </thead>
              <tbody>
                {helpDesk.map((help, index) => (
                  <tr key={index} className="text-secondary text-md hover">
                    <td className="font-bold">{help.what}</td>
                    <td>{help.info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <div
          id="divider-section"
          className="divider tablet:divider-horizontal"
        ></div>
        <section id="table-section" className={sectionClass}>
          <div className="overflow-x-auto flex w-full bg-base-100 rounded-box justify-center">
            <table className="table">
              <thead>
                <tr className="text-primary-dark font-bold">
                  <th className="text-[15px] tablet:text-xl">
                    Contacting the MHPCC DSRC
                  </th>
                </tr>
              </thead>
              <tbody>
                {mhpccHelpDesk.map((help, index) => (
                  <tr key={index} className="text-secondary text-md hover">
                    <td className="font-bold">{help.what}</td>
                    <td>{help.info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
