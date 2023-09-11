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

export default DayList;
