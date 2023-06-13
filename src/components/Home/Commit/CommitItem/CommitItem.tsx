import { CheckIcon } from 'src/components/UI/Icons'
export type CommitItemType = {
  title: string
  description: string
}
function CommitItem({ description, title }: CommitItemType) {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <CheckIcon height={50} width={40} />
        <h2 className='text-center font-crimson-text text-xl text-white'>{title}</h2>
      </div>
      <p className=' mx-auto max-w-[390px] whitespace-normal break-words text-center font-helvetica-text text-xs text-white'>
        {description}
      </p>
    </div>
  )
}

export default CommitItem
