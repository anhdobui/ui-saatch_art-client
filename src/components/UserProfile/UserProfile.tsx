import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faHome, faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import 'tailwindcss/tailwind.css'
import { AppContext } from 'src/contexts/app.context'

interface UserProfileProps {
  user?: {
    name: string
    email: string
    phone: string
    address: string
  }
}

const UserProfile: React.FC<UserProfileProps> = ({
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+123456789',
    address: '123 Main Street, Anytown, USA'
  }
}) => {
  const { profile } = useContext(AppContext)
  const [formData, setFormData] = useState(user)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSave = () => {
    // Here you can handle the form submission to save the updated user profile
    console.log('Saved user profile:', formData)
  }

  const handleCancel = () => {
    setFormData(user) // Reset form data to initial user data
  }

  return (
    <div className='bg-white shadow-md'>
      <div className=' p-6 '>
        <div className='mb-4 flex items-center'>
          <FontAwesomeIcon icon={faUser} className='mr-2 text-gray-600' />
          <span className='text-lg font-semibold'>{profile?.fullname}</span>
        </div>
        <div className='mb-4 flex items-center'>
          <FontAwesomeIcon icon={faEnvelope} className='mr-2 text-gray-600' />
          <span>{profile?.email}</span>
        </div>
        <div className='mb-4 flex items-center'>
          <FontAwesomeIcon icon={faPhone} className='mr-2 text-gray-600' />
          <span>{profile?.phone}</span>
        </div>
        <div className='mb-4 flex items-center'>
          <FontAwesomeIcon icon={faHome} className='mr-2 text-gray-600' />
          <span>{profile?.address}</span>
        </div>
      </div>
      <div className='border-t border-gray-200 p-6'>
        <form>
          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='phone'>
              Phone
            </label>
            <input
              type='text'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}
              className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='address'>
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              value={formData.address}
              onChange={handleInputChange}
              className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            />
          </div>
          <div className='flex space-x-4'>
            <button type='button' className='text-green-500 hover:text-green-700' onClick={handleSave}>
              <FontAwesomeIcon icon={faSave} className='mr-1' />
              Save Profile
            </button>
            <button type='button' className='text-red-500 hover:text-red-700' onClick={handleCancel}>
              <FontAwesomeIcon icon={faTimes} className='mr-1' />
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserProfile
