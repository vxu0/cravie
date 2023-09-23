import {
  MantineProvider,
  UnstyledButton,
  Checkbox,
  Text,
  createStyles,
  rem,
  Center,
  Transition,
} from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
import { IconKey, IconBulb } from "@tabler/icons-react";
import { useState } from "react";

interface Props {
  name: string;
  label: string;
  form: any;
}

// const KeyButton = ({ label }: Props) => {
//   return (
//     <>
//       <button>
//         <IconKey></IconKey>
//       </button>
//       <label color="black">{label}</label>
//     </>
//   );
// };

// export default KeyButton;

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    transition: "color 300ms ease",
    // padding: theme.spacing.xs,
    color: checked ? theme.colors.yellow[5] : theme.colors.gray,
    fill: checked ? theme.colors.yellow[4] : theme.colors.gray,
    label: {
      fontSize: theme.fontSizes.lg,
      padding: theme.spacing.xs,
      width: 150,
    },
  },
}));

interface ButtonProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  label: string;
}

export function Button({
  checked,
  defaultChecked,
  onChange,
  label,
  className,
  ...others
}: ButtonProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof ButtonProps>) {
  //   const { classes, cx } = useStyles();

  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  // const [keyFilled, setKeyFilled] = useState(false);

  const { classes, cx } = useStyles({ checked: value });

  return (
    <>
      {/* <Transition transition="scale" duration={400} timingFunction="ease"> */}
      <UnstyledButton
        {...others}
        onClick={() => {
          handleChange(!value);
          // setKeyFilled(!value);
        }}
        className={cx(classes.button, className)}
      >
        <IconBulb
          // fill={keyFilled ? "theme.colors.yellow[2]" : "theme.colors.yellow[2]"}
          size={40}
        ></IconBulb>
        <label>{label}</label>
      </UnstyledButton>
      {/* </Transition> */}
    </>
  );
}

const KeyButton = ({ name, label, form }: Props) => {
  return (
    <Button name={name} label={label} {...form.getInputProps(name)}></Button>
  );
};

export default KeyButton;
