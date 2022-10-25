import { MessageToBackground } from '../../../background/types/types-background-messages';
import { sendMessageFromContent } from '../../services/content-services';
import { PlatformID } from '../../../common/types/types-common';
import { ContentPlatform, ListenerType, MessageListener } from '../../types/types-content-common';
import { addListener } from '../../services/content-services-listeners';
import { MessageToContent } from '../../types/types-content-messages';
import {
  getElementsUnderCursor,
  getWebAccessibleUrl,
  mountHTMLElement,
  waitHTMLElement,
} from '../../../common/common-helpers';
import { MessageToInline } from '../../../inline/types/types-inline-messages';
import { getDebugPrefix } from '../../../common/loggers/loggers-debug';
import { isMessageMatched } from '../../../common/common-listeners';
import { contentPlatformIDFromENV } from '../../../common/envs';
import { microsoftSentinelInline } from '../../../manifest/public-resources';
import { AddFieldToWatchPayload } from '../../../common/types/types-common-payloads';
import { normalizeFieldValue } from './microsoft-sentinel-helpers';
import { uuid } from '../../../../common/helpers';

const loggers = require('../../../common/loggers').loggers
  .addPrefix(getDebugPrefix('content'))
  .addPrefix(PlatformID.MicrosoftSentinel);

export class MicrosoftSentinelPlatform implements ContentPlatform {
  static readonly id = PlatformID.MicrosoftSentinel;

  static readonly extensionDefaultPosition = {
    top: 0,
    left: 0,
    width: 500,
    height: 400,
  };

  extensionDefaultPosition = MicrosoftSentinelPlatform.extensionDefaultPosition;

  getID(): PlatformID {
    return MicrosoftSentinelPlatform.id;
  }

  private static connectMouseDown() {
    document.addEventListener('mousedown', (e) => {
      if (!e.altKey) {
        return;
      }
      const elements = getElementsUnderCursor(e, elem => {
        return elem.classList.contains('ag-header-cell-text')
          || elem.classList.contains('ag-group-value');
      });
      const text = elements.length > 1 ? null : elements[0]?.innerText?.trim();
      if (!text) {
        return;
      }
      sendMessageFromContent<AddFieldToWatchPayload>({
        id: `content-add-field--${uuid()}`,
        type: MessageToBackground.BGAddFieldToWatch,
        payload: {
          fieldName: normalizeFieldValue(text),
        },
      });
    });

    loggers.debug().log('mousedown event was set successfully');
  }

  private static connectInlineListener() {
    mountHTMLElement('script', document.body, {
      attributes: {
        src: getWebAccessibleUrl(microsoftSentinelInline),
        type: 'text/javascript',
        'data-type': 'inline-listener',
      },
    });
  }

  private static setListeners() {
    (addListener as MessageListener)(
      ListenerType.OnMessage,
      async (message) => {
        if (
          !contentPlatformIDFromENV
          && !document.querySelector('la-main-view')
        ) {
          return;
        }

        const query = `script[src$="${microsoftSentinelInline}"]`;

        if (!document.querySelector(query)) {
          MicrosoftSentinelPlatform.connectInlineListener();
          MicrosoftSentinelPlatform.connectMouseDown();
          await waitHTMLElement(query);
        }

        if (isMessageMatched(
          () => MessageToContent.CSModifyQuery === message.type,
          message,
        )) {
          sendMessageFromContent({
            ...message,
            id: `${message.id}--content-modify-query`,
            type: MessageToInline.ISModifyQuery,
          }, false);
        }
      },
    );

    loggers.debug().log('listeners were set');
  }

  connect() {
    MicrosoftSentinelPlatform.setListeners();

    loggers.debug().log('connected');
  }
}