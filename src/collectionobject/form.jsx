export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Panel name="culturalCare" collapsible collapsed>
      <Field name="culturalCareNotes" subpath="ns2:collectionobjects_culturalcare">
        <Field name="culturalCareNote" />
      </Field>

      <Field name="accessLimitationsGroupList" subpath="ns2:collectionobjects_culturalcare">
        <Field name="accessLimitationsGroup">
          <Field name="limitationType" />
          <Field name="limitationLevel" />
          <Field name="limitationDetails" />
          <Field name="requester" />
          <Field name="requestOnBehalfOf" />
          <Field name="requestDate" />
        </Field>
      </Field>
    </Panel>
  );
};
