import { Satisfaction, Secure, Support, Trustpilot } from '../Icons'
import CommitItemPayment from './CommitItemPayment'

const dataCommitPayment = [
  {
    title: 'Thousands Of Five-Star Reviews',
    description: 'We deliver world-class customer service to all of our art buyers.',
    icon: <Trustpilot className='h-[35px] w-[80px]' />
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'Our 14-day satisfaction guarantee allows you to buy with confidence.',
    icon: <Satisfaction className='h-[35px] w-[80px]' />
  },
  {
    title: 'Safe & Secure Shopping',
    description: 'All payments and transactions are secure and encrypted.',
    icon: <Secure className='h-[35px] w-[80px]' />
  },
  {
    title: 'Support An Artist With Every Purchase',
    description: 'We pay our artists more on every sale than other galleries.',
    icon: <Support className='h-[35px] w-[80px]' />
  }
]

function CommitPayment() {
  return (
    <>
      {dataCommitPayment &&
        dataCommitPayment.map((item, index) => (
          <CommitItemPayment key={index} title={item.title} description={item.description}>
            {item.icon}
          </CommitItemPayment>
        ))}
    </>
  )
}

export default CommitPayment
