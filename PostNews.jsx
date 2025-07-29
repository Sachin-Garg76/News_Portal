import React from 'react'

const PostNews = () => {
  return (
    <>
  <div className="container-fluid postnewsBox">
    <div className='border-2 postnewsContainer rounded shadow-sm  ' style={{backgroundColor : "#fff"}} >
      <h3 className='text-dark fw-bold mb-0'>Post <span style={{color:"maroon"}}>News</span></h3>
      <hr  className='w-25 bg-success mb-3 mt-2 '/>
       
       <form action="">
        <div className=' row  mb-2'>
        <label htmlFor="title" className='form-label fw-bold'>Title</label>
        <input type="text" id='title' name='title' placeholder='Enter your title' className='form-control'/>
       </div>
          <div className=' row  mb-2'>
        <label htmlFor="description" className='form-label fw-bold'>Description</label>
        <input type="text" id='description' name='description' placeholder='Enter your description' className='form-control'/>
       </div>
         <div className=' row  mb-2'>
        <label htmlFor="media-type" className='form-label fw-bold'>Media Type</label>
        <select name="media-type" id="media-type" className='form-select'>
          <option value="">Select media type</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>

       </div>
       <div className=' row  mb-2'>
        <label htmlFor="media-url" className='form-label fw-bold'>Media Url</label>
        <input type="text" id='media-url' name='media-url' placeholder='Enter your media-url' className='form-control'/>
       </div>

       <div className=' row  mb-2'>
        <label htmlFor="category" className='form-label fw-bold'>Category</label>
        <select name="category" id="category" className='form-select'>
          <option value="">Category</option>
          <option value="image">Crime</option>
          <option value="video">Politics</option>
          <option value="video">Sports</option>
          <option value="video">Health</option>
        </select>

       </div>
       <p className='text-center'><button className='btn text-light rounded mt-2 fw-bold' style={{backgroundColor : "maroon"}}>Post News</button></p>
       
       </form>
    </div>
  </div>
    </>  
  )
}

export default PostNews
