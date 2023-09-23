import {
  MantineProvider,
  createStyles,
  Switch,
  Group,
  rem,
} from "@mantine/core";

interface Props {
  name: string;
  label: string;
  form: any;
}

const useStyles = createStyles((theme) => ({
  body: {
    display: "flex",
    alignItems: "center",
  },

  label: {
    fontSize: theme.fontSizes.lg,
    color: theme.white,
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
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
    transition: "background-color 100ms ease, left 100ms ease",

    "input:checked + * > &": {
      backgroundColor: "teal",
    },
  },
}));

const Toggle = ({ name, label, form }: Props) => {
  const { classes } = useStyles();
  return (
    <>
      <MantineProvider theme={{ primaryColor: "teal" }}>
        <Group position="left" p="xs">
          <Switch
            name={name}
            label={label}
            classNames={classes}
            {...form.getInputProps(name)}
          />
        </Group>
      </MantineProvider>
    </>
  );
};

export default Toggle;
