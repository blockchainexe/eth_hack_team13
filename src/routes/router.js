import Landing from '~/pages/Landing';
import Avatar from '~/pages/Avatar';
import FriendsList from '~/pages/FriendsList';
export const routes = [
  { path: '/', component: Landing },
  { path: '/friends-list', component: FriendsList },
  { path: '/avatar', component: Avatar }
];
