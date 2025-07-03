import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import "./DownloadButton.css"
import { FaFileDownload } from "react-icons/fa"; 

function DownloadButton() {
    const handleDownload = async () => {
        const resumeElement = document.querySelector('.page-container');
        if (!resumeElement) return;

        const canvas = await html2canvas(resumeElement, {
            scale: 2, // Higher quality
            useCORS: true,
            allowTaint: true
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');
    };

    return (
        <button onClick={handleDownload} className="download-btn">
            <FaFileDownload /> Download PDF
        </button>
    );
}

export default DownloadButton;

