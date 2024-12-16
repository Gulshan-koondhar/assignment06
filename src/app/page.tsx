export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto py-20">
      <div className="grid grid-cols-3 grid-rows-3 gap-2 bg-black p-3 ">
        <div className="col-span-3 row-span-1 bg-[#8976e0] p-4 text-center">
          Header
        </div>
        <div className="col-span-3 row-span-1 sm:col-span-1 sm:row-span-3 bg-[#38cec5]  p-4 text-center">
          Navbar
        </div>
        <div className="col-span-3 sm:col-span-2 sm:row-span-1 bg-[#4180de] p-4 text-center">
          Content 1
        </div>
        <div className="col-span-3 sm:col-span-1 sm:row-span-2 bg-[#4180de] p-4 text-center">
          Content 2
        </div>
        <div className="col-span-3 sm:col-span-1 sm:row-span-2 bg-[#4180de] p-4 text-center">
          Content 3
        </div>
        <div className="col-span-3 row-span-1 bg-[#8976e0] p-4 text-center">
          Footer
        </div>
      </div>
    </div>
  );
}
