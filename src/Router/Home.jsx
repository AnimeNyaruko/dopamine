import { Link } from 'react-router-dom';
import run from '../assets/JS/index.js';
import importLib from '../assets/JS/importLib.js';
import { useEffect } from 'react';

export default function App() {
	useEffect(() => {
		run();
		importLib();
	}, []);

	return (
		<>
			<img
				src="/image/logo.png"
				className="w-12 lg:w-1/12 ml-5 lg:ml-8 mt-5 absolute h-auto"
				alt=""
			/>
			<div className="w-screen h-screen relative">
				<div
					style={{ transform: 'translateY(100%)' }}
					className="relative w-full flex flex-col justify-center items-center top-1/4 lg:top-12 lg:left-0 opening-effect">
					<img src="/image/text with brain.png" className="w-2/3 lg:w-1/3 h-full mb-5" alt="" />
					<p className="font-SH text-5xl lg:text-7xl text-color-main mb-5 opening-effect">RESET</p>
					<p className="font-BSB text-center text-md lg:text-5xl text-white opening-effect">
						Thiết lập lại cách bạn tận hưởng niềm vui
					</p>
				</div>
			</div>
			<div className="section w-screen h-fit lg:h-screen relative">
				<div className="scroll-animation relative h-auto w-full mt-0 px-5 top-1/4 flex justify-between lg:h-fit lg:mt-4 lg:top-0 lg:justify-around lg:px-0">
					<div className="relative top-16 font-BST text-sm lg:text-xl flex flex-col items-center w-2/3 lg:w-1/3 h-fit">
						<p className="text-white">GIỚI THIỆU</p>
						<br />
						<p className="text-white text-justify">
							Dopamine Reset là một website được lập ra dựa trên một dự án nghiên cứu khoa học của
							học sinh Trần Phú. Dopamine Reset sẽ cung cấp một liệu trình 30 ngày giúp từ bỏ thói
							quen xấu và gieo trồng những hạt giống {`"thói quen"`} tốt trong mảnh đất tâm hồn của
							bạn.
						</p>
					</div>
					<img
						src="/image/ảnh giáo viên.png"
						className="object-contain relative top-6 w-1/5 h-auto"
						alt=""
					/>
				</div>
			</div>
			<div className="section w-screen h-fit lg:h-screen relative">
				<div className="scroll-animation relative h-auto w-full mt-0 px-5 top-0 flex justify-between lg:h-fit lg:mt-4 lg:justify-around lg:px-0">
					<img
						src="/image/ảnh trang 2.png"
						className="object-contain relative top-6 w-1/5 h-auto"
						alt=""
					/>
					<div className="relative top-16 font-BST text-sm lg:text-xl flex flex-col items-center w-2/3 lg:w-1/3 h-fit">
						<p className="text-white">DOPAMINE LÀ GÌ?</p>
						<br />
						<p className="text-white text-justify">
							Dopamine là một loại chất dẫn truyền thần kinh trong não bộ chịu trách nhiệm truyền
							tín hiệu những các tế bào thần kinh. Chất này có kí hiệu hóa học là
							{`\\(~C_8H_{11}NO_2\\)`}
						</p>
						<br />
						<p className="text-white text-justify">
							Khi làm một số hành động nhất định như ăn đồ ngọt, tập thể dục, lướt điện thoại,. não
							sẽ tiết ra lượng dopamine để khuyến khích ta tiếp tục lập lại hành động đó. Dopamine
							vừa đủ sẽ khiến ta cảm thấy sáng tạo, cũng như tập trung hơn.
						</p>
					</div>
				</div>
			</div>
			<div className="section w-screen h-fit lg:h-screen relative">
				<div className="scroll-animation relative h-auto w-full mt-0 px-5 top-0 flex justify-between lg:h-fit lg:mt-4 lg:justify-around lg:px-0">
					<div className="relative top-16 font-BST text-sm lg:text-xl flex flex-col items-center w-2/3 lg:w-1/3 h-fit">
						<p className="text-white">BỘI THỰC DOPAMINE</p>
						<br />
						<p className="text-white text-justify">
							Mạng xã hội, nút like, tim, cà phê, trà sữa, game, đồ ăn vặt, những nguồn dopamine
							nhanh, mạnh này luôn chiếm một phẩn trong thói quen sinh hoạt của ta. Đây là những
							nguồn cung cấp dopamine không hẳn là xấu nhưng ta đang lạm dụng và biến nó trở nên
							xấu.
						</p>
						<br />
						<p className="text-white text-justify">
							Với sự phát triển của khoa học kỹ thuật, mọi thứ dễ dàng và sẵn có khiến con người
							thích nghi nhanh chóng với cảm giác hứng thú. Dopamine được tiết ra nhanh chóng khiến
							con người dễ chán, từ đó tìm kiếm những nguồn cung mới, thậm chí độc hại hơn.
						</p>
					</div>
					<img
						src="/image/dopamine.png"
						className="object-contain relative top-6 w-1/5 h-auto"
						alt=""
					/>
				</div>
			</div>
			<div className="section w-screen h-fit lg:h-screen relative">
				<div className="scroll-animation relative h-auto w-full mt-0 px-5 top-0 flex justify-between lg:h-fit lg:mt-4 lg:justify-around lg:px-0">
					<img
						src="/image/ảnh bác sĩ.png"
						className="object-contain relative top-6 w-1/5 h-auto"
						alt=""
					/>
					<div className="relative top-16 font-BST text-sm lg:text-xl flex flex-col items-center w-2/3 lg:w-1/3 h-fit">
						<p className="text-white">{`Ảnh hưởng của thực trạng "Bội thực Dopamine"`}</p>
						<br />
						<ul className="list-disc text-white">
							<li>Mất tập trung trong công việc, học tập và sinh hoạt</li>
							<li>Cảm thấy buồn chán, chán nản</li>
							<li>Mất hứng thú với sở thích</li>
							<li>Không còn động lực sống</li>
							<li>Thị lực suy yếu, mỏi mắt</li>
						</ul>
						<br />
						<p className="text-white text-justify">
							={`>`} Sức khỏe thể chất và tinh thần giảm sút
						</p>
					</div>
				</div>
			</div>
			<div className="section w-screen h-fit lg:h-screen relative text-white">
				<div className="scroll-animation relative h-auto w-full mt-0 px-5 top-0 flex justify-between lg:h-fit lg:mt-4 lg:justify-around lg:px-0">
					<div className="relative top-16 font-BST text-sm lg:text-xl flex flex-col items-center w-2/3 lg:w-1/3 h-fit">
						<p className="text-white">LỊCH TRÌNH DOPAMINE RESET</p>
						<br />
						<p>
							Chặng 1: “Nhổ cỏ dại trong khu vườn” Từ ngày thứ 1-10: học cách vượt qua bản thân, từ
							bỏ thói quen xấu.
						</p>
						<br />
						<p>
							Chặng 2: “Gieo trồng những hạt giống tốt” Từ ngày thứ 11-20: bắt đầu những thói quen
							tốt.
						</p>
						<br />
						<p>Chặng 3: “Chăm sóc cho khu vườn ” Từ ngày thứ 21-30: Duy trì những điều tốt đẹp.</p>
						<br />
					</div>
					<img
						src="/image/ảnh lịch.png"
						className="object-contain relative top-6 w-1/5 h-auto"
						alt=""
					/>
					<p className="absolute self-end font-BST text-lg lg:text-xl text-center" id="specialText">
						Trước khi đi ngủ và thức dậy, hãy mở lịch và thực hiện theo kế hoạch. Tránh sao nhãng và
						bỏ cuộc để đạt được mục tiêu.
					</p>
				</div>
			</div>
			<div className="section w-screen h-screen relative text-white flex justify-center items-center">
				<div className="scroll-animation relative font-BSB w-fit h-fit flex items-center justify-center">
					<p className="text-center text-2xl lg:text-7xl">
						Nhấn vào
						<span id="start-btn" className="text-red cursor-pointer">
							<Link to="/Start"> Đây </Link>
						</span>
						để tham gia vào lịch trình Dopamine Reset
					</p>
				</div>
			</div>
		</>
	);
}
