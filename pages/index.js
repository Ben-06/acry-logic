import Link from 'next/link'


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
 
  return (
    <div>
      <Header title="Acry Logic" />
      <div>
        <Link href="/games/2">
            <a>Go to games/2.js</a>
        </Link>
      </div>

    </div>
  );
}
