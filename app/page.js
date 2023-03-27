import Banner from "@/components/Banner";


export default function Home() {
  return (
    <div className=" bg-gray-50">
      <div className="px-8 py-4">
        <div className="flex flex-row">
          <div className="basis-4/5 px-4 py-2">
            <Banner />
          </div>
          <div className="basis-1/5 px-4">
            <h2>Cart</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
