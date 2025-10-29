import './polyfills.server.mjs';
import {
  ActivatedRoute,
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterOutlet,
  bootstrapApplication,
  mergeApplicationConfig,
  provideClientHydration,
  provideRouter,
  provideServerRendering,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TAZPPYCF.mjs";

// src/app/home/home.component.ts
var _HomeComponent = class _HomeComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
  }
  startBrowsing() {
    this.router.navigate(["/browseCards"], { queryParams: { category: "guest" } });
  }
  learnMore() {
    const tipsSection = document.querySelector(".tips-section");
    if (tipsSection) {
      tipsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 99, vars: 0, consts: [[1, "page-bg"], [1, "hero-section"], [1, "hero-content"], [1, "hero-text"], [1, "logo-section"], ["src", "assets/images/logo1.jpeg", "alt", "WhichCard Logo", 1, "logo-image"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-description"], [1, "hero-stats"], [1, "stat-item"], [1, "stat-number"], [1, "stat-label"], [1, "hero-actions"], [1, "cta-button", "primary", 3, "click"], [1, "icon"], [1, "cta-button", "secondary", 3, "click"], [1, "hero-image"], [1, "card-showcase"], [1, "floating-card", "card-1"], ["src", "assets/images/cards/chase-sapphire-preferred-real.jpg", "alt", "Chase Sapphire Preferred", 1, "floating-card-img"], [1, "card-text"], [1, "floating-card", "card-2"], ["src", "assets/images/cards/discover-cash-back-real.jpg", "alt", "Discover Cash Back", 1, "floating-card-img"], [1, "floating-card", "card-3"], ["src", "assets/images/cards/amex-gold-card-real.jpg", "alt", "Amex Gold", 1, "floating-card-img"], [1, "floating-card", "card-4"], ["src", "assets/images/cards/capital-one-venture-real.jpg", "alt", "Capital One Venture", 1, "floating-card-img"], [1, "tips-section"], [1, "container"], [1, "section-title"], [1, "tips-grid"], [1, "tip-card"], [1, "tip-icon"], [1, "cta-section"], [1, "cta-content"], [1, "cta-button", "large", 3, "click"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "img", 5);
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7, "Find the Perfect Credit Card");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h2", 7);
    \u0275\u0275text(9, "Save Money & Maximize Rewards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 8);
    \u0275\u0275text(11, " Compare thousands of credit cards and find the best deals. Save hundreds of dollars annually with the right card choice! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11);
    \u0275\u0275text(15, "$500+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12);
    \u0275\u0275text(17, "Average Annual Savings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "div", 11);
    \u0275\u0275text(20, "1000+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 12);
    \u0275\u0275text(22, "Cards Compared");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 10)(24, "div", 11);
    \u0275\u0275text(25, "50K+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 12);
    \u0275\u0275text(27, "Happy Users");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 13)(29, "button", 14);
    \u0275\u0275listener("click", function HomeComponent_Template_button_click_29_listener() {
      return ctx.startBrowsing();
    });
    \u0275\u0275elementStart(30, "i", 15);
    \u0275\u0275text(31, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Start Comparing Cards ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 16);
    \u0275\u0275listener("click", function HomeComponent_Template_button_click_33_listener() {
      return ctx.learnMore();
    });
    \u0275\u0275elementStart(34, "i", 15);
    \u0275\u0275text(35, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Learn How to Save ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 17)(38, "div", 18)(39, "div", 19);
    \u0275\u0275element(40, "img", 20);
    \u0275\u0275elementStart(41, "div", 21);
    \u0275\u0275text(42, "Travel Rewards");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 22);
    \u0275\u0275element(44, "img", 23);
    \u0275\u0275elementStart(45, "div", 21);
    \u0275\u0275text(46, "Cash Back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 24);
    \u0275\u0275element(48, "img", 25);
    \u0275\u0275elementStart(49, "div", 21);
    \u0275\u0275text(50, "Dining Rewards");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 26);
    \u0275\u0275element(52, "img", 27);
    \u0275\u0275elementStart(53, "div", 21);
    \u0275\u0275text(54, "Miles Rewards");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(55, "div", 28)(56, "div", 29)(57, "h2", 30);
    \u0275\u0275text(58, "How We Help You Save Money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 31)(60, "div", 32)(61, "div", 33);
    \u0275\u0275text(62, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "h3");
    \u0275\u0275text(64, "Find Better Rates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p");
    \u0275\u0275text(66, "Compare APR rates and find cards with lower interest rates to reduce your monthly payments.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 32)(68, "div", 33);
    \u0275\u0275text(69, "\u{1F381}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "h3");
    \u0275\u0275text(71, "Maximize Rewards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p");
    \u0275\u0275text(73, "Discover cards that offer the best rewards for your spending habits and lifestyle.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 32)(75, "div", 33);
    \u0275\u0275text(76, "\u{1F6AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "h3");
    \u0275\u0275text(78, "Avoid Hidden Fees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p");
    \u0275\u0275text(80, "Compare annual fees and hidden charges to avoid unnecessary costs.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 32)(82, "div", 33);
    \u0275\u0275text(83, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "h3");
    \u0275\u0275text(85, "Perfect Match");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p");
    \u0275\u0275text(87, "Get personalized recommendations based on your credit score and spending patterns.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(88, "div", 34)(89, "div", 29)(90, "div", 35)(91, "h2");
    \u0275\u0275text(92, "Ready to Start Saving?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p");
    \u0275\u0275text(94, "Join thousands of users who have saved money with the perfect credit card choice.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "button", 36);
    \u0275\u0275listener("click", function HomeComponent_Template_button_click_95_listener() {
      return ctx.startBrowsing();
    });
    \u0275\u0275elementStart(96, "i", 15);
    \u0275\u0275text(97, "\u{1F680}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(98, " Browse Credit Cards Now ");
    \u0275\u0275elementEnd()()()()();
  }
}, dependencies: [CommonModule], styles: [`

[_ngcontent-%COMP%]:root {
  --primary-color: #2c1810;
  --secondary-color: #8b4513;
  --accent-color: #d2691e;
  --success-color: #28a745;
  --text-color: #333;
  --light-text-color: #f8f9fa;
  --white: #ffffff;
  --gray-100: #f8f9fa;
  --gray-200: #e9ecef;
  --gray-300: #dee2e6;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  --border-radius: 12px;
  --transition-speed: 0.3s;
}
*[_ngcontent-%COMP%] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--gray-100);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page-bg[_ngcontent-%COMP%] {
  width: 100%;
  min-height: 100vh;
  background:
    linear-gradient(
      135deg,
      var(--primary-color) 0%,
      var(--secondary-color) 100%);
}
.hero-section[_ngcontent-%COMP%] {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  background:
    linear-gradient(
      135deg,
      var(--primary-color) 0%,
      var(--secondary-color) 50%,
      var(--accent-color) 100%);
  position: relative;
  overflow: hidden;
}
.hero-section[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}
.hero-content[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}
.hero-text[_ngcontent-%COMP%] {
  color: var(--white);
}
.logo-section[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.logo-image[_ngcontent-%COMP%] {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.hero-title[_ngcontent-%COMP%] {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.hero-subtitle[_ngcontent-%COMP%] {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--light-text-color);
  opacity: 0.9;
}
.hero-description[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  line-height: 1.6;
}
.hero-stats[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}
.stat-item[_ngcontent-%COMP%] {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.stat-number[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 0.5rem;
}
.stat-label[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.hero-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.cta-button[_ngcontent-%COMP%] {
  padding: 1rem 2rem;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.cta-button.primary[_ngcontent-%COMP%] {
  background: var(--white);
  color: var(--primary-color);
  box-shadow: var(--shadow);
}
.cta-button.primary[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
.cta-button.secondary[_ngcontent-%COMP%] {
  background: transparent;
  color: var(--white);
  border: 2px solid var(--white);
}
.cta-button.secondary[_ngcontent-%COMP%]:hover {
  background: var(--white);
  color: var(--primary-color);
  transform: translateY(-2px);
}
.cta-button.large[_ngcontent-%COMP%] {
  padding: 1.5rem 3rem;
  font-size: 1.3rem;
}
.cta-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  font-size: 1.2rem;
}
.hero-image[_ngcontent-%COMP%] {
  position: relative;
  height: 500px;
}
.card-showcase[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  height: 100%;
}
.floating-card[_ngcontent-%COMP%] {
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--border-radius);
  padding: 1rem;
  box-shadow: var(--shadow);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;
  overflow: hidden;
}
.floating-card-img[_ngcontent-%COMP%] {
  width: 80px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}
.floating-card.card-1[_ngcontent-%COMP%] {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}
.floating-card.card-2[_ngcontent-%COMP%] {
  top: 20%;
  right: 20%;
  animation-delay: 1.5s;
}
.floating-card.card-3[_ngcontent-%COMP%] {
  bottom: 30%;
  left: 20%;
  animation-delay: 3s;
}
.floating-card.card-4[_ngcontent-%COMP%] {
  bottom: 10%;
  right: 10%;
  animation-delay: 4.5s;
}
.card-text[_ngcontent-%COMP%] {
  font-weight: 600;
  color: var(--primary-color);
  font-size: 0.8rem;
  text-align: center;
}
@keyframes _ngcontent-%COMP%_float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
.tips-section[_ngcontent-%COMP%] {
  padding: 6rem 2rem;
  background: var(--white);
}
.container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
}
.section-title[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 3rem;
}
.tips-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
.tip-card[_ngcontent-%COMP%] {
  background: var(--white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  text-align: center;
  transition: all var(--transition-speed) ease;
  border: 1px solid var(--gray-200);
}
.tip-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
.tip-icon[_ngcontent-%COMP%] {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.tip-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
}
.tip-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text-color);
  line-height: 1.6;
  opacity: 0.8;
}
.cta-section[_ngcontent-%COMP%] {
  padding: 6rem 2rem;
  background:
    linear-gradient(
      135deg,
      var(--secondary-color) 0%,
      var(--accent-color) 100%);
  text-align: center;
}
.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 1rem;
}
.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  color: var(--light-text-color);
  margin-bottom: 2rem;
  opacity: 0.9;
}
@media (max-width: 768px) {
  .hero-content[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  .hero-title[_ngcontent-%COMP%] {
    font-size: 2.5rem;
  }
  .hero-subtitle[_ngcontent-%COMP%] {
    font-size: 1.4rem;
  }
  .hero-stats[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .hero-actions[_ngcontent-%COMP%] {
    justify-content: center;
  }
  .cta-button[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
  .tips-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .section-title[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
}
@media (max-width: 480px) {
  .hero-section[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .hero-title[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .hero-subtitle[_ngcontent-%COMP%] {
    font-size: 1.2rem;
  }
  .hero-description[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .tips-section[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%] {
    padding: 3rem 1rem;
  }
}
/*# sourceMappingURL=home.component.css.map */`] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "WhichCard";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], styles: ["\n\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/app/selection/selection.component.ts
var _SelectionComponent = class _SelectionComponent {
  constructor(router, activateRoute) {
    this.router = router;
    this.activateRoute = activateRoute;
    this.check = "hidden";
    this.uncheck = "f1-pos";
    this.selectedcard = "Chase Sapphire Preferred";
    this.selectedItem = "Airbnb";
    this.loginID = "";
    this.account = "";
    this.creditCards = [
      {
        name: "Chase Sapphire Preferred",
        issuer: "Chase",
        category: "Travel",
        rewards: "2x points on travel & dining, 1x on all other purchases",
        annualFee: "$95",
        apr: "21.49% - 28.49%"
      },
      {
        name: "Capital One Venture Rewards",
        issuer: "Capital One",
        category: "Travel",
        rewards: "2x miles on all purchases",
        annualFee: "$95",
        apr: "19.99% - 29.99%"
      },
      {
        name: "American Express Gold Card",
        issuer: "American Express",
        category: "Dining",
        rewards: "4x points on dining & groceries, 3x on flights",
        annualFee: "$250",
        apr: "19.24% - 28.24%"
      },
      {
        name: "Citi Double Cash",
        issuer: "Citi",
        category: "Cash Back",
        rewards: "2% cash back (1% when you buy, 1% when you pay)",
        annualFee: "$0",
        apr: "19.24% - 29.24%"
      },
      {
        name: "Discover it Cash Back",
        issuer: "Discover",
        category: "Cash Back",
        rewards: "5% rotating categories, 1% on all other purchases",
        annualFee: "$0",
        apr: "17.24% - 28.24%"
      },
      {
        name: "Wells Fargo Active Cash",
        issuer: "Wells Fargo",
        category: "Cash Back",
        rewards: "2% unlimited cash back on all purchases",
        annualFee: "$0",
        apr: "20.24% - 29.99%"
      },
      {
        name: "Chase Freedom Unlimited",
        issuer: "Chase",
        category: "Cash Back",
        rewards: "5% on travel through Chase, 3% on dining & drugstores, 1.5% on all other purchases",
        annualFee: "$0",
        apr: "20.49% - 29.24%"
      },
      {
        name: "American Express Blue Cash Preferred",
        issuer: "American Express",
        category: "Groceries",
        rewards: "6% on groceries, 6% on streaming, 3% on transit & gas",
        annualFee: "$95",
        apr: "19.24% - 29.24%"
      },
      {
        name: "Capital One SavorOne",
        issuer: "Capital One",
        category: "Dining",
        rewards: "3% on dining, entertainment & streaming, 5% on hotels & rental cars",
        annualFee: "$0",
        apr: "19.99% - 29.99%"
      },
      {
        name: "Bank of America Customized Cash Rewards",
        issuer: "Bank of America",
        category: "Cash Back",
        rewards: "3% in your choice category, 2% at grocery stores & wholesale clubs",
        annualFee: "$0",
        apr: "18.99% - 28.99%"
      },
      {
        name: "Chase Ink Business Preferred",
        issuer: "Chase",
        category: "Business",
        rewards: "3x points on travel, shipping, internet, cable, phone, advertising",
        annualFee: "$95",
        apr: "21.24% - 26.24%"
      },
      {
        name: "Discover it Miles",
        issuer: "Discover",
        category: "Travel",
        rewards: "1.5x miles on all purchases",
        annualFee: "$0",
        apr: "17.24% - 28.24%"
      }
    ];
    this.selectedCredit = "Chase Sapphire Preferred";
    this.purchaseItem = "Airbnb";
  }
  ngOnInit() {
    this.activateRoute.queryParamMap.subscribe((params) => this.loginID = params.params.category);
    if (this.loginID == "guest") {
      this.account = "hidden";
    }
  }
  logOut() {
    this.router.navigate(["/home"]);
  }
  toBrowsCards() {
    this.router.navigate(["/browseCards"]);
  }
  selectedCard(value) {
    this.selectedCredit = value;
  }
  OnCheck() {
    this.check = "";
    this.uncheck = "";
    this.selectedcard = this.selectedCredit;
    this.selectedItem = this.purchaseItem;
  }
  Onpurchase(value) {
    this.purchaseItem = value;
  }
  // Get rewards percentage for selected card and expense
  getRewardsPercentage() {
    const selectedCardData = this.creditCards.find((card) => card.name === this.selectedCredit);
    if (!selectedCardData)
      return "0%";
    const expense = this.purchaseItem.toLowerCase();
    if (selectedCardData.category === "Travel" && (expense === "airbnb" || expense === "lyft" || expense === "uber")) {
      return "2%";
    } else if (selectedCardData.category === "Dining" && expense === "starbucks") {
      return "4%";
    } else if (selectedCardData.category === "Cash Back") {
      return "2%";
    } else if (selectedCardData.category === "Groceries" && (expense === "walmart" || expense === "target")) {
      return "6%";
    } else if (selectedCardData.category === "Business") {
      return "3%";
    }
    return "1%";
  }
};
_SelectionComponent.\u0275fac = function SelectionComponent_Factory(t) {
  return new (t || _SelectionComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_SelectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectionComponent, selectors: [["app-selection"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 105, vars: 16, consts: [[1, "page-bg"], [1, "navbar", "navbar-expand-sm", "fixed-top"], [1, "nav-height"], [1, "d-flex", "flex-row", "container-fluid"], [2, "width", "1400px"], ["href", "#", 1, "navbar-brand", "text-light", "mt-4"], [1, "navbar-brand", "text-light", "mt-4", 3, "click"], ["href", "#"], [1, "glyphicon", "glyphicon-user", "user-i"], ["type", "button", 1, "btn", "btn-outline-light", "p-3", "logout-b", "nav-button", 3, "click"], [1, "grid-container"], [1, "grid-item"], [1, "d-flex", "flex-row"], [1, "mb-3", "mt-3", "form-group", "input-w"], ["for", "card", 1, "form-label", "label-text"], ["id", "card", "name", "card", 1, "form-control", "input-format", 3, "change"], ["card", ""], ["value", "Chase Sapphire Preferred"], ["value", "Capital One Venture Rewards"], ["value", "American Express Gold Card"], ["value", "Citi Double Cash"], ["value", "Discover it Cash Back"], ["value", "Wells Fargo Active Cash"], ["value", "Chase Freedom Unlimited"], ["value", "American Express Blue Cash Preferred"], ["value", "Capital One SavorOne"], ["value", "Bank of America Customized Cash Rewards"], ["value", "Chase Ink Business Preferred"], ["value", "Discover it Miles"], [1, "mb-3", "mt-3", "input-w"], ["for", "purchase", 1, "form-label", "label-text"], ["id", "purchase", "name", "purchase", 1, "form-control", "input-format", 3, "change"], ["purchase", ""], ["value", "Airbnb"], ["value", "Lyft"], ["value", "Uber"], ["value", "Amazon"], ["value", "Walmart"], ["value", "Zipcar"], ["value", "Target"], ["value", "AT&T"], ["value", "Netflix"], ["value", "Starbucks"], [1, "btn", "mb-3", "button-format", 3, "click"], [1, ""], [1, "mb-3", "mt-3", "p-4", "form-group", "input-w"], ["id", "information"], [1, "p-3"]], template: function SelectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
    \u0275\u0275text(6, " WhichCard? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275listener("click", function SelectionComponent_Template_p_click_7_listener() {
      return ctx.toBrowsCards();
    });
    \u0275\u0275text(8, " Browse Cards ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "a", 7);
    \u0275\u0275element(11, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "button", 9);
    \u0275\u0275listener("click", function SelectionComponent_Template_button_click_13_listener() {
      return ctx.logOut();
    });
    \u0275\u0275text(14, "log out");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "div")(18, "form", 12)(19, "div", 13)(20, "label", 14);
    \u0275\u0275text(21, "Card");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "br");
    \u0275\u0275elementStart(23, "select", 15, 16);
    \u0275\u0275listener("change", function SelectionComponent_Template_select_change_23_listener() {
      \u0275\u0275restoreView(_r2);
      const _r0 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(ctx.selectedCard(_r0.value));
    });
    \u0275\u0275elementStart(25, "option", 17);
    \u0275\u0275text(26, "Chase Sapphire Preferred");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 18);
    \u0275\u0275text(28, "Capital One Venture Rewards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 19);
    \u0275\u0275text(30, "American Express Gold Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 20);
    \u0275\u0275text(32, "Citi Double Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 21);
    \u0275\u0275text(34, "Discover it Cash Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 22);
    \u0275\u0275text(36, "Wells Fargo Active Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 23);
    \u0275\u0275text(38, "Chase Freedom Unlimited");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 24);
    \u0275\u0275text(40, "American Express Blue Cash Preferred");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 25);
    \u0275\u0275text(42, "Capital One SavorOne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 26);
    \u0275\u0275text(44, "Bank of America Customized Cash Rewards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 27);
    \u0275\u0275text(46, "Chase Ink Business Preferred");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 28);
    \u0275\u0275text(48, "Discover it Miles");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 29)(50, "label", 30);
    \u0275\u0275text(51, "Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "br");
    \u0275\u0275elementStart(53, "select", 31, 32);
    \u0275\u0275listener("change", function SelectionComponent_Template_select_change_53_listener() {
      \u0275\u0275restoreView(_r2);
      const _r1 = \u0275\u0275reference(54);
      return \u0275\u0275resetView(ctx.Onpurchase(_r1.value));
    });
    \u0275\u0275elementStart(55, "option", 33);
    \u0275\u0275text(56, "Airbnb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 34);
    \u0275\u0275text(58, "Lyft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 35);
    \u0275\u0275text(60, "Uber");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 36);
    \u0275\u0275text(62, "Amazon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 37);
    \u0275\u0275text(64, "Walmart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "option", 38);
    \u0275\u0275text(66, "Zipcar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "option", 39);
    \u0275\u0275text(68, "Target");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "option", 40);
    \u0275\u0275text(70, "AT&T");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "option", 41);
    \u0275\u0275text(72, "Netflix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "option", 42);
    \u0275\u0275text(74, "Starbucks");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "button", 43);
    \u0275\u0275listener("click", function SelectionComponent_Template_button_click_75_listener() {
      return ctx.OnCheck();
    });
    \u0275\u0275text(76, "Check");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 11)(78, "div")(79, "div", 44)(80, "div", 45)(81, "table", 46)(82, "tbody")(83, "tr")(84, "th", 47);
    \u0275\u0275text(85, "Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "th", 47);
    \u0275\u0275text(87, "Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th", 47);
    \u0275\u0275text(89, "Save");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "tr")(91, "td");
    \u0275\u0275text(92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "td");
    \u0275\u0275text(94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "td");
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "tr")(98, "td", 47)(99, "b");
    \u0275\u0275text(100, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(101, "td");
    \u0275\u0275elementStart(102, "td", 47)(103, "b");
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()()()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275classMapInterpolate1("btn  btn-lg p-4 mt-2  user-b ", ctx.account, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("p-3 ", ctx.account, "");
    \u0275\u0275advance(5);
    \u0275\u0275classMapInterpolate1("", ctx.uncheck, " p-4  form-size form-bg border ");
    \u0275\u0275advance(61);
    \u0275\u0275classMapInterpolate1("", ctx.check, " form-size form-bg border ");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx.selectedcard);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.selectedItem);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.getRewardsPercentage(), " cashback");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.getRewardsPercentage());
  }
}, styles: ['\n\n.nav-height[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      var(--secondary-color) 100%);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  box-shadow: var(--shadow);\n}\n.grid-container[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-template-rows: auto auto;\n  margin-top: 20px;\n  width: 100%;\n}\n.grid-item[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 15px;\n  height: 100%;\n}\n.form-size[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 80%;\n  margin-left: 10%;\n  margin-top: 3%;\n}\n.previous[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  color: black;\n}\n.input-w[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-left: 44px;\n}\n.f1-pos[_ngcontent-%COMP%] {\n  margin-top: 12%;\n}\n.user-b[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  border-radius: 50px;\n}\n.user-i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.logout-b[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n#information[_ngcontent-%COMP%] {\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n#information[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n#information[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #5e0147;\n  color: white;\n}\n.button-format[_ngcontent-%COMP%] {\n  background-color: rgb(46, 2, 2);\n  color: #eeeded;\n  height: 40px;\n  width: 30%;\n  border-radius: 20px;\n  font-size: medium;\n  font-family:\n    Cambria,\n    Cochin,\n    Georgia,\n    Times,\n    "Times New Roman",\n    serif;\n  margin-top: 40px;\n  margin-left: 35%;\n}\n.tab[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n}\n.tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n  font-size: 17px;\n}\n.tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n.tab[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n.tabcontent[_ngcontent-%COMP%] {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n/*# sourceMappingURL=selection.component.css.map */'] });
var SelectionComponent = _SelectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectionComponent, { className: "SelectionComponent" });
})();

// src/app/browse-cards/browse-cards.component.ts
function BrowseCardsComponent_div_22_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Added \u2713");
    \u0275\u0275elementEnd();
  }
}
function BrowseCardsComponent_div_22_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Compare");
    \u0275\u0275elementEnd();
  }
}
function BrowseCardsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "img", 24);
    \u0275\u0275listener("error", function BrowseCardsComponent_div_22_Template_img_error_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onImageError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 25)(5, "div", 26)(6, "h3", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 28)(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 31)(14, "div", 32)(15, "span", 33);
    \u0275\u0275text(16, "APR:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 34);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 32)(20, "span", 33);
    \u0275\u0275text(21, "Annual Fee:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 34);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 32)(25, "span", 33);
    \u0275\u0275text(26, "Rewards:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 34);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 32)(30, "span", 33);
    \u0275\u0275text(31, "Sign-up Bonus:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 35);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 36)(35, "p");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 37)(38, "button", 38);
    \u0275\u0275listener("click", function BrowseCardsComponent_div_22_Template_button_click_38_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r9);
      const card_r5 = restoredCtx.$implicit;
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.viewDetails(card_r5));
    });
    \u0275\u0275elementStart(39, "i", 39);
    \u0275\u0275text(40, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 40);
    \u0275\u0275listener("click", function BrowseCardsComponent_div_22_Template_button_click_42_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r9);
      const card_r5 = restoredCtx.$implicit;
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.addToCompare(card_r5));
    });
    \u0275\u0275elementStart(43, "i", 39);
    \u0275\u0275text(44, "\u2696\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, BrowseCardsComponent_div_22_span_45_Template, 2, 0, "span", 41)(46, BrowseCardsComponent_div_22_span_46_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", card_r5.image, \u0275\u0275sanitizeUrl)("alt", card_r5.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(card_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r5.issuer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r5.category);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(card_r5.apr);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(card_r5.annualFee);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(card_r5.rewards);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(card_r5.signupBonus);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r5.description);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("added-to-compare", ctx_r0.isInComparison(card_r5));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isInComparison(card_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isInComparison(card_r5));
  }
}
function BrowseCardsComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "div", 47);
    \u0275\u0275text(4, "\u{1F4B3}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 48)(6, "div", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 51);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 52);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 53);
    \u0275\u0275listener("click", function BrowseCardsComponent_div_26_div_1_Template_button_click_14_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r16);
      const i_r14 = restoredCtx.index;
      const ctx_r15 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r15.removeFromComparison(i_r14));
    });
    \u0275\u0275text(15, " \u2715 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.issuer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.annualFee);
  }
}
function BrowseCardsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, BrowseCardsComponent_div_26_div_1_Template, 16, 4, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.comparisonItems);
  }
}
function BrowseCardsComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55);
    \u0275\u0275text(2, "\u2696\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No cards selected for comparison");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, 'Click "Compare" on any card to add it here');
    \u0275\u0275elementEnd()();
  }
}
function BrowseCardsComponent_div_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Need 2+ cards to compare");
    \u0275\u0275elementEnd();
  }
}
function BrowseCardsComponent_div_29_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Compare Cards");
    \u0275\u0275elementEnd();
  }
}
function BrowseCardsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "button", 57);
    \u0275\u0275listener("click", function BrowseCardsComponent_div_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.compare());
    });
    \u0275\u0275template(2, BrowseCardsComponent_div_29_span_2_Template, 2, 0, "span", 41)(3, BrowseCardsComponent_div_29_span_3_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 58);
    \u0275\u0275listener("click", function BrowseCardsComponent_div_29_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r21 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r21.clearComparison());
    });
    \u0275\u0275text(5, " Clear All ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.comparisonItems.length < 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.comparisonItems.length < 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.comparisonItems.length >= 2);
  }
}
var _BrowseCardsComponent = class _BrowseCardsComponent {
  constructor(router, activateRoute) {
    this.router = router;
    this.activateRoute = activateRoute;
    this.check = "hidden";
    this.uncheck = "f1-pos";
    this.selectedcard = "Zolve aspire";
    this.selectedItem = "Airbnb";
    this.loginID = "";
    this.account = "";
    this.cards = [
      {
        id: "1",
        name: "Chase Sapphire Preferred",
        issuer: "Chase",
        image: "assets/images/cards/chase-sapphire-preferred-real.jpg",
        apr: "21.49% - 28.49%",
        rewards: "2x points on travel & dining, 1x on all other purchases",
        annualFee: "$95",
        signupBonus: "60,000 points after spending $4,000 in first 3 months",
        category: "Travel",
        description: "Premium travel rewards card with excellent redemption value"
      },
      {
        id: "2",
        name: "Capital One Venture Rewards",
        issuer: "Capital One",
        image: "",
        apr: "19.99% - 29.99%",
        rewards: "2x miles on all purchases",
        annualFee: "$95",
        signupBonus: "75,000 miles after spending $4,000 in first 3 months",
        category: "Travel",
        description: "Flexible travel rewards with no blackout dates"
      },
      {
        id: "3",
        name: "American Express Gold Card",
        issuer: "American Express",
        image: "",
        apr: "19.24% - 28.24%",
        rewards: "4x points on dining & groceries, 3x on flights",
        annualFee: "$250",
        signupBonus: "60,000 points after spending $4,000 in first 6 months",
        category: "Dining",
        description: "Premium dining and grocery rewards card"
      },
      {
        id: "4",
        name: "Citi Double Cash",
        issuer: "Citi",
        image: "",
        apr: "19.24% - 29.24%",
        rewards: "2% cash back (1% when you buy, 1% when you pay)",
        annualFee: "$0",
        signupBonus: "$200 after spending $1,500 in first 6 months",
        category: "Cash Back",
        description: "Simple, straightforward cash back with no annual fee"
      },
      {
        id: "5",
        name: "Discover it Cash Back",
        issuer: "Discover",
        image: "",
        apr: "17.24% - 28.24%",
        rewards: "5% rotating categories, 1% on all other purchases",
        annualFee: "$0",
        signupBonus: "Cashback Match for first year",
        category: "Cash Back",
        description: "Rotating 5% categories with first-year bonus"
      },
      {
        id: "6",
        name: "Wells Fargo Active Cash",
        issuer: "Wells Fargo",
        image: "",
        apr: "20.24% - 29.99%",
        rewards: "2% unlimited cash back on all purchases",
        annualFee: "$0",
        signupBonus: "$200 after spending $1,000 in first 3 months",
        category: "Cash Back",
        description: "Unlimited 2% cash back with no annual fee"
      },
      {
        id: "7",
        name: "Chase Freedom Unlimited",
        issuer: "Chase",
        image: "",
        apr: "20.49% - 29.24%",
        rewards: "5% on travel through Chase, 3% on dining & drugstores, 1.5% on all other purchases",
        annualFee: "$0",
        signupBonus: "$200 after spending $500 in first 3 months",
        category: "Cash Back",
        description: "Flexible cash back with bonus categories"
      },
      {
        id: "8",
        name: "American Express Blue Cash Preferred",
        issuer: "American Express",
        image: "",
        apr: "19.24% - 29.24%",
        rewards: "6% on groceries, 6% on streaming, 3% on transit & gas",
        annualFee: "$95",
        signupBonus: "$350 after spending $3,000 in first 6 months",
        category: "Groceries",
        description: "High rewards on groceries and streaming services"
      },
      {
        id: "9",
        name: "Capital One SavorOne",
        issuer: "Capital One",
        image: "",
        apr: "19.99% - 29.99%",
        rewards: "3% on dining, entertainment & streaming, 5% on hotels & rental cars",
        annualFee: "$0",
        signupBonus: "$200 after spending $500 in first 3 months",
        category: "Dining",
        description: "No annual fee dining and entertainment rewards"
      },
      {
        id: "10",
        name: "Bank of America Customized Cash Rewards",
        issuer: "Bank of America",
        image: "",
        apr: "18.99% - 28.99%",
        rewards: "3% in your choice category, 2% at grocery stores & wholesale clubs",
        annualFee: "$0",
        signupBonus: "$200 after spending $1,000 in first 90 days",
        category: "Cash Back",
        description: "Customizable cash back categories"
      },
      {
        id: "11",
        name: "Chase Ink Business Preferred",
        issuer: "Chase",
        image: "",
        apr: "21.24% - 26.24%",
        rewards: "3x points on travel, shipping, internet, cable, phone, advertising",
        annualFee: "$95",
        signupBonus: "100,000 points after spending $8,000 in first 3 months",
        category: "Business",
        description: "Premium business rewards card"
      },
      {
        id: "12",
        name: "Discover it Miles",
        issuer: "Discover",
        image: "",
        apr: "17.24% - 28.24%",
        rewards: "1.5x miles on all purchases",
        annualFee: "$0",
        signupBonus: "Miles Match for first year",
        category: "Travel",
        description: "Simple travel rewards with first-year bonus"
      }
    ];
    this.comparisonItems = [];
    this.selectedCredit = "Zolve aspire";
    this.purchaseItem = "Airbnb";
  }
  ngOnInit() {
    this.activateRoute.queryParamMap.subscribe((params) => this.loginID = params.params.category);
    if (this.loginID == "guest") {
      this.account = "hidden";
    }
  }
  toBrowsCards() {
    this.router.navigate(["/browseCards"]);
  }
  logOut() {
    this.router.navigate(["/home"]);
  }
  compare() {
    if (this.comparisonItems.length >= 2) {
      this.router.navigate(["/compare"], {
        queryParams: {
          cards: JSON.stringify(this.comparisonItems.map((card) => card.id))
        }
      });
    }
  }
  onImageError(event) {
    event.target.style.display = "none";
    event.target.parentElement.innerHTML = `
      <div class="card-placeholder">
        <div class="placeholder-icon">\u{1F4B3}</div>
        <div class="placeholder-text">Card Image</div>
      </div>
    `;
  }
  viewDetails(card) {
    console.log("Viewing details for:", card.name);
    alert(`Viewing details for ${card.name}

APR: ${card.apr}
Annual Fee: ${card.annualFee}
Rewards: ${card.rewards}
Sign-up Bonus: ${card.signupBonus}`);
  }
  addToCompare(card) {
    if (!this.comparisonItems.find((item) => item.id === card.id)) {
      this.comparisonItems.push(card);
      console.log(`Added ${card.name} to comparison`);
    } else {
      console.log(`${card.name} is already in comparison`);
    }
  }
  removeFromComparison(index) {
    this.comparisonItems.splice(index, 1);
  }
  clearComparison() {
    this.comparisonItems = [];
  }
  isInComparison(card) {
    return this.comparisonItems.some((item) => item.id === card.id);
  }
  selectedCard(value) {
    this.selectedCredit = value;
  }
  OnCheck() {
    this.check = "";
    this.uncheck = "";
    this.selectedcard = this.selectedCredit;
    this.selectedItem = this.purchaseItem;
  }
  Onpurchase(value) {
    this.purchaseItem = value;
  }
};
_BrowseCardsComponent.\u0275fac = function BrowseCardsComponent_Factory(t) {
  return new (t || _BrowseCardsComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_BrowseCardsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrowseCardsComponent, selectors: [["app-browse-cards"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 11, consts: [[1, "page-bg"], [1, "navbar", "navbar-expand-sm", "fixed-top"], [1, "nav-height"], [1, "d-flex", "flex-row", "container-fluid"], [2, "width", "1400px"], ["href", "#", 1, "navbar-brand", "text-light", "mt-4"], [1, "navbar-brand", "text-light", "mt-4", 3, "click"], ["href", "#"], [1, "glyphicon", "glyphicon-user", "user-i"], ["type", "button", 1, "btn", "btn-outline-light", "p-3", "logout-b", "nav-button", 3, "click"], [1, "full-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "grid-container"], ["class", "grid-item", 4, "ngFor", "ngForOf"], [1, "side-panel", "fixed-right"], [1, "px-3", "mt-3"], ["class", "comparison-list", 4, "ngIf", "ngIfElse"], ["emptyState", ""], ["class", "sidebar-actions", 4, "ngIf"], [1, "grid-item"], [1, "card", "margin-top"], [1, "card-image"], [1, "card-img", 3, "src", "alt", "error"], [1, "card-content"], [1, "card-header"], [1, "card-title"], [1, "card-badges"], [1, "card-issuer"], [1, "card-category"], [1, "card-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "detail-value", "bonus"], [1, "card-description"], [1, "card-actions"], [1, "action-btn", "details-btn", 3, "click"], [1, "icon"], [1, "action-btn", "compare-btn", 3, "click"], [4, "ngIf"], [1, "comparison-list"], ["class", "comparison-item", 4, "ngFor", "ngForOf"], [1, "comparison-item"], [1, "item-info"], [1, "item-placeholder"], [1, "item-icon"], [1, "item-details"], [1, "item-name"], [1, "item-issuer"], [1, "item-category"], [1, "item-fee"], ["title", "Remove from comparison", 1, "remove-btn", 3, "click"], [1, "empty-state"], [1, "empty-icon"], [1, "sidebar-actions"], [1, "btn-format", 3, "disabled", "click"], [1, "clear-btn", 3, "click"]], template: function BrowseCardsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
    \u0275\u0275text(6, " WhichCard? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275listener("click", function BrowseCardsComponent_Template_p_click_7_listener() {
      return ctx.toBrowsCards();
    });
    \u0275\u0275text(8, " Browse Cards ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "a", 7);
    \u0275\u0275element(11, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "button", 9);
    \u0275\u0275listener("click", function BrowseCardsComponent_Template_button_click_13_listener() {
      return ctx.logOut();
    });
    \u0275\u0275text(14, "log out");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "h1", 12);
    \u0275\u0275text(18, "Browse Credit Cards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 13);
    \u0275\u0275text(20, "Compare and find the perfect credit card for your needs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 14);
    \u0275\u0275template(22, BrowseCardsComponent_div_22_Template, 47, 14, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 16)(24, "h3", 17);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, BrowseCardsComponent_div_26_Template, 2, 1, "div", 18)(27, BrowseCardsComponent_ng_template_27_Template, 7, 0, "ng-template", null, 19, \u0275\u0275templateRefExtractor)(29, BrowseCardsComponent_div_29_Template, 6, 3, "div", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const _r3 = \u0275\u0275reference(28);
    \u0275\u0275advance(10);
    \u0275\u0275classMapInterpolate1("btn  btn-lg p-4 mt-2  user-b ", ctx.account, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("p-3 ", ctx.account, "");
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx.cards);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("In Comparison (", ctx.comparisonItems.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.comparisonItems.length > 0)("ngIfElse", _r3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.comparisonItems.length > 0);
  }
}, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.nav-height[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      var(--secondary-color) 100%);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  box-shadow: var(--shadow);\n}\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1400px;\n  padding: 0 2rem;\n  flex: 1;\n}\n.full-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background-color: #f8f9fa;\n  flex-direction: column;\n}\n.page-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      var(--secondary-color) 100%);\n  color: var(--white);\n  margin-bottom: 2rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  opacity: 0.9;\n  margin: 0;\n}\n.grid-item[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 15px;\n  height: 100%;\n}\n.side-panel[_ngcontent-%COMP%] {\n  position: sticky;\n  background-color: #ffffff;\n  width: 300px;\n  margin-top: 2rem;\n  height: fit-content;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n}\n.form-size[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 80%;\n  margin-left: 10%;\n  margin-top: 3%;\n}\n.previous[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  color: black;\n}\n.input-w[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-left: 44px;\n}\n.f1-pos[_ngcontent-%COMP%] {\n  margin-top: 12%;\n}\n.user-b[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  border-radius: 50px;\n}\n.user-i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.logout-b[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n#information[_ngcontent-%COMP%] {\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n#information[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n#information[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #5e0147;\n  color: white;\n}\n.button-format[_ngcontent-%COMP%] {\n  background-color: rgb(46, 2, 2);\n  color: #ffffff;\n  height: 40px;\n  width: 100%;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  margin-top: 20px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.button-format[_ngcontent-%COMP%]:hover {\n  background-color: rgb(60, 8, 8);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);\n  max-width: 100%;\n  margin: auto;\n  text-align: center;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.price[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 22px;\n}\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  outline: 0;\n  padding: 12px 16px;\n  color: white;\n  background-color: #2c1810;\n  text-align: center;\n  cursor: pointer;\n  width: 48%;\n  font-size: 12px;\n  font-weight: 600;\n  margin: 5px;\n  border-radius: 6px;\n  transition: all 0.3s ease;\n}\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #8b4513;\n  transform: translateY(-1px);\n}\n.card-image[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: hidden;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      var(--gray-100) 0%,\n      var(--gray-200) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--transition-speed) ease;\n}\n.card[_ngcontent-%COMP%]:hover   .card-img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.card-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      var(--secondary-color) 100%);\n  color: var(--white);\n  text-align: center;\n}\n.placeholder-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 0.5rem;\n  opacity: 0.8;\n}\n.placeholder-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  opacity: 0.9;\n  line-height: 1.2;\n  max-width: 80%;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.card-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #2c1810;\n  margin-bottom: 0.5rem;\n  line-height: 1.3;\n}\n.card-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n.card-issuer[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #8b4513;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.card-category[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #d2691e;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.card-details[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #666;\n  font-size: 0.9rem;\n  flex: 0 0 40%;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2c1810;\n  font-size: 0.9rem;\n  text-align: right;\n  flex: 1;\n}\n.detail-value.bonus[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 600;\n}\n.card-description[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  line-height: 1.4;\n  margin: 0;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  border: none;\n  outline: 0;\n  padding: 12px 16px;\n  color: white;\n  text-align: center;\n  cursor: pointer;\n  flex: 1;\n  font-size: 12px;\n  font-weight: 600;\n  border-radius: 6px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.details-btn[_ngcontent-%COMP%] {\n  background-color: #2c1810;\n}\n.details-btn[_ngcontent-%COMP%]:hover {\n  background-color: #8b4513;\n  transform: translateY(-1px);\n}\n.compare-btn[_ngcontent-%COMP%] {\n  background-color: #d2691e;\n}\n.compare-btn[_ngcontent-%COMP%]:hover {\n  background-color: #b85a1a;\n  transform: translateY(-1px);\n}\n.compare-btn.added-to-compare[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.compare-btn.added-to-compare[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 40px;\n  background: #2c1810;\n  color: white;\n  margin: 8px;\n  font-size: 14px;\n  list-style-type: none;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n}\nli[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50%;\n  margin-left: 4%;\n}\n.btn-format[_ngcontent-%COMP%] {\n  border: none;\n  outline: 0;\n  padding: 12px 16px;\n  color: white;\n  background-color: #2c1810;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 16px 0;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.btn-format[_ngcontent-%COMP%]:hover {\n  background-color: #8b4513;\n  transform: translateY(-1px);\n}\n.side-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 0;\n  background-color: #2c1810;\n  color: white;\n  border-radius: 12px 12px 0 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.side-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 0;\n}\n.comparison-list[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.comparison-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  margin-bottom: 0.5rem;\n  border: 1px solid #e9ecef;\n}\n.item-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n}\n.item-placeholder[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 25px;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      var(--secondary-color) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n}\n.item-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.item-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  flex: 1;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c1810;\n  font-size: 0.9rem;\n  line-height: 1.2;\n}\n.item-issuer[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #666;\n  font-weight: 500;\n}\n.item-category[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #8b4513;\n  background: #f8f9fa;\n  padding: 0.2rem 0.5rem;\n  border-radius: 4px;\n  display: inline-block;\n  width: fit-content;\n}\n.item-fee[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #28a745;\n  font-weight: 600;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n  transform: scale(1.1);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n  color: #666;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n}\n.empty-state[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.sidebar-actions[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n@media (max-width: 768px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0 1rem;\n  }\n  .side-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 1rem;\n    position: relative;\n  }\n  .full-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px 0;\n  }\n}\n.form-size[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 80%;\n  margin-left: 10%;\n  margin-top: 3%;\n}\n.previous[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  color: black;\n}\n.input-w[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-left: 44px;\n}\n.f1-pos[_ngcontent-%COMP%] {\n  margin-top: 12%;\n}\n.user-b[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  border-radius: 50px;\n}\n.user-i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.logout-b[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n#information[_ngcontent-%COMP%] {\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n#information[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n#information[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #5e0147;\n  color: white;\n}\n.button-format[_ngcontent-%COMP%] {\n  background-color: rgb(46, 2, 2);\n  color: #eeeded;\n  height: 40px;\n  width: 30%;\n  border-radius: 20px;\n  font-size: medium;\n  font-family:\n    Cambria,\n    Cochin,\n    Georgia,\n    Times,\n    "Times New Roman",\n    serif;\n  margin-top: 40px;\n  margin-left: 35%;\n}\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 300px;\n  margin: auto;\n  text-align: center;\n  font-family: arial;\n}\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.price[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 22px;\n}\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  outline: 0;\n  padding: 12px;\n  color: white;\n  background-color: purple;\n  text-align: center;\n  cursor: pointer;\n  width: 46%;\n  font-size: 12px;\n  margin-left: 5px;\n}\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 30px;\n  background: rgb(174, 121, 174);\n  color: white;\n  margin: 5px;\n  font-size: medium;\n  list-style-type: none;\n}\nli[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50%;\n  margin-left: 4%;\n}\n.btn-format[_ngcontent-%COMP%] {\n  border: none;\n  outline: 0;\n  padding: 12px;\n  color: white;\n  background-color: brown;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 12px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=browse-cards.component.css.map */'] });
var BrowseCardsComponent = _BrowseCardsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrowseCardsComponent, { className: "BrowseCardsComponent" });
})();

