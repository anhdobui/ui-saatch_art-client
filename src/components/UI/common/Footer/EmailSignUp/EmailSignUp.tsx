function EmailSignUp() {
  return (
    <div className=' flex min-h-[225px] w-full items-center justify-between border-b border-solid border-gray-233 px-[8%] pb-[15px] font-helvetica-text'>
      <div>
        <h2 className='font-crimson-text text-[15px] uppercase leading-6 text-gray-51'>SAATCHI ART DIGEST</h2>
        <p className='font-crimson-text text-base '>Discover new art and collections added weekly by our curators.</p>
      </div>
      <form className='flex w-[50%] max-w-[650px] items-center justify-center'>
        <input
          required
          placeholder='Email Address'
          className=' mr-5 w-full min-w-[200px] max-w-[500px] items-center border-0 border-b border-solid border-gray-233 p-[15px] text-center text-[11px] text-gray-51 placeholder-gray-800 outline-0 '
          type='email'
        />
        <button className='will-change-bg h-[40px] w-[185px] min-w-[185px] cursor-pointer border border-solid border-transparent bg-gray-51 text-center text-[11px] text-white shadow-md transition-colors duration-300 ease-in-out'>
          Sign up
        </button>
      </form>
    </div>
  )
}

export default EmailSignUp
