import { Carousel } from "@components/carousel/carousel";
import { Container } from "@mantine/core";
import styles from "./carousel-page.module.scss";
export default async function CarouselPage() {
  const raw = await fetch("https://dummyjson.com/products");
const products = (await raw.json()).products as any[];
  console.log(products);

  const list = products.slice(0,6)

  return (
    <main>
      <Container className="main" size="sm" py="xl">
        <Carousel>
          {list.map((product) => (
            <li key={product.id}>
              <div className={styles.example}>
                <p>{product.title}</p>
              </div>
            </li>
          ))}
        </Carousel>
      </Container>
    </main>
  );
}

function getColor(index: number) {
  return `hsl(${(index * 60) % 360}deg 70% 70%)`;
}
