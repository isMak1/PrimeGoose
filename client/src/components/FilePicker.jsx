import React from 'react'

import CustomeButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload Image
        </label>

        <p className=" mt-2 text-gray-800 text-xs truncate">
          {file === '' ? "No Image selected" : file.name}
        </p>
      </div>

      <div className=" mt-4 flex flex-wrap gap-3">
        <CustomeButton 
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyle="text-xs"
        />
        <CustomeButton 
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyle="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker