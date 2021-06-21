import { useEffect, useState } from "react";

export interface IScreen {
  height: number;
  width: number;
  orientation?: number;
}
export type useScreenType = () => IScreen;

export const useScreen: useScreenType = () => {
  const [screen, setScreen] = useState<IScreen>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    window.onload = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
        orientation: window.screen.orientation.angle,
      });
    };
    window.onresize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
        orientation: window.screen.orientation.angle,
      });
    };
  }, []);

  return screen;
};
