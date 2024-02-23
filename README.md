# This utility provides functions to convert color and dates between different formats in JavaScript & TypeScript.

## Date conversion

- Import the common-util-kit package into your project.
- Call the desired function from your code to convert dates as needed.

```
import { ConvertDate } from "common-util-kit";

const convertedDate = ConvertDate.fromTimestamp({
    timeStamp: "1970-01-01",
    format: "DD-MM-YYYY",
});
```

## Color conversion

```
import { ConvertColor } from "common-util-kit";

const rgba = ConvertColor.hexToRGBA("#FFF", 0.5);

const hexColor = ConvertColor.rgbaStringToHEX("rgba(255, 0, 10, 0.5)");

const hexColor = ConvertColor.rgbToHex({ r: 255, g: 200, b: 100 });
```