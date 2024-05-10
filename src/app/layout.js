import { Inter } from 'next/font/google'
import './globals.css'
import Layout from 'src/components/Molecule/Layout/Layout';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "MACarino",
  description: "سایت خرید،فروش و رنت اتوموبیل",
  icons: { icon: "./favicon.ico" },
};


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
          <Layout>{children}</Layout>
      </body>
    </html>
  );
}