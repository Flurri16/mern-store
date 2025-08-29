import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

export default function AddPage() {
  const navigate = useNavigate()
  const [files, setFiles] = useState([])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [cost, setCost] = useState(null)
  const onDrop = useCallback((acceptFiles) => setFiles(prev => [...prev, ...acceptFiles.map(file => URL.createObjectURL(file))]))
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: { 'image/png': ['.png'], 'image/jpg': ['.jpg'], 'image/jpeg': ['.jpeg'] },
    multiple: true
  })
  const submitHandler = () => {
    try {

    } catch(err) {

    }
  }
  const clearInputs = () => {

  }
  const toMain = () => {
    navigate('/')
  }
  return(
    <div className='min-w-[500px] max-w-[1000px] h-full border-dashed border-2'>
      <div className="">
        <div className='border-2 p-10 border-dashed bg-slate-600 bg-opacity-30'{...getRootProps()}>
          <input type="file" {...getInputProps()}/>
          {isDragActive ? <div className="">Drop here</div> : <div>Select or drag files</div>}
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {files?.map(file => (
            <img src={file} alt="" className='w-24'/>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-2">
        <label className='p-2 text-xl'>Title of item:</label><input type="text" className='p-2 text-xl rounded-sm' value={title} onChange={e => setTitle(e.target.value)}/>
        <label className='p-2 text-xl'>Text of item:</label><input type="text" className='p-2 text-xl rounded-sm' value={text} onChange={e => setText(e.target.value)}/>
        <label className='p-2 text-xl'>Cost of item:</label><input type="number" className='p-2 text-xl rounded-sm' value={cost} onChange={e => setCost(e.target.value)}/>
      </div>
      <div className="flex justify-evenly py-3">
        <button className='px-6 py-2 hover:opacity-30 bg-red-500 text-xl font-semibold text-white' onClick={clearInputs}>Clear</button>
        <button className='px-6 py-2 hover:opacity-30 bg-slate-600 text-xl font-semibold text-white' onClick={toMain}>To main</button>
        <button className='px-6 py-2 hover:opacity-30 bg-blue-600 text-xl font-semibold text-white' onClick={submitHandler}>Add</button>
      </div>
    </div>
  )
}
