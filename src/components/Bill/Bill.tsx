import React from 'react'

interface InvoiceProps {
  orderNumber: string
  orderDate: string
  items: {
    name: string
    quantity: number
    price: number
  }[]
  subtotal: number
  shippingCost: number
  total: number
}

const Invoice: React.FC<InvoiceProps> = ({ orderNumber, orderDate, items, subtotal, shippingCost, total }) => {
  return (
    <div className='container mx-auto p-4'>
      <div className='rounded-md bg-white p-6 shadow-md'>
        <div className='mb-6 flex justify-between'>
          <div>
            <h2 className='mb-2 text-xl font-bold'>Invoice #{orderNumber}</h2>
            <p className='text-gray-600'>Order Date: {orderDate}</p>
          </div>
          <div>
            <img src='/logo.png' alt='Company Logo' className='h-12' />
          </div>
        </div>
        <table className='w-full border-collapse'>
          <thead>
            <tr>
              <th className='py-2 text-left'>Product</th>
              <th className='py-2 text-left'>Quantity</th>
              <th className='py-2 text-left'>Price</th>
              <th className='py-2 text-left'>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className='py-2'>{item.name}</td>
                <td className='py-2'>{item.quantity}</td>
                <td className='py-2'>${item.price.toFixed(2)}</td>
                <td className='py-2'>${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className='py-2 text-right font-semibold'>
                Subtotal:
              </td>
              <td className='py-2'>${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan={3} className='py-2 text-right font-semibold'>
                Shipping Cost:
              </td>
              <td className='py-2'>${shippingCost.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan={3} className='py-2 text-right font-semibold'>
                Total:
              </td>
              <td className='py-2'>${total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
const invoiceData = {
  orderNumber: '123456',
  orderDate: '2024-05-30',
  items: [
    { name: 'Product A', quantity: 2, price: 10 },
    { name: 'Product B', quantity: 1, price: 20 },
    { name: 'Product C', quantity: 3, price: 15 }
  ],
  subtotal: 2 * 10 + 1 * 20 + 3 * 15, // Tổng tiền hàng
  shippingCost: 5, // Phí vận chuyển
  total: 2 * 10 + 1 * 20 + 3 * 15 + 5 // Tổng cộng
}

// Truyền dữ liệu giả định vào component Invoice

const TestInvoice = () => {
  const invoiceData = {
    orderNumber: '123456',
    orderDate: '2024-05-30',
    items: [
      { name: 'Product A', quantity: 2, price: 10 },
      { name: 'Product B', quantity: 1, price: 20 },
      { name: 'Product C', quantity: 3, price: 15 }
    ],
    subtotal: 2 * 10 + 1 * 20 + 3 * 15, // Tổng tiền hàng
    shippingCost: 5, // Phí vận chuyển
    total: 2 * 10 + 1 * 20 + 3 * 15 + 5 // Tổng cộng
  }
  return (
    <Invoice
      orderNumber={invoiceData.orderNumber}
      orderDate={invoiceData.orderDate}
      items={invoiceData.items}
      subtotal={invoiceData.subtotal}
      shippingCost={invoiceData.shippingCost}
      total={invoiceData.total}
    />
  )
}
export default TestInvoice
