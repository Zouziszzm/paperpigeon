const Progressbar = ({ progress }) => {
  return (
    <>
      <div className="w-full bg-gray-400/40 rounded-full m-2">
        <div
          className="p-1 bg-gray-400 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="w-fit mx-auto">
      {`${Number(progress).toFixed(0)}%`}
      </div>
    </>
  );
};

export default Progressbar;
