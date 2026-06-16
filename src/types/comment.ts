export interface Comment {
  id: string;
  comment: string;
  x: number; // percentage of viewport width (0-100)
  y: number; // percentage of viewport height (0-100)
  created_at: string;
}
