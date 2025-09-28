# Assignment - UI Components Library

This repository contains a simple **UI components library** built using **React + TypeScript + Vite** with **Storybook** for component previews and **Vitest** for basic testing.

---

## 🏗 Folder Structure

.
├─ src/
│ ├─ components/
│ │ ├─ InputFields/
│ │ │ ├─ InputField.tsx
│ │ │ └─ InputField.stories.tsx
│ │ ├─ DataTable/
│ │ │ ├─ DataTable.tsx
│ │ │ └─ DataTable.stories.tsx
│ │ └─ ... (other components)
├─ .storybook/
│ ├─ main.ts
│ ├─ preview.ts
│ └─ vitest.setup.ts
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md


---

## ⚡ Components

### 1. **InputField**
- Text input component with:
  - Label, placeholder, helper text, error message
  - States: `disabled`, `invalid`, `loading`
  - Variants: `filled`, `outlined`, `ghost`
  - Sizes: `sm`, `md`, `lg`
  - Optional: clear button, password toggle
- Props fully typed with TypeScript
- Storybook stories included for all states and variants

**Usage:**
```tsx
import InputField from "@/components/InputFields/InputField";

<InputField
  label="Username"
  placeholder="Enter your name"
  helperText="This is required"
  variant="outlined"
  size="md"
/>
2. DataTable

Displays tabular data with:

Column sorting

Row selection (single/multiple)

Loading and empty states

Fully typed with TypeScript generics

Storybook stories for Default, Sortable, Selectable, Loading, Empty
import DataTable, { Column } from "@/components/DataTable/DataTable";

const columns: Column<Person>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];

<DataTable
  data={sampleData}
  columns={columns}
  selectable
  onRowSelect={(rows) => console.log(rows)}
/>
🧪 Testing

Vitest is used for basic testing

Example tests:

Renders components correctly

Sorting works

Row selection triggers callback

Loading & empty states

Run tests:

npm run test

🚀 Setup Instructions

Clone the repository

git clone https://github.com/aashirwad89/Assignment-uzence.git
cd Assignment-uzence


Install dependencies

npm install


Run Storybook

npm run storybook


Open http://localhost:6006
 to view components.

Run tests

npm run test


Build for production

npm run build
