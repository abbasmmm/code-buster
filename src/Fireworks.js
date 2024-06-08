import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import React from 'react';

export const FireWorks = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadAll(engine);
      //await loadFull(engine);
      //await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const configs = {
    name: "Fireworks Mask",
    fullScreen: {
      enable: true,
    },
    background: {
      color: "#000000",
      image: "url('https://particles.js.org/images/background3.jpg')",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
    backgroundMask: {
      enable: true,
      cover: {
        color: "#000",
      },
    },
    emitters: {
      direction: "top",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1,
      },
      rate: {
        delay: 0.15,
        quantity: 1,
      },
      size: {
        width: 100,
        height: 0,
      },
      position: {
        y: 100,
        x: 50,
      },
    },
    particles: {
      color: {
        value: "#fff",
      },
      number: {
        value: 0,
      },
      destroy: {
        bounds: {
          top: 30,
        },
        mode: "split",
        split: {
          count: 1,
          factor: {
            value: 0.333333,
          },
          rate: {
            value: 100,
          },
          particles: {
            stroke: {
              width: 0,
            },
            color: {
              value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
            },
            number: {
              value: 0,
            },
            collisions: {
              enable: false,
            },
            destroy: {
              bounds: {
                top: 0,
              },
            },
            opacity: {
              value: {
                min: 0.1,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 0.7,
                sync: false,
                startValue: "max",
                destroy: "min",
              },
            },
            effect: {
              type: "trail",
              options: {
                trail: {
                  length: {
                    min: 5,
                    max: 10,
                  },
                },
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 2,
              animation: {
                enable: false,
              },
            },
            life: {
              count: 1,
              duration: {
                value: {
                  min: 1,
                  max: 2,
                },
              },
            },
            move: {
              enable: true,
              gravity: {
                enable: true,
                acceleration: 9.81,
                inverse: false,
              },
              decay: 0.1,
              speed: {
                min: 10,
                max: 25,
              },
              direction: "outside",
              outModes: "destroy",
            },
          },
        },
      },
      life: {
        count: 1,
      },
      effect: {
        type: "trail",
        options: {
          trail: {
            length: {
              min: 10,
              max: 30,
            },
            minWidth: 1,
            maxWidth: 1,
          },
        },
      },
      rotate: {
        path: true,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 1,
      },
      move: {
        enable: true,
        gravity: {
          acceleration: 15,
          enable: true,
          inverse: true,
          maxSpeed: 100,
        },
        speed: {
          min: 10,
          max: 20,
        },
        outModes: {
          default: "destroy",
          top: "none",
        },
      },
    },
  };

  const config2 = {
    smooth: true,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 15,
        },
      },
    },
    particles: {
      move: {
        direction: "none",
        distance: 5,
        enable: true,
        outModes: "none",
        speed: 1,
      },
      number: {
        value: 600,
      },
      shape: {
        type: ["circle", "square", "triangle"],
      },
      size: {
        value: {
          min: 3,
          max: 5,
        },
      },
    },
    canvasMask: {
      enable: true,
      scale: 5,
      pixels: {
        filter: "pixelFilter",
      },
      image: {
        src: "https://particles.js.org/images/amongus_cyan.png",
      },
    },
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };

  const config3 = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 0,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffff00",
        animation: {
          enable: true,
          speed: -70,
          sync: true,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0,
          sync: false,
        },
      },
      size: {
        value: 8,
        random: { enable: true, minimumValue: 4 },
        animation: {
          enable: false,
          speed: 20,
          minimumValue: 4,
          sync: false,
        },
      },
      life: {
        duration: {
          value: 2,
        },
        count: 1,
      },
      move: {
        angle: {
          value: 45,
          offset: 0,
        },
        enable: true,
        gravity: {
          enable: true,
          acceleration: -0.5,
        },
        speed: 10,
        direction: "top",
        random: false,
        straight: false,
        size: true,
        outModes: {
          default: "destroy",
          bottom: "none",
        },
        attract: {
          enable: false,
          distance: 300,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true,
      },
    },
    detectRetina: true,
    background: {
      color: "#000000",
    },
    emitters: {
      direction: "top",
      rate: {
        quantity: 50,
        delay: 0.01,
      },
      size: {
        width: 100,
        height: 10,
      },
      position: {
        x: 50,
        y: 100,
      },
    },
  };

  const config4 = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 0,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffff00",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0,
          sync: false,
        },
      },
      size: {
        value: 8,
        random: { enable: true, minimumValue: 4 },
        animation: {
          enable: false,
          speed: 20,
          minimumValue: 4,
          sync: false,
        },
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: -0.5,
        },
        speed: 5,
        direction: "top",
        random: false,
        straight: false,
        outModes: {
          default: "destroy",
          bottom: "none",
        },
        attract: {
          enable: true,
          distance: 300,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true,
      },
    },
    detectRetina: true,
    background: {
      color: "#000000",
    },
    emitters: [
      {
        direction: "top",
        particles: {
          color: "#f00",
        },
        rate: {
          quantity: 1,
          delay: 0.1,
        },
        size: {
          width: 100,
          height: 10,
        },
        position: {
          x: 50,
          y: 100,
        },
      },
      {
        direction: "top",
        particles: {
          color: "#0f0",
        },
        rate: {
          quantity: 1,
          delay: 0.1,
        },
        size: {
          width: 100,
          height: 10,
        },
        position: {
          x: 50,
          y: 100,
        },
      },
    ],
  };

  const config5 = {
    particles: {
      color: {
        value: ["#ffffff", "#ff0000", "#00ff00", "#0000ff"],
      },
      move: {
        enable: true,
        outModes: "out",
        speed: { min: 1, max: 3 },
        path: {
          enable: true,
          options: {
            waveLength: { min: 3, max: 7 },
            waveHeight: { min: 1, max: 5 },
          },
          generator: "zigZagPathGenerator",
        },
        trail: {
          enable: true,
          length: 20,
          fill: {
            color: "#000000",
          },
        },
      },
      number: {
        value: 80,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 3,
      },
    },
    background: {
      color: "#000000",
    },
  };

  const config6 = {
    fullScreen: {
      enable: true,
    },
    particles: {
      number: {
        value: 0,
      },
      color: {
        value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
      },
      shape: {
        type: ["circle", "square"],
      },
      opacity: {
        value: {
          max: 1,
          min: 0,
        },
        animation: {
          enable: true,
          speed: 2,
          startValue: "max",
          destroy: "min",
        },
      },
      size: {
        value: { min: 3, max: 7 },
      },
      life: {
        duration: {
          sync: true,
          value: 5,
        },
        count: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 20,
        },
        speed: {
          min: 25,
          max: 50,
        },
        drift: {
          min: -2,
          max: 2,
        },
        decay: 0.05,
        direction: "none",
        outModes: {
          default: "destroy",
          top: "none",
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: "random",
        move: true,
        animation: {
          enable: true,
          speed: 60,
        },
      },
      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 60,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15,
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true,
      },
    },
    detectRetina: true,
    background: {
      color: "#000",
    },
    responsive: [
      {
        maxWidth: 700,
        options: {
          particles: {
            move: {
              speed: 30,
              decay: 0.05,
            },
          },
        },
      },
    ],
    emitters: [
      {
        direction: "top-right",
        rate: {
          delay: 0.1,
          quantity: 10,
        },
        position: {
          x: 0,
          y: 50,
        },
        size: {
          width: 0,
          height: 0,
        },
      },
      {
        direction: "top-left",
        rate: {
          delay: 0.1,
          quantity: 10,
        },
        position: {
          x: 100,
          y: 50,
        },
        size: {
          width: 0,
          height: 0,
        },
      },
    ],
  };

  const options = useMemo(() => config6, []);

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />        
      </>
    );
  }

  return <></>;
};
