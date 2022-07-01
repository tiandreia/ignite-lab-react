import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-1 flex items-center justify-center  bg-gray-700 border-b border-gray-600">
      <img className="w-[60px] h-[60px]" src="/assets/images/oré.png" alt="" />
      <h1 className="font-bold uppercase border-gray-500"> Oré Anacã - Grupo de Dança Popular da UFC</h1>
    </header>
  )
}