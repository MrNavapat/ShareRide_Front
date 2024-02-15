import { useState } from "react";
import initialSrc from "../../asset/forPage/Hero3.jpg";



export default function Uploadpic({ initialSrc, setTripPic }) {

  const [file, setFile] = useState(null);  
  
    const handleChange = (e) => {
       if (e.target.files[0]) {
         setFile(e.target.files[0]);
         setTripPic(e.target.files[0])
        }
    }

    return (
      <div>
       
        
        <div className="flex justify-between items-center p-4">
            <h5 className="text-xl font-bold">Upload Pic</h5>
            <input type="file"  onChange={handleChange} />
            </div>
         <div className="flex justify-center pb-4 px-4">
            {file ? <img src={URL.createObjectURL(file)} /> : <img src={initialSrc} />}
        </div>
        
      </div>
    );
  }