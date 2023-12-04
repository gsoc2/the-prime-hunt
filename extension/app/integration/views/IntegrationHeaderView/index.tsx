import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { AppHeader } from '../../../components/headers/AppHeader/AppHeader';
import { Spacer } from '../../../components/atoms/Spacer/Spacer';
import {
  useFormStore, useAppRouterStore, useIntegrationStore, useIntegrationsStore,
} from '../../../stores';
import { BigStaticButton } from '../../../components/buttons/BigStaticButton/BigStaticButton';
import './styles.scss';

export const IntegrationHeaderView: React.FC = observer(() => {
  const formStore = useFormStore();
  const integrationStore = useIntegrationStore();
  const integrationsStore = useIntegrationsStore();
  const routerStore = useAppRouterStore();
  const Message = integrationStore.getMessage();
  const nameRef = useRef(integrationStore.getIntegration()!.name);

  const getHeaderButton = () => {
    if (integrationStore.isNotDeletable()) {
      return null;
    }

    return (
      <BigStaticButton
        className="remove-integration"
        onClick={() => {
          integrationStore.remove();
          integrationsStore.save();
          routerStore.goToIntegrationsPage();
        }}
        disabled={formStore.validating}
      >
        Delete Integration
      </BigStaticButton>
    );
  };

  return (
    <div className="integration-header-view">
      <Spacer height={24} />
      <div>
        <AppHeader>{nameRef.current}</AppHeader>
        {getHeaderButton()}
      </div>
      {Message && <>
        <Spacer height={16} />
        <Message />
      </>}
    </div>
  );
});
