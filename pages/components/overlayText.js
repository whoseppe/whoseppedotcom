const OverlayText = ({ active }) => {
  return (
    <>
      {active && (
        <div className="absolute w-full h-screen z-50 -mt-20">
          <div className="flex items-center justify-center w-full h-full">
            <div>
              <p className="text-green text-6xl text-center">YOU ARE</p>
              <p className="text-green text-6xl text-center">BEING</p>
              <p className="text-green text-6xl text-center">ABDUCTED</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OverlayText;
