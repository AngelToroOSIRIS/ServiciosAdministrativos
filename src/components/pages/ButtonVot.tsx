"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface Props {
	route: string;
	text: string;
	disabled?: boolean;
}

const ButtonVot = ({ route, text, disabled = false }: Props) => {
	const router = useRouter();
	const classbtn =
		"w-[400px] h-[130px] text-base rounded-xl transition-all 2 card-shadow bg-default-white my-3 font-semibold hover:text-primary";
	return (
		<button
			disabled={disabled}
			className={
				disabled
					? "w-[400px] h-[130px] text-base rounded-xl text-default-400 my-3 normal-shadow font-semibold bg-borders-light hover:none"
					: classbtn
			}
			onClick={() => router.push(route)}
		>
			<i className="bi bi-check2-square text-3xl"></i>
			<p className="text-xl font-medium mt-2">{text}</p>
		</button>
	);
};

export default ButtonVot;

