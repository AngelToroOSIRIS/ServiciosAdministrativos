"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";


export const metadata = {
	title: "Cerrando sesión... | Votaciones",
};

export default function LogoutPage({
	params,
	searchParams,
}: {
	params: object;
	searchParams: { error: string };
}) {
	useEffect(() => {
		const error = searchParams.error ? searchParams.error : false;
		signOut({
			callbackUrl: error ? `/login?error=${error}` : "/login",
		});
	}, []);
    return<></>

}
