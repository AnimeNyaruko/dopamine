import picture from '/image/bulb.png';

const DayList = [];

const Day1 = {
	ActiveAble: 4,
	day: 1,
	stage: `Chặng 1: “Nhổ cỏ dại trong khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `1.  Thành lập mục tiêu (chỉ dùng mạng xã hội 30 phút/ ngày)`,
		},
		{
			canActive: true,
			content: `2. Xác định những nguồn cung cấp dopamine mà bạn muốn giảm  (Mạng xã hội, game, đồ ngọt,...)`,
		},
		{
			canActive: true,
			content: `3. Tìm sở thích lành mạnh để thay thế( đọc sách, tập thể dục, đan len, làm vườn, ...`,
		},
		{
			canActive: true,
			content: `4. Ghi những điều trên vào giấy`,
		},
	],
};

const Day2 = {
	ActiveAble: 4,
	day: 2,
	stage: `Chặng 1: “Nhổ cỏ dại trong khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `Ta không nên ngưng ngay việc lướt mạng xã hội hay không uống trà sữa. Các cách từ bỏ đột ngột sẽ khiến ta bị choáng và dễ dàng quay lại việc nghiện hơn.`,
		},
		{ canActive: false, content: `Thay vào đó hãy:` },
		{
			canActive: true,
			content: `- Từ từ giảm số lượng, thời gian mà bạn tiêu thụ những chất kích thích não bộ tiết ra dopamine. Hãy giảm 20% trước.`,
		},
		{ canActive: false, content: `Ví dụ: ` },
		{ canActive: true, content: `- Giảm thời lượng lướt mạng xã hội, chơi game xuống 20%` },
		{ canActive: true, content: `- Ăn ít hơn lượng đồ ngọt so với lúc trước` },
	],
};

const Day3 = {
	ActiveAble: 2,
	day: 3,
	stage: `Chặng 1: “Nhổ cỏ dại trong khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `Giảm 20% số lượng, thời gian bạn dành cho mạng xã hội, game, mua sắm,...`,
		},
		{
			canActive: false,
			content: (
				<img
					src={picture}
					className="relative left-1/2 -translate-x-1/2"
					width="10%"
					height="10%"
					alt=""
				/>
			),
		},
		{
			canActive: true,
			content: `Bạn có thể dùng chức năng quản lý thời gian trên điện thoại hoặc mục cài đặt thời gian giới hạn dùng trên Facebook, Instagram để dễ dàng theo dõi thời gian sử dụng mạng xã hội của mình.`,
		},
	],
};

const Day4 = {
	ActiveAble: 3,
	day: 4,
	stage: `Chặng 1: “Nhổ cỏ dại trong khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `• Giảm 40% số lượng, thời gian bạn dành cho mạng xã hội, game, mua sắm,...`,
		},
		{
			canActive: true,
			content: `• Tìm hiểu ảnh hưởng tiêu cực của những thói quen xấu lên sức khỏe và cuộc sống của bạn.`,
		},
		{
			canActive: true,
			content: `=> Ghi những ảnh hưởng đó vào giấy, dán ở nơi dễ nhìn thấy.`,
		},
	],
};

DayList.push(Day1);
DayList.push(Day2);
DayList.push(Day3);
DayList.push(Day4);

