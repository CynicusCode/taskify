import { auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
	const { userId, orgId } = auth();
	return;
};
export default OrganizationIdPage;
