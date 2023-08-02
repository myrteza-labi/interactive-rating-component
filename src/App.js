import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { map, isEmpty } from 'ramda';

const ratingValue = ["1", "2", "3", "4", "5"];

const App = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);

  const successUi = <>
    <img src="" alt=""/>
    <div>
      <p>You selected {data.rating} out of {ratingValue.length}</p>
    </div>
    <h1>Thank you!</h1>
    <p>
      We appreciate you taking the time to give a rating. 
      If you ever need more support, don’t hesitate to get in touch!
    </p>
  </>

  const ratingUi = <div className="">
  <div className=""></div>
  <h1>How did we do?</h1>
  <p>
    Please let us know how we did with your support request.
    All feedback is appreciated to help us improve our offering!
  </p>
  <form onSubmit={(formData) => handleSubmit(setData(formData))}>
    {map((value) =>
      <div key={value}>
        <label>{value}</label>
        <input type="radio" {...register("rating")} value={value} name="rating" />
      </div>
      , ratingValue
    )}
    <input type="submit" />
  </form>
  <div>
  </div>
</div>

  return isEmpty(data) ? ratingUi : successUi; 
  
}

export default App;
