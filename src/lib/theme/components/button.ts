const ButtonComponents = {
  components: {
    Button: {
      variants: {
        primaryFill: {
          bg: "primary.500",
          color: "white",
          transition: "all .5s ease-in-out",
          _hover: {
            filter: "brightness(.85)",
          },
        },
        // primaryOutline: {
        //   bg: "transparent",
        //   borderColor: "primary.500",
        //   border: "1px",
        //   color: "primary.500",
        //   transition: "all .5s ease-in-out",
        //   _hover: {
        //     filter: "brightness(.95)",
        //     transform: "translateY(-1px)",
        //   },
        // },

        // primaryGuost: {
        //   bg: "transparent",
        //   color: "primary.500",
        //   transition: "transform .5s ease-in-out",
        //   _hover: {
        //     filter: "brightness(.95)",
        //     transform: "translateY(-1px)",
        //     border: "1px",
        //     borderColor: "primary.500",
        //   },
        // },
        // pure: {
        //   bg: "transparent",
        //   _hover: {
        //     bg: "transparent",
        //   },
        // },

        // grayFill: {
        //   bg: "gray.100",
        //   color: "gray.400",
        //   transition: "all .5s ease-in-out",
        //   _hover: {
        //     filter: "brightness(.85)",
        //   },
        // },
        // grayOutline: {
        //   bg: "transparent",
        //   borderColor: "gray.500",
        //   border: "1px",
        //   color: "gray.500",
        //   transition: "transform .5s ease-in-out",
        //   _hover: {
        //     filter: "brightness(.95)",
        //     transform: "translateY(-1px)",
        //     borderColor: "primary.500",
        //     color: "gray.500",
        //   },
        // },

        // dangerFill: {
        //   bg: "danger.300",
        //   color: "white",
        //   transition: "filter .5s ease-in-out",
        //   _hover: {
        //     filter: "brightness(.85)",
        //   },
        // },
        // dangerGuost: {
        //   transition: "filter .5s ease-in-out",
        //   _hover: {
        //     color: "danger.500",
        //     border: "1px",
        //     borderColor: "danger.500",
        //   },
        // },
        // trasparent: {
        //   opacity: 0,
        // },

        base: {
          _hover: {
                filter: "brightness(.95)",
            },
        },

        white: {
          bg: "white",
          color: "gray.900",
        },

        
      },
    },
  },
};

export default ButtonComponents;
