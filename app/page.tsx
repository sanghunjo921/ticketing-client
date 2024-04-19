export default function Page() {
  return (
    <main className="bg-gray-200 h-scrren flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-thin text-xs">In transit</span>
            <span className="font-bold text-3xl">Cool Blue</span>
          </div>
          <div className="size-12 rounded-full bg-orange-500" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="  p-2 rounded-2xl bg-green-500 uppercase text-white py-2.5 px-1.5">
            Today
          </span>
          <span className="font-semibold">9:39</span>
        </div>
        <div className="relative">
          <div className="bg-gray-200 absolute h-2 w-full rounded-full" />
          <div className="bg-green-400 absolute rounded-full w-1/2 h-2" />
        </div>
        <div className="flex justify-around gap-3 text-xs items-center mt-5 text-gray-500">
          <span>Expected</span>
          <span>Sorting Center</span>
          <span>In transit</span>
          <span className="text-gray-300">Delivered</span>
        </div>
      </div>
    </main>
  );
}
