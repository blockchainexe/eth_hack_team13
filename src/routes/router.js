import Avatar from '~/pages/Avatar';
import FriendsList from '~/pages/FriendsList';
import Landing from '~/pages/Landing';
import RegisterAccount from '~/pages/RegisterAccount';
import Test from '~/components/App';

export const routes = [
  { path: '/', component: Landing },
  { path: '/friends-list', component: FriendsList },
  { path: '/avatar', component: Avatar },
  { path: '/register', component: RegisterAccount },
  { path: '/test', component: Test }
];
