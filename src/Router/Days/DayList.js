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
DayList.push(Day1);
DayList.push(Day2);

export default DayList;
