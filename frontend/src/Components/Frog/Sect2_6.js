// import React, { useState } from 'react';
// import MainRow from './MainRow';
// import MainCol from './MainCol';
// import ChildRow from './ChildRow';
// import ChildCol from './ChildCol';

// function Sect2_6() {
//   const [isEmployed, setIsEmployed] = useState(null);
//   const [presentEmployer, setPresentEmployer] = useState({
//     name: '',
//     address: '',
//     phoneNumber: '',
//   });
//   const [pastEmployments, setPastEmployments] = useState([
//     { name: '', address: '', dates: '', jobTitle: '', natureOfWork: '' },
//   ]);

//   const handlePresentEmployerChange = (key, value) => {
//     setPresentEmployer({ ...presentEmployer, [key]: value });
//   };

//   const handlePastEmploymentChange = (index, key, value) => {
//     const updatedEmployments = [...pastEmployments];
//     updatedEmployments[index][key] = value;
//     setPastEmployments(updatedEmployments);

//     if (index === updatedEmployments.length - 1 && key === 'dates' && value) {
//       setPastEmployments([
//         ...updatedEmployments,
//         { name: '', address: '', dates: '', jobTitle: '', natureOfWork: '' },
//       ]);
//     }
//   };

//   const renderEmploymentsResponse = () => {
//     let response = `a) Plaintiff's current employer is ${presentEmployer.name}, located at ${presentEmployer.address}, and can be contacted at ${presentEmployer.phoneNumber}. `;
    
//     if (isEmployed === false) {
//       response += "a) Plaintiff is not currently employed. ";
//     } else if (isEmployed && presentEmployer.name && presentEmployer.address && presentEmployer.phoneNumber) {
//       response += `a) Plaintiff's current employer is ${presentEmployer.name}, located at ${presentEmployer.address}, and can be contacted at ${presentEmployer.phoneNumber}. `;
//     }

//     const pastEmploymentResponses = pastEmployments.map((employment, index) => {
//       if (employment.name && employment.address && employment.dates && employment.jobTitle && employment.natureOfWork) {
//         return `Plaintiff was employed at ${employment.name}, located at ${employment.address}, from ${employment.dates}, as a ${employment.jobTitle}, where they ${employment.natureOfWork}.`;
//       }
//       return null;
//     }).filter(Boolean); // Filter out any null/undefined values
  
//     if (pastEmploymentResponses.length > 0) {
//       response += 'b) ' + pastEmploymentResponses.join(' ');
//     }
  
//     return response.trim();
//   };
  

//   return (
//     <MainRow>
//       <MainCol>
//         <ChildRow>
//           <ChildCol>
//             2.6 State:
//             <br />
//             <label>(a) The name, ADDRESS, and telephone number of your present employer or place of self-employment:
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={presentEmployer.name}
//                 onChange={(e) => handlePresentEmployerChange('name', e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Address"
//                 value={presentEmployer.address}
//                 onChange={(e) => handlePresentEmployerChange('address', e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 value={presentEmployer.phoneNumber}
//                 onChange={(e) => handlePresentEmployerChange('phoneNumber', e.target.value)}
//               />
//             </label>
//             <br />
//             <label>(b) The name, ADDRESS, dates of employment, job title, and nature of work for each employer or self-employment you have had for the past five years until today:</label>
//             {pastEmployments.map((employment, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={employment.name}
//                   onChange={(e) => handlePastEmploymentChange(index, 'name', e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Address"
//                   value={employment.address}
//                   onChange={(e) => handlePastEmploymentChange(index, 'address', e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Dates of Employment"
//                   value={employment.dates}
//                   onChange={(e) => handlePastEmploymentChange(index, 'dates', e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Job Title"
//                   value={employment.jobTitle}
//                   onChange={(e) => handlePastEmploymentChange(index, 'jobTitle', e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Nature of Work"
//                   value={employment.natureOfWork}
//                   onChange={(e) => handlePastEmploymentChange(index, 'natureOfWork', e.target.value)}
//                 />
//               </div>
//             ))}
//           </ChildCol>
//           <ChildCol>
//             Response to Request No. 2.6:
//             {renderEmploymentsResponse()}
//           </ChildCol>
//         </ChildRow>
//       </MainCol>
//     </MainRow>
//   );
// }

