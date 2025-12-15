tsParticles
  .load("tsparticles", {
    background: {
      color: {
        value: "#2c3e50" // Matches your body background
      }
    },
    particles: {
      number: {
        value: 80,
      },
      color: {
        value: "#ffffff" // White dots
      },
      links: {
        enable: true, // Connects dots with lines
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1, 
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Interactive mouse grab
        },
        onClick: {
          enable: true,
          mode: "push", 
        },
      },
    },
  });
