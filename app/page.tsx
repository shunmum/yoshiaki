import Image from "next/image";
import Link from "next/link";
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

function shouldShowProductImage(product: (typeof visibleProducts)[number], productIndex: number) {
  if (product.category === "キウイフルーツ" || product.category === "ジュース") {
    return productIndex === 0;
  }

  return true;
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a href="#top" className="siteBrand" aria-label="トップへ戻る">
          <Image src={siteConfig.logo} alt={siteConfig.farmName} width={150} height={150} priority />
        </a>
        <nav className="siteNav" aria-label="主要ナビゲーション">
          <a href="#message" className="swapNav" aria-label="私たちについて">
            <span className="navEn">about</span>
            <span className="navJa" aria-hidden="true">私たちについて</span>
          </a>
          <a href="#products" className="swapNav" aria-label="農産物">
            <span className="navEn">produce</span>
            <span className="navJa" aria-hidden="true">農産物</span>
          </a>
          <a href="#contact" className="swapNav" aria-label="お問い合わせ">
            <span className="navEn">contact</span>
            <span className="navJa" aria-hidden="true">お問い合わせ</span>
          </a>
          <a
            href={siteConfig.sns.instagram}
            className="socialNav"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href={siteConfig.sns.facebook}
            className="socialNav"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <FacebookIcon />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroImage">
          {siteConfig.images.heroSlides.map((image, index) => (
            <div className="heroSlide" key={image}>
              <Image
                src={image}
                alt={index === 0 ? "農園のトップ写真" : ""}
                fill
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <div className="heroCenter">
          <h1>自然と共生する畑から</h1>
          <p>
            多様な生物が棲む農園で育てたブドウとキウイフルーツ。農薬、化学肥料を一切使用しない自然な味をお届けします。
          </p>
        </div>
      </section>

      <TextImageSection
        id="history"
        label="History"
        title="受け継いできた畑"
        image={siteConfig.images.work}
        alt="受け継いできた畑の風景"
        reverse
        fullBleed
      >
        <p>
          1950年代にブドウ栽培を始めた、先代の澤登芳（かおる）から受け継ぎ農業を営んでいます。
          先代の芳は、地域の換金作物として巨峰を新たな産業にすべく、その導入を先導した農家の一人でした。
          その結果、巨峰の集団産地として日本一の生産を誇る一大産地へと成長し、今では町中をブドウ畑が広がっています。
        </p>
        <p>
          しかし、農薬、またその散布作業は農家の体への負担も大きく、「このままでは農家がいなくなってしまうのではないか？」とその持続可能性に疑問を持ちました。また、妻の綾子が農薬中毒で体を壊すという事件も発生しました。
        </p>
        <p>
          それらを受け、芳は従来の農薬を使用するブドウ作りからの脱却を決断。1960年代から農薬を使用しない、持続可能な生産を模索し始めます。東京都国立市で民間育種家をしていた兄・晴雄とともに品種の開発、栽培試験を行い、また世界各国に赴きブドウ栽培の現場を勉強しながら、雨が多く湿度の高い日本にあった品種、栽培方法を確立しました。「農業は生命産業」、「オーガニックは命そのもの」と言っていた先代・澤登芳の意志を胸に、現在もその品種、栽培方法を受け継ぎ、農薬も化学肥料も全く使用しない生産を実践しています。
        </p>
      </TextImageSection>

      <TextImageSection
        id="message"
        label="Message"
        title="私たちの想い"
        image={siteConfig.images.farm}
        alt="私たちの想いを伝える農園の風景"
        fullBleed
      >
        <p>
          私たちは約60年前から、農薬、化学肥料を一切使用せずにブドウとキウイフルーツをつくってきました。
          またそれらを使った、ワイン、ジュース、ジャムもつくっています。
          多くの方に安全でおいしい果物を届けたいという一心でこれまでつくり続けてきました。
        </p>
        <p>
          オーガニック（有機農業）という言葉は、生産技術や安全性の文脈で語られますが、それだけでなく生態系、公正性、将来世代への配慮も基本的な考え方として含んでいます。すなわち、私たちの続けてきた農業は、単なる生産にとどまらず、人と自然がよく生きていくための持続可能な社会をつくることであると考えています。
        </p>
        <p>
          そんな私たちの思いが、ブドウ、キウイフルーツ、またその加工品のワイン、ジャム、ジュースと共により多くの方々に届くと嬉しいです。
        </p>
      </TextImageSection>

      <section className="quietStatement" id="farming">
        <div className="quietStatementImage">
          <Image src={siteConfig.images.farming} alt="農園の風景" fill sizes="100vw" />
        </div>
        <p className="eyebrow">Farming</p>
        <h2>農園</h2>
        <div className="sectionCopy">
          <p>
            私たちは、農薬、化学肥料を全く使用せずにブドウとキウイフルーツを作っています。
            従来より、雨が多く湿度が年間通して高い日本においては、果樹の農薬不使用栽培は難しいと言われてきましたが、「日本に合った品種の選定」と「湿度を下げる施設での生産」によって実現させています。
          </p>
          <p>
            さらに、肥料などの外部投入は最小限にしており、畑は耕さずに雑草をある程度伸ばしてから刈って畑に戻すことで、循環する畑になっています。中には一度も肥料を投入していない畑もあります。また害虫を食べてくれる益虫や鳥などいろいろな生物が生息できるように、雑草をパッチワーク状に残すなど、多様性の高い畑になっています。ブドウ、キウイフルーツ共に、有機JAS認証を取得しています。
          </p>
          <p>
            そのブドウからできたワインもまた同様に、自然な形で醸造しています。
            補糖や補酸をしないのはもちろんのこと、酵母もブドウについた野生酵母を利用しています。
            酸化防止剤も添加していません。
            ブドウをそのまま発酵させたような、自然に近いワインの作り方です。
          </p>
          <p>※醸造は同じ市内のワイナリーである東晨洋酒（とうしんようしゅ）に委託。</p>
        </div>
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
                {categoryProducts.map((product, productIndex) => {
                  const showImage = shouldShowProductImage(product, productIndex);

                  return (
                    <article
                      className={`productRow${showImage ? "" : " productRowTextOnly"}`}
                      key={`${product.category}-${product.name}`}
                    >
                      <div className="productText">
                        <p className="category">{product.category}</p>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        {product.details ? (
                          <dl className="productDetailList">
                            {product.details.map((detail) => (
                              <div key={`${product.name}-${detail.label}`}>
                                <dt>{detail.label}</dt>
                                <dd>{detail.value}</dd>
                              </div>
                            ))}
                          </dl>
                        ) : (
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
                        )}
                      </div>
                      {showImage ? (
                        <div className="productThumb">
                          <Image
                            src={getProductImage(product)}
                            alt={`${product.name}のイメージ写真`}
                            fill
                            sizes="(min-width: 900px) 280px, 100vw"
                          />
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        <div className="salesNotes" aria-label="販売に関する注意事項">
          <p>※箱代220円＋送料（実費）別途請求いたします。</p>
          <p>※6本以上は、箱代サービスいたします。</p>
          <p>※贈答用2本セットは、化粧箱500円＋送料（実費）別途請求。</p>
          <p>※ワインの販売は、酒類販売免許の関係で通信販売と卸売となります。卸売ロット、価格につきましては別途ご相談ください。</p>
          <p>※20歳未満の方の飲酒は法律で禁止されています。</p>
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
            <select name="inquiryType" required defaultValue="">
              <option value="" disabled>
                選択してください
              </option>
              <option value="ご注文">ご注文</option>
              <option value="その他">その他</option>
            </select>
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
            <select name="preferredContact" defaultValue="">
              <option value="">選択してください</option>
              <option value="メール">メール</option>
              <option value="電話">電話</option>
              <option value="おまかせ">おまかせ</option>
            </select>
          </label>
          <label>
            住所
            <input name="address" autoComplete="street-address" />
          </label>
          <label>
            ご希望の商品
            <input name="product" placeholder="例：ブドウ セットA、ブラックペガール 2021" />
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
            お問い合わせ内容
            <textarea name="message" rows={6} />
          </label>
          <div className="ageCheck full">
            <p>年齢確認が必要です。</p>
            <label>
              <input name="ageConfirmed" type="checkbox" value="20歳以上です" />
              私は20歳以上です。
            </label>
            <p>
              20歳未満の飲酒は法律で禁止されています。年齢が確認できない場合は酒類を販売いたしません。
            </p>
          </div>
          <button type="submit">送信する</button>
        </form>
      </section>

      <section className="aboutSection" id="about">
        <Image
          className="aboutBackground"
          src={siteConfig.images.about}
          alt=""
          fill
          sizes="100vw"
        />
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
              <Link className="textLink" href="/alcohol-sales">
                酒類販売管理者標識
              </Link>
            </dd>
          </div>
          <div>
            <dt>SNS</dt>
            <dd className="aboutSocials">
              <a className="aboutSocial aboutSocialInstagram" href={siteConfig.sns.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a className="aboutSocial aboutSocialFacebook" href={siteConfig.sns.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <footer>
        <p>©2026{siteConfig.farmName}All Right Reserved.</p>
      </footer>
    </main>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="16.9" cy="7.1" r="0.9" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14.2 8.2h2.3V4.6c-.4-.1-1.8-.2-3.4-.2-3.3 0-5.5 2-5.5 5.7v3.2H4v4h3.6V24h4.3v-6.7h3.6l.6-4h-4.2v-2.8c0-1.2.3-2.3 2.3-2.3Z" />
    </svg>
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
          <div className="sectionCopy">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section className={`textImage ${reverse ? "reverse" : ""}`} id={id}>
      <div className="textBlock">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        <div className="sectionCopy">{children}</div>
      </div>
      <div className="framedImage">
        <Image src={image} alt={alt} fill sizes="(min-width: 900px) 50vw, 100vw" />
      </div>
    </section>
  );
}
