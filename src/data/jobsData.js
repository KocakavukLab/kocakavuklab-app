import groups from './generated/jobs';
export const jobGroups = groups;
export const jobPositions = ['minijob', 'postdoc', 'phd'].flatMap(id => groups.find(group => group.id === id).jobs);
