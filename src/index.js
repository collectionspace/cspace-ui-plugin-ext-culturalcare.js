import collectionobject from './collectionobject';

export default () => (configContext) => ({
  extensions: {
    culturalcare: {
      collectionobject: collectionobject(configContext),
    },
  },
});
