(function () {
  window.onload = () => {
    var scriptTag = document.querySelector("script[data-url]");
    var customUrl =
      (scriptTag && scriptTag.getAttribute("data-url")) ||
      "https://devhunt.org/";

    var divElement = document.createElement("div");
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://cdn.tailwindcss.com";
    scriptElement.defer;
    document.body.appendChild(scriptElement);

    divElement.innerHTML = `
    <div class="bg-slate-900">
    <div
      class="max-w-screen-xl mx-auto px-4 py-2 items-center gap-x-4 justify-center text-white text-sm sm-flex md-gap-x-12 lg-gap-x-32 md-px-8"
    >
      <div class="flex gap-x-3 sm-items-center">
        <svg
          width="38"
          height="35"
          viewBox="0 0 38 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="36"
            height="33"
            rx="5"
            fill="#F97316"
            stroke="#F97316"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.9251 7.375C22.9779 7.3805 18.7759 10.1016 15.777 12.875H10.0625L9.375 13.5625V17.6875L9.57712 18.1742L10.9397 19.5369L10.9411 19.5492L16.4411 25.0492L16.4535 25.0506L17.8271 26.4242L18.3125 26.625H22.4375L23.125 25.9375V20.2257C25.9011 17.231 28.6195 13.0304 28.614 8.0625L27.9251 7.375ZM10.75 14.25H14.3841C13.2742 15.4153 12.2516 16.6607 11.3247 17.9762L10.75 17.4042V14.25ZM18.5875 25.25L18.01 24.6684C19.3282 23.7467 20.576 22.7282 21.7431 21.6214V25.25H18.5875ZM17.0159 23.677L12.312 18.9759C13.676 17 19.5211 9.23813 27.2197 8.772C26.7715 16.4885 18.9876 22.3199 17.0159 23.677ZM13.5 26.625V25.25H10.75V22.5H9.375V26.625H13.5ZM22.7785 16.0829C23.0823 15.6278 23.1928 15.0706 23.0858 14.534C22.9788 13.9974 22.663 13.5253 22.2079 13.2215C21.7528 12.9177 21.1956 12.8072 20.659 12.9142C20.1224 13.0212 19.6503 13.337 19.3465 13.7921C19.0427 14.2471 18.9321 14.804 19.039 15.3405C19.1459 15.877 19.4615 16.349 19.9164 16.6528C20.3714 16.9566 20.9283 17.0672 21.4648 16.9603C22.0013 16.8534 22.4734 16.5378 22.7771 16.0829H22.7785Z"
            fill="white"
          />
        </svg>
        <p class="font-medium">
          We are live on DevHunt: tool of the week contest
        </p>
      </div>
      <a
        href="${customUrl}"
        target="_blank"
        class="flex-none inline-flex items-center justify-center w-full mt-3 p-2 text-center text-indigo-50 font-medium bg-orange-500 duration-150 hover:bg-orange-600 rounded-lg sm-w-auto sm-mt-0"
      >
        check it out
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
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
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}

::before,
::after {
  --tw-content: '';
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
}

body {
  margin: 0;
  line-height: inherit;
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button,
select {
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

dialog {
  padding: 0;
}

textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button,
[role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

img,
video {
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none;
}

.mx-auto{
  margin-left: auto;
  margin-right: auto
}

.mt-3{
  margin-top: 0.75rem
}

.flex{
  display: flex
}

.inline-flex{
  display: inline-flex
}

.h-5{
  height: 1.25rem
}

.w-5{
  width: 1.25rem
}

.w-full{
  width: 100%
}

.max-w-screen-xl{
  max-width: 1280px
}

.flex-none{
  flex: none
}

.items-center{
  align-items: center
}

.justify-center{
  justify-content: center
}

.gap-x-3{
  column-gap: 0.75rem
}

.gap-x-4{
  column-gap: 1rem
}

.rounded-lg{
  border-radius: 0.5rem
}

.bg-orange-500{
  --tw-bg-opacity: 1;
  background-color: rgb(249 115 22 / var(--tw-bg-opacity))
}

.bg-slate-900{
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity))
}

.p-2{
  padding: 0.5rem
}

.px-4{
  padding-left: 1rem;
  padding-right: 1rem
}

.py-2{
  padding-top: 0.5rem;
  padding-bottom: 0.5rem
}

.text-center{
  text-align: center
}

.text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem
}

.font-medium{
  font-weight: 500
}

.text-indigo-50{
  --tw-text-opacity: 1;
  color: rgb(238 242 255 / var(--tw-text-opacity))
}

.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity))
}

.duration-150{
  transition-duration: 150ms
}

.hover\:bg-orange-600:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(234 88 12 / var(--tw-bg-opacity))
}

@media (min-width: 640px){
  .sm-mt-0{
    margin-top: 0px
  }

  .sm-flex{
    display: flex
  }

  .sm-w-auto{
    width: auto
  }

  .sm-items-center{
    align-items: center
  }

  .sm-text-sm{
    font-size: 0.875rem;
    line-height: 1.25rem
  }
}

@media (min-width: 768px){
  .md-gap-x-12{
    column-gap: 3rem
  }

  .md-px-8{
    padding-left: 2rem;
    padding-right: 2rem
  }
}

@media (min-width: 1024px){
  .lg-gap-x-32 {
    column-gap: 8rem
  }
}

  </style>
</div>`;
    document.body.prepend(divElement);
  };
})();
