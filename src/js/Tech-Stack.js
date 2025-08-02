import { useRef, useEffect, useCallback } from "react";
import { 
  FaReact, 
  FaCss3Alt, 
  FaBootstrap, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub,
  FaHtml5
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiJavascript } from 'react-icons/si';

const useAnimationFrame = callback => {
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);

  const animate = useCallback(time => {
    if (previousTimeRef.current != null) {
      const delta = time - previousTimeRef.current;
      callback(time, delta);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);
};

function TechBlock({ icon: Icon, name, color }) {
  return (
    <div className="tech-block">
      <Icon className="tech-icon" style={{ color }} />
      <span className="tech-name">{name}</span>
      <div className="tech-tooltip">{name}</div>
    </div>
  );
}

function Marquee({
  className = '',
  reverse = false,
  pauseOnHover = true,
  children,
  speed = 50,
  repeat = 3,
  ...props
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const singleContentBlockRef = useRef(null);
  const animX = useRef(0);
  const isPaused = useRef(false);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current || !contentRef.current || !singleContentBlockRef.current) return;
    if (pauseOnHover && isPaused.current) return;

    const blockWidth = singleContentBlockRef.current.offsetWidth;
    const style = window.getComputedStyle(contentRef.current);
    const gap = parseFloat(style.columnGap || '0');
    const loopDistance = blockWidth + gap;

    const dx = speed * delta / 1000;
    animX.current += reverse ? dx : -dx;

    if (Math.abs(animX.current) >= loopDistance) {
      animX.current %= loopDistance;
    }

    contentRef.current.style.transform = `translateX(${animX.current}px)`;
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) isPaused.current = true;
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) isPaused.current = false;
  }, [pauseOnHover]);

  return (
    <div
      {...props}
      ref={containerRef}
      className={`marquee-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={contentRef}
        className="marquee-content"
      >
        {Array(repeat).fill(0).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? singleContentBlockRef : null}
            className="marquee-items"
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

function TechStackMarquee() {
  const technologies = [
    { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
    { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express.js", color: "#000000" },
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
    { icon: FaGithub, name: "GitHub", color: "#181717" }
  ];

  return (
    <div className="tech-stack-container">
      <div className="tech-stack-background"></div>
      
      <div className="tech-stack-content">
        <div className="tech-stack-header">
          <h2 className="tech-stack-title">Tech Stack</h2>
          <p className="tech-stack-subtitle">Technologies I work with</p>
        </div>
        
        <Marquee 
          speed={30} 
          className="tech-marquee"
          pauseOnHover={true}
        >
          {technologies.map((tech, index) => (
            <TechBlock
              key={index}
              icon={tech.icon}
              name={tech.name}
              color={tech.color}
            />
          ))}
        </Marquee>
      </div>
      
      <div className="fade-left"></div>
      <div className="fade-right"></div>
      
      <style jsx>{`
        .tech-stack-container {
          width: 100%;
          position: relative;
          background: transparent;
          min-height: 300px;
          overflow: hidden;
        }

        .tech-stack-background {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .tech-stack-content {
          position: relative;
          z-index: 2;
        }

        .tech-stack-header {
          text-align: center;
          padding: 2rem 0;
        }

        .tech-stack-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .tech-stack-subtitle {
          color: rgba(255,255,255,0.9);
          font-size: 1.1rem;
        }

        .marquee-container {
          overflow: hidden;
          padding: 2rem 0;
          user-select: none;
        }

        .marquee-content {
          display: flex;
          gap: 2rem;
          width: max-content;
          will-change: transform;
        }

        .marquee-items {
          display: flex;
          gap: 2rem;
        }

        .tech-block {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
          background: rgba(255,255,255,0.95);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          padding: 0.5rem;
        }

        .tech-block:hover {
          transform: translateY(-8px) scale(1.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          background: rgba(255,255,255,1);
        }

        .tech-icon {
          font-size: 2rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 0.25rem;
        }

        .tech-name {
          font-size: 0.7rem;
          font-weight: 600;
          color: #374151;
          text-align: center;
          line-height: 1.2;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tech-block:hover .tech-icon {
          transform: scale(1.15);
          filter: drop-shadow(0 5px 10px rgba(0,0,0,0.2));
        }

        .tech-block:hover .tech-name {
          color: #1f2937;
          transform: scale(1.05);
        }

        .tech-tooltip {
          position: absolute;
          bottom: -2.5rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.9);
          color: white;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 10;
        }

        .tech-tooltip::before {
          content: '';
          position: absolute;
          top: -4px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid rgba(0,0,0,0.9);
        }

        .tech-block:hover .tech-tooltip {
          opacity: 1;
        }

        .fade-left {
          position: absolute;
          left: 0;
          top: 0;
          width: 100px;
          height: 100%;
          background: linear-gradient(to right, rgba(102,126,234,1), transparent);
          pointer-events: none;
          z-index: 3;
        }

        .fade-right {
          position: absolute;
          right: 0;
          top: 0;
          width: 100px;
          height: 100%;
          background: linear-gradient(to left, rgba(118,75,162,1), transparent);
          pointer-events: none;
          z-index: 3;
        }

        @media (max-width: 768px) {
          .tech-stack-title {
            font-size: 2rem;
          }
          
          .tech-block {
            width: 85px;
            height: 85px;
          }
          
          .tech-icon {
            font-size: 1.8rem;
          }

          .tech-name {
            font-size: 0.65rem;
          }
          
          .marquee-items {
            gap: 1.5rem;
          }
          
          .marquee-content {
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .tech-block {
            width: 75px;
            height: 75px;
          }
          
          .tech-icon {
            font-size: 1.6rem;
          }

          .tech-name {
            font-size: 0.6rem;
          }
          
          .marquee-items {
            gap: 1rem;
          }
          
          .marquee-content {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default TechStackMarquee;