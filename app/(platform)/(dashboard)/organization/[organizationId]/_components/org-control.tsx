// Directive indicating this code should only run on the client-side.
// Note: This specific directive is not standard and may not have any effect unless handled by your project setup.
"use client";

// Imports the useOrganizationList hook from Clerk's Next.js integration for managing organization data.
import { useOrganizationList } from "@clerk/nextjs";
// Imports the useParams hook from Next.js's navigation package to access URL parameters.
import { useParams } from "next/navigation";
// Imports the useEffect hook from React for running side effects in the component.
import { useEffect } from "react";

// Defines the OrgControl functional component.
export const OrgControl = () => {
	// Calls useParams to get URL parameters and stores them in the `params` object.
	// This allows access to the organizationId parameter from the URL.
	const params = useParams();
	// Calls useOrganizationList to get functionalities related to organization management,
	// specifically the setActive function to set the active organization.
	const { setActive } = useOrganizationList();

	// Uses the useEffect hook to perform side effects after rendering or after specified dependencies change.
	useEffect(() => {
		// Checks if setActive function is available. If not, exits the function early.
		if (!setActive) return;

		// Calls setActive with the organizationId from the URL parameters to set the active organization.
		// The `as string` assertion is used to ensure the organizationId is treated as a string type.
		setActive({ organization: params.organizationId as string });
		// The dependency array: this effect reruns when either setActive or params.organizationId changes.
	}, [setActive, params.organizationId]);

	// The component does not render any UI elements and returns null.
	return null;
};
