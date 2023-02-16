import { ContentPlatform, Position } from '../types/types-content-common';
import { ExtensionMessage, ModifyQueryType, PlatformID, PlatformName } from '../../common/types/types-common';
import { NormalizedParsedResources } from '../../app/resources/resources-types';
import { WatchingResources } from '../../background/types/types-background-common';
import { isMessageMatched } from '../../common/common-listeners';
import { MessageToContent } from '../types/types-content-messages';
import { sendMessageFromContent } from '../services/content-services';
import { MessageToInline } from '../../inline/types/types-inline-messages';
import { MessageToBackground } from '../../background/types/types-background-messages';
import { SetDebugModePayload } from '../../common/types/types-common-payloads';

export abstract class AbstractContentPlatform implements ContentPlatform {
  abstract buildQueryParts(
    type: ModifyQueryType,
    resources: NormalizedParsedResources,
    withPrefix?: boolean,
  ): string;

  abstract connect(): void;

  abstract defaultWatchers: WatchingResources;

  abstract extensionDefaultPosition: Position;

  abstract getID(): PlatformID;

  abstract getName(): PlatformName;

  protected static processInlineListeners(message: ExtensionMessage) {
    if (isMessageMatched(
      () => MessageToContent.CSModifyQuery === message.type,
      message,
    )) {
      sendMessageFromContent({
        ...message,
        id: `${message.id}--${message.type}`,
        type: MessageToInline.ISModifyQuery,
      }, false);
    }

    if (isMessageMatched(
      () => MessageToContent.CSSetQuery === message.type,
      message,
    )) {
      sendMessageFromContent({
        ...message,
        id: `${message.id}--${message.type}`,
        type: MessageToInline.ISSetQuery,
      }, false);
    }

    if (isMessageMatched(
      () => MessageToContent.CSGetQuery === message.type,
      message,
    )) {
      sendMessageFromContent({
        ...message,
        id: `${message.id}--${message.type}`,
        type: MessageToInline.ISGetQuery,
      }, false);
    }

    if (isMessageMatched(
      () => MessageToContent.CSSendMessageOutside === message.type,
      message,
    )) {
      sendMessageFromContent({
        ...message,
        id: `${message.id}--${message.type}`,
        type: MessageToBackground.BGSendMessageOutside,
      });
    }

    if (isMessageMatched(
      () => MessageToContent.CSSetDebugMode === message.type,
      message,
    )) {
      const { debugMode } = message.payload as SetDebugModePayload;
      require('../../common/loggers').setDebugMode(debugMode);
      sendMessageFromContent({
        ...message,
        id: `${message.id}--${message.type}`,
        type: MessageToInline.ISSetDebugMode,
      }, false);
    }
  }
}