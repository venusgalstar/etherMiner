import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BGParticles = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
    container.canvas.element.style = 
    "pointer-events: none; width: 100% !important; height: 100% !important; position: fixed !important; z-index: -1 !important; top: 0px !important; left: 0px !important";
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#",
          }
        },
        fpsLimit: 120,
        // interactivity: {
        //   events: {
        //     onClick: {
        //       enable: true,
        //       mode: "push",
        //     },
        //     onHover: {
        //       enable: true,
        //       mode: "repulse",
        //     },
        //     resize: true,
        //   },
        //   modes: {
        //     push: {
        //       quantity: 4,
        //     },
        //     repulse: {
        //       distance: 200,
        //       duration: 0.4,
        //     },
        //   },
        // },

        particles: {
          color: {
            value: "#fff",
          },
          links: {
            color: "#fff",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 3000,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 5, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BGParticles;