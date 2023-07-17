import fs from 'fs';
import Idk from './stuff';

export default async function Stuff() {
  const data = fs.readFileSync('.gitignore');
  const stuff = data.toString().split('\n\n');
  return (
    <Idk>
      <div className='flex flex-col items-center justify-evenly bg-slate-300'>
        {stuff.map((l,i) => (
          <div
            key={i}
            className='bg-slate-600 text-white w-fit h-5'
          >
            {l}
          </div>
        ))}
      </div>
    </Idk>
  )
}