const Day5 = {
	ActiveAble: 3,
	day: 5,
	stage: `Chặng 1: “Nhổ cỏ dại trong khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `• Giảm 40% số lượng, thời gian bạn dành cho mạng xã hội, game, mua sắm,...`,
		},
		{
			canActive: true,
			content: `• Ngưng dùng mạng xã hội trên điện thoại, dùng trên máy tính.`,
		},
		{
			canActive: true,
			content: `• Chỉnh màn hình thành trắng đen để trách các kích thích về mặt thị giác`,
		},
	],
};
DayList.push(Day5);

const Day6 = {
	ActiveAble: 2,
	day: 6,
	stage: `Chặng 1: “Nhổ cỏ dại trong khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `• Giảm 60% số lượng, thời gian bạn dành cho mạng xã hội, game, mua sắm,...`,
		},
		{
			canActive: true,
			content: `• Tìm hiểu về các hiệu ứng tâm lý liên quan đến việc nghiện.`,
		},
		{
			canActive: false,
			content: (
				<>
					<p>Một số hiệu ứng tâm lý để tìm hiểu:</p>
					<ul className="list-[decimal] list-inside">
						<li className="my-2">Phần thường ngẫu nhiên</li>
						<li className="my-2">Sự vắng mặt của tín hiệu dừng lại</li>
						<li className="my-2">Bằng chứng xã hội</li>
					</ul>
				</>
			),
		},
	],
};
DayList.push(Day6);

const Day7 = {
	ActiveAble: 2,
	day: 7,
	stage: `Chặng 1: “Nhổ cỏ dại trong khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `• Giảm 60% số lượng, thời gian bạn dành cho mạng xã hội, game, mua sắm,...`,
		},
		{
			canActive: false,
			content: `Tuần đầu tiên trong chặng 1 đã kết thúc. Bạn cảm thấy như thế nào về mặt tinh thần và thể chất. `,
		},
		{
			canActive: true,
			content: `• Hãy viết ra suy nghĩ của mình nhé.`,
		},
		{
			canActive: false,
			content: `Mệt mỏi, nhức đầu, bồi chồn,.. đâu là những dấu hiệu cơ thể bình thường khi não bộ ít tiết dopamine hơn. Bạn đang làm rất tốt, cố gắng lên!`,
		},
	],
};
DayList.push(Day7);

const Day8 = {
	ActiveAble: 2,
	day: 8,
	stage: `Chặng 1: “Nhổ cỏ dại trong khu vườn”`,
	activities: [
		{
			canActive: false,
			content: `Hãy biết ơn những gì bạn có và đừng tập trung vào những gì bạn không có.`,
		},
		{
			canActive: true,
			content: `• Viết ra giấy ít nhất năm điều bạn biết ơn khi có trong cuộc sống.`,
		},
		{
			canActive: true,
			content: `• Giảm 80% số lượng, thời gian bạn dành cho mạng xã hội, game, mua sắm,...`,
		},
	],
};
DayList.push(Day8);

const Day9 = {
	ActiveAble: 2,
	day: 9,
	stage: `Chặng 1: “Nhổ cỏ dại trong khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `Giảm 80% số lượng, thời gian bạn dành cho mạng xã hội, game, mua sắm,...`,
		},
		{
			canActive: true,
			content: `Tử tế với bản thân.`,
		},
		{
			canActive: false,
			content: `Nếu bạn mắc sai lầm, hãy cố gắng không lặp lại và học hỏi từ nó. Chỉ cần tiếp tục cố gắng và cuối cùng bạn sẽ đạt được mục tiêu của mình.`,
		},
	],
};
DayList.push(Day9);

