import groups from './generated/network';
export const networkGroups = groups;
export const networking = groups[0].items.map(({id,title,logo,url})=>({nid:id,ntitle:title,nlogo:logo,url}));
