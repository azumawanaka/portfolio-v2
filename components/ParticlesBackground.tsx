'use client';

import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import particles with SSR disabled
const Particles = dynamic(() => import('react-tsparticles'), {
  ssr: false,
  loading: () => null,
});

const ParticlesBackground = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check device type
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent));
    };

    // Check reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
    };

    checkMobile();
    checkReducedMotion();

    // Only enable particles after page load and if not mobile/reduced motion
    if (!isMobile && !reducedMotion) {
      const timer = setTimeout(() => {
        setIsEnabled(true);
      }, 1500); // Delay loading particles

      return () => clearTimeout(timer);
    }
  }, [isMobile, reducedMotion]);

  const particlesInit = useCallback(async (engine: any) => {
    // Dynamically import the slim version
    const { loadSlim } = await import('tsparticles-slim');
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Optional callback
  }, []);

  // Don't render particles on mobile or if user prefers reduced motion
  if (!isEnabled || isMobile || reducedMotion) {
    return null;
  }

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 30, // CRITICAL: Reduced from 120 to 30
        interactivity: {
          events: {
            onClick: {
              enable: false, // Disabled for performance
            },
            onHover: {
              enable: true,
              mode: 'grab', // Lighter than repulse
              parallax: {
                enable: false, // Disabled for performance
              },
            },
            resize: {
              enable: true,
              delay: 500,
            },
          },
          modes: {
            grab: {
              distance: 80,
              links: {
                opacity: 0.8,
              },
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 200, // Reduced
            enable: true,
            opacity: 0.8, // Reduced
            width: 1, // Reduced
            triangles: {
              enable: false, // Disabled for performance
            },
          },
          collisions: {
            enable: false, // Disabled for performance
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 0.8, // Reduced from 2
            straight: false,
            trail: {
              enable: false, // Disabled for performance
            },
          },
          number: {
            density: {
              enable: true,
              area: 1000, // Increased area
            },
            value: 20, // CRITICAL: Reduced from 60 to 20
          },
          opacity: {
            value: 0.2, // Reduced
            animation: {
              enable: false, // Disabled for performance
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 0.5, max: 2 }, // Smaller
          },
          reduceDuplicates: true,
        },
        detectRetina: false, // Disabled for performance
        pauseOnOutsideViewport: true,
        pauseOnBlur: true,
        smooth: false,
        motion: {
          reduce: {
            factor: 2,
            value: true,
          },
        },
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesBackground;
