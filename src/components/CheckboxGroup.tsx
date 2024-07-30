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

interface Props {
  options: {
    title: string;
    name: string;
    image: string;
  }[];
  form: any;
}

// const [allSelected, setAllSelected] = useState(false);
// let selected: string[];
// selected = [];

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
  onChange?(checked: boolean): void;
  title: string;
  image: string;
  form: any;
  name: string;
}

export function ImageCheckbox({
  onChange,
  title,
  className,
  image,
  form,
  name,
  ...others
}: ImageCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof ImageCheckboxProps>) {
  const { classes, cx } = useStyles({ checked: form.values[name] });

  return (
    <MantineProvider theme={{ primaryColor: "yellow" }}>
      <UnstyledButton
        {...others}
        onClick={() => {
          form.setFieldValue(name, !form.values[name]);
        }}
        className={cx(classes.button, className)}
      >
        <Text size="xl">{image}</Text>

        <div className={classes.body}>
          <Text weight={500} align="center" size="md" sx={{ lineHeight: 1 }}>
            {title}
          </Text>
        </div>

        <Checkbox
          checked={form.values[name]}
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
      form={form}
      {...form.getInputProps(item.name)}
    />
  ));
  return (
    <>
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
    </>
  );
};

export default CheckboxGroup;
