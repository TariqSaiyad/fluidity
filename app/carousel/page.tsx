import { Carousel } from "@components/carousel/carousel";
import styles from "./carousel-page.module.scss";

export default async function CarouselPage() {
  const raw = await fetch("https://dummyjson.com/products");
  const products = (await raw.json()).products as any[];

  const list = products.slice(0, 6);

  return (
    <main className={styles.wrapper}>
      <Carousel>
        {list.map((product,index) => (
          <li key={product.id}>
            <div className={styles.example} style={{backgroundColor:getColor(index)}}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </li>
        ))}
      </Carousel>
    </main>
  );
}

function getColor(index: number) {
    return `hsl(${(index * 45) % 360}deg 70% 70%)`;
  }
  