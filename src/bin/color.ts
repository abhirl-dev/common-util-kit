import { ColorProps } from "./types.interface";

class ConvertColor {

    /**
     * To convert css hex color values to css rgba color values.
     * * returns hex color value if the input hex value is invalid.
     * @example
     * const rgba = ConvertColor.hexToRGBA("#FFF", 0.5);
     */
    static hexToRGBA(hex: string, alpha: number = 1, ...arg:any): string {
        const match: RegExpMatchArray | null = hex.match(/\w\w/g);

        if (match) {
            const [red, green, blue] = match.map(color => parseInt(color, 16));
            const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
            return rgba;
        }

        return hex;
    }
}

export { ConvertColor };