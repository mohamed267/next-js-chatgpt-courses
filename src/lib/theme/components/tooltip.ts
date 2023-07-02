import { mode } from "@chakra-ui/theme-tools";
const TooltipComponents = {
  components: {
    Tooltip: {
      baseStyle: {
        bg: "gray.700",
        px: 3,
        py: 2,
        _after: {
          content: '""',
          w: 0,
          borderLeft: "8px solid",
          borderColor: "gray.700",
          h: 0,
          borderBottom: "8px solid  transparent",
          borderTop: "8px solid trasparent",
          // borderColor : "red",
          // bg: "red",
          position: "absolute",
          top: "-4px",
          right: "50%",
          transform: "rotateZ(45deg)",
        },
        // field: {
        //     bg : "red"
        // }
      },
    },
  },
};

export default TooltipComponents;
