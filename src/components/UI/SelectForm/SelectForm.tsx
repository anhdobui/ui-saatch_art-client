import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { Control, useController, UseFormSetValue } from 'react-hook-form'

interface SelectInfer {
  className?: string
  name: string
  control: Control<any>
  option: { name: string; value: string | number }[]
  defaultValue?: string
  label?: string
  checkError?: boolean
  errorMessage?: string | any
  optionDefault: string
  onChange?: ({ value, name }: { value: string | number; name: string }) => void
  setValue?: UseFormSetValue<any>
  isDisabled?: boolean
}

function Select({
  className,
  option,
  name,
  control,
  defaultValue,
  label,
  checkError = false,
  errorMessage,
  optionDefault,
  onChange,
  setValue,
  isDisabled = false
}: SelectInfer) {
  const id = nanoid()
  const { field } = useController({
    control,
    name,
    defaultValue: defaultValue || ''
  })
  useEffect(() => {
    setValue && setValue(name, defaultValue)
  }, [setValue, name, defaultValue])
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    field.onChange(event)
    const selectedValue = event.target.value
    if (onChange) {
      const selectedOption = option.find((item) => item.value.toString() === selectedValue)
      const selectedName = selectedOption ? selectedOption.name : ''
      console.log(selectedName)
      onChange({ value: selectedValue, name: selectedName })
    }
  }

  return (
    <div className={className}>
      <label htmlFor={id} className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
        {label}
      </label>
      <select
        disabled={isDisabled}
        id={id}
        className='mb-6 block w-full border border-gray-300 p-4 text-sm text-gray-900 outline-0 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        {...field}
        onChange={handleChange}
      >
        <option value=''>{optionDefault}</option>
        {option &&
          option.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
      </select>
      {checkError && <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>}
    </div>
  )
}

export default Select
