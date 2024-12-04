export default function ProductPage({ params }: { params: { id: string } }) {
  return <p>Product {params.id}</p>;
}
