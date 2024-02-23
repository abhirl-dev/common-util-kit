interface ColorProps {
    r: number,
    g: number,
    b: number,
}

interface DateConverterProps {
    /**
     * Timestamp should be either date string or milliseconds
     * @example 
     * const dateString = "1970-01-01"
     * const milliSec = 1708659189784
     */
    timeStamp: string | number,
    format: "milliSec" | "DD-MM-YYYY" | "YYYY-MM-DD" | "DD-MM-YY" | "Mon, DD-YYYY" | "Mon DD, YYYY" | "YYYY, Mon DD" | "DD Mon, YYYY" | "Mon DD YYYY" | "Mon DD",
};

interface DateReturnProps {
    milliseconds: number;
    yyyy: string,
    yy: string,
    mm: string,
    dd: string,
    month: string,

};

export type { ColorProps, DateConverterProps, DateReturnProps };