export interface TPBtnProps {
  onClick?: () => void;
  disabled?: boolean;
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "secondary";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-xs" | "icon-lg";
  icon?: React.ReactNode;
  context?: string;
  children?: React.ReactNode;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
}
