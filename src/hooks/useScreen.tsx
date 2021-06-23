import { useEffect, useState } from "react";

export interface IScreen {
  height: number;
  width: number;
  orientation?: number;
}
export type useScreenType = () => IScreen;

export const useScreen: useScreenType = () => {
  const [screen, setScreen] = useState<IScreen>({
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: 0,
  });
  const checkOrientation: () => number = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.screen.orientation !== "undefined"
    ) {
      return window.screen.orientation.angle;
    } else {
      return 0;
    }
  };

  window.onload = () => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: checkOrientation(),
    });
  };
  window.onresize = () => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: checkOrientation(),
    });
  };
  useEffect(() => {
    return () => {
      window.onload = null;
      window.onresize = null;
    };
  }, []);

  return screen;
};
