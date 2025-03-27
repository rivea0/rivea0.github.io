import { CopyButton } from '@components/copy-code';
import { Code } from 'bright';

/** @type {import("bright").Extension} */
export const copyCode = {
  name: 'copyCode',
  Pre: (brightProps) => {
    return (
      <div style={{ position: 'relative' }}>
        <CopyButton text={brightProps.code} />
        <Code.Pre {...brightProps} />
      </div>
    );
  },
};

/** @type {import("bright").Extension} */
export const focus = {
  name: 'focus',
  MultilineAnnotation: ({ children }) => (
    <div style={{ filter: 'contrast(0.1)' }}>{children}</div>
  ),
  beforeHighlight: (props, focusAnnotations) => {
    if (focusAnnotations.length === 0) return props;

    const lineCount = props.code.split('\n').length;

    const ranges = focusAnnotations.flatMap((a) => a.ranges);

    let newRanges = [{ fromLineNumber: 1, toLineNumber: lineCount }];

    for (const range of ranges) {
      const { fromLineNumber, toLineNumber } = range;
      newRanges = newRanges.flatMap((r) => {
        if (r.fromLineNumber > toLineNumber || r.toLineNumber < fromLineNumber)
          return [r];
        if (
          r.fromLineNumber >= fromLineNumber &&
          r.toLineNumber <= toLineNumber
        )
          return [];
        if (r.fromLineNumber < fromLineNumber && r.toLineNumber > toLineNumber)
          return [
            {
              fromLineNumber: r.fromLineNumber,
              toLineNumber: fromLineNumber - 1,
            },
            {
              fromLineNumber: toLineNumber + 1,
              toLineNumber: r.toLineNumber,
            },
          ];
        if (r.fromLineNumber < fromLineNumber)
          return [
            {
              fromLineNumber: r.fromLineNumber,
              toLineNumber: fromLineNumber - 1,
            },
          ];
        if (r.toLineNumber > toLineNumber)
          return [
            {
              fromLineNumber: toLineNumber + 1,
              toLineNumber: r.toLineNumber,
            },
          ];
      });
    }

    const newAnnotations = props.annotations.filter((a) => a.name !== 'focus');
    newAnnotations.push({
      name: 'focus',
      ranges: newRanges,
    });
    return { ...props, annotations: newAnnotations };
  },
};

/** @type {import("bright").Extension} */
export const titleBar = {
  name: 'titleBar',
  TitleBarContent: Title,
};

/** @type {import("bright").BrightProps["TitleBarContent"]} */
function Title(props) {
  const { title, colors } = props;
  const { foreground, background } = colors;

  const circle = {
    borderRadius: '100%',
    height: '0.8em',
    width: '0.8em',
    background: foreground,
    opacity: 0.2,
  };

  return (
    <div
      style={{
        background,
        color: foreground,
        padding: '3px 0',
        fontSize: '0.9em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <div style={{ gap: 4, display: 'flex', marginLeft: 8 }}>
        <div style={circle} />
        <div style={circle} />
        <div style={circle} />
      </div>
      <span style={{ opacity: 0.8 }}>{title}</span>
      <div style={{ width: 45 }} />
    </div>
  );
}
