import content from './generated/people';
export const principalInvestigator = content.principalInvestigator;
export const memberGroups = content.groups;
const active = memberGroups.slice(0, 3).flatMap(group => group.members);
export const members = content.activeOrder.map(id => active.find(member => member.id === id));
export const memberTwo = memberGroups.find(group => group.id === 'masters-md-bachelors').members;
export const alumni = memberGroups.find(group => group.id === 'alumni').members;
export const blockTwo = [principalInvestigator];
