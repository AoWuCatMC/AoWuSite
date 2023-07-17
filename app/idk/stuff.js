'use client';

import Button from "../components/bricks/button";

export default function Idk({ children }) {
  const ws = [96, 60, 64, 16, 72, 80];
  // no-purge: w-60 w-64 w-72 w-80 w-96 w-16
  return (
    <>
      {children}
      <div className="flex absolute flex-col w-screen h-screen items-center justify-center bg-slate-800 select-none">
        <div className="flex flex-wrap text-center max-w-screen-md border-teal-400 border-4 p-8 rounded-lg">
          <div className="hidden"></div>
          {ws.map(w => (
            <div key={w}
            className={`w-${w} my-2 mx-2 flex flex-col justify-center bg-white shadow shadow-white rounded transition hover:bg-slate-500 active:shadow-slate-500`}
            onClick={() => alert(w)}
            >
              w-{w}
            </div>
          ))}
          <Button className="my-2 mx-2" onClick={() => alert('wite')}>
            this
          </Button>
          <Button className="my-2 mx-2" color="red" onClick={() => alert('reed')}>
            that
          </Button>
          <Button className="my-2 mx-2" color="green" onClick={() => alert('gren')}>
            what
          </Button>
          <Button className="my-2 mx-2" color="blue" onClick={() => alert('blu')}>
            ok
          </Button>
        </div>
      </div>
      <label>
        <input
          className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
          placeholder="hell word!"
        />
      </label>
    </>
  )
}