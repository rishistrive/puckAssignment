import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
  Form: { title: string };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    Form: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Form",
      },
      render: ({ title }) => (
        <div style={{ padding: 32 }}>
          <h2>{title}</h2>
        </div>
      ),
    },
  },
};

export default config;
