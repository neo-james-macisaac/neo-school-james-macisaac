import { RelativeCursorInput, RelativeCursorResultList } from '@neofinancial/neo-framework';

import { RewardAccount } from '../../entities/reward-account/reward-account';

export interface RewardAccountProviderPort {
  getRewardAccountsByRelativeCursorQuery: (
    input: RelativeCursorInput,
  ) => Promise<RelativeCursorResultList<RewardAccount>>;
}
