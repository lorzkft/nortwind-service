import React from 'react';
import { Footer, Header } from './components';
import Main from './routes/Routes';
import { DeviceProvider } from './contexts';

function App() {
    return (
        <>
            <DeviceProvider>
                <Header />
                <div className="page-content">
                    <Main />
                </div>
                <Footer />
            </DeviceProvider>
        </>
    );
}

export default App;
