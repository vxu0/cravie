import { createStyles, SegmentedControl, rem } from "@mantine/core";
import { useState } from "react";

interface Props {
  name: string;
  options: string[];
  form: any;
}

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  indicator: {
    backgroundImage: theme.fn.gradient({ from: "teal", to: "yellow" }),
  },

  control: {
    border: "0 !important",
  },

  label: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.dark[4],
    "&, &:hover": {
      "&[data-active]": {
        color: theme.white,
      },
    },
  },
}));

const OptionGroup = ({ name, options, form }: Props) => {
  const { classes } = useStyles();
  const [value, setValue] = useState("react");
  return (
    <>
      <SegmentedControl
        radius="xl"
        name={name}
        data={options}
        value={value}
        onChange={setValue}
        classNames={classes}
        {...form.getInputProps(name)}
      />
      <br />
    </>
  );
};

export default OptionGroup;

// interface Props {
//   // interface to define shape of props
//   children: string; // tip: props in alphabetical order
//   color?: "primary" | "secondary" | "danger"; // question mark = optional param
//   // property limited to these three values (otherwise can just write type: string)
//   onClick: () => void;
// }

// const Button = ({ children, color = "primary", onClick }: Props) => {
//   return (
//     <button className={"btn btn-" + color} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

// export default Button;
