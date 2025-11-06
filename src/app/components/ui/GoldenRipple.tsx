import './GoldenRipple.css';

export default function GoldenRipple() {
  return (
    <div className="water-ripple-container" aria-hidden="true">
      <div className="ripple-layer"></div>
      <div className="ripple-layer"></div>
      <div className="ripple-layer"></div>
      
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  );
}