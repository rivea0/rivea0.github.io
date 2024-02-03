export default function withIcon(svgPath: string) {
  function Icon({
    strokeWidth = 1.5,
    color = 'currentColor',
    fillColor = 'none',
    viewBox = "0 0 24 24"
  }: {
    strokeWidth?: number;
    color?: string;
    fillColor?: string;
    viewBox?: string;
  }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        width={24}
        height={24}
        viewBox={viewBox}
        strokeWidth={strokeWidth}
        stroke={color}
        fill={fillColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        dangerouslySetInnerHTML={{ __html: svgPath }}
        aria-hidden="true"
      >
      </svg>
    );
  }
  return Icon
}
