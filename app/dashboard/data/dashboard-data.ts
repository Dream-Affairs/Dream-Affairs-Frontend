import gift1 from '../(assets)/gift1.png';
import gift2 from '../(assets)/gift2.png';
import gift3 from '../(assets)/gift3.png';
import eventManagement from '../(assets)/calendar-add-nav.svg';
import invitation from '../(assets)/directbox-notif-nav.svg';
import mealManagement from '../(assets)/cake-nav.svg';
import budgeting from '../(assets)/wallet-money-nav.svg';
import inviteTeam from '../(assets)/people-nav.svg';
import settings from '../(assets)/people-nav.svg';
import logout from '../(assets)/logout-nav.svg';
import dashboardI from '../(assets)/category-navI.svg';
import dashboardII from '../(assets)/category-navII.svg';
import guestManagementI from '../(assets)/user-tick-navI.svg';
import guestManagementII from '../(assets)/user-tick-navII.svg';
import registryI from '../(assets)/gift-navI.svg';
import registryII from '../(assets)/gift-navII.svg';
import checklistI from '../(assets)/tick-square-navI.svg';
import checklistII from '../(assets)/tick-square-navII.svg';
import dashboard1 from '../(assets)/category1.svg';
import dashboard2 from '../(assets)/category2.svg';
import event1 from '../(assets)/calendar-add1.svg';
import event2 from '../(assets)/calendar-add2.svg';
import guest1 from '../(assets)/user-tick1.svg';
import guest2 from '../(assets)/user-tick2.svg';
import invite1 from '../(assets)/directbox-notif1.svg';
import invite2 from '../(assets)/directbox-notif2.svg';
import meal1 from '../(assets)/cake1.svg';
import meal2 from '../(assets)/cake2.svg';
import people1 from '../(assets)/people1.svg';
import people2 from '../(assets)/people2.svg';
import notification1 from '../(assets)/notification1.svg';
import notification2 from '../(assets)/notification2.svg';
import registry1 from '../(assets)/gift1.svg';
import registry2 from '../(assets)/gift2.svg';
import budgeting1 from '../(assets)/wallet-money1.svg';
import budgeting2 from '../(assets)/wallet-money2.svg';
import checklist1 from '../(assets)/tick-square1.svg';
import checklist2 from '../(assets)/tick-square2.svg';

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

export const hamburgerMenu: { id: number; icon: string; route: string; name: string }[] = [
  { id: 1, icon: eventManagement, route: '/dashboard/event-management', name: 'Event Management' },
  { id: 2, icon: invitation, route: '/dashboard/invitation', name: 'Invitation' },
  { id: 3, icon: mealManagement, route: '/dashboard/meal-management', name: 'Meal Management' },
  { id: 4, icon: budgeting, route: '/dashboard/budgeting', name: 'Budgeting' },
  { id: 5, icon: inviteTeam, route: '/dashboard/invite-team', name: 'Invite Team' },
  { id: 6, icon: settings, route: '/dashboard/settings', name: 'Settings' },
  { id: 7, icon: logout, route: '/dashboard/logout', name: 'Logout' },
];

export const bottomNavMenu: { id: number; iconActive: string; iconInactive: string; route: string; name: string }[] = [
  { id: 1, iconActive: dashboardI, iconInactive: dashboardII, route: '/dashboard', name: 'Dashboard' },
  {
    id: 2,
    iconActive: guestManagementI,
    iconInactive: guestManagementII,
    route: '/dashboard/guest-management',
    name: 'Guest Management',
  },
  { id: 3, iconActive: registryI, iconInactive: registryII, route: '/dashboard/registry', name: 'Registry' },
  { id: 4, iconActive: checklistI, iconInactive: checklistII, route: '/dashboard/checklist', name: 'Checklist' },
];

export const sidebarMenu: any[] = [
  {
    id: 1,
    iconActive: dashboard1,
    iconInactive: dashboard2,
    name: 'Dashboard',
    route: '/dashboard',
  },
  {
    id: 2,
    iconActive: event1,
    iconInactive: event2,
    name: 'Event Management',
    route: '/dashboard/event-management',
  },
  {
    id: 3,
    iconActive: guest1,
    iconInactive: guest2,
    name: 'Guest Management',
    route: '/dashboard/guest-management',
  },
  {
    id: 4,
    iconActive: invite1,
    iconInactive: invite2,
    name: 'Invitation',
    route: '/dashboard/invitation',
  },
  {
    id: 5,
    iconActive: meal1,
    iconInactive: meal2,
    name: 'Meal Management',
    route: '/dashboard/meal-management',
  },
  {
    id: 6,
    iconActive: people1,
    iconInactive: people2,
    name: 'Invite Team',
    route: '/dashboard/invite-team',
  },
  {
    id: 7,
    iconActive: notification1,
    iconInactive: notification2,
    name: 'Notification',
    route: '/dashboard/notification',
  },
  {
    id: 8,
    iconActive: registry1,
    iconInactive: registry2,
    name: 'Registry',
    route: '/dashboard/registry',
  },
  {
    id: 9,
    iconActive: budgeting1,
    iconInactive: budgeting2,
    name: 'Budgeting',
    route: '/dashboard/budgeting',
  },
  {
    id: 10,
    iconActive: checklist1,
    iconInactive: checklist2,
    name: 'Checklist',
    route: '/dashboard/checklist',
  },
];
