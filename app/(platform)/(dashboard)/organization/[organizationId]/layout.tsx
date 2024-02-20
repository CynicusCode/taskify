import { OrgControl } from "./_components/org-control";

const organizationIdLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<OrgControl />
			{children}
		</>
	);
};

export default organizationIdLayout;
