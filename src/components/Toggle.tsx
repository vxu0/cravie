import {
  MantineProvider,
  createStyles,
  Switch,
  Group,
  rem,
} from "@mantine/core";

interface Props {
  // onChange?(checked: boolean): void;
  // setFn: ({}) => void;
  name: string;
  label: string;
  form: any;
}

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  body: {
    display: "flex",
    alignItems: "center",
  },

  label: {
    fontSize: theme.fontSizes.lg,
    color: theme.white,
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    // color: "blue",
    // color: checked ? "blue" : "red",
  },

  track: {
    width: rem(40),
    height: rem(18),
    overflow: "visible",
  },

  thumb: {
    width: rem(25),
    height: rem(25),
    left: rem(-8),
    // right: rem(20),
    transition: "background-color 100ms ease left 100ms ease",
    // backgroundColor: checked ? "teal" : undefined,
    "input:checked + * > &": {
      backgroundColor: "teal",
    },
  },
}));

const Toggle = ({ name, label, form }: Props) => {
  // const checked = form.values[name];
  const { classes } = useStyles({ checked: form.values[name] });
  return (
    <>
      <MantineProvider theme={{ primaryColor: "teal" }}>
        <Group position="left" p="xs">
          <Switch
            name={name}
            label={label}
            classNames={classes}
            checked={form.values[name]}
            onClick={() => {
              console.log("ONCLICK");
              // ???
              form.setFieldValue(name, !form.values[name]);
              // setFn(form.values);
              //
            }}
            {...form.getInputProps(name)}
          />
        </Group>
      </MantineProvider>
    </>
  );
};

export default Toggle;
