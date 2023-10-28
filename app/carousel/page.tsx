import { Carousel } from "@components/carousel/carousel";
import KeyDateTeaser from "@components/key-date/key-date";
import styles from "./carousel-page.module.scss";

export default async function CarouselPage() {
  const raw = await fetch("https://dummyjson.com/products");
  const products = (await raw.json()).products as any[];

  const list = products.slice(0, 9);

  return (
    <main className={styles.wrapper}>
      <h2>With shadow</h2>
      <Carousel>
        {list.map((product, index) => (
          <li key={product.id}>
            <KeyDateTeaser
              leading={product.price}
              path="/"
              summary={product.description}
              title={product.title}
            />
          </li>
        ))}
      </Carousel>
      <br />
      <br />
      <h2>With no shadow</h2>
      <Carousel>
        {list.map((product, index) => (
          <li key={product.id}>
            <KeyDateTeaser
              leading={product.price}
              path="/"
              summary={product.description}
              title={product.title}
              noShadow
            />
          </li>
        ))}
      </Carousel>
      <br />
      <br />
    </main>
  );
}

function getColor(index: number) {
  return `hsl(${(index * 45) % 360}deg 70% 70%)`;
}
