import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared/productCard';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
        <TopBar />
        <Container className="mt-10 pb-4">
          <div className="flex gap-[60px]">
            {/* FilterBar */}
            <div className="w-[250px]">
              <Filters />
            </div>

            {/* List of products */}
            <div className="flex-1">
              <div className="flex flex-col gap-16">
                {/* <ProductCard
                  id="1"
                  name="pizza"
                  price={15}
                  imageUrl="https://pizzahouse.ua/_next/image?url=https%3A%2F%2Fpizzahouse.ua%2Fmedia%2F4851%2Fconversions%2F%D0%BA%D0%B2%D0%B0%D1%82%D1%80%D0%BE-%D0%B4%D1%96-%D0%BA%D0%B0%D1%80%D0%BD%D0%B5-large.webp&w=1920&q=100"
                /> */}
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
