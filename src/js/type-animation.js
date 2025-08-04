import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
  return (
    <>
        <span>I'm </span>
        <TypeAnimation
        sequence={[
            'React Wizard',
            2000,
            'Full-Stack Developer',
            2000,
            'JavaScript Developer',
            2000,
            'Designer',
            2000,
            'Innovation Seeker',
            2000,
            'Tech Enthusiast',
            2000,
        ]}
        wrapper="span"
        speed={50}
        style={{
            fontSize: '50px',
            background: 'linear-gradient(to bottom, #F8FFAE, #43C6AC)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
        }}
        repeat={Infinity}
        />
    </>
  );
};

export default TypingAnimation;