// src/app/comparision/comparision.component.ts
var _ComparisionComponent = class _ComparisionComponent {
  constructor(router, activateRoute) {
    this.router = router;
    this.activateRoute = activateRoute;
    this.check = "hidden";
    this.uncheck = "f1-pos";
    this.selectedcard = "Zolve aspire";
    this.selectedItem = "Airbnb";
    this.loginID = "";
    this.account = "";
    this.selectedCredit = "Zolve aspire";
    this.purchaseItem = "Airbnb";
  }
  ngOnInit() {
    this.activateRoute.queryParamMap.subscribe((params) => this.loginID = params.params.category);
    if (this.loginID == "guest") {
      this.account = "hidden";
    }
  }
  logOut() {
    this.router.navigate(["/home"]);
  }
  toBrowsCards() {
    this.router.navigate(["/browseCards"]);
  }
  selectedCard(value) {
    this.selectedCredit = value;
  }
  OnCheck() {
    this.check = "";
    this.uncheck = "";
    this.selectedcard = this.selectedCredit;
    this.selectedItem = this.purchaseItem;
  }
  Onpurchase(value) {
    this.purchaseItem = value;
  }
};
_ComparisionComponent.\u0275fac = function ComparisionComponent_Factory(t) {
  return new (t || _ComparisionComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_ComparisionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComparisionComponent, selectors: [["app-comparision"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 86, vars: 6, consts: [[1, "page-bg"], [1, "navbar", "navbar-expand-sm", "fixed-top"], [1, "nav-height"], [1, "d-flex", "flex-row", "container-fluid"], [2, "width", "1400px"], ["href", "#", 1, "navbar-brand", "text-light", "mt-4"], [1, "navbar-brand", "text-light", "mt-4", 3, "click"], ["href", "#"], [1, "glyphicon", "glyphicon-user", "user-i"], ["type", "button", 1, "btn", "btn-outline-light", "p-3", "logout-b", "nav-button", 3, "click"], [1, "grid-container"], [1, "grid-item"], [1, "form-size", "form-bg", "border"], [1, ""], [1, "mb-3", "mt-3", "p-4", "form-group", "input-w"], ["id", "information"], [1, "p-3"], [1, "btn", "mb-3", "button-format", 3, "click"]], template: function ComparisionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
    \u0275\u0275text(6, " WhichCard? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275listener("click", function ComparisionComponent_Template_p_click_7_listener() {
      return ctx.toBrowsCards();
    });
    \u0275\u0275text(8, " Browse Cards ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "a", 7);
    \u0275\u0275element(11, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "button", 9);
    \u0275\u0275listener("click", function ComparisionComponent_Template_button_click_13_listener() {
      return ctx.logOut();
    });
    \u0275\u0275text(14, "log out");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "table", 15)(21, "tbody")(22, "tr");
    \u0275\u0275element(23, "th");
    \u0275\u0275elementStart(24, "th", 16);
    \u0275\u0275text(25, "Discover");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 16);
    \u0275\u0275text(27, "Freedom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 16);
    \u0275\u0275text(29, "BoFA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "tr")(31, "td");
    \u0275\u0275text(32, "Purchase APR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34, "0% Intro APR on Purchases for 15 months, then 20.49% \u2013 29.24% Variable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36, "0% Intro APR for 15 billing cycles for purchases, then 18.24% \u2013 28.24% Variable APR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275text(38, "0% intro APR for 21 months from account opening on purchases, then 18.24%, 24.74%, or 29.99% Variable APR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "tr")(40, "td");
    \u0275\u0275text(41, "Annual Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td");
    \u0275\u0275text(43, "$0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45, "$0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47, "$0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "tr")(49, "td");
    \u0275\u0275text(50, "Recommended Credit Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52, "Excellent/Good 670 - 850*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54, "Good/ Excellent 670 - 850*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275text(56, "Good \u2013 Excellent 670 \u2013 850*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "tr")(58, "td");
    \u0275\u0275text(59, "Cash rewards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "td");
    \u0275\u0275text(61, "1% \u2013 5%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63, "1.5% \u2013 6.5%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65, "1.5x Points");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "tr")(67, "td");
    \u0275\u0275text(68, "Welcome Bonus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td");
    \u0275\u0275text(70, "Earn an extra 1.5% on everything you buy (on up to $20,000 spent in the first year) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td");
    \u0275\u0275text(72, "25,000 online bonus points after you make at least $1,000 in purchases in the first 90 days of account opening");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "td");
    \u0275\u0275text(74, "N/A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "tr");
    \u0275\u0275element(76, "td");
    \u0275\u0275elementStart(77, "td")(78, "button", 17);
    \u0275\u0275listener("click", function ComparisionComponent_Template_button_click_78_listener() {
      return ctx.OnCheck();
    });
    \u0275\u0275text(79, "View Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "td")(81, "button", 17);
    \u0275\u0275listener("click", function ComparisionComponent_Template_button_click_81_listener() {
      return ctx.OnCheck();
    });
    \u0275\u0275text(82, "View Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "td")(84, "button", 17);
    \u0275\u0275listener("click", function ComparisionComponent_Template_button_click_84_listener() {
      return ctx.OnCheck();
    });
    \u0275\u0275text(85, "View Details");
    \u0275\u0275elementEnd()()()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275classMapInterpolate1("btn  btn-lg p-4 mt-2  user-b ", ctx.account, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("p-3 ", ctx.account, "");
  }
}, styles: ['\n\n.nav-height[_ngcontent-%COMP%] {\n  height: 62px;\n  width: 100%;\n  background-color: rgb(46, 2, 2);\n  position: sticky;\n}\n.grid-container[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-template-rows: auto auto;\n  margin-top: 20px;\n  width: 100%;\n}\n.grid-item[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 15px;\n  height: 100%;\n}\n.form-size[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 80%;\n  margin-left: 10%;\n  margin-top: 3%;\n}\n.previous[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  color: black;\n}\n.input-w[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-left: 44px;\n}\n.f1-pos[_ngcontent-%COMP%] {\n  margin-top: 12%;\n}\n.user-b[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  border-radius: 50px;\n}\n.user-i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.logout-b[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n#information[_ngcontent-%COMP%] {\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n#information[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n#information[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #5e0147;\n  color: white;\n}\n.button-format[_ngcontent-%COMP%] {\n  background-color: rgb(46, 2, 2);\n  color: #eeeded;\n  height: 40px;\n  width: 40%;\n  border-radius: 20px;\n  font-size: medium;\n  font-family:\n    Cambria,\n    Cochin,\n    Georgia,\n    Times,\n    "Times New Roman",\n    serif;\n  margin-top: 40px;\n  margin-left: 25%;\n}\n/*# sourceMappingURL=comparision.component.css.map */'] });
var ComparisionComponent = _ComparisionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComparisionComponent, { className: "ComparisionComponent" });
})();

// src/app/app-routing.module.ts
var routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "selection", component: SelectionComponent },
  { path: "home", component: HomeComponent },
  { path: "browseCards", component: BrowseCardsComponent },
  { path: "compare", component: ComparisionComponent }
];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
//# sourceMappingURL=chunk-UXTCL4C4.mjs.map
