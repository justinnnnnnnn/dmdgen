import React from 'react';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

function Doc({ data, templateUrl, filename, onBeforeGenerate, onAfterGenerate, onError }) {
  const generateDocument = () => {
    onBeforeGenerate && onBeforeGenerate();
    
    loadFile(templateUrl, function (error, content) {
      if (error) {
        onError && onError(error);
        throw error;
      }
      
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });
      
      doc.setData(data);
      
      try {
        doc.render();
      } catch (error) {
        console.error('Docxtemplater error:', error);
        onError && onError(error);
        throw error;
      }
      
      const out = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
      
      saveAs(out, filename || 'output.docx');
      onAfterGenerate && onAfterGenerate();
    });
  };
  
  return (
    <button onClick={generateDocument}>Generate Document</button>
  );
}

export default Doc;
