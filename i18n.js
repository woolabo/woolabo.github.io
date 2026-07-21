(() => {
  const zh = {
    "nav.label": "主导航",
    "nav.shortcuts": "快捷指令",
    "nav.privacy": "隐私",
    "nav.support": "支持",
    "home.title": "留住触动<br>你的文字。",
    "home.description": "从屏幕或现实世界捕捉一句话，把它变成一枚值得回看的私人书签。",
    "home.cta": "获取快捷指令",
    "home.deviceLabel": "设备端处理",
    "home.deviceValue": "文字识别只在你的 iPhone 上进行。",
    "home.localLabel": "本地优先",
    "home.localValue": "无需注册账号。",
    "home.returnLabel": "为了回看",
    "home.returnValue": "把触动你的文字变成可回看的视觉书签。",
    "home.shortcutTitle": "获取快捷指令",
    "home.shortcutNote": "选择你的语言版本",
    "home.privacyTitle": "隐私",
    "home.privacyNote": "了解数据如何处理",
    "home.supportTitle": "支持",
    "home.supportNote": "联系开发者",
    "home.githubNote": "访问 GitHub",
    "shortcuts.title": "获取<br>快捷指令。",
    "shortcuts.description": "选择与你在 e¹ 中使用的语言一致的版本。",
    "shortcuts.count": "11 个语言版本",
    "shortcuts.get": "获取",
    "shortcuts.recommended": "推荐",
    "privacy.title": "隐私<br>政策。",
    "privacy.intro": "e¹ 帮助你捕捉想保留的文字与瞬间，标出最重要的部分，并将它作为书签保存在 iPhone 上。",
    "privacy.updated": "更新日期：2026 年 7 月 15 日",
    "privacy.summary.title": "摘要",
    "privacy.summary.account": "e¹ 不要求你注册账号。",
    "privacy.summary.upload": "e¹ 不会把你的截图、照片、OCR 文字、书签或用户输入内容上传至我们的服务器。",
    "privacy.summary.ocr": "文字识别使用 Apple 的设备端 Vision OCR，并在你的设备上完成。",
    "privacy.summary.icloud": "首个 TestFlight 版本不使用 iCloud 或 CloudKit 同步。",
    "privacy.summary.logs": "诊断日志保存在你的设备上，只有当你选择通过邮件发送时，我们才会收到。",
    "privacy.summary.logContent": "诊断日志的设计不包含截图、照片、OCR 文字、书签文字、搜索内容或用户输入内容。",
    "privacy.device.title": "在设备上处理的信息",
    "privacy.device.intro": "e¹ 可能在你的设备本地处理以下信息：",
    "privacy.device.item1": "你选择拍摄或在 e¹ 中打开的截图或照片",
    "privacy.device.item2": "你选择的高亮区域",
    "privacy.device.item3": "从高亮区域识别出的文字",
    "privacy.device.item4": "书签文字和生成的书签图片",
    "privacy.device.item5": "本地 App 设置，例如文字识别语言偏好",
    "privacy.device.item6": "在你授权 Apple Music 后，当前的播放状态和专辑图片",
    "privacy.device.outro": "这些信息仅用于提供 e¹ 的核心功能，不会上传至我们的服务器。",
    "privacy.ocr.title": "截图、照片与 OCR",
    "privacy.ocr.p1": "e¹ 使用设备端 OCR 识别你所高亮区域中的文字。",
    "privacy.ocr.p2": "原始截图或照片仅在当前编辑过程中临时使用。书签成功生成并保存后，临时源图片会被丢弃。e¹ 保存最终的书签数据和生成的书签图片，而不是原始截图或照片。",
    "privacy.camera.title": "相机",
    "privacy.camera.p1": "如果你使用 e¹ 的内置相机，App 会请求相机权限，以便你拍摄照片并从中高亮文字。",
    "privacy.photos.title": "照片与保存书签图片",
    "privacy.photos.p1": "当你为画布选择照片时，e¹ 使用 Apple 的系统照片选择器。你只会授权访问所选照片，e¹ 不会请求访问你的完整照片图库。",
    "privacy.photos.p2": "当你选择保存或分享生成的书签图片时，e¹ 使用 iOS 系统分享面板。如果你选择“存储图像”，图片保存过程由 iOS 处理。",
    "privacy.music.p1": "如果你授权访问 Apple Music，e¹ 会使用该权限在 App 内显示当前播放状态和专辑图片。",
    "privacy.music.p2": "e¹ 可能在 App 内显示 Apple Music 播放信息，例如播放状态、进度、歌曲名称、艺人、专辑信息和专辑图片。",
    "privacy.music.p3": "首个 TestFlight 版本不显示歌词。",
    "privacy.music.p4": "e¹ 不会把你的 Apple Music 收听活动上传至我们的服务器。如果 e¹ 通过 Apple 的 iTunes 服务加载专辑图片，该请求由 Apple 的服务处理。",
    "privacy.music.p5": "通过 Apple 的 iTunes 服务加载专辑图片时，e¹ 可能会把歌曲、艺人或专辑搜索信息发送给 Apple 的 iTunes 服务，以查找对应图片。",
    "privacy.logs.title": "诊断日志",
    "privacy.logs.p1": "e¹ 可能在你的设备上保存诊断日志，以帮助排查崩溃和错误。",
    "privacy.logs.p2": "这些日志可能包含 App 版本、iOS 版本、设备型号、错误代码、崩溃或失败时间，以及不涉及用户内容的流程状态等技术信息。",
    "privacy.logs.p3": "诊断日志的设计不包含原始截图或照片、裁切后的 OCR 图片、OCR 文字、书签文字、搜索内容或用户输入内容。",
    "privacy.logs.p4": "日志不会自动发送。你可以自行选择通过邮件把日志发送给我们以获得支持。",
    "privacy.email.title": "邮件支持",
    "privacy.email.p1": "如果你通过邮件联系我们，我们会收到你的邮箱地址以及你主动写入邮件的信息。我们只会使用这些信息回复你的请求并改进 e¹。",
    "privacy.email.label": "支持邮箱：",
    "privacy.icloud.title": "iCloud 与 CloudKit",
    "privacy.icloud.p1": "e¹ 的首个 TestFlight 版本不使用 iCloud 或 CloudKit 同步。",
    "privacy.icloud.p2": "如果未来加入 iCloud 或 CloudKit 同步，我们会在该功能发布前更新本隐私政策。",
    "privacy.analytics.title": "分析与第三方 SDK",
    "privacy.analytics.p1": "e¹ 的首个 TestFlight 版本不使用第三方分析 SDK。",
    "privacy.analytics.p2": "如果未来发生变化，我们会更新本隐私政策和 App Store 隐私信息。",
    "privacy.children.title": "儿童隐私",
    "privacy.children.p1": "e¹ 并非面向儿童，也不会在知情的情况下收集儿童的个人信息。",
    "privacy.changes.title": "隐私政策变更",
    "privacy.changes.p1": "我们可能会随着 e¹ 的变化更新本隐私政策。更新后的政策会发布在同一隐私政策网址，并标注新的更新日期。",
    "privacy.contact.title": "联系我们",
    "privacy.contact.p1": "如果你对本隐私政策有疑问，请联系",
    "support.title": "支持。",
    "support.description": "告诉我们发生了什么。只发送你愿意提供的信息。",
    "support.includeLabel": "建议包含",
    "support.includeValue": "你的 iPhone 型号、iOS 版本、e¹ App 版本，以及问题的简短描述。",
    "support.privacyNote": "除非你明确愿意分享，否则请不要附上截图或私人内容。",
    "support.emailLabel": "邮箱",
    "support.emailAction": "发送邮件",
    "support.policyTitle": "阅读隐私政策",
    "support.policyNote": "e¹ 如何处理你的数据",
    "support.footer": "TestFlight 内测支持",
    "footer.by": "Woolabo 出品",
    "footer.trademark": "iPhone 是 Apple Inc. 的商标。"
  };

  const pageTitles = {
    "/": { en: "e¹ - Keep what catches you", zh: "e¹ - 留住触动你的文字" },
    "/shortcuts/": { en: "Get the e¹ Shortcut", zh: "获取 e¹ 快捷指令" },
    "/privacy-policy/": { en: "e¹ Privacy Policy", zh: "e¹ 隐私政策" },
    "/support/": { en: "e¹ Support", zh: "e¹ 支持" }
  };

  const plainNodes = [...document.querySelectorAll("[data-i18n]")];
  const htmlNodes = [...document.querySelectorAll("[data-i18n-html]")];
  const ariaNodes = [...document.querySelectorAll("[data-i18n-aria-label]")];

  plainNodes.forEach((node) => {
    node.dataset.i18nEn = node.textContent;
  });
  htmlNodes.forEach((node) => {
    node.dataset.i18nEnHtml = node.innerHTML;
  });
  ariaNodes.forEach((node) => {
    node.dataset.i18nEnAria = node.getAttribute("aria-label") || "";
  });

  const readLanguage = () => {
    const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
    if (requestedLanguage === "zh" || requestedLanguage === "en") {
      return requestedLanguage;
    }
    try {
      return localStorage.getItem("e1-site-language") === "zh" ? "zh" : "en";
    } catch {
      return "en";
    }
  };

  const writeLanguage = (language) => {
    try {
      localStorage.setItem("e1-site-language", language);
    } catch {
      // The page still switches language when storage is unavailable.
    }
  };

  const applyLanguage = (language) => {
    const isChinese = language === "zh";
    document.documentElement.lang = isChinese ? "zh-Hans" : "en";
    document.documentElement.dataset.lang = language;

    plainNodes.forEach((node) => {
      const key = node.dataset.i18n;
      node.textContent = isChinese && zh[key] ? zh[key] : node.dataset.i18nEn;
    });
    htmlNodes.forEach((node) => {
      const key = node.dataset.i18nHtml;
      node.innerHTML = isChinese && zh[key] ? zh[key] : node.dataset.i18nEnHtml;
    });
    ariaNodes.forEach((node) => {
      const key = node.dataset.i18nAriaLabel;
      node.setAttribute("aria-label", isChinese && zh[key] ? zh[key] : node.dataset.i18nEnAria);
    });

    const path = window.location.pathname.endsWith("/") ? window.location.pathname : `${window.location.pathname}/`;
    const title = pageTitles[path] || pageTitles["/"];
    document.title = title[language];

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.textContent = isChinese ? "EN" : "ZH";
      button.setAttribute("aria-label", isChinese ? "Switch to English" : "切换至中文");
    });
  };

  let language = readLanguage();
  applyLanguage(language);

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      language = language === "en" ? "zh" : "en";
      writeLanguage(language);
      applyLanguage(language);
    });
  });
})();
