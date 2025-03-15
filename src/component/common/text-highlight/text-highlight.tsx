interface TextHighlightProps {
  text: string;
  highlight: string;
  color: string;
}

const TextHighlight = ({ text, highlight, color }: TextHighlightProps) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span
            style={{
              color,
            }}
            key={index}
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default TextHighlight;
