interface ColorProps {
    hex: string,
    alpha?: number,
}

interface DateConverterProps {
    timeStamp: any,
    format: "DD-MM-YYYY" | "YYYY-MM-DD" | "DD-MM-YY" | "Mon, DD-YYYY" | "Mon DD, YYYY" | "YYYY, Mon DD" | "DD Mon, YYYY",
};

interface DateReturnProps {
    yyyy: string,
    yy: string,
    mm: string,
    dd: string,
    month: string,

};

export type { ColorProps, DateConverterProps, DateReturnProps };