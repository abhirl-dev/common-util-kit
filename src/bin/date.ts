import { DateConverterProps, DateReturnProps } from "./types.interface";

class ConvertDate {

    static fromTimestamp(props: DateConverterProps): string | number {
        const _dt: DateReturnProps = _buildDate(props.timeStamp);

        switch (props.format) {
            case "DD-MM-YYYY":
                return `${_dt.dd}-${_dt.mm}-${_dt.yyyy}`;

            case "YYYY-MM-DD":
                return `${_dt.yyyy}-${_dt.mm}-${_dt.dd}`;

            case "DD-MM-YY":
                return `${_dt.dd}-${_dt.mm}-${_dt.yy}`;

            case "Mon, DD-YYYY":
                return `${_dt.month}, ${_dt.dd}-${_dt.yyyy}`;

            default:
                return `${_dt}`;
        }
    }
}

export { ConvertDate };

const _monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function _buildDate(dateTime: Date): DateReturnProps {
    const date: Date = new Date(dateTime);

    const dd = date.getDate().toString().padStart(2, "0").slice(-2);
    const mm = (date.getMonth() + 1).toString().padStart(2, "0").slice(-2);
    const yyyy = date.getFullYear().toString();
    const yy = date.getFullYear().toString().slice(-2);
    const tt = date.getTime();

    return {
        dd: dd,
        mm: mm,
        yyyy: yyyy,
        yy: yy,
        month: _monthArray[parseInt(mm) - 1],
    };
}