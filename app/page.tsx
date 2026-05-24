import Image from "next/image";
import { products } from "../data/products";
import { siteConfig } from "../config/site";

const visibleProducts = products
  .filter((product) => product.visible)
  .sort((a, b) => a.sortOrder - b.sortOrder);

const groupedProducts = visibleProducts.reduce<Record<string, typeof visibleProducts>>(
  (groups, product) => {
    groups[product.category] = groups[product.category] || [];
    groups[product.category].push(product);
    return groups;
  },
  {}
);

const productImages: Record<string, string> = {
  ワイン: siteConfig.images.wine,
  ブドウ: siteConfig.images.grape,
  キウイフルーツ: siteConfig.images.kiwi,
  ジュース: siteConfig.images.juice,
  ジャム: siteConfig.images.jam
};

function getProductImage(product: (typeof visibleProducts)[number]) {
  return productImages[product.category];
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a href="#top" className="siteBrand" aria-label="トップへ戻る">
          <Image src={siteConfig.logo} alt="" width={60} height={36} />
          <span>{siteConfig.farmName}</span>
        </a>
        <nav className="siteNav" aria-label="主要ナビゲーション">
          <a href="#message" title="私たちについて">
            about
          </a>
          <a href="#products" title="農産物">
            produce
          </a>
          <a href="#contact" title="お問い合わせ">
            contact
          </a>
          <a href={siteConfig.sns.instagram} target="_blank" rel="noreferrer" title="Instagram">
            IG
          </a>
          <a href={siteConfig.sns.facebook} target="_blank" rel="noreferrer" title="Facebook">
            FB
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroImage">
          <Image
            src={siteConfig.images.hero}
            alt="朝の光が差す農園の風景"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="heroCenter">
          <h1>自然と共生する畑から。</h1>
          <p>
            多様な生物が棲む環境で育てたぶどうとキウイフルーツ。畑に流れる時間を、できるだけそのまま食卓へ届けます。
          </p>
        </div>
      </section>

      <TextImageSection
        id="message"
        label="Message"
        title="私たちの想い"
        image={siteConfig.images.farm}
        alt="広い畑と空"
        fullBleed
      >
        自然派ワインとは、多様な生物が棲む、自然と共生した環境で栽培したぶどうだけから醸造してできたワイン。固有ぶどう品種であるブラックペガールを野生酵母で仕込み、無補糖、酸化防止剤無添加、無ろ過で瓶詰めしています。ぶどうの生命力が楽しめるワインを、畑からお届けします。
      </TextImageSection>

      <TextImageSection
        id="history"
        label="History"
        title="受け継いできた畑"
        image={siteConfig.images.work}
        alt="畑で手を入れる作業風景"
        reverse
        fullBleed
      >
        1950年代から山梨・牧丘の地でぶどう栽培を始めた、先代の澤登芳から畑を引き継ぎました。現在は、ぶどうとキウイフルーツの有機・農薬不使用栽培を続けています。毎年同じようで少しずつ違う季節と向き合いながら、畑の時間を受け継いでいます。
      </TextImageSection>

      <section className="quietStatement" id="farming">
        <p className="eyebrow">Farming</p>
        <h2>作り方・考え方</h2>
        <p>
          作物は、天候や土の状態によって毎年表情が変わります。だからこそ、急がず、無理をさせず、その時々の畑の状態を見ながら育てることを大切にしています。箱代や送料、発送単位は商品や時期により変わるため、まずはフォームよりご相談ください。
        </p>
      </section>

      <section className="productsSection" id="products">
        <div className="sectionLead">
          <p className="eyebrow">Products</p>
          <h2>季節の実り</h2>
          <p>
            在庫や収穫量は季節によって変わります。気になる商品がありましたら、まずはフォームよりご相談ください。
          </p>
        </div>
        <div className="productGroups">
          {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
            <section className="productGroup" key={category}>
              <p className="productGroupTitle">{category}</p>
              <div className="productList">
                {categoryProducts.map((product) => (
                  <article className="productRow" key={`${product.category}-${product.name}`}>
                    <div className="productText">
                      <p className="category">{product.category}</p>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <dl>
                        <div>
                          <dt>volume</dt>
                          <dd>{product.volume}</dd>
                        </div>
                        <div>
                          <dt>season</dt>
                          <dd>{product.season}</dd>
                        </div>
                        <div>
                          <dt>price</dt>
                          <dd>{product.price}</dd>
                        </div>
                      </dl>
                    </div>
                    <div className="productThumb">
                      <Image
                        src={getProductImage(product)}
                        alt={`${product.name}のイメージ写真`}
                        fill
                        sizes="(min-width: 900px) 280px, 100vw"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="letterSection" id="grape-letter">
        <div className="letterIntro">
          <p className="eyebrow">Letter</p>
          <h2>葡萄だより</h2>
          <p>
            畑の季節や収穫のことをお知らせする葡萄だよりです。各号のPDFをご覧いただけます。
          </p>
        </div>
        <div className="letterList" aria-label="葡萄だよりPDF一覧">
          {siteConfig.grapeLetters.map((letter) => (
            <a href={letter.href} className="letterItem" key={letter.label} target="_blank" rel="noreferrer">
              <span>{letter.label}</span>
              <small>PDF</small>
            </a>
          ))}
        </div>
      </section>

      <section className="aboutSection" id="about">
        <div className="aboutIntro">
          <p className="eyebrow">About</p>
          <h2>農園について</h2>
        </div>
        <dl className="aboutList">
          <div>
            <dt>屋号</dt>
            <dd>{siteConfig.farmName}</dd>
          </div>
          <div>
            <dt>共同代表</dt>
            <dd>{siteConfig.representatives}</dd>
          </div>
          <div>
            <dt>住所</dt>
            <dd>
              {siteConfig.postalCode} {siteConfig.locationLabel}
            </dd>
          </div>
          <div>
            <dt>メール</dt>
            <dd>
              <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            </dd>
          </div>
          <div>
            <dt>Instagramリンク</dt>
            <dd>
              <a href={siteConfig.sns.instagram} target="_blank" rel="noreferrer">
                {siteConfig.sns.instagram}
              </a>
            </dd>
          </div>
          <div>
            <dt>FACEBOOKリンク</dt>
            <dd>
              <a href={siteConfig.sns.facebook} target="_blank" rel="noreferrer">
                {siteConfig.sns.facebook}
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactIntro">
          <p className="eyebrow">Contact</p>
          <h2>ご注文・お問い合わせ</h2>
          <p>
            商品の在庫状況や配送時期は、季節や収穫量により変わります。フォーム送信時点ではご注文確定ではありません。内容を確認後、メールにてご案内いたします。
          </p>
        </div>
        <form className="contactForm" action={`mailto:${siteConfig.contactEmail}`} method="post" encType="text/plain">
          <label>
            お問い合わせ種別 <span>※必須</span>
            <input name="inquiryType" required placeholder="例：ご注文、その他" />
          </label>
          <label>
            お名前 <span>※必須</span>
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            メールアドレス <span>※必須</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            電話番号
            <input name="tel" type="tel" autoComplete="tel" />
          </label>
          <label>
            ご希望の連絡方法
            <input name="preferredContact" placeholder="例：メール、電話" />
          </label>
          <label>
            住所
            <input name="address" autoComplete="street-address" />
          </label>
          <label>
            ご希望の商品 <span>※必須</span>
            <input name="product" required placeholder="例：ブドウ セットA、ブラックペガール 2021" />
          </label>
          <label>
            ご希望数量
            <input name="quantity" />
          </label>
          <label>
            用途
            <input name="purpose" placeholder="例：自宅用、贈答用、その他" />
          </label>
          <label>
            配送希望時期
            <input name="deliveryTiming" placeholder="例：9月上旬ごろ" />
          </label>
          <label>
            どちらでお知りになりましたか
            <input name="source" placeholder="例：Instagram、ご紹介、以前購入したことがある" />
          </label>
          <label className="full">
            お問い合わせ内容 <span>※必須</span>
            <textarea name="message" rows={6} required />
          </label>
          <button type="submit">メールで相談する</button>
        </form>
      </section>

      <footer>
        <p>©2026{siteConfig.farmName}All Right Reserved.</p>
      </footer>
    </main>
  );
}

function TextImageSection({
  id,
  label,
  title,
  image,
  alt,
  reverse,
  fullBleed,
  children
}: {
  id: string;
  label: string;
  title: string;
  image: string;
  alt: string;
  reverse?: boolean;
  fullBleed?: boolean;
  children: React.ReactNode;
}) {
  if (fullBleed) {
    return (
      <section className="imageMessage" id={id}>
        <Image src={image} alt={alt} fill sizes="100vw" />
        <div className="imageMessageText">
          <p className="eyebrow">{label}</p>
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`textImage ${reverse ? "reverse" : ""}`} id={id}>
      <div className="textBlock">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <div className="framedImage">
        <Image src={image} alt={alt} fill sizes="(min-width: 900px) 50vw, 100vw" />
      </div>
    </section>
  );
}
