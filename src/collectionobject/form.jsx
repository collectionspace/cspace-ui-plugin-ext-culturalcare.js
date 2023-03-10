export default (configContext) => {
  const {
    layoutComponents,
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Panel,
  } = layoutComponents;

  const {
    Field,
  } = recordComponents;

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
