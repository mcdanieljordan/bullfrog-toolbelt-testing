/**
 * @startingPoint section="Components" subtitle="Pill search input with accent focus ring" viewport="700x100"
 */
export interface InputProps {
  placeholder?: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
