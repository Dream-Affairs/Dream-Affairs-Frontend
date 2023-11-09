import gift1 from '../(assets)/gift1.png';
import gift2 from '../(assets)/gift2.png';
import gift3 from '../(assets)/gift3.png';

export const checkList: { id: number; taskName: string; taskStatus: string }[] = [
  { id: 1, taskName: 'Choose a wedding date and venue', taskStatus: 'Completed' },
  { id: 2, taskName: 'Create a wedding budget', taskStatus: 'Completed' },
  { id: 3, taskName: 'Send out wedding Invitations', taskStatus: 'Completed' },
  { id: 4, taskName: 'Obtain your marriage license', taskStatus: 'Todo' },
  { id: 5, taskName: 'Order wedding cake and wedding favors', taskStatus: 'Overdue' },
];

export const giftList: { id: number; giftPic: any; giftName: string; giftPrice: number }[] = [
  { id: 1, giftPic: gift1, giftName: 'Smart TV', giftPrice: 100 },
  { id: 2, giftPic: gift2, giftName: 'Couch', giftPrice: 150 },
  { id: 3, giftPic: gift3, giftName: 'Set of Cooking Pot', giftPrice: 50 },
  { id: 4, giftPic: gift3, giftName: 'Smart TV', giftPrice: 50 },
];
