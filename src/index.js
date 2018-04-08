import collectionobject from './collectionobject';

module.exports = () => configContext => ({
  extensions: {
    culturalcare: {
      collectionobject: collectionobject(configContext),
    },
  },
});
