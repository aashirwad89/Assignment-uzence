import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

const meta: Meta<typeof DataTable> = {
  title: "components/DataTable",
  component: DataTable,
};
export default meta;

type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    columns: ["Name", "Age", "City"],
    data: [
      { Name: "Aashirwad", Age: 19, City: "Varanasi" },
      { Name: "Rohit", Age: 22, City: "Delhi" },
    ],
  },
};