// export default Sect2_6;
import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section2_6() {
  const [isEmployed, setIsEmployed] = useState(null);
  const [presentEmployer, setPresentEmployer] = useState({
    name: '',
    address: '',
    phoneNumber: '',
  });
  const [pastEmployments, setPastEmployments] = useState([
    { name: '', address: '', dates: '', jobTitle: '', natureOfWork: '' },
  ]);

  const handlePresentEmployerChange = (key, value) => {
    setPresentEmployer({ ...presentEmployer, [key]: value });
  };

  const handlePastEmploymentChange = (index, key, value) => {
    const updatedEmployments = [...pastEmployments];
    updatedEmployments[index][key] = value;
    setPastEmployments(updatedEmployments);
  };

  const renderEmploymentsResponse = () => {
    let response = "";

    if (isEmployed === false) {
      response += "a) Plaintiff is not currently employed. ";
    } else if (isEmployed && presentEmployer.name && presentEmployer.address && presentEmployer.phoneNumber) {
      response += `a) Plaintiff's current employer is ${presentEmployer.name}, located at ${presentEmployer.address}, and can be contacted at ${presentEmployer.phoneNumber}. `;
    }

    const pastEmploymentResponses = pastEmployments.map((employment, index) => {
      if (employment.name && employment.address && employment.dates && employment.jobTitle && employment.natureOfWork) {
        return `Plaintiff was employed at ${employment.name}, located at ${employment.address}, from ${employment.dates}, as a ${employment.jobTitle}, where they ${employment.natureOfWork}. `;
      }
      return null;
    }).filter(Boolean);

    if (pastEmploymentResponses.length > 0) {
      response += 'b) ' + pastEmploymentResponses.join(' ');
    }

    return response.trim();
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.6 State:
            <br />
            <label>
              <input
                type="radio"
                checked={isEmployed === false}
                onChange={() => setIsEmployed(false)}
              /> Plaintiff is not currently employed.
            </label>
            <br />
            <label>
              <input
                type="radio"
                checked={isEmployed === true}
                onChange={() => setIsEmployed(true)}
              /> Yes
            </label>
            {isEmployed && (
              <>
                <br />
                <label>(a) Name of Employer or Place of Self-Employment:
                  <input
                    type="text"
                    value={presentEmployer.name}
                    onChange={(e) => handlePresentEmployerChange('name', e.target.value)}
                  />
                </label>
                <br />
                <label>Address:
                  <input
                    type="text"
                    value={presentEmployer.address}
                    onChange={(e) => handlePresentEmployerChange('address', e.target.value)}
                  />
                </label>
                <br />
                <label>Phone Number:
                  <input
                    type="text"
                    value={presentEmployer.phoneNumber}
                    onChange={(e) => handlePresentEmployerChange('phoneNumber', e.target.value)}
                  />
                </label>
              </>
            )}
            <br />
            <label>(b) Past Employments:</label>
            {pastEmployments.map((employment, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Name of Employer or Place of Self-Employment"
                  value={employment.name}
                  onChange={(e) => handlePastEmploymentChange(index, 'name', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={employment.address}
                  onChange={(e) => handlePastEmploymentChange(index, 'address', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Dates of Employment"
                  value={employment.dates}
                  onChange={(e) => handlePastEmploymentChange(index, 'dates', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Job Title"
                  value={employment.jobTitle}
                  onChange={(e) => handlePastEmploymentChange(index, 'jobTitle', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Nature of Work"
                  value={employment.natureOfWork}
                  onChange={(e) => handlePastEmploymentChange(index, 'natureOfWork', e.target.value)}
                />
              </div>
            ))}
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.6:
            <div>
              {renderEmploymentsResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section2_6;

