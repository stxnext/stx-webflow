import { loadScript } from 'components/helpers';
import Uploader from 'components/uploader';

export default async function embedForm (onFormReadyCallback) {
  try {
    await loadScript('//js.hsforms.net/forms/embed/v2.js');
  } catch (error) {
    return console.error(error);
  }

  hbspt.forms.create({
    region: 'na1',
    portalId: '4542168',
    formId: '36a7e3a5-18ec-4b4c-9589-e9018abca994',
    onBeforeFormSubmit: (form: HTMLFormElement) => {
      const uploader = document.getElementById('upload_files') as Uploader;
      form.elements['upload_files'].value = uploader.files;
    },
    onFormReady: (form: HTMLFormElement) => {
      let formElement = form;

      if(form.jquery) {
        formElement = form[0] as HTMLFormElement;
      }
      
      const container = document.getElementById('hire_us-form-container');
      container?.appendChild(formElement);

      onFormReadyCallback && onFormReadyCallback(formElement);
    }
  }) as HTMLFormElement;
};
