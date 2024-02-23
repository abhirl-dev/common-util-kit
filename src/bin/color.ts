import { ColorProps } from "./types.interface";

/**
 * Color conversion utility used to convert css color properties.
 */
class ConvertColor {

    /**
     * To convert css hex color values to css rgba color values.
     * * returns hex color value if the input hex value is invalid.
     * @example
     * const rgba = ConvertColor.hexToRGBA("#FFF", 0.5);
     */
    static hexToRGBA(hex: string, alpha: number = 1, ...arg: any): string {
        const match: RegExpMatchArray | null = hex.match(/\w\w/g);

        if (match) {
            const [red, green, blue] = match.map(color => parseInt(color, 16));
            const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
            return rgba;
        }
        return hex;
    }

    /**
     * To convert css rgba color string to hex color string.
     * * returns intput rgba color string in case of invalid rgba color string.
     * @example
     * const hexColor = ConvertColor.rgbaStringToHEX("rgba(255, 0, 10, 0.5)");
     */
    static rgbaStringToHEX(rgbaString: string): string {
        const rgba: RegExpMatchArray | null = rgbaString.match(/\d+/g);

        if (rgba) {
            const hexArray: Array<string> = rgba.slice(0, 3).map((val) => {
                const hex: string = parseInt(val).toString(16);
                return hex.length === 1 ? `0${hex}` : hex;
            });
            return `#${hexArray.join("")}`;
        }
        return rgbaString;
    }

    /**
     * To convert rgb values to hex colors string
     * @example
     * const hexColor = ConvertColor.rgbToHex({ r: 255, g: 200, b: 100 });
     */
    static rgbToHex({ r, g, b }: ColorProps): string {
        const rgbArray: Array<number> = [r, g, b];

        const hexArray: Array<string> = rgbArray.map((val: number) => {
            const hex: string = val.toString(16);
            return hex.length === 1 ? `0${hex}` : hex;
        });
        return `#${hexArray.join("")}`;
    }
}

export { ConvertColor };