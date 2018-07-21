import Test from '~/components/App';
import Landing from '~/pages/Landing';
import Avatar from '~/pages/Avatar';
import FriendsList from '~/pages/FriendsList';
import Search from '~/pages/Search';
export const routes = [
  { path: '/', component: Landing },
  { path: '/friends-list', component: FriendsList },
  { path: '/avatar', component: Avatar },
  { path: '/test', component: Test},
  { path: '/search', component: Search }
];
