export interface Product {
  id: string;
  name: string;
  score: number;
  ingredients: string[];
  image: string;
  summary: string;
  bottomLine: "Go for it" | "Neutral" | "Stay away";
};

export interface ButtonProps {
  title: string,
  onPress: () => void,
}

export interface NativeAdData {
  headline: string;
  body?: string;
  callToAction?: string;
  icon?: { url: string };
  mediaContent?: { aspectRatio: number; hasVideoContent: boolean };
}

export interface NativeAdCardProps {
  ad: NativeAdData;
}