import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { map, isEmpty } from 'ramda';
import deviceImg from './image/illustration-thank-you.svg'
import starIcon from './image/icon-star.svg'; 

const ratingValue = ["1", "2", "3", "4", "5"];

const App = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);
  console.log(data.rating)

  const successUi = <>
    <img src={deviceImg} alt="rating sended"/>
    <div>
      <p>You selected {data.rating} out of {ratingValue.length}</p>
    </div>
    <h1>Thank you!</h1>
    <p >
      We appreciate you taking the time to give a rating. 
      If you ever need more support, don’t hesitate to get in touch!
    </p>
  </>

  const ratingUi = <div className="font-overpass">
    <div className="mb-4 rounded-full bg-[#343B43] h-[40px] w-[40px] flex items-center justify-center">
      <img src={starIcon} alt="a star" /> 
    </div>
  <h1 className="text-[24px] font-bold">How did we do?</h1>
  <p className="text-[#969FAD] text-sm">
    Please let us know how we did with your support request.
    All feedback is appreciated to help us improve our offering!
  </p>
  <form onSubmit={handleSubmit((formData) => setData(formData))}>
    <div className="flex flex-row justify-between mt-6 mb-5">
    {map((value) =>
      <div className="relative" key={value}>
          <label className="absolute top-[22px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
            {value}
          </label>
        <input className="checked:bg-[#FC7614] checked:opacity-100 checked:z-0 w-[42px] h-[42px] z-20 appearance-none bg-[#343B43] opacity-50	 rounded-full relative" type="radio" {...register("rating")} value={value} name="rating" />
      </div>
      , ratingValue
    )}
    </div>
    <input className="mb-2 text-sm tracking-[1.87px] w-full py-2.5 font-overpass rounded-3xl bg-[#FC7614]" type="submit" value="SUBMIT"/>
  </form>
  <div>
  </div>
</div>

  return <div className="bg-[#131518] text-white min-h-screen flex items-center justify-center">
    <div className="bg-[#232A34] p-6 rounded-2xl max-w-[90%] bg-gradient-to-t from-[#181E27] to-[#232A34]">
      {isEmpty(data) ? ratingUi : successUi}
    </div>
  </div>
  
}

export default App;