const Day10 = {
	ActiveAble: 1,
	day: 10,
	stage: `Chặng 1: “Nhổ cỏ dại trong khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `Chặng 1: “Nhổ cỏ dại trong khu vườn”đã kết thúc. Hãy tự khen thưởng chính bản thân mình vì đã nổ lực hết sức. `,
		},
		{
			canActive: false,
			content: (
				<>
					<p>Nhắc nhở: </p>
					<p>
						Tuy vậy đừng lơ là trước những tác nhân gây nghiện. Khi bạn thiếu kỷ luật, nuông chiều
						bản thân quá mức sẽ khiến tiếp tục lạm dụng những nguồn dopamine mạnh (game, mạng xã
						hội,chất kích thích) . Khi đó ta phải bắt đầu lại và hành trình sẽ gian nan hơn rất
						nhiều.
					</p>
				</>
			),
		},
	],
};
DayList.push(Day10);

const Day11 = {
	ActiveAble: 1,
	day: 11,
	stage: `Chặng 2: “Gieo trồng những hạt giống tốt”`,
	activities: [
		{
			canActive: false,
			content: `Ở chặng này, ta sẽ cùng nhau xây dựng những thói quen tốt đẹp thay thế những thói quen cũ. Xây dựng một cuộc sống không phụ thuộc quá nhiều vào những nguồn kích thích dopamine mạnh, độc hại mà vẫn cảm thấy hạnh phúc và vui vẻ.`,
		},
		{
			canActive: true,
			content: `• Tìm hiểu sở thích mà bạn đang thực hiện.`,
		},
	],
};
DayList.push(Day11);

const Day12 = {
	ActiveAble: 2,
	day: 12,
	stage: `Chặng 2: “Gieo trồng những hạt giống tốt”`,
	activities: [
		{
			canActive: true,
			content: `Sau khi tìm hiểu sở thích của mình, hãy liệt kê ra những việc mà bạn thích làm nhất vào thời gian rảnh.`,
		},
		{
			canActive: true,
			content: `Một số sở thích phù hợp với học sinh: chơi thể thao, đọc sách, vẽ, viết lách, quay dựng video, chụp ảnh, viết content,... Hãy chọn từ 2-4 việc mà bạn cảm thấy tận hưởng khi thực hiện.`,
		},
	],
};
DayList.push(Day12);

const Day13 = {
	ActiveAble: 2,
	day: 13,
	stage: `Chặng 2: “Gieo trồng những hạt giống tốt”`,
	activities: [
		{
			canActive: true,
			content: `• Hãy dành thời gian khoảng 1-2 tiếng/tuần để tham gia những hoạt động mà bạn yêu thích. `,
		},
		{
			canActive: false,
			content: `Ví dụ: dành ngày cuối tuần để nấu ăn cho người thân.`,
		},
		{
			canActive: false,
			content: `Thành lập thói quen tốt cho sức khỏe. Bắt đầu từ việc ghi ra những việc thường làm mỗi sáng.`,
		},
		{
			canActive: true,
			content: `• Hãy uống một ly nước sau khi vừa thức dậy.`,
		},
	],
};
DayList.push(Day13);

const Day14 = {
	ActiveAble: 2,
	day: 14,
	stage: `Chặng 2: “Gieo trồng những hạt giống tốt”`,
	activities: [
		{
			canActive: true,
			content: `• Lập “Moring routine” việc cần làm vào mỗi buổi sáng
		Những việc này sẽ giúp cho bạn tiết kiệm thời gian chuẩn bị vào buổi sáng. Hạn chế việc sao nhãng vào thú vui không cần thiết khi vừa mới thức dậy.`,
		},
		{
			canActive: false,
			content: `Ví dụ: thức dậy \\(\\implies\\) uống nước \\(\\implies\\) giãn cơ \\(\\implies\\) vệ sinh cá nhân \\(\\implies\\) ăn sáng \\(\\implies\\) đến trường`,
		},
		{
			canActive: true,
			content: `• Có thể kiểm tra tin nhắn vào buổi sáng, nhưng hạn chế việc lướt mạng xã hội, trang mua sắm và chơi game,...`,
		},
	],
};
DayList.push(Day14);

const Day15 = {
	ActiveAble: 1,
	day: 15,
	stage: `Chặng 2: “Gieo trồng những hạt giống tốt”`,
	activities: [
		{
			canActive: true,
			content: `• Thực hiện “Moring routine” đều đặn vào mỗi buổi sáng để trở thành thói quen.`,
		},
		{
			canActive: false,
			content: `Bạn đã đồng hành cùng DOPAMINE RESET được một nửa chặng đường. Mỗi nổ lực và cố gắng đều được ghi nhận và hãy luôn hướng về mục tiêu phía trước!`,
		},
	],
};
DayList.push(Day15);

const Day16 = {
	ActiveAble: 3,
	day: 16,
	stage: `Chặng 2: “Gieo trồng những hạt giống tốt”`,
	activities: [
		{
			canActive: true,
			content: `• Thực hiện đều đặn “Moring routine”.`,
		},
		{
			canActive: true,
			content: `• Sáng nay bạn đã uống nước chưa?`,
		},
		{
			canActive: true,
			content: `• Bạn có thể tìm một người đồng hành. `,
		},
		{
			canActive: false,
			content: `Chia sẻ mục tiêu của bạn với một người bạn hoặc thành viên gia đình có thể giúp bạn duy trì động lực.`,
		},
	],
};
DayList.push(Day16);

const Day17 = {
	ActiveAble: 2,
	day: 17,
	stage: `Chặng 2: “Gieo trồng những hạt giống tốt”`,
	activities: [
		{
			canActive: true,
			content: `• Khi đã thực hiện tốt “Morning routine”, hãy lập “Night routine”. Những công việc thường làm vào buổi tối sẽ giúp bạn ngủ ngon hơn, nạp lại năng lượng sau ngày dài.`,
		},
		{
			canActive: false,
			content: `Ví dụ: làm bài tập \\(\\implies\\) lập kế hoạch cho ngày mai \\(\\implies\\) giãn cơ \\(\\implies\\) vệ sinh cá nhân \\(\\implies\\) ngủ`,
		},
		{
			canActive: true,
			content: `• Bạn có thể điều chỉnh Night routine cho phù hợp với lịch trình sinh hoạt cá nhân.`,
		},
	],
};
DayList.push(Day17);

const Day18 = {
	ActiveAble: 4,
	day: 18,
	stage: `Chặng 2: “Gieo trồng những hạt giống tốt”`,
	activities: [
		{
			canActive: true,
			content: `• Duy trì “Moring routine” và “Night routine”.`,
		},
		{
			canActive: false,
			content: `Để có một “Night routine” tốt hơn, hãy thêm vào những điều sau:`,
		},
		{
			canActive: true,
			content: `• Ngủ trước 11 giờ`,
		},
		{
			canActive: true,
			content: `• Hạn chế dùng thiết bị điện tử 1 tiếng trước khi ngủ`,
		},
		{
			canActive: true,
			content: `• Không uống cà phê, trà 5 tiếng trước khi ngủ`,
		},
	],
};
DayList.push(Day18);

const Day19 = {
	ActiveAble: 1,
	day: 19,
	stage: `Chặng 2: “Gieo trồng những hạt giống tốt”`,
	activities: [
		{
			canActive: true,
			content: `Bạn có thể bắt đầu thấy những thay đổi tích cực về mặt tinh thần và thể chất.
		Luôn nhớ rằng đây  là một quá trình lâu dài, vì vậy hãy kiên nhẫn với bản thân.`,
		},
	],
};
DayList.push(Day19);

const Day20 = {
	ActiveAble: 1,
	day: 20,
	stage: `Chặng 2: “Gieo trồng những hạt giống tốt”`,
	activities: [
		{
			canActive: false,
			content: `Chặng 2: “Gieo trồng những hạt giống tốt” đã kết thúc. Chúng tôi vô cùng hân hạnh khi được cùng bạn đồng hành trên chặng đường này. Bạn đã là phiên bản tốt hơn của chính bạn so với khi trước.`,
		},
		{
			canActive: true,
			content: `Hãy tự khen thưởng chính mình và tiếp tục cuộc hành trình nhé. `,
		},
	],
};
DayList.push(Day20);

const Day21 = {
	ActiveAble: 2,
	day: 21,
	stage: `Chặng 3 “Chăm sóc cho khu vườn”`,
	activities: [
		{
			canActive: false,
			content: (
				<>
					<p>
						Một chặng đường mới đã mở ra. Ở chặng 3 này, ta sẽ cùng nhau duy trì, hoàn thiện những
						thói quen, sở thích ở chặng 2 cũng như tránh xa thói quen xấu ở chặng 1.
					</p>
					<br />
					<p>Trả lời câu hỏi và tự nhận xét bản thân:</p>
				</>
			),
		},
		{
			canActive: true,
			content: `• Sở thích hiện tại của bạn là những gì?`,
		},
		{
			canActive: true,
			content: `• Bạn đã thực hiện “Morning Routine” và “Night Routine” mỗi ngày không?`,
		},
	],
};
DayList.push(Day21);

const Day22 = {
	ActiveAble: 3,
	day: 22,
	stage: `Chặng 3 “Chăm sóc cho khu vườn”`,
	activities: [
		{
			canActive: false,
			content: (
				<>
					<p>
						Vào những ngày cuối của hành trình, ta thường cảm thấy chán nản, muốn dừng lại. Sau đây
						là những bài tập giúp bạn lấy lại động lực.
					</p>
					<br />
					<p>Bài tập thực hiện:</p>
				</>
			),
		},
		{
			canActive: true,
			content: `• So sánh bản thân trước khi tham gia DOPAMINE RESET và hiện tại.`,
		},
		{
			canActive: true,
			content: `• Liệt kê những thói quen xấu mà bạn đã từ bỏ được.`,
		},
		{
			canActive: true,
			content: `• Liệt kê những thói quen tốt mà bạn đã thực hiện.`,
		},
	],
};
DayList.push(Day22);

const Day23 = {
	ActiveAble: 3,
	day: 23,
	stage: `Chặng 3 “Chăm sóc cho khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `• Duy trì “Morning Routine” và “Night Routine”.`,
		},
		{
			canActive: true,
			content: `• Hạn chế những kích thích dopamine mạnh (mạng xã hội, game, đồ ngọt,...)`,
		},
		{
			canActive: true,
			content: `• Xóa những ứng dụng mạng xã hội, game, mua sắm không cần thiết khỏi điện thoại.`,
		},
	],
};
DayList.push(Day23);

