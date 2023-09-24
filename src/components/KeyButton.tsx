import { UnstyledButton, createStyles } from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
import { IconBulb } from "@tabler/icons-react";

interface Props {
  name: string;
  label: string;
  form: any;
}

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    transition: "color 300ms ease",
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
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const { classes, cx } = useStyles({ checked: value });

  return (
    <>
      <UnstyledButton
        {...others}
        onClick={() => {
          handleChange(!value);
        }}
        className={cx(classes.button, className)}
      >
        <IconBulb size={40}></IconBulb>
        <label>{label}</label>
      </UnstyledButton>
    </>
  );
}

const KeyButton = ({ name, label, form }: Props) => {
  return (
    <Button name={name} label={label} {...form.getInputProps(name)}></Button>
  );
};

export default KeyButton;
