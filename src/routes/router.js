import Avatar from '~/pages/Avatar';
import Chat from '~/pages/Chat';
import FriendsList from '~/pages/FriendsList';
import Landing from '~/pages/Landing';
import RegisterAccount from '~/pages/RegisterAccount';
import Search from '~/pages/Search';
import Test from '~/components/App';

export const routes = [
  { path: '/', component: Landing },
  { path: '/friends-list', component: FriendsList },
  { path: '/avatar', component: Avatar },
  { path: '/register', component: RegisterAccount },
  { path: '/chat', component: Chat },
  { path: '/test', component: Test },
  { path: '/search', component: Search }
];
