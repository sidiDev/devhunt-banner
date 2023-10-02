(function () {
  window.onload = () => {
    var scriptTag = document.querySelector("script[data-url]");
    var customUrl =
      (scriptTag && scriptTag.getAttribute("data-url")) ||
      "https://devhunt.org/";

    var divElement = document.createElement("div");

    divElement.innerHTML = `
    <div class="dh-banner">
    <div class="banner-container">
      <div class="content">
        <p>We are live on DevHunt: tool of the week contest</p>
      </div>
      <a href="${customUrl}" target="_blank" class="btn">
        check it out
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
  

    <style>
    *,
    ::before,
    ::after {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgb(59 130 246 / 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
    }
    
    ::backdrop {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgb(59 130 246 / 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
    }
    
    .dh-banner {
      border-bottom-width: 1px;
      --tw-border-opacity: 1;
      border-color: rgb(30 41 59 / var(--tw-border-opacity));
      --tw-bg-opacity: 1;
      background-color: rgb(15 23 42 / var(--tw-bg-opacity));
      --tw-text-opacity: 1;
      color: rgb(241 245 249 / var(--tw-text-opacity));
    }
    
    .dh-banner .banner-container {
      margin-left: auto;
      margin-right: auto;
      display: flex;
      max-width: 1280px;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    
    @media (min-width: 768px) {
      .dh-banner .banner-container {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
    
    .dh-banner .banner-container .content {
      display: flex;
    }
    
    @media (min-width: 640px) {
      .dh-banner .banner-container .content {
        align-items: center;
      }
    }
    
    .dh-banner .banner-container .btn {
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      --tw-text-opacity: 1;
      color: rgb(248 250 252 / var(--tw-text-opacity));
    }
    
    .dh-banner .banner-container .btn:hover {
      -webkit-text-decoration-line: underline;
      text-decoration-line: underline;
    }
    
    .dh-banner .banner-container .btn svg {
      height: 1.25rem;
      width: 1.25rem;
      transition-duration: 200ms;
    }
    
    .dh-banner .banner-container .btn:hover svg {
      transform: translateX(5px);
    }
    </style>
  </div>
`;
    document.body.prepend(divElement);
  };
})();
