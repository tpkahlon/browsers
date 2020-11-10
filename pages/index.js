import Head from "next/head";
import { uniqBy } from "lodash";
import processData from "../common";
import styles from "../styles/Home.module.css";

export default function Home({ text }) {
  let browsers = [];
  let list = null;
  if (process.browser) {
    const parser = new DOMParser();
    const dom = parser.parseFromString(text, "text/html");
    [...dom.querySelectorAll("a")].filter(processData).forEach((item) => {
      browsers.push({
        text: item.textContent,
        url: item.getAttribute("href"),
      });
    });
    browsers = browsers.sort((a, b) =>
      a.text.toLowerCase() > b.text.toLowerCase() ? 1 : -1
    );
    browsers = uniqBy(browsers, "text");
    browsers = uniqBy(browsers, "url");
    list = (
      <div className={styles.child}>
        {browsers.map(({ url, text }, ix) => (
          <div key={ix}>
            <a
              href={`https://wikipedia.org${url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text}
            </a>
          </div>
        ))}
      </div>
    );
  }
  let totalBrowsers = process.browser ? browsers.length : null;
  let listing = process.browser ? list : null;
  return (
    <div>
      <Head>
        <title>Browsers List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.parent} suppressHydrationWarning={true}>
        <h1>Total Browsers reported on Wikipedia: {totalBrowsers}</h1>
        <span>
          You can find the source code{" "}
          <em>
            <a
              href="https://github.com/tpkahlon/browserslist"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </em>
          .
        </span>
        {listing}
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  const request = await fetch(
    `https://en.wikipedia.org/wiki/List_of_web_browsers`
  );
  const text = await request.text();
  return {
    text,
  };
};
