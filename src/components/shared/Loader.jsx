import { TailSpin } from "react-loader-spinner";

function Loader({ size, justifyContent }) {
    let marginTop;
    switch (size) {
        case "140":
            marginTop = "220px";
            break;
        case "70":
            marginTop = "115px";
            break;
        default:
            marginTop = "100px";
    }
    return (
        <div
            style={{
                display: "flex",
                justifyContent,
                marginTop,
            }}
        >
            <TailSpin
                visible={true}
                height={size}
                width={size}
                color="#397ce8"
                ariaLabel="tail-spin-loading"
                radius="1"
            />
        </div>
    );
}

export default Loader;
