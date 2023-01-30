import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import CommunitiesFeedSidebar from '../Sidebars/CommunitiesFeedSidebar';

  
type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children}) => {
    const [showSidebar, setShowSidebar] = useState(true)
  return (
      <>
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <main>
              {showSidebar && (
                  <CommunitiesFeedSidebar
                      showSidebar={showSidebar}
                      setShowSidebar={setShowSidebar}
                  />
              )}
              {children}
          </main>
      </>
  );
}
export default Layout;