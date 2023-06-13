interface TitleStoryInfc {
  title: string
}
function TitleStory({ title }: TitleStoryInfc) {
  return <h2 className='mx-auto my-0 font-crimson-text text-4xl font-normal text-gray-700'>{title}</h2>
}

export default TitleStory
