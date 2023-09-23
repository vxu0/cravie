import {
  UnstyledButton,
  Checkbox,
  Text,
  Center,
  MantineProvider,
  SimpleGrid,
  createStyles,
  rem,
} from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
// import icons from "./images/flags";

interface Props {
  options: {
    title: string;
    name: string;
    image: string;
  }[];
  form: any;
}

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    width: "13em",
    transition: "background-color 150ms ease, border-color 150ms ease",
    border: `${rem(1)} solid ${
      checked
        ? theme.fn.variant({ variant: "outline", color: "yellow" }).border
        : theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xs,
    backgroundColor: checked
      ? theme.fn.variant({ variant: "light", color: "yellow" }).background
      : theme.colorScheme === "dark"
      ? theme.colors.dark[8]
      : theme.white,
    input: {
      backgroundColor: checked ? theme.colors.teal[3] : theme.white,
    },
  },

  body: {
    flex: 1,
    marginLeft: 0,
    color: theme.colors.dark[4],
    fontSize: theme.fontSizes.md,
  },
}));

interface ImageCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  title: string;
  image: string;
}

export function ImageCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  className,
  image,
  ...others
}: ImageCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof ImageCheckboxProps>) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const { classes, cx } = useStyles({ checked: value });

  return (
    <MantineProvider theme={{ primaryColor: "yellow" }}>
      <UnstyledButton
        {...others}
        onClick={() => handleChange(!value)}
        className={cx(classes.button, className)}
      >
        <Text size="xl">{image}</Text>

        <div className={classes.body}>
          <Text weight={500} align="center" size="md" sx={{ lineHeight: 1 }}>
            {title}
          </Text>
        </div>

        <Checkbox
          checked={value}
          onChange={() => {}}
          tabIndex={-1}
          styles={{ input: { cursor: "pointer" } }}
        />
      </UnstyledButton>
    </MantineProvider>
  );
}

const CheckboxGroup = ({ options, form }: Props) => {
  const items = options.map((item) => (
    <ImageCheckbox
      {...item}
      name={item.name}
      key={item.title}
      {...form.getInputProps(item.name)}
    />
  ));
  return (
    <Center>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 },
        ]}
      >
        {items}
      </SimpleGrid>
    </Center>
  );
};

export default CheckboxGroup;
