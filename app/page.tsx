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

export default function Home() {
  return (
    <main>
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
        <header className="siteHeader">
          <nav className="leftNav" aria-label="主要ナビゲーション">
            <a href="#products">products</a>
            <a href="#message">message</a>
            <a href="#history">history</a>
          </nav>
          <a href="#top" className="brandMark" aria-label="トップへ戻る">
            {siteConfig.brandInitials}
          </a>
          <nav className="rightNav" aria-label="補助ナビゲーション">
            <a href="#about">about</a>
            <a href="#contact">contact</a>
          </nav>
        </header>
        <div className="heroCenter">
          <h1>{siteConfig.farmNameEn}</h1>
          <span>×</span>
          <p>organic fruits and natural wine</p>
          <p className="jpName">{siteConfig.farmName}</p>
        </div>
        <div className="heroBottom">
          <p>山梨・牧丘の畑から、自然派ワインと季節の果実をお届けします。</p>
          <div className="heroLinks" aria-label="SNSとお問い合わせ">
            <a href={siteConfig.sns.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={siteConfig.sns.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="buttonLink" href="#contact">
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      <section className="projectIntro" aria-label="農園の紹介">
        <p className="eyebrow">project</p>
        <h2>自然と共生する畑から。</h2>
        <p>
          多様な生物が棲む環境で育てたぶどうとキウイフルーツ。畑に流れる時間を、できるだけそのまま食卓へ届けます。
        </p>
        <span>{siteConfig.locationLabel}</span>
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
              <div className="productGroupImage">
                <Image
                  src={productImages[category]}
                  alt={`${category}のイメージ写真`}
                  fill
                  loading="eager"
                  sizes="(min-width: 900px) 42vw, 100vw"
                />
                <p>{category}</p>
              </div>
              <div className="productList">
                {categoryProducts.map((product) => (
                  <article className="productRow" key={`${product.category}-${product.name}`}>
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
                  </article>
                ))}
              </div>
            </section>
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
            <dt>農園名</dt>
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
            <dt>Instagram</dt>
            <dd>
              <a href={siteConfig.sns.instagram} target="_blank" rel="noreferrer">
                {siteConfig.sns.instagram}
              </a>
            </dd>
          </div>
          <div>
            <dt>Facebook</dt>
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
            お問い合わせ種別 <span>必須</span>
            <select name="inquiryType" required defaultValue="">
              <option value="" disabled>
                選択してください
              </option>
              <option>ご注文</option>
              <option>その他</option>
            </select>
          </label>
          <label>
            お名前 <span>必須</span>
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            メールアドレス <span>必須</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            電話番号
            <input name="tel" type="tel" autoComplete="tel" />
          </label>
          <label>
            ご希望の連絡方法
            <select name="preferredContact" defaultValue="">
              <option value="">選択してください</option>
              <option>メール</option>
              <option>電話</option>
            </select>
          </label>
          <label>
            住所
            <input name="address" autoComplete="street-address" />
          </label>
          <label>
            ご希望の商品 <span>必須</span>
            <select name="product" required defaultValue="">
              <option value="" disabled>
                選択してください
              </option>
              {visibleProducts.map((product) => (
                <option value={product.name} key={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            ご希望数量
            <input name="quantity" />
          </label>
          <label>
            用途
            <select name="purpose" defaultValue="">
              <option value="">選択してください</option>
              <option>自宅用</option>
              <option>贈答用</option>
              <option>その他</option>
            </select>
          </label>
          <label>
            配送希望時期
            <input name="deliveryTiming" placeholder="例：9月上旬ごろ" />
          </label>
          <label>
            どちらでお知りになりましたか
            <select name="source" defaultValue="">
              <option value="">選択してください</option>
              <option>マルシェ</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>ご紹介</option>
              <option>以前購入したことがある</option>
              <option>その他</option>
            </select>
          </label>
          <label className="full">
            お問い合わせ内容 <span>必須</span>
            <textarea name="message" rows={6} required />
          </label>
          <button type="submit">メールで相談する</button>
        </form>
      </section>

      <footer>
        <p>©{siteConfig.farmName}</p>
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
