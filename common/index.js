const processData = (i) => {
  if (
    i.getAttribute("href") &&
    i.getAttribute("title") &&
    !i.getAttribute("rel") &&
    !i.getAttribute("accesskey") &&
    i.textContent.trim() &&
    !i.className.toLowerCase().includes("interlanguage-link-target") &&
    !i.getAttribute("title").toLowerCase().includes("3d") &&
    !i.getAttribute("title").toLowerCase().includes("at&t yahoo!") &&
    !i.getAttribute("title").toLowerCase().includes("augmented browsing") &&
    !i.getAttribute("title").toLowerCase().includes("category") &&
    !i.getAttribute("title").toLowerCase().includes("comparison") &&
    !i.getAttribute("title").toLowerCase().includes("communicator") &&
    !i.getAttribute("title").toLowerCase().includes("edit") &&
    !i.getAttribute("title").toLowerCase().includes("microsoft") &&
    !i.getAttribute("title").toLowerCase().includes("miro") &&
    !i.getAttribute("title").toLowerCase().includes("mobile browser") &&
    !i.getAttribute("title").toLowerCase().includes("mosaic-ck") &&
    !i.getAttribute("title").toLowerCase().includes("maemo") &&
    !i.getAttribute("title").toLowerCase().includes("netcaptor") &&
    !i.getAttribute("title").toLowerCase().includes("nls") &&
    !i.getAttribute("title").toLowerCase().includes("nokia") &&
    !i.getAttribute("title").toLowerCase().includes("omni") &&
    !i.getAttribute("title").toLowerCase().includes("of web") &&
    !i.getAttribute("title").toLowerCase().includes("qihoo") &&
    !i.getAttribute("title").toLowerCase().includes("research") &&
    !i.getAttribute("title").toLowerCase().includes("realplayer") &&
    !i.getAttribute("title").toLowerCase().includes("rockmelt") &&
    !i.getAttribute("title").toLowerCase().includes("rss") &&
    !i.getAttribute("title").toLowerCase().includes("spyglass") &&
    !i.getAttribute("title").toLowerCase().includes("tool") &&
    !i.getAttribute("title").toLowerCase().includes("wikipedia") &&
    !i.getAttribute("title").toLowerCase().includes("xpcom") &&
    !i.getAttribute("title").toLowerCase().includes("xul") &&
    !i.getAttribute("title").toLowerCase().includes("yahoo!") &&
    !i
      .getAttribute("title")
      .toLowerCase()
      .includes("Whole Internet User's Guide and Catalog") &&
    !i.getAttribute("href").toLowerCase().includes("_wars") &&
    !i.getAttribute("href").toLowerCase().includes("_in_a_") &&
    !i.getAttribute("href").toLowerCase().includes("#browser") &&
    !i.getAttribute("href").toLowerCase().includes("#release") &&
    !i.getAttribute("href").toLowerCase().includes("(digital)") &&
    !i.getAttribute("href").toLowerCase().includes("(programming") &&
    !i.getAttribute("href").toLowerCase().includes("(online") &&
    !i.getAttribute("href").toLowerCase().includes("(company") &&
    !i.getAttribute("href").toLowerCase().includes("network)") &&
    !i.getAttribute("href").toLowerCase().includes("_pre_") &&
    !i.getAttribute("href").toLowerCase().includes("amigaos") &&
    !i.getAttribute("href").toLowerCase().includes("autism") &&
    !i.getAttribute("href").toLowerCase().includes("amazon_kindle") &&
    !i.getAttribute("href").toLowerCase().includes("apple_inc") &&
    !i.getAttribute("href").toLowerCase().includes("arpanet") &&
    !i.getAttribute("href").toLowerCase().includes("ascii") &&
    !i.getAttribute("href").toLowerCase().includes("aliweb") &&
    !i.getAttribute("href").toLowerCase().includes("aolpress") &&
    !i.getAttribute("href").toLowerCase().includes("avast") &&
    !i.getAttribute("href").toLowerCase().includes("syndrome") &&
    !i.getAttribute("href").toLowerCase().includes("api") &&
    !i.getAttribute("href").toLowerCase().includes("applications") &&
    !i.getAttribute("href").toLowerCase().includes("baidu") &&
    !i.getAttribute("href").toLowerCase().includes("beos") &&
    !i.getAttribute("href").toLowerCase().includes("bitnet") &&
    !i.getAttribute("href").toLowerCase().includes("blogging") &&
    !i.getAttribute("href").toLowerCase().includes("bolt_") &&
    !i.getAttribute("href").toLowerCase().includes("browsers") &&
    !i.getAttribute("href").toLowerCase().includes("browser_synchronization") &&
    !i.getAttribute("href").toLowerCase().includes("bt_group") &&
    !i.getAttribute("href").toLowerCase().includes("catalog") &&
    !i.getAttribute("href").toLowerCase().includes("classilla") &&
    !i.getAttribute("href").toLowerCase().includes("compuserve") &&
    !i.getAttribute("href").toLowerCase().includes("cascading_style_sheets") &&
    !i.getAttribute("href").toLowerCase().includes("cyberdog") &&
    !i.getAttribute("href").toLowerCase().includes("document_object_model") &&
    !i.getAttribute("href").toLowerCase().includes("debian") &&
    !i.getAttribute("href").toLowerCase().includes("dreamcast") &&
    !i.getAttribute("href").toLowerCase().includes("events") &&
    !i.getAttribute("href").toLowerCase().includes("emacs") &&
    !i.getAttribute("href").toLowerCase().includes("email") &&
    !i.getAttribute("href").toLowerCase().includes("elm") &&
    !i.getAttribute("href").toLowerCase().includes("extension") &&
    !i.getAttribute("href").toLowerCase().includes("embedded") &&
    !i.getAttribute("href").toLowerCase().includes("engine") &&
    !i.getAttribute("href").toLowerCase().includes("foundation") &&
    !i.getAttribute("href").toLowerCase().includes("facebook") &&
    !i.getAttribute("href").toLowerCase().includes("gnuzilla") &&
    !i.getAttribute("href").toLowerCase().includes("gnome") &&
    !i.getAttribute("href").toLowerCase().includes("gnu") &&
    !i
      .getAttribute("href")
      .toLowerCase()
      .includes("graphical_user_interface") &&
    !i.getAttribute("href").toLowerCase().includes("http") &&
    !i.getAttribute("href").toLowerCase().includes("history") &&
    !i.getAttribute("href").toLowerCase().includes("headless_browser") &&
    !i.getAttribute("href").toLowerCase().includes("hp_veer") &&
    !i.getAttribute("href").toLowerCase().includes("http") &&
    !i.getAttribute("href").toLowerCase().includes("hp_touchpad") &&
    !i.getAttribute("href").toLowerCase().includes("html") &&
    !i.getAttribute("href").toLowerCase().includes("hypercard") &&
    !i.getAttribute("href").toLowerCase().includes("intercon_systems_corporation") &&
    !i.getAttribute("href").toLowerCase().includes("ibm_lotus_symphony") &&
    !i.getAttribute("href").toLowerCase().includes("iceweasel") &&
    !i.getAttribute("href").toLowerCase().includes("ibox") &&
    !i.getAttribute("href").toLowerCase().includes("ie_tab") &&
    !i.getAttribute("href").toLowerCase().includes("internet_explorer_shell") &&
    !i.getAttribute("href").toLowerCase().includes("javascript") &&
    !i.getAttribute("href").toLowerCase().includes("kde") &&
    !i.getAttribute("href").toLowerCase().includes("libwww") &&
    !i.getAttribute("href").toLowerCase().includes("linux") &&
    !i.getAttribute("href").toLowerCase().includes("list") &&
    !i.getAttribute("href").toLowerCase().includes("layout") &&
    !i.getAttribute("href").toLowerCase().includes("macos") &&
    !i.getAttribute("href").toLowerCase().includes("mac_os") &&
    !i.getAttribute("href").toLowerCase().includes("msn_explorer") &&
    !i.getAttribute("href").toLowerCase().includes("microsoft_windows") &&
    !i.getAttribute("href").toLowerCase().includes("operating_system") &&
    !i.getAttribute("href").toLowerCase().includes("private_browsing") &&
    !i.getAttribute("href").toLowerCase().includes("portal") &&
    !i.getAttribute("href").toLowerCase().includes("protocol") &&
    !i.getAttribute("href").toLowerCase().includes("palm_") &&
    !i.getAttribute("href").toLowerCase().includes("powerpc") &&
    !i.getAttribute("href").toLowerCase().includes("protocol") &&
    !i.getAttribute("href").toLowerCase().includes("planetweb") &&
    !i.getAttribute("href").toLowerCase().includes("plan_9_from_bell_labs") &&
    !i.getAttribute("href").toLowerCase().includes("qt_webengine") &&
    !i.getAttribute("href").toLowerCase().includes("risc_os") &&
    !i.getAttribute("href").toLowerCase().includes("software") &&
    !i.getAttribute("href").toLowerCase().includes("specific") &&
    !i.getAttribute("href").toLowerCase().includes("symbian") &&
    !i.getAttribute("href").toLowerCase().includes("suite") &&
    !i.getAttribute("href").toLowerCase().includes("software") &&
    !i.getAttribute("href").toLowerCase().includes("tcl") &&
    !i.getAttribute("href").toLowerCase().includes("teletext") &&
    !i.getAttribute("href").toLowerCase().includes("tv") &&
    !i.getAttribute("href").toLowerCase().includes("telnet") &&
    !i.getAttribute("href").toLowerCase().includes("tencent_traveler") &&
    !i.getAttribute("href").toLowerCase().includes("text-based_web_browser") &&
    !i.getAttribute("href").toLowerCase().includes("twitter") &&
    !i.getAttribute("href").toLowerCase().includes("university_of_ulm") &&
    !i.getAttribute("href").toLowerCase().includes("usenet") &&
    !i.getAttribute("href").toLowerCase().includes("uucp") &&
    !i.getAttribute("href").toLowerCase().includes("verizon") &&
    !i.getAttribute("href").toLowerCase().includes("videotex") &&
    !i.getAttribute("href").toLowerCase().includes("viewdata") &&
    !i.getAttribute("href").toLowerCase().includes("vrml") &&
    !i.getAttribute("href").toLowerCase().includes("winamp") &&
    !i.getAttribute("href").toLowerCase().includes("wikimedia") &&
    !i.getAttribute("href").toLowerCase().includes("w3c") &&
    !i.getAttribute("href").toLowerCase().includes("web_page") &&
    !i.getAttribute("href").toLowerCase().includes("web_standards") &&
    !i.getAttribute("href").toLowerCase().includes("web_storage") &&
    !i.getAttribute("href").toLowerCase().includes("webassembly") &&
    !i.getAttribute("href").toLowerCase().includes("webgl") &&
    !i.getAttribute("href").toLowerCase().includes("webkit") &&
    !i.getAttribute("href").toLowerCase().includes("webrtc") &&
    !i.getAttribute("href").toLowerCase().includes("websocket") &&
    !i.getAttribute("href").toLowerCase().includes("world_wide_web") &&
    !i.getAttribute("href").toLowerCase().includes("worldwideweb") &&
    i.getAttribute("href").toLowerCase() !== "/wiki/web_browser" &&
    !i.getAttribute("href").toLowerCase().includes("x.25")
  ) {
    console.log(i.getAttribute('href').toLowerCase());
    return i;
  }
}

export default processData;
