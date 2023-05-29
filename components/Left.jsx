import Profile from "./Profile"


const Left = () => {
  return (
    <>
    <h4 className=' text-3xl font-bold italic mb-10 sticky top-10 '>People :- </h4>
    <div className='flex flex-col sticky top-28  '>
      <Profile/>
      <Profile/>
    </div>
    </>
  )
}

export default Left
