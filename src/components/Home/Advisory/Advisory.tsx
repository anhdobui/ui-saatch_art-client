import Image from 'src/components/UI/Image/Image'
import signature from 'src/access/w-sig-black.png'
import { Link } from 'react-router-dom'
function Advisory() {
  return (
    <div className='container'>
      <div className='mb-10 px-10'>
        <div className='flex'>
          <div className=' w-[64%]'>
            <Image
              src='https://d3t95n9c6zzriw.cloudfront.net/homepage/2020/aa/Hybrid-Homepage-RW-Prog-large.jpg'
              ratio='4:3'
            />
          </div>
          <div className='flex w-[36%] flex-col items-center justify-center bg-gray-249 p-10 font-helvetica-text'>
            <h2 className='mb-5 font-crimson-text text-[40px] '>Find Art You Love</h2>
            <p className='text-center font-helvetica-text text-lg font-light text-gray-700'>
              “At Saatchi Art, we make it our mission to help you discover and buy from the best emerging artists around
              the world. Whether you’re looking to discover a new artist, add a statement piece to your home, or
              commemorate an important life event, Saatchi Art is your portal to thousands of original works by today’s
              top artists.”
            </p>
            <img src={signature} alt="Rebecca Wilson's Signature" className='my-[10px] h-11 w-[220px]' />
            <p className='font-helvetica-text text-[18px] font-light leading-[22px] text-gray-700'>
              Chief Curator & VP, Art Advisory
            </p>
            <Link
              to='/'
              className='mb-[10px] mt-5 flex h-[50px] w-[289px] items-center justify-center border border-solid border-gray-600 bg-transparent px-[6px] py-[1px] text-sm font-bold uppercase text-gray-700'
            >
              Work with an Art Advisor
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advisory
