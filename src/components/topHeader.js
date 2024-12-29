
import Image from "next/image"








export default function TopHeader () {

return (<div className="flex flex-col w-full py-14 justify-center items-center gap-10 lg:pl-[33%]">

<Image
src="/Media/Logo_EF.png"
alt="EF Logo"
width={200}
height={200}
/>

<p className="font-bold text-5xl text-gray-700">

Course Selector
</p>


</div>)};