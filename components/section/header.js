export default function Header({ children }) {
  return (
    <>
      <div className="my-4 py-2 px-2 lg:px-0 flex flex-row items-center">
        <h1 className="font-bold text-white text-2xl mr-2">{ children }</h1>
        <span className="border-t-[1px] border-t-darkgray grow"></span>
      </div>
    </>
  )
}