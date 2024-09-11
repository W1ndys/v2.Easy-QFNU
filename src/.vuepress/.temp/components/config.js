import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/Documents/StudyData/QFNU/Easy-QFNU/v2.Easy-QFNU/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14_@types+n_nffyz7vlucxw4flbas3ko4q6py/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "D:/Documents/StudyData/QFNU/Easy-QFNU/v2.Easy-QFNU/node_modules/.pnpm/@vueuse+core@10.11.1_vue@3.5.4/node_modules/@vueuse/core/index.mjs";
import FontIcon from "D:/Documents/StudyData/QFNU/Easy-QFNU/v2.Easy-QFNU/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.1_3vdbc6brif5xt3clocjdik52ey/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "D:/Documents/StudyData/QFNU/Easy-QFNU/v2.Easy-QFNU/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.1_3vdbc6brif5xt3clocjdik52ey/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/Documents/StudyData/QFNU/Easy-QFNU/v2.Easy-QFNU/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.1_3vdbc6brif5xt3clocjdik52ey/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/Documents/StudyData/QFNU/Easy-QFNU/v2.Easy-QFNU/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.1_3vdbc6brif5xt3clocjdik52ey/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
