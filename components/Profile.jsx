import Image from 'next/image'

const Profile = () => {
  return (
    <div className='flex items-center px-3 h-16 border border-red-400 rounded-2xl mb-5'>
      <Image
          src={"/favicon.ico"}
          width={400}
          height={400}
          alt="dp"
          className=" w-10 h-10 rounded-full mr-5 "
        />
        <h3 className=''>Aditya Jawanjal</h3>
      </div>
  )
}

export default Profile
