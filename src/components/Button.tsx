"use client"

import { useRouter } from "next/navigation";
import React from "react";

interface Props {
	route: string;
    text: string
}

const Button = ({ route, text }: Props) => {
    const router = useRouter();
	return (
		<button
			className="w-full h-12 rounded-xl border-2 md:h-12  border-primary bg-default-white my-3 font-semibold text-primary hover:bg-primary hover:text-default-white"
			onClick={() => router.push(route)}
		>
			{text}
		</button>
	);
};

export default Button;
