import { Container, Filters, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
        <TopBar />
        <Container className="mt-10 pb-4">
          {/* FilterBar */}
          <div className="w-[250px]">
            <Filters />
          </div>
        </Container>
      </Container>
    </>
  );
}
