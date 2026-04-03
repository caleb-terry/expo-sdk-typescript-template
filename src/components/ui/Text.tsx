import { cn } from "@/lib/utils";
import { Text as RNText, type TextProps } from "react-native";

interface Props extends TextProps {
  className?: string;
}

export function Text({ className, ...props }: Props) {
  return <RNText className={cn("text-base text-black", className)} {...props} />;
}
