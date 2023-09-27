import React from 'react';

interface DeviceContextProps {
  isMobile: boolean;
}

const DeviceContext = React.createContext<DeviceContextProps | undefined>(undefined);

export default DeviceContext;
