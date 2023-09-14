import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DownloadPDF() {
	const ref = useRef();
	const navigate = useNavigate();

	return (
		<a
			onClick={(e) => {
				e.target.click();
				navigate('/');
			}}
			className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center font-bold cursor-pointer"
			ref={ref}
			href="/PDF/DOPAMINE RESET SHCE.pdf"
			download={`DOPAMINE RESET SHCE.pdf`}>
			Ấn vào đây để tải lịch trình dopamine
		</a>
	);
}
