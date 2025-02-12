import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
  Form: { title: string; squares: string; radiosCheck: number; checkBoxtype: number };
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
        squares: { type: "textarea" },
        radiosCheck: { type: "number" },
        checkBoxtype: { type: "text" }, 
      },
      defaultProps: {
        title: "Form",
        squares: "Default Text",
        radiosCheck: 1,
        checkBoxtype: 8, 
      },
      render: ({ title, squares, radiosCheck, checkBoxtype }) => (
        <div style={{ padding: 32 }}>
          <h2>{title}</h2>
          <p>Squares: {squares}</p>
          <p>Radios: {radiosCheck}</p>
          <label>
            <input type="radio"  readOnly />{radiosCheck}
          </label>
          <label><br></br>
            <input type="checkbox"  readOnly />{checkBoxtype}
          </label>
        </div>
        
      ),
    },
  },
};

export default config;
