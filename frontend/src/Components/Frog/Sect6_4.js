import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect6_4() {
  const [providers, setProviders] = useState([]);

  const addProvider = () => {
    setProviders([
      ...providers,
      { provider: '', address: '', phone: '' }
    ]);
  };

  const updateProvider = (index, field, value) => {
    const updatedProviders = providers.map((provider, i) => {
      if (i === index) {
        return { ...provider, [field]: value };
      }
      return provider;
    });
    setProviders(updatedProviders);
  };

  const renderResponse = () => {
    if (providers.length === 0) {
      return '';
    }

    return providers.map((provider, index) => (
      <div key={index}>
        {provider.provider}, {provider.address}, {provider.phone}
      </div>
    ));
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            6.4 List health care providers that treated you for the incident:
            {providers.map((provider, index) => (
              <div key={index}>
                <br />
                <label>
                  Provider:
                  <input
                    type="text"
                    value={provider.provider}
                    onChange={(e) => updateProvider(index, 'provider', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Address:
                  <input
                    type="text"
                    value={provider.address}
                    onChange={(e) => updateProvider(index, 'address', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Phone:
                  <input
                    type="text"
                    value={provider.phone}
                    onChange={(e) => updateProvider(index, 'phone', e.target.value)}
                  />
                </label>
              </div>
            ))}
            <button type="button" onClick={addProvider}>
              Add Another Provider
            </button>
          </ChildCol>
          <ChildCol>
            Response to Request No. 6.4:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect6_4;
