import { Text } from "@/components/ui/Text";
import * as Sentry from "@sentry/react-native";
import { Component, type ReactNode } from "react";
import { View } from "react-native";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    Sentry.captureException(error, { extra: { componentStack: info.componentStack } });
  }

  render() {
    if (this.state.hasError) {
      return (
        <View className="flex-1 items-center justify-center p-8">
          <Text className="text-xl font-semibold">Something went wrong</Text>
        </View>
      );
    }
    return this.props.children;
  }
}
