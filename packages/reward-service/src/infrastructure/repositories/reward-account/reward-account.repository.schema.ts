import { Document, Schema } from '@neofinancial/neo-framework';

import { RewardAccount } from '../../../domain/entities/reward-account/reward-account';

export interface RewardAccountDocument extends Document, Omit<RewardAccount, 'id'> {
  _userId: string;
  _rewardPlanId: string;
}

const getRewardAccountSchema = (): Schema => {
  const schema = new Schema({
    id: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    userId: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    rewardPlanId: {
      type: Schema.Types.String,
      required: true,
      unique: false,
    },
  });

  return schema;
};

export { getRewardAccountSchema };
