import { useForm } from "react-hook-form";
import React, { useState } from 'react';

const App = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();

  return (
    <div className="">
    <div className=""></div>
    <h1>How did we do?</h1>
    <p>
      Please let us know how we did with your support request.
      All feedback is appreciated to help us improve our offering!
    </p>
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <div>
        <input type="radio" {...register("rating")} value="1" name="rating"/>
      </div>
      <div>
        <input type="radio" {...register("rating")} value="2" name="rating"/>
      </div>
      <div>
        <input type="radio" {...register("rating")} value="3" name="rating"/>
      </div>
      <div>
        <input type="radio" {...register("rating")} value="4" name="rating"/>
      </div>
      <div>
        <input type="radio" {...register("rating")} value="5" name="rating"/>
      </div>
      <input type="submit"/>
    </form>
    <div>
      {data}
    </div>
    </div>
  )
}

export default App; 