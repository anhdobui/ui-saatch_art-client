import { nanoid } from 'nanoid'
import React, { useEffect } from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'

interface FloatingLabelInputProps {
  className?: string
  type: React.HTMLInputTypeAttribute
  name: string
  placeholder?: string
  register?: UseFormRegister<any>
  errorMessage?: string | any
  autoComplete?: string
  label: string
  isrReadonly?: boolean
  isDisabled?: boolean
  checkError?: boolean
  value?: string
  ref?: any
  setValue?: UseFormSetValue<any>
  defaultValue?: string | number
  watch: any
}

const InputField: React.FC<FloatingLabelInputProps> = (
  {
    className,
    label,
    name,
    register,
    type,
    autoComplete,
    errorMessage,
    isDisabled,
    isrReadonly,
    placeholder,
    value,
    checkError = false,
    setValue,
    defaultValue = '',
    watch
  },
  ref
) => {
  const id = nanoid()
  const isControl = register ? true : false
  useEffect(() => {
    setValue && setValue(name, defaultValue)
  }, [setValue, name, defaultValue])
  const watchedInput = watch(name)
  const renderInput = (isControl: boolean) => {
    if (isControl && register) {
      return (
        <input
          readOnly={isrReadonly}
          disabled={isDisabled}
          type={type}
          autoComplete={autoComplete}
          id={id}
          className='peer block w-full border border-gray-400 px-5 py-2 pt-5 placeholder-transparent focus:border-gray-700 focus:outline-none'
          placeholder={placeholder}
          {...register(name)}
        />
      )
    }
    return (
      <input
        readOnly={isrReadonly}
        disabled={isDisabled}
        type={type}
        autoComplete={autoComplete}
        id={id}
        className='peer block w-full border border-gray-400 px-5 py-2 pt-5 placeholder-transparent focus:border-gray-700 focus:outline-none'
        placeholder={placeholder}
        value={value}
        ref={ref}
      />
    )
  }
  return (
    <div className={`relative mb-4 ${className}`}>
      {renderInput(isControl)}
      <label
        htmlFor={id}
        className={`duration-400 absolute  left-0 top-[-3px]  z-0 origin-top-left  cursor-text  px-4 py-2 text-gray-500 transition-all
          peer-focus:mx-0  peer-focus:my-0  peer-focus:text-sm
          ${watchedInput ? 'mx-0 my-0 text-sm' : 'mx-1 my-2 text-lg'}`}
      >
        {label}
      </label>
      {checkError ? (
        <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>
      ) : (
        errorMessage && <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>
      )}
    </div>
  )
}

export default InputField
