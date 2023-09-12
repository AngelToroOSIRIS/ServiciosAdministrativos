"use client"

import Login from "@/components/pages/Login";
import { useRouter } from "next/navigation";

export default function Index({ searchParams }: any) {
	return (
		<main>
			<Login searchParams={searchParams} />
			
		</main>
	);
}