const Day24 = {
	ActiveAble: 2,
	day: 24,
	stage: `Chặng 3 “Chăm sóc cho khu vườn”`,
	activities: [
		{
			canActive: false,
			content: `Để rèn luyện kỉ luật và thấu hiểu bản thân hơn, bạn nên bắt đầu viết Journal, có rất nhiều thể loại nhưng chúng tôi đề xuất Bullet Journal và Gratitude Journal để phù hợp rất với chương trình DOPAMINE RESET`,
		},
		{
			canActive: true,
			content: (
				<>
					<b>Bullet Journal:</b> viết về mục tiêu, dự định, danh sách việc cần làm mỗi ngày.
				</>
			),
		},
		{
			canActive: true,
			content: (
				<>
					<b>Gratitude Journal:</b> viết về những điều bạn biết ơn, lý do và cảm xúc về những điều
					đó.
				</>
			),
		},
	],
};
DayList.push(Day24);

const Day25 = {
	ActiveAble: 6,
	day: 25,
	stage: `Chặng 3 “Chăm sóc cho khu vườn”`,
	activities: [
		{
			canActive: false,
			content: `Bắt đầu Journal, ngoài hai loại được đề xuất, bạn có thể lựa chọn bất kì loại Journal nào phù hợp với bản thân`,
		},
		{
			canActive: false,
			content: `Mỗi sáng hoặc tối hãy viết vào giấy hoặc sổ (để dễ dàng lưu giữ) những điều này:`,
		},
		{
			canActive: true,
			content: `• Cảm xúc trong một tình huống nhất định.`,
		},
		{
			canActive: true,
			content: `• Khoảng khắc chiêm nghiệm cuộc sống`,
		},
		{
			canActive: true,
			content: `• Sai lầm trong quá khứ,`,
		},
		{
			canActive: true,
			content: `• Giấc mơ tối hôm trước. `,
		},
		{
			canActive: true,
			content: `• Cảm xúc về một người thân.`,
		},
		{
			canActive: true,
			content: `• ...`,
		},
	],
};
DayList.push(Day25);

