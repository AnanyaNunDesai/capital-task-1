import { ChangeEvent, useState } from 'react';
import { CloseOutlined, UploadOutlined } from '@ant-design/icons';

import "./CoverImage.css";

function CoverImage() {
    const [image, setImage] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        
        if (files !== null) {
            setImage(files[0]);
        }
    };

    // Show default prompt 
    if (image == null) {
        return (
            <div className='w-1/3 shadow-md rounded-xl'>
                <div className='bg-cyan-100 rounded-t-xl'>
                    <h2 className='text-black font-semibold text-left p-3'>
                        Upload cover image
                    </h2>
                </div>
                <div className='m-4 p-4 rounded-b-xl'>
                    <div className='flex items-center justify-center w-full'>
                        <label className='flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300'>
                            <div className='flex flex-col items-center justify-center pt-7'>
                                <UploadOutlined />
                                <h1 className='font-semibold'>Upload cover Image</h1>
                                <p className='text-xs text-gray-500'>16:9 ratio is recommended, Max Image size 1mb</p>
                            </div>
                            <input type='file' onChange={handleFileChange} className='opacity-0' />
                        </label>
                    </div>
                </div>
            </div>
        );
    }
    // Display the image, present option to change it
    else {
        return (
            <div className='w-1/4 shadow-md rounded-xl'>
                <div className='image-gradient rounded-t-xl relative w-95 h-52 overflow-hidden'>
                    <img
                    className='w-full h-full object-cover'
                    src={URL.createObjectURL(image)}
                    alt={image.name}
                    />
                    
                </div>
                <div className='m-2 rounded-b-xl bg-white'>
                    <button
                        className='remove-image flex hover:text-red-900'
                        onClick={() => setImage(null)}
                    >
                        <CloseOutlined  className='w-6 h-6 mx-2 mb-2 font'/>
                        <p className='remove-image hover:text-red-900 font-extrabold'>Delete & re-upload</p>
                    </button>
                </div>
            </div>
        );
    }
}

export default CoverImage;
