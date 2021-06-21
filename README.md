# react-device-hooks

>

[![NPM](https://img.shields.io/npm/v/react-device-hooks.svg)](https://www.npmjs.com/package/react-device-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-device-hooks
```

## Usage

```tsx
import * as React from "react";

import { useScreen } from "react-device-hooks";

const Example = () => {
  const { width, height, orientation } = useScreen();
  return (
    <div>
      <p>Device width = {width}</p>
      <p>Device height = {height}</p>
      <p>Device orientation = {orientation}</p>
    </div>
  );
};
```

The `useScreen` hook return a object, which contains the height, width and orientation angle of the client screen.

## License

MIT © [subhashishnabajja](https://github.com/subhashishnabajja)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