const Day26 = {
	ActiveAble: 2,
	day: 26,
	stage: `Chặng 3 “Chăm sóc cho khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `Duy trì việc viết Journal mỗi ngày.`,
		},
		{
			canActive: true,
			content: `Suy nghĩ về sở thích mà bạn có thể biến nó thành đam mê.`,
		},
	],
};
DayList.push(Day26);

const Day27 = {
	ActiveAble: 4,
	day: 27,
	stage: `Chặng 3 “Chăm sóc cho khu vườn”`,
	activities: [
		{
			canActive: false,
			content: `Đã đến những ngày cuối cùng của chặng đường, bạn có thể nhận thấy được thành quả mà sau bao ngày cố gắng. Nhưng vẫn có rất nhiều cám dỗ khiến ta quay lại con đường cũ. Sau đây là vài mẹp giúp bạn vượt qua nó:`,
		},
		{
			canActive: true,
			content: `• Rèn luyện sự kỷ luật`,
		},
		{
			canActive: true,
			content: `• Nhờ bạn bè, người thân nhắc nhở khi sai lầm`,
		},
		{
			canActive: true,
			content: `• Tập thể dục, chơi thể thao từ 1 tiếng trở lên/ tuần`,
		},
		{
			canActive: true,
			content: `• Trò chuyện, chia sẻ với người bạn tin tưởng khi gặp khó khăn`,
		},
	],
};
DayList.push(Day27);

const Day28 = {
	ActiveAble: 4,
	day: 28,
	stage: `Chặng 3 “Chăm sóc cho khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `Hôm nay bạn đã viết Journal chưa? `,
		},
		{
			canActive: false,
			content: `Đề xuất một số app bạn có thể tải để hạn chế thời gian dùng mạng xã hội, game,...`,
		},
		{
			canActive: true,
			content: `• Srceen Time - Restrain yourself`,
		},
		{
			canActive: true,
			content: `• YourHour - ScreenTime Control`,
		},
		{
			canActive: true,
			content: `• StayFree: Sức khỏe số `,
		},
	],
};
DayList.push(Day28);

