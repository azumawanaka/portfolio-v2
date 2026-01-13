export interface ParticlesConfig {
  background: {
    color: {
      value: string;
    };
  };
  particles: {
    color: {
      value: string | string[];
    };
    links: {
      color: string;
      enable: boolean;
      opacity: number;
    };
    number: {
      value: number;
    };
    size: {
      value: { min: number; max: number };
    };
  };
}

export const particlesConfigs = {
  // Version 1: Dark Tech Theme (from earlier)
  darkTech: {
    background: {
      color: {
        value: 'transparent',
      },
    },
    particles: {
      color: {
        value: ['#64FFDA', '#FF7B54'], // Cyan and Orange
      },
      links: {
        color: '#64FFDA',
        enable: true,
        opacity: 0.2,
      },
      number: {
        value: 70,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
  },

  // Version 2: Cyberpunk
  cyberpunk: {
    background: {
      color: {
        value: 'transparent',
      },
    },
    particles: {
      color: {
        value: ['#9d4edd', '#ff6b9d', '#00f5d4'],
      },
      links: {
        color: '#9d4edd',
        enable: true,
        opacity: 0.3,
      },
      number: {
        value: 80,
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
  },

  // Version 3: Matrix
  matrix: {
    background: {
      color: {
        value: 'transparent',
      },
    },
    particles: {
      color: {
        value: '#00ff41',
      },
      links: {
        color: '#00cc33',
        enable: true,
        opacity: 0.1,
      },
      move: {
        direction: 'bottom' as const,
        speed: 3,
      },
      number: {
        value: 100,
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
  },

  // Version 4: Minimal
  minimal: {
    background: {
      color: {
        value: 'transparent',
      },
    },
    particles: {
      color: {
        value: '#ff2e63',
      },
      links: {
        color: '#ff2e63',
        enable: false,
      },
      number: {
        value: 40,
      },
      size: {
        value: { min: 1, max: 5 },
      },
      opacity: {
        value: 0.5,
      },
    },
  },
};
