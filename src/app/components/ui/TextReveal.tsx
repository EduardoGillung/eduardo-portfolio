import './TextReveal.css';

interface TextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TextReveal({ text, className = '', style }: TextRevealProps) {
  return (
    <div className={`text-reveal ${className}`} style={style}>
      <span className="text-reveal__word">{text}</span>
      <div className="text-reveal__bg"></div>
    </div>
  );
}