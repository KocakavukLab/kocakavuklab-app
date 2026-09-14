import groups from './generated/network';
export const networkGroups = groups;
export const networking = groups.find(group => group.id === 'network').items.map(({ id, title, logo, url }) => ({ nid: id, ntitle: title, nlogo: logo, url }));
export const funders = groups.find(group => group.id === 'funding').items;
