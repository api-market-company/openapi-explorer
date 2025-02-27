import { html } from 'lit';

// Templates
import focusedEndpointTemplate from './focused-endpoint-template.js';
import overviewTemplate from './overview-template.js';
import endpointTemplate from './endpoint-template.js';
import serverTemplate from './server-template.js';
import securitySchemeTemplate from './security-scheme-template.js';
import advancedSearchTemplate from './advance-search-template.js';
import SetTheme from '../utils/theme.js';
import ColorUtils from '../utils/color-utils.js';

export default function mainBodyTemplate() {
  const newTheme = {
    bg1: ColorUtils.isValidHexColor(this.bgColor) ? this.bgColor : '',
    bg2: ColorUtils.isValidHexColor(this.bgHeaderColor) ? this.bgHeaderColor : '',
    fg1: ColorUtils.isValidHexColor(this.textColor) ? this.textColor : '',
    primaryColor: ColorUtils.isValidHexColor(this.primaryColor) ? this.primaryColor : '#3E6077',
    secondaryColor: ColorUtils.isValidHexColor(this.secondaryColor) ? this.secondaryColor : '#FBAF0B',
    headerColor: ColorUtils.isValidHexColor(this.headerColor) ? this.headerColor : '',
    navBgColor: ColorUtils.isValidHexColor(this.navBgColor) ? this.navBgColor : '',
    navTextColor: ColorUtils.isValidHexColor(this.navTextColor) ? this.navTextColor : '',
    navHoverBgColor: ColorUtils.isValidHexColor(this.navHoverBgColor) ? this.navHoverBgColor : '',
    navHoverTextColor: ColorUtils.isValidHexColor(this.navHoverTextColor) ? this.navHoverTextColor : '',
  };

  /* eslint-disable indent */
  return html`
    ${SetTheme.call(this, newTheme)}

    <!-- Advanced Search -->
    ${this.hideSearch ? '' : advancedSearchTemplate.call(this)}

    <div id='the-main-body' class="body">

      <!-- Main Content -->
      ${this.loading === true
        ? html`<slot name="loader"><div class="loader"></div></slot>`
        : html`
        <main class="main-content regular-font" part="section-main-content">
          <div id="operations-root" class="main-content-inner">
            ${this.loadingFailedError
              ? html`
                <div style="text-align: center;margin: 16px;">
                  Unable to load the Spec${this.specUrl ? ': ' : ''} <strong>${this.specUrl}</strong>
                  <br><br>
                  <div>
                    ${this.loadingFailedError}
                  </div>
                </div>`
              : html`
                <div class="operations-root" @click="${(e) => { this.handleHref(e); }}">
                  ${focusedEndpointTemplate.call(this)}
                </div>`
            }
          </div>
        </main>`
      }
    </div>
  `;
}
/* eslint-enable indent */
