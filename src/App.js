import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { map } from 'ramda';

const ratingValue = ["1", "2", "3", "4", "5"];

const App = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);

  const onSubmit = (formData) => {
    setData(JSON.stringify(formData));
  };

  return (
    <div className="">
      <div className=""></div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request.
        All feedback is appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        {data}
      </div>
    </div>
  )
}

export default App;
