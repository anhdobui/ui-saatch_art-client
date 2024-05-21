import CommitPayment from './CommitPayment'
import InfoPayment from './InfoPayment'

function BoxPayment({ className }: { className: string }) {
  return (
    <div className={className}>
      <InfoPayment />
      <CommitPayment />
    </div>
  )
}

export default BoxPayment
