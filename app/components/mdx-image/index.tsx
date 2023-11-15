import NextImage from 'next/image'

export function MDXImage({
  src,
  alt,
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string
  alt: string
}) {

  const imageProps = {
    src,
    alt,
    width: 0,
    height: 0,
    sizes: "100vw",
    style: {width: '100%', height: 'auto'}
  }

  return <NextImage {...imageProps} />
}
