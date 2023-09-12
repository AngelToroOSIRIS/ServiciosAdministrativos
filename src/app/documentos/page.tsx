"use client";

import Header from "@/components/Header";
import Documents from "@/components/pages/Documents";

export default function Index() {
	return (
		<main className="margin-header back relative w-full">
			<Header/>
					<div className=" bg-default-white min-w-[250px] mx-auto w-[15%] sm:h-[60px] rounded-lg justify-center items-center text-center text-xl lg:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-primary font-bold m-6">
						<h2 className=" text-center text-xl text-primary font-bold ">
							Documentos <br /> institucionales
						</h2>
					</div>
					<Documents />
		</main>
	);
}
