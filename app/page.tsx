import Link from "next/link";
import ButtonComponent from "./components/input-components/button-components";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-44px)] p-7">
      <section className="flex flex-col items-center gap-5 *:font-bold my-auto">
        <span className="text-9xl">👨🏿‍🏭</span>
        <h1 className=" text-4xl">Mega Traffic Tickets</h1>
        <h2 className="text-2xl">Wecome to Ticket Markets</h2>
      </section>
      <section className="w-full flex flex-col items-center gap-3">
        <Link
          href={"/tickets"}
          className="general-btn text-lg text-center py-2"
        >
          로그인 없이 시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
        <Link href="/signup" className="hover:underline">
          계정 만들기
        </Link>
      </section>
    </main>

    // <main className="bg-gray-200 h-scrren flex items-center justify-center p-5">
    //   <div className="bg-white shadow-lg p-5 rounded-2xl">
    //     <div className="flex justify-between items-center">
    //       <div className="flex flex-col">
    //         <span className="font-thin text-xs">In transit</span>
    //         <span className="font-bold text-3xl">Cool Blue</span>
    //       </div>
    //       <div className="size-12 rounded-full bg-orange-500" />
    //     </div>
    //     <div className="my-2 flex items-center gap-2">
    //       <span className="  p-2 rounded-2xl bg-green-500 uppercase text-white py-2.5 px-1.5">
    //         Today
    //       </span>
    //       <span className="font-semibold">9:39</span>
    //     </div>
    //     <div className="relative">
    //       <div className="bg-gray-200 absolute h-2 w-full rounded-full" />
    //       <div className="bg-green-400 absolute rounded-full w-1/2 h-2" />
    //     </div>
    //     <div className="flex justify-around gap-3 text-xs items-center mt-5 text-gray-500">
    //       <span>Expected</span>
    //       <span>Sorting Center</span>
    //       <span>In transit</span>
    //       <span className="text-gray-300">Delivered</span>
    //     </div>
    //   </div>
    // </main>
  );
}
