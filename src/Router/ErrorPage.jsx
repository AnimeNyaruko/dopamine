export default function Error() {
	return (
		<div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
			<p className="text-white font-bold text-8xl">404</p>
			<p className="text-white font-semibold text-4xl lg:text-6xl">Page Not Found</p>
			<p className="text-white font-semibold text-2xl">
				The page you are looking for does not exist.
			</p>
		</div>
	);
}
