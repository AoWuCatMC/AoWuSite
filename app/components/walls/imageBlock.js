import Image from "next/image";

export default function ImageBlock({ src, width, height, alt = 'image block', block: {mobileHeight = 'h-[130vw]', mobileImageWidth = 'w-full'} = {}, children }) {
  return (
    <div className={`w-[80vw] md:w-[110vh] ${mobileHeight} md:h-[60vh] bg-slate-800 border-slate-500 border-4 border-t-0 border-r-0 md:border-t-4 md:border-r-4 rounded m-8 flex flex-col md:flex-row-reverse z-1`}>
      <Image src={src} width={width} height={height} alt={alt} className={`shrink-0 grow-0 ${mobileImageWidth} md:max-h-none md:w-auto md:h-full border-slate-500 border-t-4 border-r-4 rounded-tr md:rounded-none md:border-none`} />
      <div className="grow bg-slate-200 p-4 border-slate-500 border-t-4 border-r-4 md:rounded-none md:border-none overflow-y-auto select-text flex flex-col">
        <Image src="/images/deco-left.png" width="64" height="64" className="relative grow-0 self-start z-2" />
        <div className="grow flex flex-col text-center justify-center">
          {children}
        </div>
        <Image src="/images/deco-right.png" width="64" height="64" className="relative grow-0 self-end z-2" />
      </div>
    </div>
  )
}