const Day29 = {
	ActiveAble: 3,
	day: 29,
	stage: `Chặng 3 “Chăm sóc cho khu vườn”`,
	activities: [
		{
			canActive: true,
			content: `Viết về thói quen sinh hoạt của bạn 1 tháng trước và bây giờ.`,
		},
		{
			canActive: true,
			content: `Chia sẻ hành trình này với ít nhất 2 người mà bạn tin tưởng.`,
		},
		{
			canActive: true,
			content: `Tự khen thưởng và biết ơn chính bản thân vì đã nổ lực hết sức.`,
		},
	],
};
DayList.push(Day29);

const Day30 = {
	ActiveAble: 2,
	day: 30,
	stage: ``,
	activities: [
		{
			canActive: true,
			content: `Vậy là đã đến thời khắc kết thúc hành trình DOPAMINE RESET, đội ngũ DOPAMINE RESET xin chân thành cảm ơn bạn đã tin tưởng đồng hành cùng chúng tôi khoảng thời gian vừa qua.`,
		},
		{
			canActive: true,
			content: `Cuộc hành trình đi hạnh phúc và niềm vui đích thực vẫn còn tiếp tục trong tương lai. Chúng tôi mong rằng bạn luôn kiên cường vượt qua cám dỗ, chông gai. Cũng như có thật nhiều trải nghiệm thú vị cho bản thân.`,
		},
		{
			canActive: false,
			content: (
				<div className="float-right">
					<p className="mb-3">Chân thành cảm ơn</p>
					<p>DOPAMINE RESET</p>
				</div>
			),
		},
	],
};
DayList.push(Day30);

export default DayList;
