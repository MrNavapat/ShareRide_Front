import RegisterContainer from "./RegisterContainer";

export default function Modal({ title, onClose, width }) {
  return (
    <>  
      {/* create thin file to blur behind background */}
      <div className="fixed bg-red-200 inset-0 opacity-60"></div>

      <div className="fixed inset-0 ">
        <div className="flex items-center justify-center min-h-full ">
          <div
            className=" rounded-lg opacity-100 shadow-[0_0_15px_rgb(0,0,0,0.2)]"
            style={{ width: `${width}rem` }}
          >
            <div className="border-b flex justify-between items-center p-4">
              <button className="invisible">&#10005;</button>
              <h5 className="text-2xl font-semibold">{title}</h5>
              <button onClick={onClose}>&#10005;</button>
            </div>
            <RegisterContainer/>
          

          </div>
        </div>
      </div>
    </>
  );
}