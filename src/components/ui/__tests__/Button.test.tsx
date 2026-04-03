import { Button } from "@/components/ui/Button";
import { render, screen } from "@testing-library/react-native";

describe("Button", () => {
  it("renders label", () => {
    render(<Button label="Press me" onPress={() => {}} />);
    expect(screen.getByText("Press me")).toBeTruthy();
  });
});
