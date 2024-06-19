export interface MyTextProps {
    size?: "small" | "medium" | "large";
    bold?: boolean;
    underline?: boolean;
    disabled?: boolean;
    backgroundColor?: string;
    visible?: boolean;
    children: React.ReactNode;
    [x: string]: any;
  }
  