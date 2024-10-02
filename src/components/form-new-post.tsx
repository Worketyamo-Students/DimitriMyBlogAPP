'use client';
import { ChangeEvent, FormEvent, useState } from "react";
import Header from "./header.tsx";

// import ReactDOM from 'react-dom';
// import TextareaAutosize from 'react-autosize-textarea';[#FACCD0]
import { FormData  } from "../types/blog";
const inputClass = "w-full py-2 px-3 border border-[#F0CCB0] rounded-md focus:outline-none focus:ring focus:border-[#5100B1]";
const BoutonStyle = "bg-[#5100B1] hover:bg-[#FACCB0] hover:text-[#5100B1] text-[#F0CCB0] font-bold  p-4 rounded-md focus:outline-none focus:ring focus:border-[#FACCD0] w-full disabled:bg-gray-400 shadow-md"

const FormNewPost = () => {
const [formData, setFormData] = useState<FormData>({
  title: '',
  content: '',
});

const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
  e.preventDefault();
  console.log(formData);
}
const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>{
  e.preventDefault();
 const {name, value}  = e.target;
 setFormData({
  ...formData,
  [name] : value,
 });
};

  return (
    <>
    <Header/>
    <form className='max-w-md mx-auto p-4 font-inter' onSubmit={handleSubmit}>
      <div className='mb-4'>
        <input type="text" className={inputClass} placeholder='Enter the Title' name='title' value={formData.title} onChange={handleChange}/>
      </div>

      <div className='mb-4'>
      {/* <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Enter the content" name='content' className={inputClass}/> */}
        </div>
        <button type="submit" className={BoutonStyle}>Submit</button>
    </form>

    </>
  )
}

export default FormNewPost