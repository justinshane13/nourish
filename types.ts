export type Product = {
  id: string;
  name: string;
  score: number;
  ingredients: string[];
  image: string;
  summary: string;
  bottomLine: "Go for it" | "Neutral" | "Stay away";
};