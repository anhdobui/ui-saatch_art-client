import Tag from '../HomeUI/Tag'
const init = [
  { title: 'Paintings', link: '/' },
  { title: 'Abstract Art', link: '/' },
  { title: 'Oil Paintings', link: '/' }
]
function Shortcuts() {
  return (
    <div className='container'>
      <div className='mt-[40px] flex justify-center'>
        {init.map((item) => (
          <Tag key={item.title} tagName={item.title} link={item.link} className='my-[10px] ml-[10px]' />
        ))}
      </div>
    </div>
  )
}

export default Shortcuts
