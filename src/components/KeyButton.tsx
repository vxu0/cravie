import { UnstyledButton, createStyles } from "@mantine/core";
import { IconBulb } from "@tabler/icons-react";

interface ButtonProps {
  onChange?(checked: boolean): void;
  label: string;
  name: string;
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

export function KeyButton({
  name,
  onChange,
  label,
  className,
  form,
  ...others
}: ButtonProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof ButtonProps>) {
  const { classes, cx } = useStyles({ checked: form.values[name] });

  return (
    <>
      <UnstyledButton
        {...others}
        onClick={() => {
          form.setFieldValue(name, !form.values[name]);
        }}
        className={cx(classes.button, className)}
      >
        <IconBulb size={40}></IconBulb>
        <label>{label}</label>
      </UnstyledButton>
    </>
  );
}

export default KeyButton;
