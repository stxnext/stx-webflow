import { loadScript } from 'components/helpers';

export default async function embedForm () {
  try {
    await loadScript('//js.hsforms.net/forms/embed/v2.js');
  } catch (error) {
    console.error(error);
  }

  hbspt.forms.create({
    region: 'na1',
    portalId: '4542168',
    formId: '36a7e3a5-18ec-4b4c-9589-e9018abca994',
  });
};
