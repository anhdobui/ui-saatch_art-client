import ItemFeatured from '../ItemFeatured'
import classNames from 'classnames'
interface PanelFeaturedInfc {
  dataPanelFeatured: PanelFeaturedType[]
  className?: string
}
export type PanelFeaturedType = {
  thumbnail: string
  title: string
  description: string
  path: string
  titleConnect: string
}
type PanelFeaturedProps = PanelFeaturedInfc
function PanelFeatured({ className, dataPanelFeatured }: PanelFeaturedProps) {
  return (
    <div className={classNames('relative flex w-full', { [className as string]: className })}>
      <ItemFeatured
        className='mr-[2.95%]'
        title={dataPanelFeatured[0].title}
        description={dataPanelFeatured[0].description}
        path={dataPanelFeatured[0].path}
        titleConnect={dataPanelFeatured[0].titleConnect}
        thumbnail={dataPanelFeatured[0].thumbnail}
      />
      <ItemFeatured
        title={dataPanelFeatured[1].title}
        description={dataPanelFeatured[1].description}
        path={dataPanelFeatured[1].path}
        titleConnect={dataPanelFeatured[1].titleConnect}
        thumbnail={dataPanelFeatured[1].thumbnail}
      />
    </div>
  )
}

export default PanelFeatured
