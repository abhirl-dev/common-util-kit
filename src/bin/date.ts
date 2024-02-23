import { DateConverterProps, DateReturnProps } from "./types.interface";

class ConvertDate {

    /**
     * To convert date or timestamp to desired format.
     */
    static fromTimestamp(props: DateConverterProps): string | number {
        const _dt: DateReturnProps = _buildDate(props.timeStamp);

        switch (props.format) {
            case "milliSec":
                return _dt.milliseconds;

            case "DD-MM-YYYY":
                return `${_dt.dd}-${_dt.mm}-${_dt.yyyy}`;

            case "YYYY-MM-DD":
                return `${_dt.yyyy}-${_dt.mm}-${_dt.dd}`;

            case "DD-MM-YY":
                return `${_dt.dd}-${_dt.mm}-${_dt.yy}`;

            case "Mon, DD-YYYY":
                return `${_dt.month}, ${_dt.dd}-${_dt.yyyy}`;

            case "DD Mon, YYYY":
                return `${_dt.dd} ${_dt.month}, ${_dt.yyyy}`;

            case "Mon DD, YYYY":
                return `${_dt.month} ${_dt.dd}, ${_dt.yyyy}`;

            case "YYYY, Mon DD":
                return `${_dt.yyyy}, ${_dt.month} ${_dt.dd}`;

            case "Mon DD YYYY":
                return `${_dt.month} ${_dt.dd} ${_dt.yyyy}`;

            case "Mon DD":
                return `${_dt.month} ${_dt.dd}`;

            default:
                return `${props.timeStamp}`;
        }
    }
}

export { ConvertDate };

const _monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function _buildDate(dateTime: string | number | Date): DateReturnProps {
    const date: Date = typeof (dateTime) === 'object' ? dateTime : new Date(dateTime);

    const dd = date.getDate().toString().padStart(2, "0").slice(-2);
    const mm = (date.getMonth() + 1).toString().padStart(2, "0").slice(-2);
    const yyyy = date.getFullYear().toString();
    const yy = date.getFullYear().toString().slice(-2);

    return {
        milliseconds: date.getTime(),
        dd: dd,
        mm: mm,
        yyyy: yyyy,
        yy: yy,
        month: _monthArray[parseInt(mm) - 1],
    };
}