function PopupCheckout({ title = 'Đơn đã được đặt thành công' }: { title?: string }) {
  return (
    <>
      <div
        id='static-modal'
        data-modal-backdrop='static'
        tabIndex={-1}
        aria-hidden='true'
        className='fixed left-0 top-0  z-[1000] flex h-full w-full  items-center justify-center bg-gray-800 bg-opacity-50'
      >
        <div className='relative mb-[20%] max-h-full w-full max-w-2xl p-4'>
          {/* Modal content */}
          <div className='relative rounded-lg bg-white shadow dark:bg-gray-700'>
            {/* Modal header */}
            <div className='flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>{title}</h3>
              <button
                type='button'
                className='ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide='static-modal'
              >
                <svg
                  className='h-3 w-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className='space-y-4 p-4 md:p-5'>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                Chúng tôi xin gửi lời cảm ơn chân thành nhất đến Quý vị vì đã tin tưởng và lựa chọn sản phẩm của chúng
                tôi. Sự ủng hộ của Quý khách là động lực quan trọng giúp chúng tôi tiếp tục nỗ lực và phát triển.
              </p>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                Chúng tôi cam kết sẽ không ngừng nâng cao chất lượng sản phẩm và dịch vụ để đáp ứng mọi nhu cầu của Quý
                khách hàng. Mỗi sản phẩm được giao đến tay Quý vị đều được chúng tôi chăm sóc kỹ lưỡng, với mong muốn
                mang đến trải nghiệm tuyệt vời nhất cho Quý vị.
              </p>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                Xin hãy biết rằng chúng tôi luôn sẵn lòng lắng nghe và chia sẻ, vì vậy nếu Quý vị có bất kỳ câu hỏi hoặc
                ý kiến đóng góp nào, xin đừng ngần ngại liên hệ với chúng tôi.
              </p>
            </div>
            {/* Modal footer */}
            <div className='flex items-center justify-start rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5'>
              <button
                data-modal-hide='static-modal'
                type='button'
                className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                I accept
              </button>
              <button
                data-modal-hide='static-modal'
                type='button'
                className='ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupCheckout
