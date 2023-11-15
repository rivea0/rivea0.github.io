export default function withIcon(icon: string) {
  function Icon({
    size = 24,
    color = 'currentColor',
    fill = '',
    strokeWidth = 1,
  }) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        strokeWidth={strokeWidth}
        fill={fill ? fill : 'none'}
        stroke={color || 'currentColor'}
        dangerouslySetInnerHTML={{ __html: icon }}
        aria-hidden="true"
      />
    )
  }

  return Icon
}
