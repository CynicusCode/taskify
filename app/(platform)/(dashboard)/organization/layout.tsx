const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
				<div className="flex gap-x-7">
					<div className="w-64 shrink-0 hideen md:block">
						{/* TODO: Sidebar */}
					</div>

					{children}
				</div>
			</main>
		</div>
	);
};

export default OrganizationLayout;