"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import fetchFn from "@/libs/fetchFn";

export default function Index({ searchParams }: any) {
	const [loading, setloading] = useState(true)
	const [data, setData] = useState([]) 
	const router = useRouter();
	const getData =async () => {
		const response = await fetchFn('/vot_act')
		if (response.error || response.code !== 200) {
			return
		}
		setData(response.data)
		setloading(false)
	}
	
	useEffect(() => {
	  getData()
	}, [])
	
	return (
		<main className="back2 relative w-full h-screen">
			<Header/>
					{!loading &&<>
						<div className="main-class justify-center items-center text-center">
							<h1 className=" text-3xl text-primary font-bold">Votaciones</h1>
						</div>
							<div className="bg-default-white mx-auto w-[200px] min-w-[15%] rounded-lg h-[30px] justify-center items-center text-center text-xl  mt-8 lg:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-primary font-bold m-6 transition-all">
								<h2 className="">
									Elija la votación:
								</h2>
							</div>
						<div
							className="flex w-[95%] gap-5 max-w-[1200px] mx-auto mt-[4%] justify-center items-center rounded-xl 
							 p-5 mb-10"
							>
							{data.map((item:any)=><Button key={item.id} route="/votcopasst" text={item.nombre} />)}
						</div>
						<div className=" justify-center text-center mt-[2%]">
							<button
								className="mx-5 w-[5%] min-w-[70px] h-11 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-default-white rounded-lg  text-primary hover:text-default-white hover:bg-primary hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
								onClick={() => router.push("/")}
								>
								Volver
							</button>
						</div>
					</>
					}
		</main>
	);
}
