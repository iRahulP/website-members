import { fetch } from './fetch';
import {
  getAddMemberRoleURL,
  getUserProfileSelf,
  getArchiveMemberURL,
} from './urls';

const moveToMember = (user) =>
  fetch(getAddMemberRoleURL(user), 'patch', null, null, null, {
    withCredentials: true,
  });

const getUserSelf = () =>
  fetch(getUserProfileSelf, 'get', null, null, null, {
    withCredentials: true,
  });

const archiveMember = (user) =>
  fetch(getArchiveMemberURL(user), 'patch', null, null, null, {
    withCredentials: true,
  });

export { archiveMember, moveToMember, getUserSelf };
