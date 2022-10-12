import { Register } from '../../../common/Register';
import { PlatformID } from '../../common/types/types-common';
import { MicrosoftSentinelPlatform } from './microsoft-sentinel/MicrosoftSentinelPlatform';
import { BackgroundPlatform } from '../types/types-background-common';
import { backgroundPlatformIDFromENV } from '../../common/envs';
import { MicrosoftDefenderPlatform } from './microsoft-defender-for-endpoint/MicrosoftDefenderPlatform';

export class PlatformResolver {
  private platforms;

  private getPlatform(platformID: PlatformID): BackgroundPlatform | undefined {
    if (!this.platforms.has(platformID)) {
      switch (platformID) {
        case PlatformID.MicrosoftSentinel: {
          this.platforms.set<PlatformID, BackgroundPlatform>(platformID, new MicrosoftSentinelPlatform());
          break;
        }

        case PlatformID.MicrosoftDefender: {
          this.platforms.set<PlatformID, BackgroundPlatform>(platformID, new MicrosoftDefenderPlatform());
        }
      }
    }

    return this.platforms.get(platformID);
  }

  constructor() {
    this.platforms = new Register();
  }

  resolve(platformID: PlatformID): BackgroundPlatform | undefined {
    return backgroundPlatformIDFromENV
      ? this.getPlatform(backgroundPlatformIDFromENV)
      : this.getPlatform(platformID);
  }
}

export const platformResolver = new PlatformResolver();