import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";
import { useState } from "react";

const meta: Meta<typeof InputField> = {
  title: "components/InputField",
  component: InputField,
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("");
    return <InputField placeholder="Type here..." value={value} onChange={setValue} />;
  },
};
