import React, {useState} from 'react';
import { useForm} from "react-hook-form";

const Submission = () => {
    const { register, handleSubmit} = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Title"/>
        <input {...register("authors")} placeholder="Author"/>
        <input {...register("journal")} placeholder="Journal"/>
        <input {...register("year")} placeholder="Year"/>
        <input {...register("volume")} placeholder="Volume"/>
        <input {...register("version")} placeholder="Version"/>
        <input {...register("pages")} placeholder="Pages"/>
        <input {...register("doi")} placeholder="Doi"/>
        <input type="submit"/>
    </form>
  );
}

export default Submission