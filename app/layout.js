import './globals.css';
import Return from './components/bricks/return';

export const metadata = {
  title: 'Hello World',
  description: 'idk',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="select-none text-sm md:text-base">
        {children}
        <Return />
      </body>
    </html>
  )
}
