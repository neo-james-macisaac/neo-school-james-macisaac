import { BaseRepository, Repository } from '@neofinancial/neo-framework';

import { RewardAccount } from '../../../domain/entities/reward-account/reward-account';
import {
  CreateRewardAccount,
  RewardAccountRepositoryPort,
  UpdateRewardAccount,
} from '../../../domain/repositories/reward-account.repository.port';
import { getRewardAccountSchema, RewardAccountDocument } from './reward-account.repository.schema';

@Repository('RewardAccount', getRewardAccountSchema())
class RewardAccountRepositoryAdapter
  extends BaseRepository<RewardAccountDocument, RewardAccount, CreateRewardAccount, UpdateRewardAccount>
  implements RewardAccountRepositoryPort
{
  protected toObject(document: RewardAccountDocument): RewardAccount {
    return {
      id: document._id.toHexString(),
      userId: document.userId.toHexString(),
      rewardPlanId: document.rewardPlanId.toHexString(),
    };
  }
}

export { RewardAccountRepositoryAdapter };
