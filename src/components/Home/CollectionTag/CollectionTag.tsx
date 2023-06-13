import { TagType } from 'src/type/app.type'
import Tag from '../HomeUI/Tag'
import classNames from 'classnames'
export interface CollectionTagInfc {
  title: string
  listTag: TagType[]
  border?: 'b-y' | 'b-t'
}
type CollectionProps = CollectionTagInfc
function CollectionTag({ title, listTag, border = 'b-y' }: CollectionProps) {
  return (
    <div className='container'>
      <div
        className={classNames('flex justify-between border-solid border-gray-300 px-10 pb-[60px] pt-[65px]', {
          'border-y': border === 'b-y',
          'border-t': border === 'b-t'
        })}
      >
        <h2 className='mr-[30px] flex-shrink-0 font-crimson-text text-[40px] text-gray-700'>{title}</h2>
        <div className='flex w-full justify-evenly'>
          {listTag.map((item) => (
            <Tag key={item.tagName} tagName={item.tagName} link={item.link} size='large' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionTag
