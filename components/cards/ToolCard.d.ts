/**
 * @startingPoint section="Components" subtitle="Lily-pad shaped tool listing card" viewport="700x320"
 */
export interface ToolCardProps {
  title: string;
  description: string;
  tags?: string[];
  icon?: React.ReactNode;
  cta?: string;
  onClick?: () => void;
}
