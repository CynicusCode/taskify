import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { FileX, Plus } from "lucide-react";

export const Navbar = () => {
	return (
		<nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
			{/* todo: Mobile Sidebar */}
			<div className="flex items-center gap-x-4">
				<div className="hidden md:flex">
					<Logo />
				</div>
				<Button
					variant="primary"
					size="sm"
					className="rounded-sm py-1.5 px-2 flex items-center justify-center"
				>
					<span className="md:block hidden">Create</span>
					<Plus className="h-4 w-4 md:hidden" />
				</Button>
			</div>
			<div className="ml-auto flex items-center gap-x-2">
				<OrganizationSwitcher
					hidePersonal
					afterCreateOrganizationUrl="/organization/:id"
					afterLeaveOrganizationUrl="/organization/:id"
					afterSelectOrganizationUrl="/organization/:id"
					appearance={{
						elements: {
							rootBox: {
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							},
						},
					}}
				/>
				<UserButton
					afterSignOutAllUrl="/"
					appearance={{
						elements: {
							avatarBox: {
								height: 30,
								width: 30,
							},
						},
					}}
				/>
			</div>
		</nav>
	);
};
