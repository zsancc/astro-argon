import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

const siteUrl = "https://niyu.cc/";
const repoName = "Niyu";
const repoUrl = "https://github.com/zsancc/niyu";

export const globalConfig = {
	siteUrl,
	repoName,
	repoUrl,
	rssDescriptionFallback: "No description",
	astroBase: "/",
	astroTrailingSlash: "always" as const,
};

export const siteConfig: SiteConfig = {
	title: "啾啾のBlog",
	subtitle: "啾啾のBlog",
	lang: "zh_CN",
	themeColor: {
		fixed: false,
		defaultTheme: "argon",
		themes: ["argon", "argon-dark", "winter", "nord", "silk", "lofi", "dracula"],
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{ name: "GitHub", url: repoUrl, external: true },
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png",
	name: "啾啾のBlog",
	bio: "饿了吃，吃了拉，拉了还得饿；拉了饿，饿了吃，吃了还得拉",
	links: [
		{ name: "Twitter", icon: "fa6-brands:twitter", url: "https://twitter.com" },
		{ name: "Steam", icon: "fa6-brands:steam", url: "https://store.steampowered.com" },
		{ name: "GitHub", icon: "fa6-brands:github", url: repoUrl },
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
