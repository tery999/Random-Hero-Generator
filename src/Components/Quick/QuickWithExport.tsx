import Quick from "./Quick"
import generatePDF from "react-to-pdf"

export function QuickWithExport() {
    const getTargetElement = () => document.getElementById("container");

    const downloadPdf = () => generatePDF(getTargetElement);

    return (
        <div className="ParentContainer">
            <div id="container">
                <Quick />
            </div>
            <button className="DownloadPfdButton" onClick={downloadPdf}>Свали герой</button>
        </div>


    )
}