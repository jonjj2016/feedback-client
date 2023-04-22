export const initialFields = {
  curricula: [
    {
      inputProps: {
        placeholder: 'Enter Title here',
      },
      field: 'title',
      params: { required: true },
    },
    {
      inputProps: { placeholder: 'Enter Text here' },
      field: 'text',
      params: { required: true },
    },
    {
      inputProps: { placeholder: 'Teaser ' },
      field: 'teaser',
      params: { required: true },
    },
  ],
  students: [
    {
      inputProps: {
        placeholder: 'First Name',
      },
      field: 'fName',
      params: { required: true },
    },
    {
      inputProps: {
        placeholder: 'Last Name',
      },
      field: 'lName',
      params: { required: true },
    },
    {
      type: 'date',
      inputProps: { placeholder: 'Enter dob here' },
      field: 'dob',
      params: { required: true },
    },
    {
      type: 'date',
      inputProps: { placeholder: 'Enter dobEstimate here' },
      field: 'dobEstimate',
      params: { required: true },
    },
    {
      inputProps: { placeholder: 'Teaser ' },
      field: 'teaser',
      params: { required: true },
    },
  ],
  groups: [
    {
      inputProps: {
        placeholder: 'Enter Title here',
      },
      field: 'title',
      params: { required: true },
    },
    {
      inputProps: { placeholder: 'Enter Text here' },
      field: 'text',
      params: { required: true },
    },
    {
      inputProps: { placeholder: 'CurriculumId ' },
      field: 'curriculumId',
      params: { required: true },
    },
  ],
  feedbacks: [
    {
      inputProps: {
        placeholder: 'Enter Title here',
      },
      field: 'title',
      params: { required: true },
    },
    {
      inputProps: { placeholder: 'Enter Text here' },
      field: 'text',
      params: { required: true },
    },
    {
      inputProps: { placeholder: 'Teaser ' },
      field: 'teaser',
      params: { required: true },
    },
  ],
  lectures: [
    {
      inputProps: {
        placeholder: 'Enter Title here',
      },
      field: 'title',
      params: { required: true },
    },
    {
      inputProps: { placeholder: 'Enter Text here' },
      field: 'text',
      params: { required: true },
    },
    {
      inputProps: { placeholder: 'Teaser ' },
      field: 'teaser',
      params: { required: true },
    },
  ],
}
