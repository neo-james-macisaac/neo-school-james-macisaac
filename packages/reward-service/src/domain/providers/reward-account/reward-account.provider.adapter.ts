import { Provider, RelativeCursorInput, RelativeCursorResultList } from '@neofinancial/neo-framework';

import { RepositoryTokens } from '../../../lib/repository-tokens';
import { inject } from '../../../lib/strict-inject';

import { RewardAccount } from '../../entities/reward-account/reward-account';
import { RewardAccountRepositoryPort } from '../../repositories/reward-account.repository.port';
import { RewardAccountProviderPort } from './reward-account.provider.port';

@Provider
class RewardAccountProviderAdapter implements RewardAccountProviderPort {
  constructor(
    @inject(RepositoryTokens.RewardAccountRepository) private rewardAccountRepository: RewardAccountRepositoryPort,
  ) {}

  public async getRewardAccountsByRelativeCursorQuery(
    input: RelativeCursorInput,
  ): Promise<RelativeCursorResultList<RewardAccount>> {
    const result = await this.rewardAccountRepository.findByRelativeCursorQuery(input);

    return result;
  }
}

export { RewardAccountProviderAdapter };
