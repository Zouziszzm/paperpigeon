import Smenu from "./_components/Smenu";

const layout = ({ children }) => {
  return (
    <>
      <Smenu/>
      <div>{children}</div>
    </>
  );
};

export default layout;
