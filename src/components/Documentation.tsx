export default function Doc() {
  const divClass = "bg-base-100 rounded-box p-4 tablet:p-8 m-4 w-auto";
  const headerClass = "font-bold text-xl text-primary-dark";
  const paraClass = "text-secondary";
  return (
    <>
      <div className={divClass}>
        <p className={`${paraClass} ${"text-xl font-bold text-center"}`}>
          Our main goal is to ensure that users are able to work efficiently and
          effectively on all of our systems. To support that goal, we provide a
          number of guides and other documentation to assist users in learning
          how to run jobs at our Center.
        </p>
      </div>
    </>
  );
}
