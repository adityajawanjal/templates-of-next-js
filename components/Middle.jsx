import Post from "./Post"


const Middle = () => {
  return (
    <>
      <h4 className=' text-3xl font-bold italic mb-10'>Posts :- </h4>
      <div className='flex flex-col '>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
    </>
  )
}

export default Middle
