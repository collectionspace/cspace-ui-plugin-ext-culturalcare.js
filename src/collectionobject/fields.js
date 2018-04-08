import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    'ns2:collectionobjects_culturalcare': {
      [config]: {
        service: {
          // Should have been domain/culturalcare, but this was set incorrectly in 4.x.
          ns: 'http://collectionspace.org/services/collectionobject/domain/collectionobject',
        },
      },
      culturalCareNotes: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        culturalCareNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_culturalcare.culturalCareNote.name',
                defaultMessage: 'Cultural care note',
              },
            }),
            repeating: true,
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
      accessLimitationsGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        accessLimitationsGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_culturalcare.accessLimitationsGroup.name',
                defaultMessage: 'Access limitation',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          limitationType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_culturalcare.limitationType.fullName',
                  defaultMessage: 'Access limitation type',
                },
                name: {
                  id: 'field.collectionobjects_culturalcare.limitationType.name',
                  defaultMessage: 'Type',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'limitationtype',
                },
              },
            },
          },
          limitationLevel: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_culturalcare.limitationLevel.fullName',
                  defaultMessage: 'Access limitation level',
                },
                name: {
                  id: 'field.collectionobjects_culturalcare.limitationLevel.name',
                  defaultMessage: 'Level',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'limitationlevel',
                },
              },
            },
          },
          limitationDetails: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_culturalcare.limitationDetails.fullName',
                  defaultMessage: 'Access limitation detail',
                },
                name: {
                  id: 'field.collectionobjects_culturalcare.limitationDetails.name',
                  defaultMessage: 'Detail',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          requester: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_culturalcare.requester.fullName',
                  defaultMessage: 'Access limitation requestor',
                },
                name: {
                  id: 'field.collectionobjects_culturalcare.requester.name',
                  defaultMessage: 'Requestor',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
          requestOnBehalfOf: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_culturalcare.requestOnBehalfOf.fullName',
                  defaultMessage: 'Access limitation requested on behalf of',
                },
                name: {
                  id: 'field.collectionobjects_culturalcare.requestOnBehalfOf.name',
                  defaultMessage: 'On behalf of',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/local',
                },
              },
            },
          },
          requestDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_culturalcare.requestDate.fullName',
                  defaultMessage: 'Access limitation request date',
                },
                name: {
                  id: 'field.collectionobjects_culturalcare.requestDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
        },
      },
    },
  };
};
