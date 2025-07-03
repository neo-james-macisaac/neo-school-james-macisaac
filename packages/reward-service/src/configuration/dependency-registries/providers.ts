// ******** THIS FILE IS GENERATED, MANUAL CHANGES WILL BE OVERWRITTEN ******** //

import { DependencyRegistry } from '@neofinancial/neo-framework';

import { RewardAccountProviderAdapter } from '../../domain/providers/reward-account/reward-account.provider.adapter';
import { RewardPlanProviderAdapter } from '../../domain/providers/reward-plan/reward-plan.provider.adapter';

function registerProviders(this: DependencyRegistry): void {
  RewardAccountProviderAdapter;
  RewardPlanProviderAdapter;
}

export { registerProviders };
