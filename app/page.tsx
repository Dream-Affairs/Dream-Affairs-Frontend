import ExternalLayout from './(components)/External-Layout';

export default function Home() {
  return (
    <>
      <ExternalLayout>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-10 border">Body</div>
      </ExternalLayout>
    </>
  );
}
