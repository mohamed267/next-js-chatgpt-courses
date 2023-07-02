import { mode } from "@chakra-ui/theme-tools";
const InputComponents = {
  components: {
    Input: {
      baseStyle: {
        field: {
          fontWeight: 400,
          borderRadius: "8px",
        },
      },

      variants: {
        primary: (props: any) => ({
          field: {
            fontWeight: "500",
            color: mode("black.900", "white")(props),
            // bg: mode("gray.100", "transparent")(props),
            borderRadius: "10px",
            border: "1px solid",
            borderColor: mode("gray.300", "rgba(135, 140, 189, 0.3)")(props),
            boxShadow: "sm",
            _placeholder: { color: "gray.600", fontWeight: "400" },
            _hover: {
              borderColor: mode(
                "primary.500",
                "rgba(135, 140, 189, 0.3)"
              )(props),
            },
          },
        }),
        table: (props: any) => ({
          field: {
            bg: "white",
            color: "#000000",
            fontSize: "sm",
            border: "1px solid",
            borderColor: "gray.700",
            _focus: {
              borderColor: "primary.500",
            },
          },
        }),
        itemAdd: (props: any) => ({
          field: {
            bg: "primary.100",
            color: "gray.400",
            fontSize: 19,
            border: "2px solid",
            borderColor: "gray.200",
            _focus: {
              borderColor: "primary.500",
            },
          },
        }),
        primaryEditable: (props: any) => ({
          field: {
            color: "gray.400",
            fontSize: 19,
            border: "1px solid",
            borderColor: "primary.500",
            outline: "none",
          },
        }),
      },
    },
    NumberInput: {
      variants: {
        primary: (props: any) => ({
          field: {
            fontWeight: "500",
            color: mode("black.900", "white")(props),
            bg: mode("gray.100", "transparent")(props),
            border: "2px solid",
            borderColor: mode("gray.500", "rgba(135, 140, 189, 0.3)")(props),
            borderRadius: "10px",
            _placeholder: { color: "gray.600", fontWeight: "400" },
            _hover: {
              borderColor: mode(
                "primary.500",
                "rgba(135, 140, 189, 0.3)"
              )(props),
            },
          },
        }),
        table: (props: any) => ({
          field: {
            fontWeight: "500",
            color: mode("black.900", "white")(props),
            bg: mode("transparant", "transparent")(props),
            border: "1px solid",
            borderColor: mode("gray.500", "rgba(135, 140, 189, 0.3)")(props),
            borderRadius: "10px",
            _placeholder: { color: "gray.600", fontWeight: "400" },
            _hover: {
              borderColor: mode(
                "primary.500",
                "rgba(135, 140, 189, 0.3)"
              )(props),
            },
          },
        }),
      },
    },
    Textarea: {
      variants: {
        primary: {
          fontWeight: "500",
          color: "black.900",
          bg: "gray.200",
          border: "2px solid",
          borderColor: "gray.500",
          borderRadius: "10px",
          _placeholder: { color: "gray.600", fontWeight: "400" },
          _hover: {
            borderColor: "primary.500",
          },
        },
      },
    },
  },
};

export default InputComponents;
