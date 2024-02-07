import React from "react";

const App = () => {
  const [padding, setPadding] = React.useState(8);
  const [image, setImage] = React.useState("roses.gif");
  const chgImage = () => {
    setImage("kissteady.gif");
  };
  const incPad = () => {
    setPadding(padding + 10);
  };
  return (
    <div className="">
      <div className="flex justify-center items-center mt-20">
        <h1 className="text-3xl md:text-5xl lg:text-9xl">
          Will you be my Valentine ❤️ ?
        </h1>
      </div>
      <div className="flex justify-center items-center mt-4 rounded-lg">
        <img src={image} alt="roses" /* height={100} width={160}  */ />
      </div>

      <div className="flex justify-center items-center gap-32 mt-10">
        <button
          className="border border-black rounded-xl bg-green-300"
          style={{ padding: `${padding}px` }}
          onClick={() => {
            chgImage();
          }}
          name="Yes"
        >
          Yes
        </button>
        <button
          className="border border-black p-2 rounded-xl bg-red-400"
          name="No"
          onClick={() => {
            incPad();
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default App;
