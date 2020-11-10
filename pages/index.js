import Head from "next/head";
import styles from "../styles/Home.module.css";
import { uniqBy } from "lodash";

export default function Home({ text }) {
  let r = [];
  let list = null;
  if (process.browser) {
    const p = new DOMParser();
    const dom = p.parseFromString(text, "text/html");
    [...dom.querySelectorAll("a")]
      .filter((i) => {
        if (
          i.getAttribute("href") &&
          i.getAttribute("title") &&
          !i.getAttribute("rel") &&
          !i.getAttribute("accesskey") &&
          i.textContent.trim() &&
          !i.className.includes("interlanguage-link-target") &&
          !i.getAttribute("title").includes("Category") &&
          !i.getAttribute("title").includes("Comparison") &&
          !i.getAttribute("title").includes("Wikipedia") &&
          !i.getAttribute("title").includes("Edit") &&
          !i.getAttribute("title").includes("of web") &&
          !i.getAttribute("title").includes("3DMLW") &&
          !i.getAttribute("title").includes("AT&T Yahoo!") &&
          !i.getAttribute("title").includes("Augmented browsing") &&
          !i.getAttribute("title").includes("XPCOM") &&
          !i.getAttribute("title").includes("XUL") &&
          !i.getAttribute("title").includes("Yahoo!") &&
          !i
            .getAttribute("title")
            .includes("Whole Internet User's Guide and Catalog") &&
          !i.getAttribute("href").includes("X.25") &&
          !i.getAttribute("href").includes("Autism") &&
          !i.getAttribute("href").includes("Amazon_Kindle") &&
          !i.getAttribute("href").includes("Android_(operating_system)") &&
          !i.getAttribute("href").includes("Apple_Inc.") &&
          !i.getAttribute("href").includes("ARPANET") &&
          !i.getAttribute("href").includes("ASCII") &&
          !i.getAttribute("href").includes("Asperger_syndrome") &&
          !i.getAttribute("href").includes("Audio_player_(software)") &&
          !i.getAttribute("href").includes("Microsoft_Windows") &&
          !i.getAttribute("href").includes("Tasman_(layout_engine)") &&
          !i.getAttribute("href").includes("Tcl") &&
          !i.getAttribute("href").includes("InterCon_Systems_Corporation") &&
          !i.getAttribute("href").includes("Teletext") &&
          !i.getAttribute("href").includes("Telnet") &&
          !i.getAttribute("href").includes("Tencent_Traveler") &&
          !i.getAttribute("href").includes("Text-based_web_browser") &&
          !i.getAttribute("href").includes("Tor_(anonymity_network)") &&
          !i.getAttribute("href").includes("HP_TouchPad") &&
          !i.getAttribute("href").includes("Trident_(software)") &&
          !i.getAttribute("href").includes("Trident_(layout_engine)") &&
          !i.getAttribute("href").includes("Twitter") &&
          !i.getAttribute("href").includes("University_of_Ulm") &&
          !i.getAttribute("href").includes("Usenet") &&
          !i.getAttribute("href").includes("UUCP") &&
          !i.getAttribute("href").includes("HTTP/3") &&
          !i.getAttribute("href").includes("HTTP/2") &&
          !i.getAttribute("href").includes("HTML5") &&
          !i.getAttribute("href").includes("Verizon") &&
          !i.getAttribute("href").includes("Videotex") &&
          !i.getAttribute("href").includes("Viewdata") &&
          !i.getAttribute("href").includes("VRML") &&
          !i.getAttribute("href").includes("W3C") &&
          !i.getAttribute("href").includes("Web_browser") &&
          !i.getAttribute("href").includes("Web_page") &&
          !i.getAttribute("href").includes("Web_standards") &&
          !i.getAttribute("href").includes("Web_storage") &&
          !i.getAttribute("href").includes("WebAssembly") &&
          !i.getAttribute("href").includes("WebGL") &&
          !i.getAttribute("href").includes("WebKit") &&
          !i.getAttribute("href").includes("Palm_webOS") &&
          !i.getAttribute("href").includes("WebRTC") &&
          !i.getAttribute("href").includes("WebSocket") &&
          !i.getAttribute("href").includes("World_Wide_Web") &&
          !i.getAttribute("href").includes("WorldWideWeb") &&
          !i.getAttribute("href").includes("AmigaOS")
        ) {
          return i;
        }
      })
      .forEach((i) => {
        r.push({
          text: i.textContent,
          url: i.getAttribute("href"),
        });
      });
    r = r.sort((a, b) =>
      a.text.toLowerCase() > b.text.toLowerCase() ? 1 : -1
    );
    r = uniqBy(r, "text");
    r = uniqBy(r, "url");
    console.log(r.length)
    list = (
      <div className={styles.child}>
        {r.map((i, ix) => (
          <div key={ix}>
            <a
              href={`https://wikipedia.org${i.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {i.text}
            </a>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Browsers List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.parent} suppressHydrationWarning={true}>
        <h1>
          Total Browsers reported on Wikipedia:{" "}
          {process.browser ? r.length : null}
        </h1>
        <em>
          Please check back regularly for updated list as I clean up{" "}
          <a
            href="https://en.wikipedia.org/wiki/List_of_web_browsers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>{" "}
          list
        </em>
        {process.browser ? list : null}
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  const r = await fetch(`https://en.wikipedia.org/wiki/List_of_web_browsers`);
  const t = await r.text();
  return {
    text: t,
  };
};
