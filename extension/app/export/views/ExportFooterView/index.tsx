import React from 'react';
import { BigStaticButton } from '../../../components/buttons/BigStaticButton/BigStaticButton';
import { CheckIcon } from '../../../components/atoms/icons/CheckIcon/CheckIcon';
import {
  useAppMessageStore, useAppRouterStore, useFormStore, usePlatformStore,
} from '../../../stores';
import { MessageToBackground } from '../../../../background/types/types-background-messages';
import { IntegrationWorkPayload } from '../../../../common/types/types-common-payloads';
import { observer } from 'mobx-react-lite';
import './styles.scss';
import { SuccessOpenCTIExportMessage } from '../../../resources/messages/SuccessOpenCTIExportMessage';

export const ExportFooterView: React.FC = observer(() => {
  const routerStore = useAppRouterStore();
  const messageStore = useAppMessageStore();
  const formStore = useFormStore();
  const platformStore = usePlatformStore();

  return (
    <div
      className="export-footer-view"
    >
      <BigStaticButton
        disabled={formStore.validating || messageStore.inProgress}
        onClick={() => {
          routerStore.goToResourcesPage();
        }}
      >
        Cancel
      </BigStaticButton>
      <BigStaticButton
        className="success-btn"
        icon={<CheckIcon />}
        disabled={formStore.validating || messageStore.inProgress}
        onClick={() => {
          messageStore.error.error = null;
          formStore.validate(['blur', 'finish'])
            .then((isSuccess) => {
              if (!isSuccess) {
                return null;
              }
              const formData = formStore.getFormData();
              return messageStore.sendMessageWithCallback({
                type: MessageToBackground.BGIntegrationWork,
                payload: {
                  modelType: 'openCTI',
                  work: 'export-data',
                  data: formData,
                } as IntegrationWorkPayload,
              });
            })
            .then((result) => {
              if (!result || result.error) {
                return;
              }
              platformStore.setMessage(SuccessOpenCTIExportMessage);
              routerStore.goToResourcesPage();
            });
        }}
      >
        Send
      </BigStaticButton>
    </div>
  );
});
