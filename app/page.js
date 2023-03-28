import Banner from "@/components/Banner";
import SideBanner from "@/components/SideBanner";


export default function Home() {
  return (
    <div className=" bg-gray-50">
      <div className="px-4 py-2">
        <div className="flex flex-row">
          <div className="px-4 py-2 basis-4/5">
            <Banner />
          </div>
          <div className=" basis-1/5">
            <SideBanner />
          </div>
        </div>
      </div>
    </div>
  )
}
