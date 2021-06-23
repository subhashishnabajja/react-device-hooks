import { renderHook, act } from "@testing-library/react-hooks";
import { useScreen } from "./useScreen";
import matchMediaPolyfill from "mq-polyfill";

matchMediaPolyfill(window);

window.resizeTo = function resizeTo(width, height) {
  Object.assign(this, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height,
  }).dispatchEvent(new this.Event("resize"));
};

describe("useScreen", () => {
  test("should output the size of the viewport", async () => {
    const { result } = renderHook(() => useScreen());

    act(() => {
      window.resizeTo(500, 500);
    });

    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(500);
  });
  test("should show change in screen size", () => {
    const { result } = renderHook(() => useScreen());

    act(() => {
      window.resizeTo(500, 500);
      console.log(window.innerWidth);
    });

    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(500);

    act(() => {
      window.resizeTo(1000, 1000);
    });

    expect(result.current.width).toBe(1000);
    expect(result.current.height).toBe(1000);
  });
  test("should show arbitary in screen size", () => {
    const { result } = renderHook(() => useScreen());
    const height = Math.random();
    const width = Math.random();
    act(() => {
      window.resizeTo(width, height);
    });

    expect(result.current.width).toBe(width);
    expect(result.current.height).toBe(height);
  });
});
